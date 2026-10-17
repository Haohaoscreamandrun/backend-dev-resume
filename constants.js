// @ts-check
/**
 * Application Constants and External Resources
 * Centralized configuration for all external links, project URLs, and media assets.
 * Sensitive contact endpoints are obfuscated with Base64 to prevent automated crawler harvesting.
 * Supports universal browser execution (file:// and http://) without module/CORS restrictions.
 */

/**
 * @typedef {Object} ResumeConstants
 * @property {function(string): string} decode
 * @property {string} RAW_EMAIL
 * @property {string} EMAIL_URL
 * @property {string} LINE_URL
 * @property {string} LINKEDIN_URL
 * @property {string} GITHUB_PROFILE_URL
 * @property {string} ONLINE_RESUME_URL
 * @property {string} CV_FILE_NAME
 * @property {string} PLMS_DEMO_URL
 * @property {string} PLMS_GITHUB_URL
 * @property {string} PLMS_BACKEND_STRUCTURE_IMG
 * @property {string} TAIPEI_DAY_TRIP_DEMO_URL
 * @property {string} TAIPEI_DAY_TRIP_GITHUB_URL
 * @property {string} WEATHER_APP_DEMO_URL
 * @property {string} WEATHER_APP_GITHUB_URL
 * @property {string} WEATHER_APP_SCREENSHOT_IMG
 * @property {Readonly<Record<string, string>>} PROFILE_LINKS
 * @property {Readonly<Record<string, string>>} PROJECT_LINKS
 * @property {Readonly<Record<string, string>>} RESOURCE_PATHS
 * @property {Readonly<Record<string, string>>} LINKS
 * @property {Readonly<Record<string, string>>} RESOURCES
 * @property {function(): void} bindLinksAndResources
 * @property {function(string=, string=): void} setupEmailCopy
 */

(function () {
  'use strict';

  // ==========================================
  // Base64 Obfuscation Utility
  // ==========================================
  /**
   * @param {string} b64
   * @returns {string}
   */
  const decode = (b64) => {
    try {
      return atob(b64);
    } catch {
      return "";
    }
  };

  // ==========================================
  // Profile & Contact Links
  // Encoded in Base64 so static bots and regex scrapers cannot find cleartext email or contact URLs.
  // ==========================================
  const _ENC_RAW_EMAIL = "Sjg0MjY3MTM5NUBnbWFpbC5jb20="; // J842671395@gmail.com
  const _ENC_EMAIL = "bWFpbHRvOko4NDI2NzEzOTVAZ21haWwuY29tP3N1YmplY3Q9WW91ciUyMFN1YmplY3QmYm9keT1IZWxsbywlMjBJJTIwd291bGQlMjBsaWtlJTIwdG8lMjBkaXNjdXNzJTIwLi4u";
  const _ENC_LINE = "aHR0cDovL2xpbmUubWUvdGkvcC9TbS1hcGh3c2V0";
  const _ENC_LINKEDIN = "aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2hhby1jaGVuLTgwNGE4MzE1YS8=";

  const RAW_EMAIL = decode(_ENC_RAW_EMAIL);
  const EMAIL_URL = decode(_ENC_EMAIL);
  const LINE_URL = decode(_ENC_LINE);
  const LINKEDIN_URL = decode(_ENC_LINKEDIN);
  const GITHUB_PROFILE_URL = "https://github.com/Haohaoscreamandrun";
  const ONLINE_RESUME_URL = "https://haohaoscreamandrun.github.io/backend-dev-resume/index.html";
  const CV_FILE_NAME = "CV_hao_chen.pdf";

  // ==========================================
  // Project URLs
  // ==========================================
  // Parking Lot Management System (PLMS)
  const PLMS_DEMO_URL = "https://parkinglot.haohaoscreamandrun.online/";
  const PLMS_GITHUB_URL = "https://github.com/Haohaoscreamandrun/ParkingLotManagementSystem";
  const PLMS_BACKEND_STRUCTURE_IMG = "./src/backend-structure.png";

  // Taipei Day Trip
  const TAIPEI_DAY_TRIP_DEMO_URL = "https://taipeidaytrip.haohaoscreamandrun.online/";
  const TAIPEI_DAY_TRIP_GITHUB_URL = "https://github.com/Haohaoscreamandrun/WehelpStage2";

  // Weather Forecast App
  const WEATHER_APP_DEMO_URL = "https://wehelp-groupproject.onrender.com/";
  const WEATHER_APP_GITHUB_URL = "https://github.com/Haohaoscreamandrun/Wehelp_GroupProject";
  const WEATHER_APP_SCREENSHOT_IMG = "./src/weather_app_screenshot.png";

  // ==========================================
  // Grouped Dictionaries
  // ==========================================
  const PROFILE_LINKS = Object.freeze({
    LINKEDIN: LINKEDIN_URL,
    EMAIL: EMAIL_URL,
    LINE: LINE_URL,
    GITHUB: GITHUB_PROFILE_URL,
    GITHUB_PROFILE: GITHUB_PROFILE_URL,
    ONLINE_RESUME: ONLINE_RESUME_URL,
  });

  const PROJECT_LINKS = Object.freeze({
    PLMS_DEMO: PLMS_DEMO_URL,
    PLMS_GITHUB: PLMS_GITHUB_URL,
    TAIPEI_DAY_TRIP_DEMO: TAIPEI_DAY_TRIP_DEMO_URL,
    TAIPEI_DAY_TRIP_GITHUB: TAIPEI_DAY_TRIP_GITHUB_URL,
    WEATHER_APP_DEMO: WEATHER_APP_DEMO_URL,
    WEATHER_APP_GITHUB: WEATHER_APP_GITHUB_URL,
  });

  const RESOURCE_PATHS = Object.freeze({
    PLMS_BACKEND_STRUCTURE: PLMS_BACKEND_STRUCTURE_IMG,
    WEATHER_APP_SCREENSHOT: WEATHER_APP_SCREENSHOT_IMG,
  });

  // ==========================================
  // Unified Key Mappings for DOM Data Binding
  // ==========================================
  const LINKS = Object.freeze({
    ...PROFILE_LINKS,
    ...PROJECT_LINKS,
  });

  const RESOURCES = Object.freeze({
    ...RESOURCE_PATHS,
  });

  // Sensitive endpoints bound just-in-time on human interaction (hover/focus/tap)
  const SENSITIVE_KEYS = new Set(["EMAIL", "LINE", "LINKEDIN"]);

  /**
   * Automatically binds all [data-link], [data-link-text], and [data-src]
   * attributes in the DOM to their corresponding named variables.
   * Sensitive items are bound on first user interaction (hover/touch/focus/click)
   * so that headless crawlers never find cleartext contact endpoints in the initial DOM tree.
   */
  function bindLinksAndResources() {
    // Bind href attributes for hyperlinks
    document.querySelectorAll("[data-link]").forEach((element) => {
      const key = element.getAttribute("data-link");
      if (!key || !(key in LINKS)) {
        console.warn(`[bindLinks] Unknown link key: "${key}"`);
        return;
      }

      const targetUrl = LINKS[/** @type {keyof typeof LINKS} */ (key)];

      if (SENSITIVE_KEYS.has(key)) {
        // Just-in-Time binding on user interaction
        const activateLink = () => {
          if (!element.getAttribute("href")) {
            element.setAttribute("href", targetUrl);
          }
        };

        element.addEventListener("mouseenter", activateLink, { once: true });
        element.addEventListener("focus", activateLink, { once: true });
        element.addEventListener("touchstart", activateLink, { passive: true, once: true });
        element.addEventListener("click", activateLink);
      } else {
        element.setAttribute("href", targetUrl);
      }
    });

    // Bind visible text contents for hyperlinks
    document.querySelectorAll("[data-link-text]").forEach((element) => {
      const key = element.getAttribute("data-link-text");
      if (key && key in LINKS) {
        element.textContent = LINKS[/** @type {keyof typeof LINKS} */ (key)];
      } else {
        console.warn(`[bindLinks] Unknown link text key: "${key}"`);
      }
    });

    // Bind image src attributes
    document.querySelectorAll("[data-src]").forEach((element) => {
      const key = element.getAttribute("data-src");
      if (key && key in RESOURCES) {
        element.setAttribute("src", RESOURCES[/** @type {keyof typeof RESOURCES} */ (key)]);
      } else {
        console.warn(`[bindLinks] Unknown resource key: "${key}"`);
      }
    });
  }

  /**
   * Sets up a secure click-to-copy interaction for the email button.
   * Copies the raw email address directly to the user's clipboard and toggles a confirmation tooltip.
   * @param {string} [buttonId="copyEmailBtn"] - DOM ID of the email copy button
   * @param {string} [tooltipId="emailTooltip"] - DOM ID of the tooltip element
   */
  function setupEmailCopy(buttonId = "copyEmailBtn", tooltipId = "emailTooltip") {
    const btn = document.getElementById(buttonId);
    if (!btn) return;

    const tooltip = document.getElementById(tooltipId);
    const icon = btn.querySelector("i");
    const textSpan = btn.querySelector(".link-word");
    /** @type {ReturnType<typeof setTimeout> | null} */
    let timeoutId = null;

    /** @param {Event} e */
    const handleCopy = async (e) => {
      e.preventDefault();
      const email = decode(_ENC_RAW_EMAIL);
      if (!email) return;

      let copied = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
          copied = true;
        }
      } catch (err) {
        console.warn("Clipboard API write failed, trying fallback", err);
      }

      if (!copied) {
        try {
          const textarea = document.createElement("textarea");
          textarea.value = email;
          textarea.style.position = "fixed";
          textarea.style.opacity = "0";
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          copied = document.execCommand("copy");
          document.body.removeChild(textarea);
        } catch (err) {
          console.error("Copy fallback failed", err);
        }
      }

      if (copied) {
        if (tooltip) {
          tooltip.classList.remove("opacity-0");
          tooltip.classList.add("opacity-100");
        }
        if (icon) {
          icon.className = "fa-solid fa-check text-green-500";
        }
        if (textSpan) {
          textSpan.textContent = "Copied!";
          textSpan.classList.add("text-green-500");
        }

        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          if (tooltip) {
            tooltip.classList.remove("opacity-100");
            tooltip.classList.add("opacity-0");
          }
          if (icon) {
            icon.className = "fa-regular fa-envelope";
          }
          if (textSpan) {
            textSpan.textContent = "Email";
            textSpan.classList.remove("text-green-500");
          }
        }, 2000);
      }
    };

    btn.addEventListener("click", handleCopy);
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleCopy(e);
      }
    });
  }

  // ==========================================
  // Public Namespace Export
  // ==========================================
  /** @type {ResumeConstants} */
  const ResumeConstants = Object.freeze({
    decode,
    RAW_EMAIL,
    EMAIL_URL,
    LINE_URL,
    LINKEDIN_URL,
    GITHUB_PROFILE_URL,
    ONLINE_RESUME_URL,
    CV_FILE_NAME,
    PLMS_DEMO_URL,
    PLMS_GITHUB_URL,
    PLMS_BACKEND_STRUCTURE_IMG,
    TAIPEI_DAY_TRIP_DEMO_URL,
    TAIPEI_DAY_TRIP_GITHUB_URL,
    WEATHER_APP_DEMO_URL,
    WEATHER_APP_GITHUB_URL,
    WEATHER_APP_SCREENSHOT_IMG,
    PROFILE_LINKS,
    PROJECT_LINKS,
    RESOURCE_PATHS,
    LINKS,
    RESOURCES,
    bindLinksAndResources,
    setupEmailCopy,
  });

  /** @type {Record<string, any>} */ (typeof window !== 'undefined' ? window : globalThis).ResumeConstants = ResumeConstants;
})();
