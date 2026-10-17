// @ts-check
/**
 * Main Application Orchestrator
 * Connects data, UI interactions, Alpine.js registration, and PDF export.
 * Supports universal browser execution (file:// and http://) without module/CORS restrictions.
 */

(function () {
  'use strict';

  /** @type {Record<string, any>} */
  const root = typeof window !== 'undefined' ? window : globalThis;
  /** @type {ResumeConstants | Record<string, any>} */
  const constants = root.ResumeConstants || {};
  /** @type {Record<string, any>} */
  const data = root.ResumeData || {};

  const ONLINE_RESUME_URL = constants.ONLINE_RESUME_URL || "https://haohaoscreamandrun.github.io/backend-dev-resume/index.html";
  const CV_FILE_NAME = constants.CV_FILE_NAME || "CV_hao_chen.pdf";
  const bindLinksAndResources = constants.bindLinksAndResources;
  const setupEmailCopy = constants.setupEmailCopy;

  const SKILLS_DATA = data.SKILLS_DATA || [];
  const INFO_DATA = data.INFO_DATA || [];
  const EDUCATION_DATA = data.EDUCATION_DATA || [];
  const EXPERIENCE_DATA = data.EXPERIENCE_DATA || [];
  const PROJECTS_DATA = data.PROJECTS_DATA || [];

  // Expose structured resume data to global scope for Alpine.js
  root.SKILLS_DATA = SKILLS_DATA;
  root.INFO_DATA = INFO_DATA;
  root.EDUCATION_DATA = EDUCATION_DATA;
  root.EXPERIENCE_DATA = EXPERIENCE_DATA;
  root.PROJECTS_DATA = PROJECTS_DATA;

  // Alpine Data Registration
  const registerAlpineData = () => {
    if (root.Alpine) {
      root.Alpine.data('resumeApp', () => ({
        skills: SKILLS_DATA,
        info: INFO_DATA,
        education: EDUCATION_DATA,
        experience: EXPERIENCE_DATA,
        projects: PROJECTS_DATA,
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
        if (option.textContent && option.textContent.trim() === 'Resume') {
          resume.forEach(element => (/** @type {HTMLElement} */ (element).hidden = false));
          if (project) /** @type {HTMLElement} */ (project).hidden = true;
        } else if (option.textContent && option.textContent.trim() === 'Project') {
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
        if (downloadIcon) downloadIcon.hidden = true;
        if (spinnerIcon) spinnerIcon.hidden = false;

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

          resume.forEach(element => (/** @type {HTMLElement} */ (element).hidden = true));
          if (panel) panel.hidden = false;
          if (qrcodeBlock) qrcodeBlock.hidden = true;
        }
      });
    }
  });
})();