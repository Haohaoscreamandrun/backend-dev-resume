// @ts-check
/**
 * Structured Resume Data Store
 * Central repository of skills, quick info, education, experience, and projects.
 * Formatted with formal English vocabulary adhering to standard educational and professional English.
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
 * @property {string} [logoIcon] - Optional FontAwesome icon class
 * @property {string} [logoStyle] - Optional inline CSS styles for logo
 * @property {readonly string[]} highlights - Honors, GPA, or specializations
 */

/**
 * @typedef {Object} ExperienceItem
 * @property {string} role - Role or position title
 * @property {string} badge - Employment status (e.g., "Full-time", "Trainee")
 * @property {string} company - Organization name
 * @property {string} duration - Employment duration range
 * @property {string} logoClass - Semantic CSS background logo class
 * @property {string} [logoIcon] - Optional FontAwesome icon class
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
 * @property {string} [logoIcon] - Optional FontAwesome icon class
 * @property {string} [logoStyle] - Optional inline CSS styles
 * @property {string} description - High-level project summary
 * @property {readonly ProjectSkillSection[]} skillSections - Grouped technical accomplishments
 * @property {ProjectImage} [image] - Optional screenshot or architectural diagram
 * @property {boolean} [isInternal] - Whether the project is an internal/proprietary platform
 * @property {string} [internalNote] - Note for internal platforms (e.g., "Google Internal Platform (Proprietary)")
 * @property {string} [demoUrl] - Live demo application URL
 * @property {string} [githubUrl] - GitHub repository URL
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
  /** @type {Record<string, any>} */
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
  // Data Constants (Formal Standard English Vocabulary)
  // ============================================================================

  /** @type {readonly SkillColumn[]} */
  const SKILLS_DATA = Object.freeze([
    {
      category: "Languages",
      items: [
        "TypeScript",
        "Python 3",
        "JavaScript (ES6+)",
        "SQL (MySQL)",
        "HTML5 / CSS3",
        "R",
      ],
    },
    {
      category: "Frontend & Web Systems",
      items: [
        "Angular (Signals, CDK)",
        "RxJS",
        "WebUSB / WebADB API",
        "IndexedDB",
        "Semantic CSS / Bootstrap",
        "OpenCV / Tesseract.js",
      ],
    },
    {
      category: "Backend & Distributed",
      items: [
        "Python (gRPC, FastAPI)",
        "Protocol Buffers (v3)",
        "Concurrent I/O",
        "MySQL (Spatial Indexing)",
        "Redis",
        "OAuth 2.0 / JWT",
      ],
    },
    {
      category: "Cloud, DevOps & Tools",
      items: [
        "AWS (EC2, RDS, S3, CloudFront)",
        "Docker / Nginx",
        "Linux (Ubuntu)",
        "Bazel",
        "Git / Gerrit",
        "Automated Test Suites",
      ],
    },
  ]);

  /** @type {readonly InfoItem[]} */
  const INFO_DATA = Object.freeze([
    { label: "Work Experience", value: "Over 5 years" },
    { label: "Location", value: "Taipei, Taiwan" },
    { label: "Languages", value: "English (TOEIC 910 Gold) / Mandarin (Native)" },
    { label: "Certification", value: "Google TypeScript Readability" },
  ]);

  /** @type {readonly EducationItem[]} */
  const EDUCATION_DATA = Object.freeze([
    {
      degree: "Master of Science (M.S.), Horticulture and Landscape Architecture",
      badge: "Master",
      school: "National Taiwan University (NTU)",
      duration: "Sep 2016 – Jul 2018",
      logoClass: "bg-ntu-logo",
      highlights: [
        "GPA: 3.98 / 4.30 (49 credits) | Focus: Quantitative Modeling & Sensor Control Systems",
        "Honor: Know-You Social Welfare Foundation Academic Scholarship",
        "Publication: Chen, H. and H. S. Lo (2017). Quantitative modeling of root-zone thermal control on hydroponic system growth dynamics (J. Taiw. Soc. Hortic. Sci. 64: 276–277).",
      ],
    },
    {
      degree: "Bachelor of Science (B.S.), Horticulture",
      badge: "Bachelor",
      school: "National Chung Hsing University (NCHU)",
      duration: "Sep 2012 – Jul 2016",
      logoClass: "bg-nchu-logo",
      highlights: [
        "GPA: 3.85 / 4.30 (154 credits)",
        "Internship: Yu, Su-May's Lab, Institute of Molecular Biology, Academia Sinica",
        "Leadership: Deputy Director, International Agriculture Service Mission, NCHU",
      ],
    },
  ]);

  /** @type {readonly ExperienceItem[]} */
  const EXPERIENCE_DATA = Object.freeze([
    {
      role: "Full-Stack Software Engineer",
      badge: "Full-time",
      company: "Intelligent Manpower Corp. (Supporting Google — Camera 3A & Imaging Platform)",
      duration: "Nov 2024 – Present",
      logoClass: "bg-imc-logo",
      bullets: [
        "Reduced end-to-end camera image transfer latency by 76%–81% (from 43–59s down to 10–11s per image) by designing and developing a new Angular and Python gRPC web platform that replaced 4 manual command-line and server steps (device transfer, server storage, sensor data separation, and cloud upload) with a streamlined single-click browser-to-cloud workflow.",
        "Eliminated browser out-of-memory errors during large multi-gigabyte uploads, limiting client memory consumption to under 105 MB by designing a three-tier WebUSB-to-HTTP transfer queue with immediate object memory release.",
        "Accelerated dataset indexing and cross-cluster storage transfers for thousands of files across cloud storage and distributed file systems by implementing concurrent Python gRPC pipelines with batch URL retrieval and secure OAuth 2.0 token authorization.",
        "Prevented partial data corruption and redundant uploads across unstable connections, eliminating duplicate transfers upon retry through per-file checkpoint tracking, exponential backoff intervals, and strict gRPC status validation.",
        "Reduced redundant backend server requests during multi-version telemetry and image comparison by developing an Angular Signals reactive state architecture with custom equality comparison and a 24-hour local IndexedDB client cache.",
        "Maintained reliable automated testing and regression protection across more than 150 full-stack modules and earned Google TypeScript Readability certification, creating reusable dependency-injection test suites, Angular CDK component testing harnesses, and isolated Bazel unit tests.",
      ],
    },
    {
      role: "Software Engineer Trainee (Backend & Cloud Systems Specialization — Batch #5)",
      badge: "Trainee",
      company: "WeHelp Software Engineering Bootcamp (Padax Ltd.)",
      duration: "Apr 2024 – Sep 2024",
      logoClass: "bg-wehelp-logo bg-no-repeat bg-center",
      logoStyle: "background-size: 70%; background-color: white; mix-blend-mode: normal;",
      bullets: [
        "Accelerated geospatial parking vacancy queries by up to 6 times in an independently developed Parking Lot Management System (PLMS) by implementing MySQL (AWS RDS) spatial indexing, Redis caching, and Python FastAPI RESTful services deployed using Docker, Nginx, and AWS (EC2, ELB, S3, CloudFront, Route53).",
        "Automated browser-side license plate recognition and real-time vacancy mapping in PLMS by integrating OpenCV image preprocessing, Tesseract.js OCR, Google Maps API, and JWT role-based administrator authentication.",
        "Delivered a full-stack e-commerce booking platform (\"Taipei Day Trip\") over an 8-week development period, implementing RESTful MVC APIs, TapPay SDK payment processing, and Intersection Observer dynamic content loading.",
        "Collaborated with three team members using agile methodology to deliver a real-time Taiwan weather forecast web application within one week.",
      ],
    },
    {
      role: "Technical Project & Regulatory Data Specialist",
      badge: "Full-time",
      company: "Corteva Agriscience (Dow & DuPont Heritage)",
      duration: "Aug 2021 – Apr 2024",
      logoClass: "bg-corteva-logo",
      bullets: [
        "Led cross-functional data submissions, multi-site experimental trials, and quantitative research protocols for Adavelt™ and other crop protection products, coordinating compliance datasets and lifecycle execution across international engineering and regulatory teams.",
      ],
    },
    {
      role: "Import Tolerance & Regulatory Specialist",
      badge: "Full-time",
      company: "BASF Taiwan",
      duration: "Feb 2020 – Aug 2021",
      logoClass: "bg-basf-logo",
      bullets: [
        "Supported government communications and regulatory compliance procedures to ensure product registration and operational standards for Agricultural Solutions.",
      ],
    },
    {
      role: "Data & Research Analyst (Industrial IoT Telemetry)",
      badge: "Full-time",
      company: "TECHS TECH Co., Ltd.",
      duration: "Oct 2018 – Jan 2020",
      logoClass: "bg-techs-logo",
      bullets: [
        "Automated industrial fermentation machine sensor data analysis and anomaly detection by developing R data cleaning, statistical modeling, and visualization programs for production logs.",
        "Optimized product formulations and manufacturing efficiency, verifying performance across more than 15 experimental trial groups through multivariate statistical analysis and parameter optimization.",
      ],
    },
    {
      role: "Co-Founder & Lead Systems Researcher",
      badge: "Co-Founder",
      company: "Cross Melon (NTU Garage Startup Incubator)",
      duration: "2016 – 2017",
      logoClass: "bg-crossmelon-logo",
      logoIcon: "fa-solid fa-seedling",
      bullets: [
        "Co-founded an agricultural technology startup selected for the NTU Garage incubator, designing sensor-based automated environmental control systems to optimize plant growth conditions.",
      ],
    },
  ]);

  /** @type {readonly ProjectItem[]} */
  const PROJECTS_DATA = Object.freeze([
    {
      name: "Camera 3A Data Transfer & Telemetry Platform (Supporting Google)",
      isFeatured: true,
      category: "Hardware-to-Cloud Ingestion Platform",
      type: "Enterprise Platform",
      duration: "Nov 2024 – Present",
      logoClass: "bg-camera3a-logo",
      logoIcon: "fa-solid fa-camera",
      description: "High-throughput browser-to-cloud device capture and distributed storage transfer platform. Replaced a 4-step manual command-line process with a streamlined single-click web pipeline, reducing data transfer latency by 76%–81% (from 43–59s down to 10–11s per image).",
      skillSections: [
        {
          heading: "Frontend & Hardware Integration",
          items: [
            "Engineered session-scoped WebUSB and WebADB hardware communication for direct device access in the browser.",
            "Designed a three-tier transfer scheduler (sequential USB transfer, parallel chunked uploads, and a 15-file in-flight queue), limiting client memory usage to under 105 MB during multi-gigabyte uploads.",
            "Implemented Protocol Buffers binary decoding, client-side image metadata extraction, and immediate memory deallocation.",
          ],
        },
        {
          heading: "Backend RPC & Storage Infrastructure",
          items: [
            "Architected Python gRPC services with multi-threaded concurrent pipelines for distributed cross-cluster storage transfers.",
            "Implemented secure OAuth 2.0 and capability-based credential delegation for authorized cloud file transfers.",
            "Prevented duplicate transfers during network retries through per-file checkpoint tracking and strict transactional status validation.",
          ],
        },
      ],
      isInternal: true,
      internalNote: "Google Internal Platform (Proprietary)",
    },
    {
      name: "Visual Comparison & 3A Telemetry Engine (Supporting Google)",
      isFeatured: false,
      category: "Tuning & Analysis Tooling",
      type: "Enterprise Web Application",
      duration: "Nov 2024 – Present",
      logoClass: "bg-diffing-logo",
      logoIcon: "fa-solid fa-sliders",
      description: "Reactive visual comparison and analysis tool for Camera 3A image tuning and algorithm comparison, enabling engineers to inspect differences between algorithm versions with responsive real-time interaction.",
      skillSections: [
        {
          heading: "Frontend Reactive Architecture",
          items: [
            "Architected fine-grained state management using Angular Signals with custom equality comparison to eliminate redundant recalculations.",
            "Integrated a 24-hour local IndexedDB client cache to eliminate redundant backend server requests during image and telemetry comparison.",
            "Built a 19-metric debug log parser and multi-attribute sorting engine for algorithm parameter comparison.",
            "Implemented dynamic forms with reactive validation for complex dataset extraction workflows.",
          ],
        },
      ],
      isInternal: true,
      internalNote: "Google Internal Platform (Proprietary)",
    },
    {
      name: "Parking Lot Management System",
      isFeatured: true,
      category: "Automated parking solution",
      type: "Personal project",
      duration: "Sep 2024",
      logoClass: "bg-parkinglot-logo",
      description: "PLMS offers comprehensive parking lot management with administrative tools and online payment options, allowing users to view real-time vacancy information via an interactive map.",
      skillSections: [
        {
          heading: "Backend Skills",
          items: [
            "Designed RESTful APIs following the MVC pattern to separate concerns and improve system maintainability.",
            "Configured custom domain and managed DNS routing using AWS Route53.",
            "Developed backend APIs using Python and FastAPI with automated interactive API documentation.",
            "Implemented JWT tokens for secure administrator authentication and authorization.",
            "Optimized database queries using MySQL spatial indexing on AWS RDS, improving search performance by up to 6 times.",
            "Deployed containerized services on AWS EC2 using Docker, with high-performance caching provided by Redis.",
            "Configured Nginx as a reverse proxy with automated SSL certificate management.",
            "Configured an AWS Elastic Load Balancer to distribute traffic dynamically and maintain high availability.",
            "Managed secure image storage on AWS S3 with presigned URLs and accelerated global delivery using AWS CloudFront.",
          ],
        },
        {
          heading: "Frontend Skills",
          items: [
            "Designed a responsive user interface using Bootstrap.",
            "Integrated Google Maps API to provide interactive parking lot location services.",
            "Employed OpenCV for image preprocessing and Tesseract.js for optical character recognition.",
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
      description: "A comprehensive e-commerce platform for discovering Taipei tourist attractions and booking sightseeing tours online.",
      skillSections: [
        {
          heading: "Skills Highlight",
          items: [
            "Developed web interfaces using semantic HTML and CSS according to Figma design specifications.",
            "Implemented the Intersection Observer API for smooth dynamic content loading upon scrolling.",
            "Integrated third-party payment processing using the TapPay SDK to support secure online credit card transactions.",
          ],
        },
      ],
      demoUrl: TAIPEI_DAY_TRIP_DEMO_URL,
      githubUrl: TAIPEI_DAY_TRIP_GITHUB_URL,
    },
    {
      name: "Weather Forecast Web Application",
      isFeatured: false,
      category: "Weather forecast",
      type: "Group project",
      duration: "Jul 2024",
      logoClass: "bg-weatherapp-logo",
      description: "Provides a comprehensive 36-hour weather forecast for cities across Taiwan, including temperature, precipitation probability, UV index, and weather advisories.",
      skillSections: [
        {
          heading: "Skills Highlight",
          items: [
            "Collaborated in a 4-person team using agile methodology and Git version control, implementing the MVC architectural pattern.",
            "Implemented API response caching strategies to reduce external network requests while maintaining data freshness.",
            "Integrated Discord bot webhooks to deliver automated weather notification messages.",
          ],
        },
      ],
      image: {
        src: WEATHER_APP_SCREENSHOT_IMG,
        alt: "Weather Forecast Web Application Screenshot",
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
