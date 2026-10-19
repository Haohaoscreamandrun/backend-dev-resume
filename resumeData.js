// @ts-check
/**
 * Structured Resume Data Store (Bilingual: English & 繁體中文)
 * Central repository of skills, quick info, education, experience, and projects.
 * Formatted with formal English and professional Traditional Chinese (Taiwan localization).
 * Visual emphasis is focused strictly on quantifiable metrics, scale, and key achievements.
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
 * @typedef {Object} UIText
 * @property {string} profileSubtitle
 * @property {string} summary
 * @property {string} downloadCv
 * @property {string} skillSet
 * @property {string} information
 * @property {string} resumeTab
 * @property {string} projectTab
 * @property {string} education
 * @property {string} experience
 * @property {string} projects
 * @property {string} viewGithub
 */

/**
 * @typedef {Object} ResumeLocaleData
 * @property {UIText} UI_TEXT
 * @property {readonly SkillColumn[]} SKILLS_DATA
 * @property {readonly InfoItem[]} INFO_DATA
 * @property {readonly EducationItem[]} EDUCATION_DATA
 * @property {readonly ExperienceItem[]} EXPERIENCE_DATA
 * @property {readonly ProjectItem[]} PROJECTS_DATA
 */

/**
 * @typedef {Object} ResumeData
 * @property {ResumeLocaleData} en
 * @property {ResumeLocaleData} zh
 * @property {readonly SkillColumn[]} SKILLS_DATA
 * @property {readonly InfoItem[]} INFO_DATA
 * @property {readonly EducationItem[]} EDUCATION_DATA
 * @property {readonly ExperienceItem[]} EXPERIENCE_DATA
 * @property {readonly ProjectItem[]} PROJECTS_DATA
 * @property {UIText} UI_TEXT
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

  // ============================================================================
  // English Dataset (en)
  // ============================================================================

  /** @type {UIText} */
  const EN_UI_TEXT = Object.freeze({
    profileSubtitle: "Full-Stack Software Engineer (TypeScript / Angular / Python / gRPC)",
    summary: "Full-Stack Software Engineer with 2+ years of production web engineering experience, complemented by 5+ years of enterprise project execution and industrial data analysis. Architected high-throughput browser-to-cloud data transfer systems and reactive visual comparison tools supporting Google Camera 3A across Angular Signals, TypeScript, Python gRPC, and WebUSB, reducing data transfer latency by **76%–81%**. Certified **Google TypeScript Readability** reviewer with professional expertise spanning modern reactive frontend interfaces, distributed RPC services, and cloud architectures.",
    downloadCv: "Download CV",
    skillSet: "Skill Set",
    information: "Information",
    resumeTab: "Resume",
    projectTab: "Project",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    viewGithub: "View GitHub Repository",
  });

  /** @type {readonly SkillColumn[]} */
  const EN_SKILLS_DATA = Object.freeze([
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
        "OpenCV.js / Tesseract.js",
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
  const EN_INFO_DATA = Object.freeze([
    { label: "Software Engineering", value: "2+ years" },
    { label: "Regulatory Project Mgmt", value: "4+ years" },
    { label: "Industrial Data Analysis", value: "1+ year" },
    { label: "Location", value: "Taipei, Taiwan" },
    { label: "Languages", value: "English (TOEIC 910 Gold) / Mandarin (Native)" },
    { label: "Certification", value: "Google TypeScript Readability" },
  ]);

  /** @type {readonly EducationItem[]} */
  const EN_EDUCATION_DATA = Object.freeze([
    {
      degree: "Master of Science (M.S.), Horticulture and Landscape Architecture",
      badge: "Master",
      school: "National Taiwan University (NTU)",
      duration: "Sep 2016 – Jul 2018",
      logoClass: "bg-ntu-logo",
      highlights: [
        "GPA: **3.98 / 4.00** (49 credits) | Focus: Plant Physiology / Crop Molecular Breeding",
        "Honor: **Know-You Social Welfare Foundation Academic Scholarship**",
        "Entrepreneurship: Co-Founder, Cross Melon (**NTU Garage Incubator**, 2016–2017) — designed sensor-based automated environmental control systems for hydroponic plant growth.",
        "Publication: Chen, H. and H. S. Lo (2017). Effect of nutrient temperature on growth and development of deep flow technique hydroponic netted melon. (J. Taiw. Soc. Hortic. Sci. 64: 276–277).",
      ],
    },
    {
      degree: "Bachelor of Science (B.S.), Horticulture",
      badge: "Bachelor",
      school: "National Chung Hsing University (NCHU)",
      duration: "Sep 2012 – Jul 2016",
      logoClass: "bg-nchu-logo",
      highlights: [
        "GPA: **3.85 / 4.00** (154 credits)",
        "Internship: Yu, Su-May's Lab, Institute of Molecular Biology, Academia Sinica",
        "Leadership: Deputy Director, International Agriculture Service Mission, NCHU",
      ],
    },
  ]);

  /** @type {readonly ExperienceItem[]} */
  const EN_EXPERIENCE_DATA = Object.freeze([
    {
      role: "Full-Stack Software Engineer",
      badge: "Full-time",
      company: "Intelligent Manpower Corp. (Supporting Google — Camera 3A & Imaging Platform)",
      duration: "Nov 2024 – Present",
      logoClass: "bg-imc-logo",
      bullets: [
        "Reduced end-to-end camera image transfer latency by **76%–81%** (from 43–59s down to **10–11s per image**) by designing and developing a new Angular and Python gRPC web platform that replaced 4 manual command-line and server steps with a streamlined **single-click browser-to-cloud workflow**.",
        "Eliminated browser out-of-memory errors during large multi-gigabyte uploads, limiting client memory consumption to **under 105 MB** by designing a three-tier WebUSB-to-HTTP transfer queue with immediate object memory release.",
        "Accelerated dataset indexing and cross-cluster storage transfers for **thousands of files** across cloud storage and distributed file systems by implementing concurrent Python gRPC pipelines with batch URL retrieval and secure OAuth 2.0 token authorization.",
        "Prevented partial data corruption and redundant uploads across unstable connections, **eliminating duplicate transfers upon retry** through per-file checkpoint tracking, exponential backoff intervals, and strict gRPC status validation.",
        "Reduced redundant backend server requests during multi-version telemetry and image comparison by developing an Angular Signals reactive state architecture with custom equality comparison and a **24-hour local IndexedDB client cache**.",
        "Maintained reliable automated testing and regression protection across **more than 150 full-stack modules** and earned **Google TypeScript Readability certification**, creating reusable dependency-injection test suites, Angular CDK component testing harnesses, and isolated Bazel unit tests.",
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
        "Completed 24 weeks of intensive software engineering training specializing in backend architecture, relational database design, and cloud infrastructure.",
        "Accelerated geospatial parking vacancy queries by **up to 6 times** in an independently developed Parking Lot Management System (PLMS) by implementing MySQL (AWS RDS) spatial indexing, Redis caching, and Python FastAPI RESTful services deployed using Docker, Nginx, and AWS (EC2, ELB, S3, CloudFront, Route53).",
        "Automated browser-side license plate recognition and real-time vacancy mapping in PLMS by integrating **OpenCV.js (WebAssembly)** image preprocessing, Tesseract.js OCR, Google Maps API, and JWT role-based administrator authentication.",
        "Engineered relational database schemas, RESTful MVC endpoints, third-party payment integration (TapPay SDK), and dynamic client-side loading.",
      ],
    },
    {
      role: "Regulatory & Import Tolerance Specialist",
      badge: "Full-time",
      company: "ActiveHire (Supporting Corteva Agriscience & BASF Taiwan)",
      duration: "Feb 2020 – Apr 2024",
      logoClass: "bg-activehire-logo",
      bullets: [
        "Spearheaded multi-site experimental trial data pipelines, compliance datasets, and quantitative research protocols for crop protection products (including Adavelt™), coordinating project lifecycle execution with international regulatory and engineering teams across Corteva Agriscience.",
        "Managed government communications, regulatory data submissions, and operational compliance procedures to ensure product registration and regulatory standards for BASF Agricultural Solutions.",
      ],
    },
    {
      role: "Data & Research Analyst (Industrial Machine Data)",
      badge: "Full-time",
      company: "TECHS TECH Co., Ltd.",
      duration: "Oct 2018 – Jan 2020",
      logoClass: "bg-techs-logo",
      bullets: [
        "Harvested industrial fermentation machine sensor data via USB interfaces and developed R programs for data cleaning, statistical modeling, and visualization to analyze critical temperature logs and detect operational anomalies.",
        "Optimized product formulations and manufacturing efficiency, verifying performance across **more than 15 experimental trial groups** through multivariate statistical analysis and parameter optimization.",
      ],
    },
  ]);

  /** @type {readonly ProjectItem[]} */
  const EN_PROJECTS_DATA = Object.freeze([
    {
      name: "Camera 3A Data Transfer & Telemetry Platform (Supporting Google)",
      isFeatured: true,
      category: "Hardware-to-Cloud Ingestion Platform",
      type: "Enterprise Platform",
      duration: "Nov 2024 – Present",
      logoClass: "bg-camera3a-logo",
      logoIcon: "fa-solid fa-camera",
      description: "High-throughput browser-to-cloud device capture and distributed storage transfer platform. Replaced a 4-step manual command-line process with a streamlined single-click web pipeline, reducing data transfer latency by **76%–81%** (from 43–59s down to **10–11s per image**).",
      skillSections: [
        {
          heading: "Frontend & Hardware Integration",
          items: [
            "Engineered session-scoped WebUSB and WebADB hardware communication for direct device access in the browser.",
            "Designed a three-tier transfer scheduler (sequential USB transfer, parallel chunked uploads, and a 15-file in-flight queue), limiting client memory usage to **under 105 MB** during multi-gigabyte uploads.",
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
      description: "Reactive visual comparison and analysis tool for Camera 3A image tuning and algorithm evaluation. Resolved a critical tuning bottleneck by introducing deterministic pair-ID tracking from the capture database, ensuring camera tuners no longer suffer from misaligned image comparisons across algorithm versions.",
      skillSections: [
        {
          heading: "Frontend Reactive Architecture & Telemetry Analysis",
          items: [
            "Eliminated image comparison misalignment by introducing and indexing deterministic pair-ID metadata from the capture database, enabling camera tuners to inspect side-by-side differences with guaranteed 1:1 image alignment.",
            "Architected fine-grained state management using Angular Signals with custom equality comparison to eliminate redundant recalculations.",
            "Integrated a **24-hour local IndexedDB client cache** to eliminate redundant backend server requests during image and telemetry comparison.",
            "Built a **19-metric debug log parser** and multi-attribute sorting engine analyzing camera tuning parameters (including Auto White Balance gains, color temperature, and exposure metrics).",
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
            "Optimized database queries using MySQL spatial indexing on AWS RDS, improving search performance by **up to 6 times**.",
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
            "Employed **OpenCV.js (WebAssembly)** for client-side image preprocessing and Tesseract.js for optical character recognition.",
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
  ]);

  // ============================================================================
  // Traditional Chinese Dataset (繁體中文 - 台灣資訊專業語境)
  // ============================================================================

  /** @type {UIText} */
  const ZH_UI_TEXT = Object.freeze({
    profileSubtitle: "全端軟體工程師 (TypeScript / Angular / Python / gRPC)",
    summary: "具備 2 年以上正式線上 Web 系統工程實戰經驗之全端軟體工程師，並擁有逾 5 年企業專案管理與工業數據分析之扎實歷練。專注於支援 Google Camera 3A 之高輸送量瀏覽器至雲端資料傳輸系統與響應式視覺比對平台，技術涵蓋 Angular Signals、TypeScript、Python gRPC 與 WebUSB，成功將端到端資料傳輸延遲降低 **76%–81%**。持有 **Google TypeScript Readability (可讀性認證)**，專精於現代響應式前端介面架構、分散式 RPC 服務與高可用雲端系統設計。",
    downloadCv: "下載 PDF 履歷",
    skillSet: "專業技能",
    information: "基本資訊",
    resumeTab: "個人履歷",
    projectTab: "精選專案",
    education: "學歷背景",
    experience: "工作經歷",
    projects: "專案成果",
    viewGithub: "前往 GitHub 原始碼存放庫",
  });

  /** @type {readonly SkillColumn[]} */
  const ZH_SKILLS_DATA = Object.freeze([
    {
      category: "程式語言 (Languages)",
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
      category: "前端與 Web 系統 (Frontend)",
      items: [
        "Angular (Signals, CDK)",
        "RxJS",
        "WebUSB / WebADB API",
        "IndexedDB",
        "Semantic CSS / Bootstrap",
        "OpenCV.js / Tesseract.js",
      ],
    },
    {
      category: "後端與分散式系統 (Backend)",
      items: [
        "Python (gRPC, FastAPI)",
        "Protocol Buffers (v3)",
        "並行 I/O 處理 (Concurrent I/O)",
        "MySQL 空間索引 (Spatial Indexing)",
        "Redis",
        "OAuth 2.0 / JWT",
      ],
    },
    {
      category: "雲端架構、維運與工具 (DevOps)",
      items: [
        "AWS (EC2, RDS, S3, CloudFront)",
        "Docker / Nginx",
        "Linux (Ubuntu)",
        "Bazel",
        "Git / Gerrit",
        "自動化測試套件 (Automated Test Suites)",
      ],
    },
  ]);

  /** @type {readonly InfoItem[]} */
  const ZH_INFO_DATA = Object.freeze([
    { label: "軟體工程經驗", value: "2+ 年" },
    { label: "跨國法規專案管理", value: "4+ 年" },
    { label: "工業機台數據分析", value: "1+ 年" },
    { label: "所在地區", value: "台灣台北" },
    { label: "語言能力", value: "英文 (多益金色 910 分) / 中文 (母語)" },
    { label: "專業認證", value: "Google TypeScript 可讀性認證 (Readability)" },
  ]);

  /** @type {readonly EducationItem[]} */
  const ZH_EDUCATION_DATA = Object.freeze([
    {
      degree: "園藝暨景觀學系 碩士 (M.S.)",
      badge: "碩士",
      school: "國立臺灣大學 (NTU)",
      duration: "2016 年 9 月 – 2018 年 7 月",
      logoClass: "bg-ntu-logo",
      highlights: [
        "學業成績 GPA：**3.98 / 4.00** (49 學分) | 研究領域：植物生理 / 作物分子育種",
        "榮譽獲獎：**財團法人農友社會福利基金會獎學金**",
        "創業經歷：共同創辦人，Cross Melon (**臺大創創車庫 NTU Garage 孵化器**，2016–2017) — 研發基於感測器之水耕生長環境自動化控制系統。",
        "學術論文：Chen, H. and H. S. Lo (2017). 養液溫度對水耕網紋洋香瓜生長與發育之影響 (臺灣園藝 64: 276–277)。",
      ],
    },
    {
      degree: "園藝學系 學士 (B.S.)",
      badge: "學士",
      school: "國立中興大學 (NCHU)",
      duration: "2012 年 9 月 – 2016 年 7 月",
      logoClass: "bg-nchu-logo",
      highlights: [
        "學業成績 GPA：**3.85 / 4.00** (154 學分)",
        "研究實習：中央研究院 分子生物研究所 余淑美院士實驗室",
        "學生組織領導：國立中興大學 國際農業服務團 副團長",
      ],
    },
  ]);

  /** @type {readonly ExperienceItem[]} */
  const ZH_EXPERIENCE_DATA = Object.freeze([
    {
      role: "全端軟體工程師 (Full-Stack Software Engineer)",
      badge: "正職",
      company: "精英人力資源股份有限公司 (支援 Google — Camera 3A 相機演算法與影像平台團隊)",
      duration: "2024 年 11 月 – 至今",
      logoClass: "bg-imc-logo",
      bullets: [
        "設計並開發全新 Angular 與 Python gRPC Web 平台，將原本繁瑣的 4 道手動命令列與伺服器搬運流程精簡為**一鍵式瀏覽器至雲端自動化管線**，將相機影像端到端傳輸延遲降低 **76%–81%** (由每張 43–59 秒大幅降至 **10–11 秒**)。",
        "設計三層式 WebUSB 至 HTTP 傳輸佇列架構，搭配即時物件記憶體釋放機制，徹底解決多 GB 大容量上傳時的瀏覽器記憶體崩潰問題，將客戶端記憶體佔用嚴密限制於 **105 MB 以內**。",
        "實作 Python gRPC 高並行資料處理管線，整合批次 URL 檢索與安全 OAuth 2.0 憑證授權機制，加速雲端儲存與跨叢集分散式檔案系統間**數千筆檔案**的索引與遷移作業。",
        "建立單檔 Checkpoint 斷點續傳追蹤、指數退避重試機制與嚴格 gRPC 狀態檢驗，避免不穩定網路環境下的資料損毀與重複上傳，**確保重試過程零重複傳輸**。",
        "採用 Angular Signals 響應式狀態架構搭配自訂物件比對與 **24 小時本機 IndexedDB 快取**，消除多版本遙測數據與影像比對時對後端伺服器的冗餘請求。",
        "為全系統**超過 150 個全端模組**建構高可靠度自動化測試與回歸防護網，並獲取 **Google TypeScript Readability (可讀性認證)**；打造可重用依賴注入測試套件、Angular CDK 元件測試 Harness 及獨立 Bazel 單元測試。",
      ],
    },
    {
      role: "軟體工程培訓生 (後端與雲端系統專攻 — 第五屆)",
      badge: "培訓",
      company: "WeHelp 軟體工程培訓營 (彭彭科技有限公司 Padax Ltd.)",
      duration: "2024 年 4 月 – 2024 年 9 月",
      logoClass: "bg-wehelp-logo bg-no-repeat bg-center",
      logoStyle: "background-size: 70%; background-color: white; mix-blend-mode: normal;",
      bullets: [
        "完成為期 24 週的高強度軟體工程實戰訓練，專攻後端架構設計、關聯式資料庫規劃與雲端基礎設施部署。",
        "獨立開發「停車場即時管理系統 (PLMS)」，導入 MySQL (AWS RDS) 空間索引、Redis 高效快取與 Python FastAPI RESTful 服務，搭配 Docker、Nginx 與 AWS (EC2, ELB, S3, CloudFront, Route53)，將地理空間空位查詢效能提升**高達 6 倍**。",
        "整合 **OpenCV.js (WebAssembly)** 影像前處理、Tesseract.js 光學字元辨識、Google Maps API 與基於 JWT 之角色權限控管 (RBAC)，實現瀏覽器端車牌自動辨識與即時空位地圖導航。",
        "獨立規劃關聯式資料庫 Schema、RESTful MVC API 端點、整合第三方支付金流 (TapPay SDK) 與前端動態載入體驗。",
      ],
    },
    {
      role: "法規專案與進口容許量專員 (Regulatory & Import Tolerance Specialist)",
      badge: "正職",
      company: "ActiveHire 捷招 (派駐服務 Corteva Agriscience 科迪華農業科技 與 BASF 台灣巴斯夫)",
      duration: "2020 年 2 月 – 2024 年 4 月",
      logoClass: "bg-activehire-logo",
      bullets: [
        "主導植保產品 (包含 Adavelt™) 多試驗點田間試驗數據管線、法規合規資料集與量化研發實驗標準，跨國協同 Corteva Agriscience 全球法規科學與工程團隊推進專案生命週期。",
        "統籌主管機關溝通、法規數據呈審及營運合規程序，確保 BASF 農業解決方案產品順利通過審查並符合官方登記標準。",
      ],
    },
    {
      role: "數據與研發分析師 (機台數據與製程分析)",
      badge: "正職",
      company: "特克斯科技股份有限公司 (TECHS TECH Co., Ltd.)",
      duration: "2018 年 10 月 – 2020 年 1 月",
      logoClass: "bg-techs-logo",
      bullets: [
        "透過 USB 介面採集工業發酵機台之感測器記錄，並開發 R 語言資料清洗、統計建模與可視化程式，分析關鍵溫度數據與生產日誌異常。",
        "運用多變量統計分析與製程參數最佳化，在**超過 15 組實驗試驗**中驗證配方效能，顯著提升產品品質穩定性與量產效率。",
      ],
    },
  ]);

  /** @type {readonly ProjectItem[]} */
  const ZH_PROJECTS_DATA = Object.freeze([
    {
      name: "Camera 3A 資料傳輸與遙測平台 (支援 Google)",
      isFeatured: true,
      category: "硬體至雲端資料傳輸平台",
      type: "企業級內部平台",
      duration: "2024 年 11 月 – 至今",
      logoClass: "bg-camera3a-logo",
      logoIcon: "fa-solid fa-camera",
      description: "高輸送量之瀏覽器端硬體擷取與分散式雲端儲存傳輸平台。將原本需 4 道繁瑣手動指令的命令列流程，重構為流暢的一鍵式 Web 自動化傳輸管線，使資料傳輸延遲大幅降低 **76%–81%** (由每張 43–59 秒降至 **10–11 秒**)。",
      skillSections: [
        {
          heading: "前端與硬體整合架構",
          items: [
            "實作會話級別之 WebUSB 與 WebADB 協定通訊，實現瀏覽器端對硬體裝置的無縫直連存取。",
            "設計三層式傳輸排程器 (循序 USB 擷取、平行分塊上傳與 15 檔案 In-Flight 佇列)，在數 GB 大檔案傳輸時將記憶體佔用嚴格限制在 **105 MB 以內**。",
            "實現 Protocol Buffers 二進位解碼、客戶端影像 Metadata 提取及即時記憶體回收釋放機制。",
          ],
        },
        {
          heading: "後端 RPC 與儲存基礎架構",
          items: [
            "以 Python gRPC 架構多執行緒並行服務管線，支援跨叢集分散式儲存傳輸。",
            "導入安全 OAuth 2.0 與權限型憑證委派機制，確保雲端檔案傳輸授權與鑑別安全性。",
            "透過單檔 Checkpoint 斷點追蹤與嚴密交易狀態驗證，防範網路中斷重試時的重複傳輸與資料毀損。",
          ],
        },
      ],
      isInternal: true,
      internalNote: "Google 內部機密系統 (Proprietary)",
    },
    {
      name: "視覺比對與 3A 遙測分析引擎 (支援 Google)",
      isFeatured: false,
      category: "調校與演算法評估工具",
      type: "企業級 Web 應用系統",
      duration: "2024 年 11 月 – 至今",
      logoClass: "bg-diffing-logo",
      logoIcon: "fa-solid fa-sliders",
      description: "專為相機 3A 影像調校與演算法評估打造的響應式視覺比對與數據分析工具。透過導入擷取資料庫之決定性配對 ID (Pair-ID) 追蹤與索引，徹底解決不同演算法版本間影像錯位的長年調校瓶頸，確保影像比較 100% 精準對齊。",
      skillSections: [
        {
          heading: "前端響應式架構與遙測分析",
          items: [
            "導入擷取資料庫之決定性配對 ID (Pair-ID) 追蹤機制，徹底消除影像比對錯位，使相機調校工程師能在絕對保證 1:1 對齊基準下檢視演算法差異。",
            "基於 Angular Signals 架構細粒度狀態管理，結合自訂相等性比對機制，徹底消除不必要的重複計算。",
            "整合 **24 小時本機 IndexedDB 快取**，大幅減少影像比對與遙測資料重複抓取時的後端伺服器負載。",
            "打造支援 **19 項指標的除錯日誌解析器**與多屬性排序引擎，深入分析自動白平衡增益 (AWB Gains)、色溫與曝光等關鍵相機調校參數。",
            "設計具備響應式即時驗證之動態表單，滿足複雜相機資料集的檢索與篩選工作流。",
          ],
        },
      ],
      isInternal: true,
      internalNote: "Google 內部機密系統 (Proprietary)",
    },
    {
      name: "停車場即時管理系統 (PLMS)",
      isFeatured: true,
      category: "智慧停車解決方案",
      type: "個人全端專案",
      duration: "2024 年 9 月",
      logoClass: "bg-parkinglot-logo",
      description: "PLMS 提供整合管理員維運工具與線上支付功能的完整停車場管理平台，使用者可透過互動式地圖即時掌握剩餘車位與車牌識別導航。",
      skillSections: [
        {
          heading: "後端技術",
          items: [
            "遵循 MVC 設計模式打造 RESTful API，實現高內聚低耦合之系統架構與可維護性。",
            "使用 AWS Route53 配置自訂網域名稱並管理全域 DNS 路由。",
            "以 Python 與 FastAPI 框架開發高效能後端 API，並自動產生互動式 API 文件。",
            "整合 JWT (JSON Web Token) 機制，落實安全的管理員身份驗證與角色權限控管。",
            "運用 AWS RDS (MySQL) 空間索引 (Spatial Indexing) 優化地理空間查詢，使周邊空位檢索效能提升**高達 6 倍**。",
            "採用 Docker 容器化技術將服務部署於 AWS EC2，並導入 Redis 實現高命中率資料快取。",
            "配置 Nginx 反向代理伺服器與 SSL 憑證自動化管理，保障全站傳輸安全。",
            "建置 AWS Elastic Load Balancer (ELB) 動態分配流量，確保系統高可用性 (High Availability)。",
            "利用 AWS S3 搭配 Presigned URL 安全託管影像儲存，並藉由 AWS CloudFront CDN 加速全球靜態資源分發。",
          ],
        },
        {
          heading: "前端技術",
          items: [
            "運用 Bootstrap 打造兼具行動端與桌面端相容性之響應式使用者介面 (RWD)。",
            "整合 Google Maps API 提供流暢之互動式停車場地圖定位與標記服務。",
            "導入 **OpenCV.js (WebAssembly)** 於瀏覽器端執行影像前處理，並結合 Tesseract.js 實現車牌光學字元辨識 (OCR)。",
          ],
        },
      ],
      image: {
        src: PLMS_BACKEND_STRUCTURE_IMG,
        alt: "停車場即時管理系統架構圖 (PLMS Architecture)",
        containerClass: "max-w-xl mx-auto",
      },
      demoUrl: PLMS_DEMO_URL,
      githubUrl: PLMS_GITHUB_URL,
    },
  ]);

  // ============================================================================
  // Public Namespace Export
  // ============================================================================

  const enBundle = Object.freeze({
    UI_TEXT: EN_UI_TEXT,
    SKILLS_DATA: EN_SKILLS_DATA,
    INFO_DATA: EN_INFO_DATA,
    EDUCATION_DATA: EN_EDUCATION_DATA,
    EXPERIENCE_DATA: EN_EXPERIENCE_DATA,
    PROJECTS_DATA: EN_PROJECTS_DATA,
  });

  const zhBundle = Object.freeze({
    UI_TEXT: ZH_UI_TEXT,
    SKILLS_DATA: ZH_SKILLS_DATA,
    INFO_DATA: ZH_INFO_DATA,
    EDUCATION_DATA: ZH_EDUCATION_DATA,
    EXPERIENCE_DATA: ZH_EXPERIENCE_DATA,
    PROJECTS_DATA: ZH_PROJECTS_DATA,
  });

  /** @type {ResumeData} */
  const ResumeData = Object.freeze({
    en: enBundle,
    zh: zhBundle,
    // Top-level backward compatibility
    SKILLS_DATA: EN_SKILLS_DATA,
    INFO_DATA: EN_INFO_DATA,
    EDUCATION_DATA: EN_EDUCATION_DATA,
    EXPERIENCE_DATA: EN_EXPERIENCE_DATA,
    PROJECTS_DATA: EN_PROJECTS_DATA,
    UI_TEXT: EN_UI_TEXT,
  });

  root.ResumeData = ResumeData;
})();
