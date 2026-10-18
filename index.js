// @ts-check
/**
 * Main Application Orchestrator
 * Connects data, UI interactions, Alpine.js registration, bilingual localization, and PDF export.
 * Supports universal browser execution (file:// and http://) without module/CORS restrictions.
 */

(function () {
  'use strict';

  /** @type {Record<string, any>} */
  const root = typeof window !== 'undefined' ? window : globalThis;
  /** @type {Record<string, any>} */
  const constants = root.ResumeConstants || {};
  /** @type {Record<string, any>} */
  const data = root.ResumeData || {};

  const ONLINE_RESUME_URL = constants.ONLINE_RESUME_URL || "https://haohaoscreamandrun.github.io/backend-dev-resume/index.html";
  const CV_FILE_NAME = constants.CV_FILE_NAME || "CV_hao_chen.pdf";
  const bindLinksAndResources = constants.bindLinksAndResources;
  const setupEmailCopy = constants.setupEmailCopy;

  /**
   * Determine initial language preference from localStorage or default to 'en'
   * @returns {'en' | 'zh'}
   */
  const getInitialLang = () => {
    try {
      const stored = localStorage.getItem('resume_lang');
      if (stored === 'zh' || stored === 'en') {
        return stored;
      }
    } catch (e) {
      // Ignore localStorage access exceptions in restrictive iframe environments
    }
    return 'en';
  };

  /**
   * Format markdown-style **emphasis** markers into styled HTML
   * Escapes unsafe HTML characters to ensure complete security.
   * @param {string} str
   * @returns {string}
   */
  const formatEmphasis = (str) => {
    if (!str) return '';
    const escaped = String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return escaped.replace(/\*\*(.*?)\*\*/g, '<strong class="emphasis">$1</strong>');
  };

  // Alpine Data Registration
  const registerAlpineData = () => {
    if (root.Alpine) {
      root.Alpine.data('resumeApp', () => ({
        lang: getInitialLang(),
        init() {
          document.documentElement.lang = this.lang === 'zh' ? 'zh-TW' : 'en';
        },
        get currentBundle() {
          const langData = data[this.lang];
          return langData || data.en || data;
        },
        get ui() {
          return this.currentBundle.UI_TEXT || (data.en && data.en.UI_TEXT) || {};
        },
        get skills() {
          return this.currentBundle.SKILLS_DATA || [];
        },
        get info() {
          return this.currentBundle.INFO_DATA || [];
        },
        get education() {
          return this.currentBundle.EDUCATION_DATA || [];
        },
        get experience() {
          return this.currentBundle.EXPERIENCE_DATA || [];
        },
        get projects() {
          return this.currentBundle.PROJECTS_DATA || [];
        },
        toggleLang() {
          this.lang = this.lang === 'en' ? 'zh' : 'en';
          document.documentElement.lang = this.lang === 'zh' ? 'zh-TW' : 'en';
          try {
            localStorage.setItem('resume_lang', this.lang);
          } catch (e) {}
        },
        formatEmphasis,
      }));
    }
  };

  document.addEventListener('alpine:init', registerAlpineData);
  registerAlpineData();

  // Document ready helper
  /** @param {() => void} fn */
  const onReady = (fn) => {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  };

  onReady(() => {
    // Bind static links and contact helpers
    if (typeof bindLinksAndResources === 'function') {
      bindLinksAndResources();
    }
    if (typeof setupEmailCopy === 'function') {
      setupEmailCopy();
    }

    // Panel switch
    const options = document.querySelectorAll('.panel-option');
    const resume = document.querySelectorAll('.resume');
    const project = document.querySelector('.project');

    options.forEach(option => {
      option.addEventListener('click', () => {
        options.forEach(element => element.classList.remove('active'));
        option.classList.add('active');
        const tab = option.getAttribute('data-tab');
        if (tab === 'resume') {
          resume.forEach(element => (/** @type {HTMLElement} */ (element).hidden = false));
          if (project) /** @type {HTMLElement} */ (project).hidden = true;
        } else if (tab === 'project') {
          resume.forEach(element => (/** @type {HTMLElement} */ (element).hidden = true));
          if (project) /** @type {HTMLElement} */ (project).hidden = false;
        }
      });
    });

    const downLoadBtn = document.getElementById('downLoad');
    const panel = document.getElementById('panel');
    const clampWords = document.querySelectorAll('.gray-block-word');

    // Intersection Observer for line clamp toggle
    if ('IntersectionObserver' in window) {
      /** @param {IntersectionObserverEntry[]} entries */
      const handleIntersection = (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('line-clamp-2');
          } else {
            entry.target.classList.add('line-clamp-2');
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '-25% 0px -25% 0px',
        threshold: 0,
      });

      clampWords.forEach(clampWord => {
        clampWord.addEventListener('click', () => {
          clampWord.classList.toggle('line-clamp-2');
        });
        observer.observe(clampWord);
      });
    }

    // Generate QR code
    const qrcodeTarget = document.getElementById('QRcode');
    const QRCodeLib = root.QRCode;
    if (qrcodeTarget && typeof QRCodeLib !== 'undefined') {
      new QRCodeLib(qrcodeTarget, {
        text: ONLINE_RESUME_URL,
        width: 124,
        height: 124,
        colorDark: '#000000',
        colorLight: '#ffffff',
      });
    }

    // PDF Download
    if (downLoadBtn) {
      downLoadBtn.addEventListener('click', async () => {
        const spinnerIcon = document.getElementById('spinnerIcon');
        const downloadIcon = document.getElementById('downloadIcon');
        const langBtn = document.querySelector('.lang-toggle-btn');
        if (downloadIcon) downloadIcon.hidden = true;
        if (spinnerIcon) spinnerIcon.hidden = false;
        if (langBtn) /** @type {HTMLElement} */ (langBtn).hidden = true;

        // Remember which tab was currently active so we can restore it accurately
        const activeOption = document.querySelector('.panel-option.active');
        const activeTab = activeOption ? activeOption.getAttribute('data-tab') : 'project';

        clampWords.forEach(clampWord => {
          clampWord.classList.remove('line-clamp-2');
        });

        resume.forEach(element => (/** @type {HTMLElement} */ (element).hidden = false));
        if (project) /** @type {HTMLElement} */ (project).hidden = false;
        if (panel) panel.hidden = true;

        const qrcodeBlock = document.getElementById('QRcodeBlock');
        if (qrcodeBlock) qrcodeBlock.hidden = false;

        try {
          const html2canvasLib = root.html2canvas;
          const jsPDFLib = root.jsPDF;
          if (typeof html2canvasLib !== 'undefined' && typeof jsPDFLib !== 'undefined') {
            const canvas = await html2canvasLib(document.body, {
              backgroundColor: '#e5e7eb',
              windowWidth: 1300,
              windowHeight: 4000,
              scrollY: 0,
            });

            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const pdf = new jsPDFLib('p', 'mm', 'a4');
            const imgWidth = 210; // A4 width in mm
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            const totalPageSize = Math.ceil(imgHeight / pageHeight);
            let yPosition = 0;

            pdf.addImage(imgData, 'PNG', 0, yPosition, imgWidth, imgHeight);

            for (let pageIndex = 1; pageIndex < totalPageSize; pageIndex++) {
              yPosition = -pageIndex * pageHeight;
              pdf.addPage();
              pdf.addImage(imgData, 'PNG', 0, yPosition, imgWidth, imgHeight);
            }

            pdf.save(CV_FILE_NAME);
          }
        } catch (err) {
          console.error("PDF generation failed:", err);
        } finally {
          if (downloadIcon) downloadIcon.hidden = false;
          if (spinnerIcon) spinnerIcon.hidden = true;
          if (langBtn) /** @type {HTMLElement} */ (langBtn).hidden = false;

          // Restore previous active tab state
          if (activeTab === 'resume') {
            resume.forEach(element => (/** @type {HTMLElement} */ (element).hidden = false));
            if (project) /** @type {HTMLElement} */ (project).hidden = true;
          } else {
            resume.forEach(element => (/** @type {HTMLElement} */ (element).hidden = true));
            if (project) /** @type {HTMLElement} */ (project).hidden = false;
          }
          if (panel) panel.hidden = false;
          if (qrcodeBlock) qrcodeBlock.hidden = true;
        }
      });
    }
  });
})();