// @ts-check
/**
 * Structured Resume Data Store
 * Central repository of skills, quick info, education, experience, and projects.
 * Restored 1:1 from original index.html (commit 6fcfb05) with pure strings and zero HTML markup.
 * Supports universal browser execution (file:// and http://) without module/CORS restrictions.
 */

// ============================================================================
// Type Definitions (JSDoc / TypeScript Language Server)
// ============================================================================

/**
 * @typedef {Object} SkillColumn
 * @property {string} category - Category title (e.g., "Backend", "Frontend")
 * @property {readonly string[]} items - Specific technical skill names
 */

/**
 * @typedef {Object} InfoItem
 * @property {string} label - Description label (e.g., "Work Experience")
 * @property {string} value - Formatted value string
 */

/**
 * @typedef {Object} EducationItem
 * @property {string} degree - Degree and field of study
 * @property {string} badge - Degree level badge (e.g., "Master", "Bachelor")
 * @property {string} school - University or institution name
 * @property {string} duration - Study duration range
 * @property {string} logoClass - Semantic CSS background logo class
 * @property {readonly string[]} highlights - Honors, GPA, or specializations
 */

/**
 * @typedef {Object} ExperienceItem
 * @property {string} role - Role or position title
 * @property {string} badge - Employment status (e.g., "Full-time", "Trainee")
 * @property {string} company - Organization name
 * @property {string} duration - Employment duration range
 * @property {string} logoClass - Semantic CSS background logo class
 * @property {string} [logoStyle] - Optional inline CSS for custom logo scaling
 * @property {readonly string[]} bullets - Pure text bullet accomplishments
 */

/**
 * @typedef {Object} ProjectSkillSection
 * @property {string} heading - Section header (e.g., "Backend Skills")
 * @property {readonly string[]} items - Pure text technical accomplishment items
 */

/**
 * @typedef {Object} ProjectImage
 * @property {string} src - Asset path or URL
 * @property {string} alt - Accessible image description
 * @property {string} [containerClass] - Sizing and layout CSS classes
 */

/**
 * @typedef {Object} ProjectItem
 * @property {string} name - Project name
 * @property {boolean} isFeatured - Whether to show the featured star badge
 * @property {string} category - Primary project category
 * @property {string} type - Project classification (e.g., "Personal project")
 * @property {string} duration - Completion date
 * @property {string} logoClass - Semantic CSS logo background class
 * @property {string} description - High-level project summary
 * @property {readonly ProjectSkillSection[]} skillSections - Grouped technical accomplishments
 * @property {ProjectImage} [image] - Optional screenshot or architectural diagram
 * @property {string} demoUrl - Live demo application URL
 * @property {string} githubUrl - GitHub repository URL
 */

/**
 * @typedef {Object} ResumeData
 * @property {readonly SkillColumn[]} SKILLS_DATA
 * @property {readonly InfoItem[]} INFO_DATA
 * @property {readonly EducationItem[]} EDUCATION_DATA
 * @property {readonly ExperienceItem[]} EXPERIENCE_DATA
 * @property {readonly ProjectItem[]} PROJECTS_DATA
 */

(function () {
  'use strict';

  /** @type {Record<string, any>} */
  const root = typeof window !== 'undefined' ? window : globalThis;
  /** @type {ResumeConstants | Record<string, any>} */
  const constants = root.ResumeConstants || {};

  const PLMS_DEMO_URL = constants.PLMS_DEMO_URL || "https://parkinglot.haohaoscreamandrun.online/";
  const PLMS_GITHUB_URL = constants.PLMS_GITHUB_URL || "https://github.com/Haohaoscreamandrun/ParkingLotManagementSystem";
  const PLMS_BACKEND_STRUCTURE_IMG = constants.PLMS_BACKEND_STRUCTURE_IMG || "./src/backend-structure.png";
  const TAIPEI_DAY_TRIP_DEMO_URL = constants.TAIPEI_DAY_TRIP_DEMO_URL || "https://taipeidaytrip.haohaoscreamandrun.online/";
  const TAIPEI_DAY_TRIP_GITHUB_URL = constants.TAIPEI_DAY_TRIP_GITHUB_URL || "https://github.com/Haohaoscreamandrun/WehelpStage2";
  const WEATHER_APP_DEMO_URL = constants.WEATHER_APP_DEMO_URL || "https://wehelp-groupproject.onrender.com/";
  const WEATHER_APP_GITHUB_URL = constants.WEATHER_APP_GITHUB_URL || "https://github.com/Haohaoscreamandrun/Wehelp_GroupProject";
  const WEATHER_APP_SCREENSHOT_IMG = constants.WEATHER_APP_SCREENSHOT_IMG || "./src/weather_app_screenshot.png";

  // ============================================================================
  // Data Constants (1:1 from 6fcfb05:index.html)
  // ============================================================================

  /** @type {readonly SkillColumn[]} */
  const SKILLS_DATA = Object.freeze([
    {
      category: "Backend",
      items: [
        "Python (FastAPI)",
        "RESTful APIs",
        "MySQL",
        "Linux (Ubuntu)",
        "Redis",
        "Nginx",
      ],
    },
    {
      category: "Frontend",
      items: [
        "HTML",
        "CSS (tailwind)",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      category: "Cloud",
      items: [
        "EC2",
        "RDS",
        "S3",
        "CloudFront",
        "ELB",
        "Route53",
      ],
    },
    {
      category: "Toolkit",
      items: [
        "Git",
        "Docker",
        "SSL (certbot)",
        "Google Map API",
        "Tesseract",
        "OpenCV",
      ],
    },
  ]);

  /** @type {readonly InfoItem[]} */
  const INFO_DATA = Object.freeze([
    { label: "Work Experience", value: ">5 years" },
    { label: "Location of work", value: "Taipei, Taoyuan / Hybrid" },
    { label: "Availability", value: "In one week" },
    { label: "Language", value: "TOEIC 910 / IELTS 6.5" },
  ]);

  /** @type {readonly EducationItem[]} */
  const EDUCATION_DATA = Object.freeze([
    {
      degree: "Master of Horticulture and Landscape Architecture",
      badge: "Master",
      school: "National Taiwan University (NTU)",
      duration: "Sep 2016 - Jul 2018",
      logoClass: "bg-ntu-logo",
      highlights: [
        "GPA: 3.98/ 49 credits",
        "Specialty: Plant Breeding, Hydroponic, Plant Physiology",
        "Scholarship: Know-you Social Welfare Foundation Scholarship",
      ],
    },
    {
      degree: "Bachelor of Horticulture",
      badge: "Bachelor",
      school: "National Chung Hsing University (NCHU)",
      duration: "Sep 2012 - Jul 2016",
      logoClass: "bg-nchu-logo",
      highlights: [
        "GPA: 3.85/ 154 credits",
        "Internship: Yu, Su-May's lab, the Institute of Molecular Biology, Academia Sinica",
        "Extra Curriculum: Deputy Director, International Agriculture Service Mission, NCHU",
      ],
    },
  ]);

  /** @type {readonly ExperienceItem[]} */
  const EXPERIENCE_DATA = Object.freeze([
    {
      role: "Wehelp #5 Bootcamp",
      badge: "Trainee",
      company: "Padax, LTD",
      duration: "Apr 2024 - Sep 2024",
      logoClass: "bg-wehelp-logo bg-no-repeat bg-center",
      logoStyle: "background-size: 70%; background-color: white; mix-blend-mode: normal;",
      bullets: [
        "Completed 16 weeks of comprehensive fundamental web development training followed by 8 weeks of specialized backend development.",
        "Develop an e-commerce tourism web application, \"Taipei Day Trip\", over a 2 months period, incorporating toolkit and UI guidance.",
        "Collaborated with 3 peers to develop a weather report web application within one week.",
        "Independently created a parking lot management system (PLMS) from scratch within one month.",
      ],
    },
    {
      role: "Regulatory Affairs Specialist",
      badge: "Full-time",
      company: "Corteva Agriscience",
      duration: "Aug 2021 - Apr 2024",
      logoClass: "bg-corteva-logo",
      bullets: [
        "Lead and coordinate project activities, including field trials, license renewals, and stakeholder engagement, for Adavelt™ and other fungicides.",
      ],
    },
    {
      role: "Import Tolerance & Regulatory Specialist",
      badge: "Full-time",
      company: "BASF Taiwan",
      duration: "Feb 2020 - Aug 2021",
      logoClass: "bg-basf-logo",
      bullets: [
        "Support government negotiations and regulatory advocacy efforts to secure compliance and support for Agriculture Solutions.",
      ],
    },
  ]);

  /** @type {readonly ProjectItem[]} */
  const PROJECTS_DATA = Object.freeze([
    {
      name: "Parking Lot Management System",
      isFeatured: true,
      category: "Automated parking solution",
      type: "Personal project",
      duration: "Sep 2024",
      logoClass: "bg-parkinglot-logo",
      description: "PLMS offers comprehensive parking lot management with administrative tools and e-payment options, allowing users to view real-time vacancy information via a map.",
      skillSections: [
        {
          heading: "Backend Skills",
          items: [
            "Design RESTful APIs and implement the MVC pattern for separation of concern and improve maintainability.",
            "Acquired a domain name through GoDaddy, hosted and managed DNS with AWS Route53.",
            "Developed backend APIs using Python/FastAPI, with automatic Swagger documentation.",
            "Implemented JWT for secure token encoding/decoding and admin authentication.",
            "Utilized RDS/MySQL with spatial indexing to enhance query performance by up to 6 times.",
            "Deploy on AWS EC2 using Docker containers, with caching provided by Redis.",
            "Configured Nginx for reverse proxy, SSL termination with certbot.",
            "Managed dynamic load distribution with AWS Load Balancer to ensure scalability.",
            "Enabled image storage and delivery via AWS S3 with presigned URLs and optimized delivery using AWS CloudFront.",
          ],
        },
        {
          heading: "Frontend Skills",
          items: [
            "Designed the user interface with Bootstrap.",
            "Integrated Google Maps API for interactive location services.",
            "Employed OpenCV for image processing and Tesseract.js for optical characters recognition.",
          ],
        },
      ],
      image: {
        src: PLMS_BACKEND_STRUCTURE_IMG,
        alt: "Parking Lot Management System Architecture",
        containerClass: "max-w-xl mx-auto",
      },
      demoUrl: PLMS_DEMO_URL,
      githubUrl: PLMS_GITHUB_URL,
    },
    {
      name: "Taipei Day Trip",
      isFeatured: false,
      category: "Tourism E-commerce",
      type: "Guided project",
      duration: "Sep 2024",
      logoClass: "bg-taipeidaytrip-logo",
      description: "A comprehensive e-commerce platform for discovering Taipei’s tourist attractions and easily booking sightseeing tours.",
      skillSections: [
        {
          heading: "Skills Highlight",
          items: [
            "Experience in developing web interfaces using vanilla HTML and CSS, ensuring accurate implementation and adherence to Figma UI designs.",
            "Implement the Intersection Observer API to create a seamless infinite scroll effect, allowing content to load dynamically as the user scrolls down.",
            "Integrate third-party payment solutions, utilize the TapPay SDK to facilitate secure and efficient transactions.",
          ],
        },
      ],
      demoUrl: TAIPEI_DAY_TRIP_DEMO_URL,
      githubUrl: TAIPEI_DAY_TRIP_GITHUB_URL,
    },
    {
      name: "Weather forecast APP",
      isFeatured: false,
      category: "Weather forecast",
      type: "Group project",
      duration: "Jul 2024",
      logoClass: "bg-weatherapp-logo",
      description: "The app offers a complete weather overview for Taiwan, including a 36-hour forecast with temperature, rainfall, UV index, and heat warnings.",
      skillSections: [
        {
          heading: "Skills Highlight",
          items: [
            "Hands-on experience in team-based development, designing and implementing the MVC pattern without conflicts, and adhering to an agile development schedule.",
            "Determine the appropriate caching duration when dealing with a frequently updated API to ensure that the cached data remains relevant and accurate.",
            "Experience in using Discord bot webhooks to integrate and automate interactions with Discord channels and servers.",
          ],
        },
      ],
      image: {
        src: WEATHER_APP_SCREENSHOT_IMG,
        alt: "Weather forecast APP Screenshot",
        containerClass: "max-w-lg mx-auto",
      },
      demoUrl: WEATHER_APP_DEMO_URL,
      githubUrl: WEATHER_APP_GITHUB_URL,
    },
  ]);

  // ==========================================
  // Public Namespace Export
  // ==========================================
  /** @type {ResumeData} */
  const ResumeData = Object.freeze({
    SKILLS_DATA,
    INFO_DATA,
    EDUCATION_DATA,
    EXPERIENCE_DATA,
    PROJECTS_DATA,
  });

  root.ResumeData = ResumeData;
})();
