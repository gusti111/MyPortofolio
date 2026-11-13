import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness, Check, ChevronDown,
  Command, Copy, Download, FileText, Github, GraduationCap, Home, Languages, Mail,
  Menu, Moon, Search, Sun, X, Code2, MapPin, Linkedin, Sparkles, Filter, Layers3
} from "lucide-react";
import { certificates, education, experience, profile, projects, skillGroups, type Project } from "./data/portfolio";

type Lang = "id" | "en";
type Theme = "light" | "dark" | "system";

const copy = {
  id: {
    nav: ["Beranda", "Tentang", "Keahlian", "Proyek", "Pengalaman", "Pendidikan", "Sertifikasi", "Kontak"],
    eyebrow: "PORTOFOLIO PERSONAL",
    heroTitle: "Membangun solusi digital dengan pendekatan yang terstruktur.",
    heroText: "Saya Gusty Faqikh, mahasiswa Teknik Informatika yang berfokus pada pengembangan perangkat lunak dan pengalaman digital yang bermanfaat.",
    explore: "Jelajahi Proyek", resume: "Lihat CV", contact: "Hubungi Saya", selected: "PROYEK PILIHAN",
    selectedTitle: "Karya yang menunjukkan proses berpikir dan kemampuan teknis.",
    selectedText: "Pilihan proyek dari pengembangan aplikasi desktop, sistem web, hingga platform digital.",
    viewAll: "Lihat semua proyek", about: "TENTANG SAYA", aboutTitle: "Teknologi adalah ruang untuk belajar, menguji ide, dan menyelesaikan masalah.",
    aboutText: "Saya mempelajari pengembangan perangkat lunak melalui proyek akademik dan eksplorasi mandiri. Ketertarikan utama saya berada pada web development, software engineering, dan pembangunan aplikasi yang mudah digunakan.",
    skills: "KEAHLIAN", skillsTitle: "Teknologi yang saya gunakan dan pelajari.", experience: "PENGALAMAN",
    experienceTitle: "Perjalanan belajar dan kontribusi.", education: "PENDIDIKAN", certifications: "SERTIFIKASI",
    certificationText: "Lihat kredensial dan sertifikasi profesional melalui profil LinkedIn.",
    contactTitle: "Punya ide atau peluang kolaborasi?", contactText: "Terbuka untuk percakapan profesional, kesempatan internship, dan kolaborasi pengembangan produk.",
    sendEmail: "Kirim Email", location: "Pontianak, Kalimantan Barat", footer: "Dibuat dengan perhatian pada detail."
  },
  en: {
    nav: ["Home", "About", "Skills", "Projects", "Experience", "Education", "Certifications", "Contact"],
    eyebrow: "PERSONAL PORTFOLIO",
    heroTitle: "Building digital solutions with a structured approach.",
    heroText: "I'm Gusty Faqikh, an Informatics Engineering student focused on software development and useful digital experiences.",
    explore: "Explore Projects", resume: "View Resume", contact: "Get in Touch", selected: "SELECTED WORK",
    selectedTitle: "Projects that demonstrate problem-solving and technical practice.",
    selectedText: "Selected work across desktop applications, web systems, and digital platforms.",
    viewAll: "View all projects", about: "ABOUT ME", aboutTitle: "Technology is a space to learn, test ideas, and solve problems.",
    aboutText: "I learn software development through academic projects and independent exploration. My main interests include web development, software engineering, and building usable applications.",
    skills: "SKILLS", skillsTitle: "Technologies I use and continue to learn.", experience: "EXPERIENCE",
    experienceTitle: "A journey of learning and contribution.", education: "EDUCATION", certifications: "CERTIFICATIONS",
    certificationText: "Explore professional credentials and certificates through my LinkedIn profile.",
    contactTitle: "Have an idea or an opportunity to collaborate?", contactText: "Open to professional conversations, internship opportunities, and product development collaborations.",
    sendEmail: "Send Email", location: "Pontianak, West Kalimantan", footer: "Built with attention to detail."
  }
};

function usePortfolioPrefs() {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("gf-lang") as Lang) || "id");
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("gf-theme") as Theme) || "system");
  useEffect(() => { localStorage.setItem("gf-lang", lang); document.documentElement.lang = lang; }, [lang]);
  useEffect(() => {
    localStorage.setItem("gf-theme", theme);
    const dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [theme]);
  return { lang, setLang, theme, setTheme, t: copy[lang] };
}

function App() {
  const prefs = usePortfolioPrefs();
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "auto" }); }, [location.pathname]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setCommandOpen(v => !v); }
      if (e.key === "Escape") { setCommandOpen(false); setMenuOpen(false); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return <div className="app-shell">
    <Header {...prefs} menuOpen={menuOpen} setMenuOpen={setMenuOpen} setCommandOpen={setCommandOpen} />
    <main id="main-content">
      <Routes>
        <Route path="/" element={<HomePage {...prefs} />} />
        <Route path="/about" element={<AboutPage {...prefs} />} />
        <Route path="/skills" element={<SkillsPage {...prefs} />} />
        <Route path="/projects" element={<ProjectsPage {...prefs} />} />
        <Route path="/projects/:slug" element={<ProjectPage {...prefs} />} />
        <Route path="/experience" element={<ExperiencePage {...prefs} />} />
        <Route path="/education" element={<EducationPage {...prefs} />} />
        <Route path="/certifications" element={<CertificationsPage {...prefs} />} />
        <Route path="/resume" element={<ResumePage {...prefs} />} />
        <Route path="/contact" element={<ContactPage {...prefs} />} />
        <Route path="*" element={<NotFound {...prefs} />} />
      </Routes>
    </main>
    <Footer t={prefs.t} />
    {commandOpen && <CommandPalette close={() => setCommandOpen(false)} lang={prefs.lang} setTheme={prefs.setTheme} setLang={prefs.setLang} />}
  </div>;
}

function Header({ lang, setLang, theme, setTheme, t, menuOpen, setMenuOpen, setCommandOpen }: any) {
  const links = ["/", "/about", "/skills", "/projects", "/experience", "/education", "/certifications", "/contact"];
  return <header className="site-header">
    <div className="nav-wrap">
      <Link to="/" className="brand" aria-label="Gusty Faqikh home"><span className="brand-mark">GF</span><span className="brand-name">gusty<span>.</span></span></Link>
      <nav className={`desktop-nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
        {t.nav.map((label: string, i: number) => <NavLink key={links[i]} to={links[i]} end={i === 0} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>{label}</NavLink>)}
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" aria-label="Toggle theme" title={`Theme: ${theme}`} onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")}>{theme === "dark" ? <Moon size={17}/> : <Sun size={17}/>}</button>
        <button className="icon-btn lang-btn" aria-label="Switch language" onClick={() => setLang(lang === "id" ? "en" : "id")}><Languages size={17}/><span>{lang.toUpperCase()}</span></button>
        <button className="icon-btn command-trigger" aria-label="Open command menu" onClick={() => setCommandOpen(true)}><Command size={17}/></button>
        <Link to="/resume" className="button button-small nav-resume"><FileText size={15}/> CV <ArrowUpRight size={14}/></Link>
        <button className="icon-btn mobile-menu-btn" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>;
}

function SectionHeading({ eyebrow, title, text, action }: any) {
  return <div className="section-heading">
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
    {action}
  </div>;
}

function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  return <article className="project-card">
    <Link to={`/projects/${project.slug}`} className="project-image-link" aria-label={`View ${project.name} case study`}>
      <img src={project.cover} alt={`${project.name} project cover`} loading="lazy"/>
      <span className="image-arrow"><ArrowUpRight size={18}/></span>
    </Link>
    <div className="project-card-body">
      <div className="card-meta"><span>{project.category}</span><span className="dot-separator">•</span><span>{project.status}</span></div>
      <h3><Link to={`/projects/${project.slug}`}>{project.name}</Link></h3>
      <p>{project.summary}</p>
      <div className="tag-row">{project.stack.slice(0, 4).map(s => <span className="tag" key={s}>{s}</span>)}</div>
      <div className="card-bottom"><Link to={`/projects/${project.slug}`} className="text-link">{lang === "id" ? "Lihat studi kasus" : "View case study"} <ArrowRight size={15}/></Link>{project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="icon-btn subtle" aria-label={`${project.name} GitHub repository`}><Github size={17}/></a>}</div>
    </div>
  </article>;
}

function HomePage({ t, lang }: any) {
  const featured = projects.filter(p => p.featured);
  return <>
    <section className="hero container">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot"/> {lang === "id" ? "TERBUKA UNTUK PELUANG INTERNSHIP" : "OPEN TO INTERNSHIP OPPORTUNITIES"}</div>
        <span className="eyebrow">{t.eyebrow} <span className="eyebrow-line"/></span>
        <h1>{t.heroTitle}</h1>
        <p className="hero-description">{t.heroText}</p>
        <div className="hero-actions"><Link className="button button-primary" to="/projects">{t.explore}<ArrowUpRight size={17}/></Link><Link className="button button-secondary" to="/resume"><FileText size={16}/>{t.resume}</Link></div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub <ArrowUpRight size={13}/></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={13}/></a>
          <a href={`mailto:${profile.email}`}><Mail size={16}/> Email <ArrowUpRight size={13}/></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
        <div className="monogram-card"><span className="monogram-label">PERSONAL MARK / 01</span><div className="monogram">G<span>F</span></div><div className="monogram-caption"><span>GUSTY FAQIKH</span><span>SOFTWARE DEVELOPER</span></div></div>
        <div className="floating-chip chip-top"><Code2 size={15}/> Software Development</div>
        <div className="floating-chip chip-bottom"><MapPin size={14}/> Pontianak, Indonesia</div>
        <div className="hero-index">01 <span/> 04</div>
      </div>
      <a href="#selected-work" className="scroll-cue"><span>{lang === "id" ? "GULIR UNTUK MENJELAJAH" : "SCROLL TO EXPLORE"}</span><ArrowDown size={15}/></a>
    </section>
    <section id="selected-work" className="section container">
      <SectionHeading eyebrow={t.selected} title={t.selectedTitle} text={t.selectedText} action={<Link to="/projects" className="text-link desktop-only">{t.viewAll}<ArrowUpRight size={16}/></Link>}/>
      <div className="project-grid">{featured.map(p => <ProjectCard key={p.slug} project={p} lang={lang}/>)}</div>
      <Link to="/projects" className="button button-secondary mobile-only full-button">{t.viewAll}<ArrowRight size={16}/></Link>
    </section>
    <section className="section section-muted">
      <div className="container intro-grid">
        <div><span className="eyebrow">{t.about}</span><div className="intro-mark">GF<span>.</span></div></div>
        <div><h2>{t.aboutTitle}</h2><p className="large-copy">{t.aboutText}</p><Link to="/about" className="text-link">{lang === "id" ? "Kenali saya lebih jauh" : "More about me"}<ArrowRight size={16}/></Link></div>
      </div>
    </section>
    <section className="section container">
      <SectionHeading eyebrow={t.skills} title={t.skillsTitle}/>
      <div className="skill-preview-grid">{skillGroups.slice(0, 4).map(g => <div className="skill-preview" key={g.title}><span className="skill-icon"><Layers3 size={18}/></span><h3>{g.title}</h3><div className="tag-row">{g.items.slice(0, 5).map(s => <span className="tag" key={s}>{s}</span>)}</div></div>)}</div>
      <Link to="/skills" className="text-link">{lang === "id" ? "Lihat seluruh keahlian" : "Explore all skills"}<ArrowRight size={16}/></Link>
    </section>
    <section className="section section-muted">
      <div className="container split-section">
        <div><span className="eyebrow">{t.experience}</span><h2>{t.experienceTitle}</h2><Link to="/experience" className="text-link">{lang === "id" ? "Lihat perjalanan" : "View experience"}<ArrowRight size={16}/></Link></div>
        <div className="mini-timeline">{experience.slice(0, 2).map((e, i) => <div className="mini-timeline-item" key={e.title}><span className="timeline-marker">{i + 1}</span><div><span className="card-meta">{e.period}</span><h3>{e.title}</h3><p>{e.organization}</p></div></div>)}</div>
      </div>
    </section>
    <section className="section container credential-strip">
      <div><span className="eyebrow">{t.certifications}</span><h2>{lang === "id" ? "Kredensial dan pembelajaran profesional." : "Credentials and professional learning."}</h2><p>{t.certificationText}</p></div>
      <a href={profile.linkedin} target="_blank" rel="noreferrer" className="button button-secondary">LinkedIn <ArrowUpRight size={16}/></a>
    </section>
    <ContactCTA t={t} lang={lang}/>
  </>;
}

function PageIntro({ eyebrow, title, text }: any) {
  return <section className="page-intro container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{text && <p>{text}</p>}</section>;
}

function AboutPage({ t, lang }: any) {
  return <><PageIntro eyebrow={lang === "id" ? "TENTANG SAYA" : "ABOUT ME"} title={lang === "id" ? "Mengenal latar belakang dan arah profesional saya." : "Background, interests, and professional direction."} text={t.aboutText}/>
    <section className="section container content-narrow"><div className="prose-block"><h2>{lang === "id" ? "Profil singkat" : "Professional summary"}</h2><p>{lang === "id" ? "Saya merupakan mahasiswa D3 Teknik Informatika di Politeknik Negeri Pontianak. Saya mengembangkan kemampuan melalui proyek akademik, eksplorasi teknologi, dan praktik membangun aplikasi. Fokus yang sedang saya kembangkan adalah Front-End Development dan Software Development." : "I am a Diploma III Informatics Engineering student at Politeknik Negeri Pontianak. I develop my skills through academic projects, technology exploration, and hands-on application building. My current focus is Front-End Development and Software Development."}</p></div>
    <div className="facts-grid"><Fact label="Education" value="D3 Informatics Engineering"/><Fact label="Institution" value="Politeknik Negeri Pontianak"/><Fact label="Current GPA" value={profile.gpa}/><Fact label="Location" value={profile.location}/></div>
    <div className="prose-block"><h2>{lang === "id" ? "Minat pengembangan" : "Development interests"}</h2><div className="tag-row">{["Front-End Development","Web Development","Software Engineering","Desktop Applications","API Integration","Database Systems"].map(x=><span className="tag" key={x}>{x}</span>)}</div></div>
    <div className="prose-block"><h2>{lang === "id" ? "Prinsip kerja" : "Working principles"}</h2><ul className="check-list"><li><Check size={17}/>Build with clear requirements and maintainable structure.</li><li><Check size={17}/>Prioritize usability, accessibility, and performance.</li><li><Check size={17}/>Validate implementation instead of relying on assumptions.</li><li><Check size={17}/>Keep learning through practical projects and feedback.</li></ul></div></section></>;
}
function Fact({label,value}:any){return <div className="fact"><span>{label}</span><strong>{value}</strong></div>}

function SkillsPage({ lang }: any) {
  return <><PageIntro eyebrow={lang === "id" ? "KEAHLIAN" : "SKILLS"} title={lang === "id" ? "Kumpulan teknologi dan praktik pengembangan." : "Technologies and development practices."} text={lang === "id" ? "Daftar berikut menggambarkan teknologi yang pernah digunakan atau dipelajari. Tingkat penguasaan tidak dinyatakan dengan skor yang belum terukur." : "These are technologies used or studied. No unverified proficiency scores are displayed."}/>
    <section className="section container"><div className="skills-list">{skillGroups.map((g,i)=><article className="skill-group" key={g.title}><div className="skill-group-index">0{i+1}</div><div><h2>{g.title}</h2><p>{lang==="id"?"Teknologi dan area yang pernah digunakan atau dipelajari.":"Tools and areas previously used or studied."}</p><div className="tag-row">{g.items.map(s=><span className="tag tag-large" key={s}>{s}</span>)}</div></div></article>)}</div></section></>;
}

function ProjectsPage({ lang }: any) {
  const [query,setQuery]=useState(""); const [category,setCategory]=useState("All");
  const categories=["All",...Array.from(new Set(projects.map(p=>p.category)))];
  const filtered=useMemo(()=>projects.filter(p=>(category==="All"||p.category===category)&&`${p.name} ${p.summary} ${p.stack.join(" ")}`.toLowerCase().includes(query.toLowerCase())),[category,query]);
  return <><PageIntro eyebrow="PORTFOLIO / PROJECTS" title={lang==="id"?"Proyek dan eksplorasi pengembangan.":"Projects and development explorations."} text={lang==="id"?"Setiap proyek memiliki konteks, tujuan, dan tingkat kelengkapan yang berbeda. Detail yang belum terverifikasi ditandai secara terbuka.":"Projects vary in scope and completion. Details that still need verification are clearly identified."}/>
    <section className="section container"><div className="project-tools"><label className="search-field"><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder={lang==="id"?"Cari proyek atau teknologi...":"Search projects or technologies..."} aria-label="Search projects"/></label><div className="filter-row"><Filter size={16}/>{categories.map(c=><button key={c} className={`filter-chip ${category===c?"selected":""}`} onClick={()=>setCategory(c)}>{c==="All"?(lang==="id"?"Semua":"All"):c}</button>)}</div></div>
    <div className="project-grid">{filtered.map(p=><ProjectCard key={p.slug} project={p} lang={lang}/>)}</div>
    {filtered.length===0&&<div className="empty-state"><Search size={28}/><h3>{lang==="id"?"Tidak ada proyek ditemukan":"No projects found"}</h3><p>{lang==="id"?"Coba kata kunci atau kategori lain.":"Try another search term or category."}</p><button className="button button-secondary" onClick={()=>{setQuery("");setCategory("All")}}>{lang==="id"?"Reset filter":"Reset filters"}</button></div>}</section></>;
}

function ProjectPage({ lang }: any) {
  const {slug}=useParams(); const project=projects.find(p=>p.slug===slug);
  if(!project) return <NotFound lang={lang}/>;
  return <><section className="container project-detail-top"><Link to="/projects" className="back-link"><ArrowLeft size={16}/>{lang==="id"?"Kembali ke proyek":"Back to projects"}</Link><div className="detail-heading"><div><span className="eyebrow">{project.category} / CASE STUDY</span><h1>{project.name}</h1><p>{project.summary}</p></div><span className="status-pill">{project.status}</span></div><img className="detail-cover" src={project.cover} alt={`${project.name} project visual`}/></section>
    <section className="section container detail-layout"><div className="detail-main"><div className="prose-block"><h2>{lang==="id"?"Gambaran proyek":"Project overview"}</h2><p>{project.description}</p></div><div className="prose-block"><h2>{lang==="id"?"Ruang lingkup dan fitur":"Scope and highlights"}</h2><ul className="check-list">{project.highlights.map(x=><li key={x}><Check size={17}/>{x}</li>)}</ul></div><div className="prose-block"><h2>{lang==="id"?"Catatan transparansi":"Transparency note"}</h2><p>{lang==="id"?"Deskripsi ini disusun dari informasi proyek yang tersedia. Periksa repository untuk memastikan implementasi, kontribusi, dan status fitur sebelum menjadikannya klaim pada proses rekrutmen.":"This description reflects currently available project information. Review the repository to verify implementation, contribution, and feature status before using it as a recruitment claim."}</p></div></div>
    <aside className="detail-sidebar"><div className="detail-info"><span className="eyebrow">PROJECT INFO</span><div><span>Role</span><strong>{project.role}</strong></div><div><span>Status</span><strong>{project.status}</strong></div><div><span>Category</span><strong>{project.category}</strong></div><div><span>Technology</span><div className="tag-row">{project.stack.map(s=><span className="tag" key={s}>{s}</span>)}</div></div>{project.repo?<a href={project.repo} target="_blank" rel="noreferrer" className="button button-primary full-button"><Github size={16}/> View Repository <ArrowUpRight size={15}/></a>:<div className="notice">Repository URL has not been provided in the portfolio data.</div>}</div></aside></section></>;
}

function ExperiencePage({ lang }: any) {
  return <><PageIntro eyebrow={lang==="id"?"PENGALAMAN":"EXPERIENCE"} title={lang==="id"?"Pengalaman kerja, organisasi, dan kontribusi.":"Work, organization, and contribution."} text={lang==="id"?"Pengalaman formal dipisahkan dari kegiatan organisasi dan proyek akademik agar konteksnya tetap jelas.":"Employment is distinguished from organizational activities and academic projects."}/>
    <section className="section container content-narrow"><div className="timeline">{experience.map((e,i)=><article className="timeline-entry" key={e.title}><div className="timeline-side"><span className="timeline-marker">{String(i+1).padStart(2,"0")}</span><span className="timeline-line"/></div><div className="timeline-content"><div className="card-meta"><span>{e.type}</span><span>•</span><span>{e.period}</span></div><h2>{e.title}</h2><h3>{e.organization}</h3><ul>{e.details.map(d=><li key={d}>{d}</li>)}</ul>{e.period.includes("confirm")&&<p className="verification-note">Period requires owner confirmation before publication.</p>}</div></article>)}</div></section></>;
}

function EducationPage({ lang }: any) {
  return <><PageIntro eyebrow={lang==="id"?"PENDIDIKAN":"EDUCATION"} title={lang==="id"?"Fondasi akademik dan pembelajaran.":"Academic foundation and learning."}/>
    <section className="section container content-narrow">{education.map(e=><article className="education-card" key={e.title}><div className="education-icon"><GraduationCap size={25}/></div><div><span className="card-meta">{e.period}</span><h2>{e.title}</h2><h3>{e.organization}</h3><p>{e.details}</p></div><span className="gpa-mark">{profile.gpa}<small>GPA</small></span></article>)}<div className="notice"><strong>Verification:</strong> Confirm the latest GPA, study period, and academic status against the latest official academic record before public launch.</div></section></>;
}

function CertificationsPage({ lang }: any) {
  const [preview,setPreview]=useState(false);
  return <><PageIntro eyebrow={lang==="id"?"SERTIFIKASI":"CERTIFICATIONS"} title={lang==="id"?"Pembelajaran dan kredensial profesional.":"Professional learning and credentials."} text={lang==="id"?"Daftar sertifikasi lengkap dirujuk melalui profil LinkedIn agar tidak ada nama atau kredensial yang dikarang.":"The full credential list is referenced through LinkedIn to avoid inventing certificate titles or credentials."}/>
    <section className="section container"><div className="certificate-card"><div className="certificate-art"><div className="certificate-seal"><Award size={34}/></div><span>PROFESSIONAL LEARNING</span><strong>Credentials</strong><small>GUSTY FAQIKH</small></div><div className="certificate-content"><span className="eyebrow">CREDENTIAL SOURCE</span><h2>{certificates[0].title}</h2><p>{certificates[0].note}</p><a className="button button-primary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> {lang==="id"?"Lihat sertifikasi di LinkedIn":"View credentials on LinkedIn"}<ArrowUpRight size={16}/></a><button className="text-link certificate-help" onClick={()=>setPreview(v=>!v)}>{lang==="id"?"Informasi pengelolaan media":"Certificate media information"}<ChevronDown size={15}/></button>{preview&&<div className="notice">Individual certificate previews can be added to <code>public/certificates/</code> after the original certificate files and verified credential details are provided. This page currently links to the profile source and does not claim to host the certificate files.</div>}</div></div></section></>;
}

function ResumePage({ lang }: any) {
  return <><PageIntro eyebrow="RESUME / CV" title={lang==="id"?"Ringkasan profesional Gusty Faqikh.":"Gusty Faqikh — professional profile."} text={lang==="id"?"Halaman ini merupakan CV web yang dapat dicetak atau disimpan sebagai PDF melalui browser. Verifikasi detail sebelum digunakan untuk melamar.":"This is a print-ready web CV. Use your browser's print dialog to save it as a PDF. Verify details before applying."}/>
    <section className="section container resume-section"><div className="resume-actions no-print"><button className="button button-primary" onClick={()=>window.print()}><Download size={16}/>{lang==="id"?"Cetak / Simpan sebagai PDF":"Print / Save as PDF"}</button><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn <ArrowUpRight size={15}/></a></div>
    <article className="resume-paper"><div className="resume-header"><div><h1>{profile.name}</h1><p>{profile.title}</p></div><div className="resume-contact"><span>{profile.location}</span><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a></div></div>
    <div className="resume-block"><h2>{lang==="id"?"PROFIL":"PROFILE"}</h2><p>{lang==="id"?"Mahasiswa D3 Teknik Informatika yang mengembangkan kemampuan software development melalui proyek akademik dan eksplorasi mandiri. Memiliki minat pada web development, front-end engineering, dan pengembangan aplikasi.":"Diploma III Informatics Engineering student developing software skills through academic projects and independent exploration, with interests in web development, front-end engineering, and application development."}</p></div>
    <div className="resume-block"><h2>{lang==="id"?"PENDIDIKAN":"EDUCATION"}</h2><strong>{profile.education}</strong><p>2024 – Present · GPA {profile.gpa}</p></div>
    <div className="resume-block"><h2>{lang==="id"?"PENGALAMAN":"EXPERIENCE"}</h2>{experience.slice(0,1).map(e=><div className="resume-item" key={e.title}><strong>{e.title} — {e.organization}</strong><span>{e.period}</span><ul>{e.details.map(d=><li key={d}>{d}</li>)}</ul></div>)}</div>
    <div className="resume-block"><h2>{lang==="id"?"PROYEK TERPILIH":"SELECTED PROJECTS"}</h2>{projects.slice(0,4).map(p=><div className="resume-item" key={p.slug}><strong>{p.name}</strong><p>{p.summary}</p><span>{p.stack.join(" · ")}</span></div>)}</div>
    <div className="resume-block"><h2>{lang==="id"?"KETERAMPILAN TEKNIS":"TECHNICAL SKILLS"}</h2><p>{skillGroups.map(g=>`${g.title}: ${g.items.join(", ")}`).join(" | ")}</p></div>
    <p className="resume-footnote">Draft generated from owner-provided information. Verify dates, project contributions, skills, and current academic details before external use.</p></article></section></>;
}

function ContactPage({ lang }: any) {
  const [copied,setCopied]=useState(false);
  const copyEmail=async()=>{try{await navigator.clipboard.writeText(profile.email);setCopied(true);window.setTimeout(()=>setCopied(false),1800);}catch{window.location.href=`mailto:${profile.email}`;}};
  const socials=[{label:"GitHub",value:"github.com/gusti111",href:profile.github,icon:<Github/>},{label:"LinkedIn",value:"linkedin.com/in/gusty-faqikh",href:profile.linkedin,icon:<Linkedin/>},{label:"JobStreet",value:"Professional profile",href:profile.jobstreet,icon:<BriefcaseBusiness/>},{label:"Email",value:profile.email,href:`mailto:${profile.email}`,icon:<Mail/>}];
  return <><PageIntro eyebrow="CONTACT" title={lang === "id" ? "Mari terhubung." : "Let's connect."}
text={lang === "id"
  ? "Hubungi saya untuk peluang internship, diskusi proyek, atau kolaborasi."
  : "Contact me for internship opportunities, project discussions, or collaboration."}/><section className="section container contact-layout"><div className="contact-main"><span className="eyebrow">{lang==="id"?"SALURAN PROFESIONAL":"PROFESSIONAL CHANNELS"}</span><h2>{lang==="id"?"Mari mulai percakapan.":"Let's start a conversation."}</h2><p>{lang==="id"?"Untuk peluang internship, diskusi proyek, atau kolaborasi, silakan hubungi melalui kanal berikut.":"For internship opportunities, project discussions, or collaboration, reach out through these channels."}</p><button className="email-copy" onClick={copyEmail}><span><Mail size={18}/>{profile.email}</span>{copied?<Check size={17}/>:<Copy size={17}/>}</button><span className="copy-status" aria-live="polite">{copied?(lang==="id"?"Email berhasil disalin":"Email copied"):" "}</span></div><div className="social-list">{socials.map(s=><a href={s.href} key={s.label} target={s.label==="Email"?"_self":"_blank"} rel="noreferrer" className="social-card"><span className="social-icon">{s.icon}</span><span><strong>{s.label}</strong><small>{s.value}</small></span><ArrowUpRight size={18}/></a>)}</div></section></>;
}

function ContactCTA({t,lang}:any){return <section className="contact-cta"><div className="container cta-inner"><div><span className="eyebrow">{lang==="id"?"KONTAK":"GET IN TOUCH"}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><Link to="/contact" className="button button-light">{t.sendEmail}<ArrowUpRight size={16}/></Link></div></section>}
function Footer({t}:any){return <footer className="site-footer"><div className="container footer-inner"><Link to="/" className="brand"><span className="brand-mark">GF</span><span className="brand-name">gusty<span>.</span></span></Link><p>© {new Date().getFullYear()} Gusty Faqikh. {t.footer}</p><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div></div></footer>}
function NotFound({lang}:any){return <section className="not-found container"><span className="eyebrow">404 / NOT FOUND</span><h1>{lang==="id"?"Halaman tidak ditemukan.":"Page not found."}</h1><p>{lang==="id"?"Tautan yang kamu buka mungkin sudah berubah atau tidak tersedia.":"The page may have moved or is unavailable."}</p><Link className="button button-primary" to="/"><Home size={16}/>{lang==="id"?"Kembali ke beranda":"Back home"}</Link></section>}

function CommandPalette({close,lang,setTheme,setLang}:any){
  const [q,setQ]=useState(""); const navigate=useNavigate();
  const items=[{label:"Home",path:"/",icon:<Home/>},{label:"About",path:"/about",icon:<Sparkles/>},{label:"Skills",path:"/skills",icon:<Code2/>},{label:"Projects",path:"/projects",icon:<Layers3/>},{label:"Experience",path:"/experience",icon:<BriefcaseBusiness/>},{label:"Education",path:"/education",icon:<GraduationCap/>},{label:"Certifications",path:"/certifications",icon:<Award/>},{label:"Resume / CV",path:"/resume",icon:<FileText/>},{label:"Contact",path:"/contact",icon:<Mail/>}];
  const filtered=items.filter(i=>i.label.toLowerCase().includes(q.toLowerCase()));
  return <div className="command-overlay" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)close();}}><div className="command-modal" role="dialog" aria-modal="true" aria-label="Command menu"><div className="command-search"><Search size={19}/><input autoFocus value={q} onChange={e=>setQ(e.target.value)} placeholder={lang==="id"?"Cari halaman...":"Search pages..."}/><kbd>ESC</kbd></div><div className="command-results">{filtered.map(i=><button key={i.path} onClick={()=>{navigate(i.path);close();}}>{i.icon}<span>{i.label}</span><ArrowUpRight size={15}/></button>)}{filtered.length===0&&<p className="empty-command">No matching pages.</p>}</div><div className="command-footer"><button onClick={()=>setTheme((document.documentElement.dataset.theme==="dark")?"light":"dark")}><Sun size={15}/> Toggle theme</button><button onClick={()=>setLang(lang==="id"?"en":"id")}><Languages size={15}/> Switch language</button><span><kbd>Ctrl K</kbd> to open</span></div></div></div>;
}

export default App;