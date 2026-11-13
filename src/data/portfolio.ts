export type Project = {
  slug: string; name: string; category: string; summary: string; description: string;
  stack: string[]; highlights: string[]; role: string; status: string; repo?: string;
  cover: string; featured?: boolean;
};

export const profile = {
  name: "Gusty Faqikh",
  title: "Informatics Engineering Student · Software Developer",
  location: "Pontianak, West Kalimantan, Indonesia",
  email: "gfaqikh@gmail.com",
  github: "https://github.com/gusti111",
  linkedin: "https://www.linkedin.com/in/gusty-faqikh/",
  jobstreet: "https://id.jobstreet.com/id/profiles/gusty-faqikh-xtrbyw9x3r",
  education: "D3 Teknik Informatika — Politeknik Negeri Pontianak",
  gpa: "3.84/4.00"
};

export const projects: Project[] = [
  {
    slug: "gurupro", name: "GuruPro", category: "Desktop",
    summary: "A desktop-oriented school management application for organizing academic operations.",
    description: "GuruPro explores a structured workflow for school administration, bringing key academic activities into one desktop application. The project includes dashboard-oriented navigation and modules for classes, schedules, attendance, and reporting.",
    stack: ["Python", "PySide6", "Firebase Admin SDK", "Firestore"],
    highlights: ["School administration workflow", "Class, schedule, and attendance modules", "Reporting-oriented interface", "Firebase / Firestore integration"],
    role: "Project development", status: "Project repository available",
    repo: "https://github.com/gusti111/GuruPro", cover: "/assets/project-gurupro.svg", featured: true
  },
  {
    slug: "nexora", name: "NEXORA", category: "Web / Mobile",
    summary: "An internship logbook management system connecting students and academic supervisors.",
    description: "NEXORA is an academic project focused on internship logbook workflows. Its described scope includes student, lecturer, field coordinator, and administrator roles, supported by a Laravel backend and a mobile client.",
    stack: ["Laravel", "PHP", "REST API", "Mobile Application", "Database Transactions"],
    highlights: ["Role-based workflow for academic stakeholders", "Logbook submission and validation", "Resubmission handling", "Transaction-aware data operations and testing"],
    role: "Backend development contribution", status: "Academic team project",
    cover: "/assets/project-nexora.svg", featured: true
  },
  {
    slug: "kudapkita", name: "KudapKita", category: "Web",
    summary: "A digital storefront concept for snack products and order administration.",
    description: "KudapKita is a web platform concept for a small snack business. The product direction covers product discovery, catalog presentation, and an order flow with administrative handling.",
    stack: ["React", "TypeScript", "Vite", "Web UI"],
    highlights: ["Product catalog experience", "Responsive storefront direction", "Order request workflow", "Maintainable component-based frontend"],
    role: "Project development", status: "Repository available",
    repo: "https://github.com/gusti111/KudapKita", cover: "/assets/project-kudapkita.svg", featured: true
  },
  {
    slug: "ruang-barasuara", name: "Ruang-Barasuara", category: "Web",
    summary: "A music community and content platform concept with album-focused navigation.",
    description: "Ruang-Barasuara is a community and music-content website concept. The project direction includes a structured presentation of three albums and their song collections.",
    stack: ["HTML", "CSS", "JavaScript", "Database Design"],
    highlights: ["Music and community content structure", "Album and track navigation concept", "Frontend implementation", "Database planning"],
    role: "Project development", status: "Repository available",
    repo: "https://github.com/gusti111/Ruang-Barasuara", cover: "/assets/project-ruang.svg"
  },
  {
    slug: "edutrack", name: "EduTrack", category: "Education",
    summary: "An education support application concept for managing and monitoring learning information.",
    description: "EduTrack is an education-related project. Its detailed implementation, features, and technology stack should be confirmed against the current repository before being used as evidence in a recruitment process.",
    stack: ["Technology details to verify"],
    highlights: ["Education-oriented product concept", "Repository available for technical review"],
    role: "Project contribution to be verified", status: "Details require verification",
    repo: "https://github.com/gusti111/EduTrack", cover: "/assets/project-edutrack.svg"
  },
  {
    slug: "smap-project", name: "SMAP Project", category: "Web",
    summary: "An information-system project documented in a public GitHub repository.",
    description: "SMAP Project is included as an additional project entry. Its specific scope, implementation status, and technical contributions should be reviewed before the case study is expanded.",
    stack: ["To be verified"],
    highlights: ["Public repository reference", "Scope and implementation require review"],
    role: "Project contribution to be verified", status: "Details require verification",
    repo: "https://github.com/gusti111/SMAP-Project", cover: "/assets/project-smap.svg"
  },
  {
    slug: "gsmartclass", name: "GSmartClass", category: "Desktop",
    summary: "A learning-support application concept.",
    description: "GSmartClass has been discussed as a learning application concept. The repository and current implementation should be checked before publishing detailed claims.",
    stack: ["Python", "PySide6", "HTML", "Firebase (planned / discussed)"],
    highlights: ["Learning-oriented product direction", "Implementation details require verification"],
    role: "Project contribution to be verified", status: "Details require verification",
    cover: "/assets/project-gsmartclass.svg"
  }
];

export const skillGroups = [
  { title: "Frontend Development", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS"] },
  { title: "Backend & API", items: ["PHP", "Laravel", "REST API"] },
  { title: "Desktop & Application", items: ["Python", "PySide6"] },
  { title: "Database & Cloud", items: ["Firebase", "Firestore", "SQL"] },
  { title: "Tools & Practices", items: ["Git", "GitHub", "Responsive UI", "Database Design", "Testing"] }
];

export const experience = [
  { title: "IT Intern", organization: "Smart Computer", period: "January 2023 – July 2023", type: "Internship", details: ["Computer assembly and troubleshooting", "Windows operating system and software installation", "Customer assistance and technical support"] },
  { title: "Student Organization — IT Division", organization: "Politeknik Negeri Pontianak", period: "2023 – 2024 [confirm]", type: "Organization", details: ["Technical support for campus activities", "Support for equipment and network needs"] },
  { title: "Vice Chair — Interest & Talent Division", organization: "IKMADIKSI", period: "Period to confirm", type: "Organization", details: ["Organizational coordination and activity support"] }
];

export const education = [
  { title: "Diploma III in Informatics Engineering", organization: "Politeknik Negeri Pontianak", period: "2024 – Present", details: "Current GPA: 3.84/4.00 (owner-provided; verify against latest academic record)." }
];

export const certificates = [
  { title: "Professional certificates and learning credentials", issuer: "LinkedIn profile", note: "Open the LinkedIn profile to review the credentials currently listed there.", href: profile.linkedin }
];