/**
 * Application Constants and External Resources
 * Centralized configuration for all external links, project URLs, and media assets.
 */

// ==========================================
// Profile & Contact Links
// ==========================================
export const LINKEDIN_URL = "https://www.linkedin.com/in/hao-chen-804a8315a/";
export const EMAIL_URL = "mailto:J842671395@gmail.com?subject=Your%20Subject&body=Hello,%20I%20would%20like%20to%20discuss%20...";
export const LINE_URL = "http://line.me/ti/p/Sm-aphwset";
export const GITHUB_PROFILE_URL = "https://github.com/Haohaoscreamandrun";
export const ONLINE_RESUME_URL = "https://haohaoscreamandrun.github.io/backend-dev-resume/index.html";
export const CV_FILE_NAME = "CV_hao_chen.pdf";

// ==========================================
// Project URLs
// ==========================================
// Parking Lot Management System (PLMS)
export const PLMS_DEMO_URL = "https://parkinglot.haohaoscreamandrun.online/";
export const PLMS_GITHUB_URL = "https://github.com/Haohaoscreamandrun/ParkingLotManagementSystem";
export const PLMS_BACKEND_STRUCTURE_IMG = "./src/backend-structure.png";

// Taipei Day Trip
export const TAIPEI_DAY_TRIP_DEMO_URL = "https://taipeidaytrip.haohaoscreamandrun.online/";
export const TAIPEI_DAY_TRIP_GITHUB_URL = "https://github.com/Haohaoscreamandrun/WehelpStage2";

// Weather Forecast App
export const WEATHER_APP_DEMO_URL = "https://wehelp-groupproject.onrender.com/";
export const WEATHER_APP_GITHUB_URL = "https://github.com/Haohaoscreamandrun/Wehelp_GroupProject";
export const WEATHER_APP_SCREENSHOT_IMG = "./src/weather_app_screenshot.png";

// ==========================================
// Grouped Dictionaries
// ==========================================
export const PROFILE_LINKS = {
  LINKEDIN: LINKEDIN_URL,
  EMAIL: EMAIL_URL,
  LINE: LINE_URL,
  GITHUB: GITHUB_PROFILE_URL,
  ONLINE_RESUME: ONLINE_RESUME_URL,
};

export const PROJECT_LINKS = {
  PLMS_DEMO: PLMS_DEMO_URL,
  PLMS_GITHUB: PLMS_GITHUB_URL,
  TAIPEI_DAY_TRIP_DEMO: TAIPEI_DAY_TRIP_DEMO_URL,
  TAIPEI_DAY_TRIP_GITHUB: TAIPEI_DAY_TRIP_GITHUB_URL,
  WEATHER_APP_DEMO: WEATHER_APP_DEMO_URL,
  WEATHER_APP_GITHUB: WEATHER_APP_GITHUB_URL,
};

export const RESOURCE_PATHS = {
  PLMS_BACKEND_STRUCTURE: PLMS_BACKEND_STRUCTURE_IMG,
  WEATHER_APP_SCREENSHOT: WEATHER_APP_SCREENSHOT_IMG,
};

// ==========================================
// Unified Key Mappings for DOM Data Binding
// ==========================================
export const LINKS = {
  ...PROFILE_LINKS,
  ...PROJECT_LINKS,
};

export const RESOURCES = {
  ...RESOURCE_PATHS,
};

/**
 * Automatically binds all [data-link], [data-link-text], and [data-src]
 * attributes in the DOM to their corresponding named variables.
 */
export function bindLinksAndResources() {
  // Bind href attributes for hyperlinks
  document.querySelectorAll('[data-link]').forEach(element => {
    const key = element.dataset.link;
    if (LINKS[key]) {
      element.href = LINKS[key];
    } else {
      console.warn(`[constants.js] Link key "${key}" not found in LINKS mapping.`);
    }
  });

  // Bind visible text inside links
  document.querySelectorAll('[data-link-text]').forEach(element => {
    const key = element.dataset.linkText;
    if (LINKS[key]) {
      element.textContent = LINKS[key];
    } else {
      console.warn(`[constants.js] Link text key "${key}" not found in LINKS mapping.`);
    }
  });

  // Bind src attributes for images/media
  document.querySelectorAll('[data-src]').forEach(element => {
    const key = element.dataset.src;
    if (RESOURCES[key]) {
      element.src = RESOURCES[key];
    } else {
      console.warn(`[constants.js] Resource key "${key}" not found in RESOURCES mapping.`);
    }
  });
}

