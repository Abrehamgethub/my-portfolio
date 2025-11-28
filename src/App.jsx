import { useState } from 'react'
import profileImg from './assets/profile.jpg'

function App() {
  const [activeCertCategory, setActiveCertCategory] = useState(null)

  const certifications = [
    {
      title: 'Develop GenAI Apps with Gemini and Streamlit Skill Badge',
      provider: 'Google',
      date: 'Nov 2025',
      tags: ['GenAI', 'Gemini', 'Streamlit'],
      category: 'ai_ml',
    },
    {
      title: 'Google Cloud Fundamentals: Core Infrastructure',
      provider: 'Google',
      date: 'Oct 2025',
      tags: ['Google Cloud', 'Infrastructure'],
      category: 'cloud',
    },
    {
      title: 'Implementing Cloud Load Balancing for Compute Engine',
      provider: 'Google',
      date: 'Oct 2025',
      tags: ['Google Cloud', 'Load Balancing'],
      category: 'cloud',
    },
    {
      title: 'Prompt Design in Vertex AI Skill Badge',
      provider: 'Google',
      date: 'Oct 2025',
      tags: ['Vertex AI', 'Prompt Design'],
      category: 'ai_ml',
    },
    {
      title: 'ALX AI Starter Kit',
      provider: 'ALX Africa',
      date: 'Apr 2025',
      tags: ['AI Fundamentals'],
      category: 'ai_ml',
    },
    {
      title: 'Adobe Premiere Pro CC – Essentials Training',
      provider: 'Bring Your Own Laptop',
      date: 'Apr 2025',
      tags: ['Premiere Pro', 'Video Editing', 'Animation'],
      category: 'creative',
    },
    {
      title: 'Adobe Premiere Pro – Advanced Training',
      provider: 'Bring Your Own Laptop',
      date: 'May 2025',
      tags: ['Premiere Pro', 'Storytelling', 'Color Grading'],
      category: 'creative',
    },
    {
      title: 'After Effects CC – Animated Infographic Training',
      provider: 'Bring Your Own Laptop',
      date: 'May 2025',
      tags: ['After Effects', 'Motion Graphics'],
      category: 'creative',
    },
    {
      title: 'Cryptocurrency Deep Dive',
      provider: 'Binance Academy',
      date: 'Mar 2024',
      tags: ['Cryptocurrency'],
      category: 'blockchain',
    },
    {
      title: 'Blockchain Deep Dive',
      provider: 'Binance Academy',
      date: 'Feb 2024',
      tags: ['Blockchain'],
      category: 'blockchain',
    },
    {
      title: 'Building Rapport with Customers',
      provider: 'LinkedIn',
      date: 'Oct 2023',
      tags: ['Customer Service'],
      category: 'business',
    },
    {
      title: 'Creating Positive Conversations with Challenging Customers',
      provider: 'LinkedIn',
      date: 'Oct 2023',
      tags: ['Customer Service'],
      category: 'business',
    },
    {
      title: 'Customer Service Foundations',
      provider: 'LinkedIn',
      date: 'Oct 2023',
      tags: ['Customer Service', 'Customer Support'],
      category: 'business',
    },
    {
      title: 'Customer Service: Handling Abusive Customers',
      provider: 'LinkedIn',
      date: 'Oct 2023',
      tags: ['Customer Service'],
      category: 'business',
    },
    {
      title: 'Job Search Strategies',
      provider: 'LinkedIn',
      date: 'Oct 2023',
      tags: ['Career Development'],
      category: 'business',
    },
    {
      title: 'Serving Customers Using Social Media',
      provider: 'LinkedIn',
      date: 'Oct 2023',
      tags: ['Customer Service', 'Social Media'],
      category: 'business',
    },
    {
      title: 'B2B Marketing Foundations',
      provider: 'LinkedIn',
      date: 'Aug 2023',
      tags: ['B2B Marketing'],
      category: 'business',
    },
    {
      title: 'Finding a Remote Job',
      provider: 'LinkedIn',
      date: 'Aug 2023',
      tags: ['Career Development'],
      category: 'business',
    },
    {
      title: 'Google IT Support Specialization',
      provider: 'Coursera',
      date: 'Jul 2023',
      tags: ['Customer Service', 'Network Administration', 'IT Operations'],
      category: 'it_security',
    },
    {
      title: 'IT Security: Defense Against the Digital Dark Arts',
      provider: 'Coursera',
      date: 'Jul 2023',
      tags: ['IT Security'],
      category: 'it_security',
    },
    {
      title: 'System Administration and IT Infrastructure Services',
      provider: 'Coursera',
      date: 'Jun 2023',
      tags: ['Systems Administration', 'Infrastructure'],
      category: 'it_security',
    },
    {
      title: 'Learning Docker Compose',
      provider: 'LinkedIn',
      date: 'Jun 2023',
      tags: ['Docker', 'Containers'],
      category: 'cloud',
    },
    {
      title: 'Azure Active Directory: Basics',
      provider: 'LinkedIn',
      date: 'May 2023',
      tags: ['Azure AD'],
      category: 'cloud',
    },
    {
      title: 'Hands-On Introduction: Python',
      provider: 'LinkedIn',
      date: 'May 2023',
      tags: ['Python'],
      category: 'programming',
    },
    {
      title: 'Introduction to Linux',
      provider: 'LinkedIn',
      date: 'May 2023',
      tags: ['Linux'],
      category: 'it_security',
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900) Cert Prep: 1 Cloud Concepts',
      provider: 'LinkedIn',
      date: 'May 2023',
      tags: ['Azure', 'Cloud Concepts'],
      category: 'cloud',
    },
    {
      title: 'Operating Systems and You: Becoming a Power User',
      provider: 'Coursera',
      date: 'May 2023',
      tags: ['Operating Systems'],
      category: 'it_security',
    },
    {
      title: 'Setting Up a Red Hat Enterprise Linux Server (2016)',
      provider: 'LinkedIn',
      date: 'May 2023',
      tags: ['Linux', 'Red Hat'],
      category: 'it_security',
    },
    {
      title: 'Using Docker and .NET Core',
      provider: 'LinkedIn',
      date: 'May 2023',
      tags: ['Docker', '.NET Core'],
      category: 'cloud',
    },
    {
      title: 'VMware vSphere 7 Professional: 09 Troubleshooting, Backup, and Recovery',
      provider: 'LinkedIn',
      date: 'May 2023',
      tags: ['VMware', 'Troubleshooting'],
      category: 'cloud',
    },
    {
      title: 'AWS Cloud Quest: Cloud Practitioner',
      provider: 'Amazon Web Services (AWS)',
      date: 'Apr 2023',
      tags: ['AWS', 'Cloud Practitioner'],
      category: 'cloud',
    },
    {
      title: 'CompTIA A+ (220-1001) Cert Prep 3: Core Hardware',
      provider: 'LinkedIn',
      date: 'Apr 2023',
      tags: ['CompTIA A+', 'Hardware'],
      category: 'it_security',
    },
    {
      title: 'Customer Service: Problem-Solving and Troubleshooting',
      provider: 'LinkedIn',
      date: 'Apr 2023',
      tags: ['Customer Service', 'Troubleshooting'],
      category: 'business',
    },
    {
      title: 'Influencer Interview: Oprah Winfrey',
      provider: 'LinkedIn',
      date: 'Apr 2023',
      tags: ['Leadership', 'Inspiration'],
      category: 'business',
    },
    {
      title: 'Network Design and Performance Evaluation with Simulations',
      provider: 'LinkedIn',
      date: 'Apr 2023',
      tags: ['Network Design'],
      category: 'networking',
    },
    {
      title: 'Remote Brainstorming',
      provider: 'LinkedIn',
      date: 'Apr 2023',
      tags: ['Collaboration'],
      category: 'business',
    },
    {
      title: 'CompTIA A+ (220-1001 and 220-1002) Cert Prep: The Basics',
      provider: 'LinkedIn',
      date: 'Jul 2022',
      tags: ['CompTIA A+', 'Hardware', 'Support'],
      category: 'it_security',
    },
    {
      title: 'CompTIA A+ (220-1001) Cert Prep 1: The Basics',
      provider: 'LinkedIn',
      date: 'Jul 2022',
      tags: ['CompTIA A+', 'Hardware'],
      category: 'it_security',
    },
    {
      title: 'Cybersecurity Essentials',
      provider: 'Cisco Networking Academy',
      date: 'Sep 2017',
      tags: ['Cybersecurity'],
      category: 'it_security',
    },
    {
      title: 'Introduction to IOT',
      provider: 'Cisco',
      date: 'Jul 2016',
      tags: ['IoT'],
      category: 'networking',
    },
    {
      title: 'Cisco CCNA – Switching & Routing',
      provider: 'Cisco',
      date: 'Feb 2016',
      tags: ['CCNA', 'Routing', 'Switching'],
      category: 'networking',
    },
    {
      title: 'Introduction to the Internet of Everything',
      provider: 'Cisco',
      date: 'Jan 2016',
      tags: ['IoE'],
      category: 'networking',
    },
    {
      title: 'Mobility Fundamentals Series',
      provider: 'Cisco',
      date: 'Jan 2016',
      tags: ['Mobility'],
      category: 'networking',
    },
    {
      title: 'Entrepreneurship',
      provider: 'Cisco',
      date: 'Apr 2015',
      tags: ['Entrepreneurship'],
      category: 'business',
    },
    {
      title: 'Introduction to Cybersecurity',
      provider: 'Cisco',
      date: 'Jun 2016',
      tags: ['Cybersecurity'],
      category: 'it_security',
    },
    {
      title: 'Get Connected',
      provider: 'Cisco',
      date: 'May 2016',
      tags: ['Networking Basics'],
      category: 'networking',
    },
    {
      title: 'Linux Essentials',
      provider: 'Cisco',
      date: 'May 2016',
      tags: ['Linux'],
      category: 'it_security',
    },
    {
      title: 'Packet Tracer 101',
      provider: 'Cisco',
      date: 'May 2016',
      tags: ['Packet Tracer', 'Networking'],
      category: 'networking',
    },
    {
      title: 'Cybersecurity Essentials & Fundamentals',
      provider: 'Cisco Networking Academy',
      date: '2017',
      tags: ['Cybersecurity', 'Fundamentals'],
      category: 'it_security',
    },
    {
      title: 'NDG Linux Unhatched and Essentials',
      provider: 'Cisco Networking Academy',
      date: '2016',
      tags: ['Linux', 'NDG'],
      category: 'it_security',
    },
    {
      title: 'AWS, Google & Azure Cloud Essential',
      provider: 'Multiple Providers',
      date: '2023',
      tags: ['AWS', 'Azure', 'Google Cloud'],
      category: 'cloud',
    },
    {
      title: 'Zendesk Customer Service Professional',
      provider: 'Zendesk',
      date: '2023',
      tags: ['Customer Service', 'Zendesk'],
      category: 'business',
    },
    {
      title: 'Computer Maintenance and Networking',
      provider: 'Cisco / Local Academy',
      date: '2015',
      tags: ['Hardware', 'Networking'],
      category: 'networking',
    },
    {
      title: 'Google Workspace Administrator (In Progress)',
      provider: 'Google',
      date: 'In Progress',
      tags: ['Google Workspace', 'Administration'],
      category: 'cloud',
    },
  ]

  const certCategories = [
    { id: 'all', label: 'All' },
    { id: 'cloud', label: 'Cloud Computing' },
    { id: 'ai_ml', label: 'AI & ML' },
    { id: 'creative', label: 'Creative & Video' },
    { id: 'networking', label: 'Networking' },
    { id: 'it_security', label: 'IT & Security' },
    { id: 'business', label: 'Business' },
    { id: 'programming', label: 'Programming' },
  ]

  const filteredCerts =
    activeCertCategory === null
      ? []
      : activeCertCategory === 'all'
          ? certifications
          : certifications.filter((c) => c.category === activeCertCategory)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-10 lg:py-14">
        {/* Sidebar */}
        <aside className="hidden w-60 flex-shrink-0 flex-col justify-start border-r border-slate-900 pr-6 lg:flex">
          <div className="space-y-6">
            <div className="space-y-1">
              <h1 className="text-2xl font-semibold leading-tight text-slate-50">
                Abreham
                <br />
                Kassahun
              </h1>
              <p className="text-sm font-medium text-slate-300">System Administrator</p>
              <p className="text-[11px] leading-relaxed text-slate-400">
                IT Support &amp; Network
                <br />
                Administrator
              </p>
            </div>

            <nav className="space-y-3 text-[11px] font-medium tracking-[0.18em] text-slate-400">
              <a href="#about" className="flex items-center gap-3 hover:text-emerald-400">
                <span className="h-px w-6 bg-slate-600" />
                ABOUT
              </a>
              <a href="#experience" className="flex items-center gap-3 hover:text-emerald-400">
                <span className="h-px w-6 bg-slate-600" />
                EXPERIENCE
              </a>
              <a href="#projects" className="flex items-center gap-3 hover:text-emerald-400">
                <span className="h-px w-6 bg-slate-600" />
                PROJECTS
              </a>
              <a href="#certifications" className="flex items-center gap-3 hover:text-emerald-400">
                <span className="h-px w-6 bg-slate-600" />
                CERTIFICATIONS
              </a>
              <a href="#contact" className="flex items-center gap-3 hover:text-emerald-400">
                <span className="h-px w-6 bg-slate-600" />
                CONTACT
              </a>
            </nav>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-slate-900/80">
            <img
              src={profileImg}
              alt="Abreham Kassahun"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 text-slate-400 text-xs">
            <a
              href="https://www.linkedin.com/in/abreham-techsupport/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-emerald-400 hover:text-emerald-300"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.48 1h.02C3.9 1 4.98 2.12 4.98 3.5zM.24 8.25h4.52V23H.24zM8.72 8.25h4.33v2.01h.06c.6-1.14 2.06-2.34 4.24-2.34 4.53 0 5.37 2.98 5.37 6.86V23h-4.52v-7.29c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V23H8.72z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@abrehamkassahun917"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-emerald-400 hover:text-emerald-300"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M23.5 6.2a2.86 2.86 0 0 0-2-2C19.6 4 12 4 12 4s-7.6 0-9.5.2a2.86 2.86 0 0 0-2 2A30.09 30.09 0 0 0 0 12a30.09 30.09 0 0 0 .5 5.8 2.86 2.86 0 0 0 2 2C4.4 20 12 20 12 20s7.6 0 9.5-.2a2.86 2.86 0 0 0 2-2A30.09 30.09 0 0 0 24 12a30.09 30.09 0 0 0-.5-5.8ZM9.75 15.5v-7L15.5 12Z" />
              </svg>
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61575864836085"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-emerald-400 hover:text-emerald-300"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M13.5 22v-8.25H16l.4-3H13.5V8.5c0-.87.29-1.5 1.8-1.5H16.5V4.3C16.16 4.26 15.15 4.17 14.02 4.17 11.76 4.17 10.25 5.46 10.25 8v2.75H8v3h2.25V22Z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@ethioglobalbrief?lang=en"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-emerald-400 hover:text-emerald-300"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M18.5 7.1a4.57 4.57 0 0 1-2.6-.86 4.9 4.9 0 0 1-1.6-2.2h-.02A4.6 4.6 0 0 1 13.9 2H10v13.1a1.76 1.76 0 0 1-3.5 0 1.74 1.74 0 0 1 2.4-1.6V10a4.76 4.76 0 0 0-1-.11 4.75 4.75 0 1 0 4.75 4.75V7.2a7.14 7.14 0 0 0 4.3 1.42Z" />
              </svg>
            </a>
          </div>

          <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-xs text-slate-200">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Services
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-50">
              IT, Cloud &amp; Creative Solutions
            </h3>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
              I help teams stay online, secure, and productive with end‑to‑end support from
              infrastructure to training and content.
            </p>
            <ul className="mt-2 space-y-1 text-[11px] text-slate-200">
              <li>• Remote &amp; on‑site IT support for SMEs and schools</li>
              <li>• Network design, Wi‑Fi &amp; security hardening</li>
              <li>• Google Workspace / Microsoft 365 setup &amp; admin</li>
              <li>• Ticketing, documentation &amp; workflow automation</li>
              <li>• Training, Python/tech instruction &amp; video content</li>
            </ul>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-3 py-1.5 text-[11px] font-medium text-slate-950 shadow-sm shadow-emerald-500/40 transition hover:bg-emerald-400"
            >
              Request a consultation
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 space-y-24">
          {/* Hero */}
          <section id="hero" className="pt-4 space-y-6">
            <div className="space-y-2">
              <p className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                Ready to level up your infrastructure and support operations
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                Abreham Kassahun
              </h2>
              <p className="text-base font-semibold text-emerald-300 sm:text-lg">
                System Administrator &amp; IT Support Leader · Network, Cloud &amp; AI‑assisted Operations
              </p>
            </div>

            <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I help organizations keep their systems reliable, secure, and user‑friendly. From
              enterprise networks and field support to AI‑assisted automation, I design and operate
              infrastructure that reduces downtime, simplifies workflows, and supports business
              growth.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 font-medium text-slate-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Let&apos;s work together
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-5 py-2 font-medium text-slate-100 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                View featured projects
              </a>
              <a
                href="https://www.linkedin.com/in/abreham-techsupport/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-[11px] font-medium text-slate-300 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                View LinkedIn profile
              </a>
            </div>
          </section>

          {/* About + Technical Skills */}
          <section id="about" className="space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold text-slate-50">About</h2>
              <p className="text-sm text-slate-300">
                ICT infrastructure engineer and technical consultant with 9+ years of experience
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] items-start">
              {/* Profile + summary */}
              <div className="space-y-6">
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  I am an ICT Infrastructure Engineer and Technical Consultant with over nine years
                  of experience delivering enterprise-grade systems, leading technical teams, and
                  implementing secure digital platforms across banking, education, and healthcare
                  sectors. I have a proven track record in systems architecture, network security,
                  IT service management, and cross-functional project leadership.
                </p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  My work includes deploying and maintaining digital health systems at Kino
                  Physiotherapy Center, optimizing ERP and network environments for growing
                  enterprises, and supporting SMEs with modern workflows and documentation
                  practices. I am passionate about building scalable, reliable, and user-centered
                  technical solutions that create measurable business impact.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["Network Infrastructure", "System Integration", "AI Automation", "Cloud Solutions", "Security Management", "Workflow Optimization", "Digital Transformation", "Technical Leadership"].map(
                    (label) => (
                      <span
                        key={label}
                        className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-100"
                      >
                        {label}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Technical skills card */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50">Technical Skills</h3>
                      <p className="text-xs text-slate-400">Core competencies</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs text-slate-200">
                    <div>
                      <h4 className="font-semibold text-emerald-300">IT Support &amp; Troubleshooting</h4>
                      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-300">
                        <li>Windows, macOS, Linux user support</li>
                        <li>Hardware diagnostics</li>
                        <li>System performance optimization</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-emerald-300">Networking</h4>
                      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-300">
                        <li>TCP/IP, DNS, DHCP</li>
                        <li>LAN/WAN setup, Wi‑Fi configuration</li>
                        <li>Router &amp; switch configuration</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-emerald-300">Systems &amp; Tools</h4>
                      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-300">
                        <li>Active Directory, Microsoft 365</li>
                        <li>ServiceNow / Jira ticketing systems</li>
                        <li>Remote support tools (TeamViewer, AnyDesk)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-emerald-300">Field Service Operations</h4>
                      <ul className="mt-1 list-disc space-y-0.5 pl-4 text-slate-300">
                        <li>On‑site hardware replacement</li>
                        <li>End‑user training &amp; documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft skills and tools row spanning full width */}
            <div className="grid gap-4 md:grid-cols-2 text-xs text-slate-200">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="text-sm font-semibold text-slate-50">Soft Skills</h3>
                <ul className="mt-2 grid gap-x-4 gap-y-1 pl-4 text-slate-300 md:grid-cols-2 md:list-none md:pl-0">
                  <li className="relative md:pl-4 md:before:absolute md:before:left-0 md:before:top-1.5 md:before:h-1 md:before:w-1 md:before:rounded-full md:before:bg-slate-500">
                    Clear and empathetic communication with non‑technical stakeholders
                  </li>
                  <li className="relative md:pl-4 md:before:absolute md:before:left-0 md:before:top-1.5 md:before:h-1 md:before:w-1 md:before:rounded-full md:before:bg-slate-500">
                    Cross‑functional collaboration across IT, operations, and leadership
                  </li>
                  <li className="relative md:pl-4 md:before:absolute md:before:left-0 md:before:top-1.5 md:before:h-1 md:before:w-1 md:before:rounded-full md:before:bg-slate-500">
                    Technical mentoring, training, and classroom instruction
                  </li>
                  <li className="relative md:pl-4 md:before:absolute md:before:left-0 md:before:top-1.5 md:before:h-1 md:before:w-1 md:before:rounded-full md:before:bg-slate-500">
                    Customer service mindset with high first‑contact resolution
                  </li>
                  <li className="relative md:pl-4 md:before:absolute md:before:left-0 md:before:top-1.5 md:before:h-1 md:before:w-1 md:before:rounded-full md:before:bg-slate-500">
                    Process documentation and knowledge management
                  </li>
                  <li className="relative md:pl-4 md:before:absolute md:before:left-0 md:before:top-1.5 md:before:h-1 md:before:w-1 md:before:rounded-full md:before:bg-slate-500">
                    Project ownership and incident escalation management
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <h3 className="text-sm font-semibold text-slate-50">Tools &amp; Platforms</h3>
                <dl className="mt-2 space-y-1.5 text-slate-300">
                  <div className="flex gap-2">
                    <dt className="w-32 text-slate-400">Cloud &amp; SaaS</dt>
                    <dd className="flex-1">Google Workspace, Microsoft 365, Azure, AWS</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-32 text-slate-400">Remote Support</dt>
                    <dd className="flex-1">TeamViewer, AnyDesk, RDP</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-32 text-slate-400">Ticketing &amp; ITSM</dt>
                    <dd className="flex-1">ServiceNow, Jira, Freshservice, Zendesk</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-32 text-slate-400">MDM &amp; Devices</dt>
                    <dd className="flex-1">MDM for iPad/macOS fleets, endpoint management</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-32 text-slate-400">Systems</dt>
                    <dd className="flex-1">Windows 10/11, macOS, Linux (Ubuntu)</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-32 text-slate-400">Networking</dt>
                    <dd className="flex-1">Cisco routing/switching, MikroTik, Ubiquiti</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="w-32 text-slate-400">Scripting &amp; Docs</dt>
                    <dd className="flex-1">Python, Bash, Notion, Odoo, Confluence‑style docs</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* Professional Experience heading + first role */}
          <section id="experience" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold text-slate-50">Professional Experience</h2>
              <p className="text-sm text-slate-300">
                Over 9 years of experience in IT support, team leadership, and customer service
              </p>
            </div>

            <div className="mt-6 space-y-8">
              {/* Freelance IT Support Field Engineer */}
              <article className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="border-l-2 border-emerald-400 pl-4">
                  <h3 className="text-lg font-semibold text-slate-50">
                    Freelance IT Support Field Engineer (Contract)
                  </h3>
                  <p className="text-sm text-emerald-300">AVASO Technology Solutions</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-300">
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Addis Ababa, Ethiopia
                    </span>
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      November 2025 – Present
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <h4 className="font-semibold text-emerald-300">Key Achievements &amp; Impact</h4>
                  <ul className="list-disc space-y-1 pl-5 text-slate-300">
                    <li>Providing on‑site and remote IT support services for AVASO clients.</li>
                    <li>
                      Troubleshooting hardware and software issues in enterprise environments.
                    </li>
                    <li>
                      Supporting network device configurations, workstation setups, and field
                      replacements.
                    </li>
                    <li>
                      Coordinating with the Global Field Service (GFS) team for ticket assignments
                      and reporting.
                    </li>
                    <li>
                      Maintaining strong communication and customer service during client
                      engagements.
                    </li>
                    <li>
                      Completing activity documentation and ensuring customer sign‑off after each
                      job.
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-100">
                  {['Field Support', 'Hardware Troubleshooting', 'Network Configuration', 'Client Relations', 'Documentation', 'Remote Support'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900 border border-slate-700 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </article>

              {/* IT Officer & Programming Instructor */}
              <article className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="border-l-2 border-emerald-400 pl-4">
                  <h3 className="text-lg font-semibold text-slate-50">
                    IT Officer &amp; Programming Instructor
                  </h3>
                  <p className="text-sm text-emerald-300">
                    Ethiopian Education Initiatives (HaileManas Academy)
                  </p>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-300">
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Debrebirhan, Ethiopia
                    </span>
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      02/2024 – 07/2024
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <h4 className="font-semibold text-emerald-300">Key Achievements &amp; Impact</h4>
                  <ul className="list-disc space-y-1 pl-5 text-slate-300">
                    <li>
                      Managed 350+ iPads and Mac devices through MDM with 99% uptime and secure Google
                      Workspace integration.
                    </li>
                    <li>
                      Taught Python programming to over 350 students, emphasizing problem solving and
                      computational thinking.
                    </li>
                    <li>
                      Introduced automated IT ticketing and documentation systems, reducing resolution
                      time by 30% and achieving 95% first‑contact resolution.
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-100">
                  {['MDM', 'Python Programming', 'Google Workspace', 'IT Support', 'Documentation'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900 border border-slate-700 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </article>

              {/* Creative Technologist & IT Consultant */}
              <article className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="border-l-2 border-emerald-400 pl-4">
                  <h3 className="text-lg font-semibold text-slate-50">
                    Creative Technologist &amp; IT Consultant
                  </h3>
                  <p className="text-sm text-emerald-300">Freelance (Remote / Local SMEs)</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-300">
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Addis Ababa, Ethiopia
                    </span>
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      July 2024 – Present
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <h4 className="font-semibold text-emerald-300">Key Achievements &amp; Impact</h4>
                  <ul className="list-disc space-y-1 pl-5 text-slate-300">
                    <li>
                      Designed and optimized digital communication platforms for small businesses
                      and institutions.
                    </li>
                    <li>
                      Delivered visual storytelling and multimedia content for campaigns, targeting
                      high client satisfaction.
                    </li>
                    <li>
                      Provided ICT consulting for local entrepreneurs, digitizing workflows and
                      improving online presence.
                    </li>
                    <li>
                      Supported knowledge management and documentation using modern productivity
                      tools.
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-100">
                  {['Digital Strategy', 'Multimedia Content', 'IT Consulting', 'Workflow Optimization', 'Knowledge Management'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900 border border-slate-700 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </article>

              {/* ICT Infrastructure & VAS Integration Engineer */}
              <article className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="border-l-2 border-emerald-400 pl-4">
                  <h3 className="text-lg font-semibold text-slate-50">
                    ICT Infrastructure &amp; VAS Integration Engineer
                  </h3>
                  <p className="text-sm text-emerald-300">Hikma Electronics plc</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-300">
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Addis Ababa, Ethiopia
                    </span>
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      2018 – February 2024
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <h4 className="font-semibold text-emerald-300">Key Achievements &amp; Impact</h4>
                  <ul className="list-disc space-y-1 pl-5 text-slate-300">
                    <li>
                      Designed and maintained enterprise LAN/WAN systems for business clients with
                      high uptime.
                    </li>
                    <li>
                      Configured Windows-based servers, DHCP, DNS, and shared resource permissions
                      across departments.
                    </li>
                    <li>
                      Coordinated on hardware and network upgrades while ensuring SLA compliance.
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-100">
                  {['LAN/WAN Design', 'Windows Server', 'DHCP/DNS', 'Network Monitoring', 'Vendor Management', 'Documentation'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900 border border-slate-700 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </article>

              {/* IT Supervisor */}
              <article className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="border-l-2 border-emerald-400 pl-4">
                  <h3 className="text-lg font-semibold text-slate-50">IT Supervisor</h3>
                  <p className="text-sm text-emerald-300">Shemu Group</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-300">
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Addis Ababa, Ethiopia / Online
                    </span>
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      11/2022 – 07/2023 (Online) | 02/2018 – 07/2018 (Onsite)
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <h4 className="font-semibold text-emerald-300">Key Achievements &amp; Impact</h4>
                  <ul className="list-disc space-y-1 pl-5 text-slate-300">
                    <li>Managed ERP and office network systems ensuring high operational uptime.</li>
                    <li>
                      Diagnosed Windows OS and application issues, conducted system updates, and
                      managed drivers.
                    </li>
                    <li>
                      Provided user training and first‑line support to employees across multiple
                      departments.
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-100">
                  {['ERP Systems', 'Windows OS', 'Network Management', 'User Training', 'Technical Support'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900 border border-slate-700 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </article>

              {/* IT Support Technician */}
              <article className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="border-l-2 border-emerald-400 pl-4">
                  <h3 className="text-lg font-semibold text-slate-50">IT Support Technician</h3>
                  <p className="text-sm text-emerald-300">Net &amp; Com plc</p>
                  <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-300">
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      Addis Ababa, Ethiopia
                    </span>
                    <span className="rounded-full border border-slate-700 px-3 py-1">
                      06/2015 – 02/2018
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-200">
                  <h4 className="font-semibold text-emerald-300">Key Achievements &amp; Impact</h4>
                  <ul className="list-disc space-y-1 pl-5 text-slate-300">
                    <li>
                      Installed and configured routers, switches, and wireless access points for
                      enterprise clients.
                    </li>
                    <li>
                      Deployed large‑scale network infrastructure across workstations, printers,
                      and communication rooms.
                    </li>
                    <li>
                      Provided technical support for Windows server environments and network
                      systems.
                    </li>
                    <li>
                      Maintained and troubleshot network connectivity issues ensuring system
                      availability.
                    </li>
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-100">
                  {['Network Installation', 'Routers & Switches', 'Windows Server', 'Technical Support', 'Wireless Networks'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-900 border border-slate-700 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </article>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="space-y-10">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold text-slate-50">Featured Projects</h2>
              <p className="text-sm text-slate-300">
                A selection of creative and technical projects showcasing diverse skills
              </p>
            </div>

            {/* Featured row */}
            <div className="grid gap-6 md:grid-cols-3">
              <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
                <div className="space-y-3">
                  <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
                    <span className="text-lg">🎬</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-50">
                    Digital Campaign Video Content
                  </h3>
                  <p className="text-xs text-slate-300">
                    Professional video editing and motion graphics projects for 15+ digital
                    campaigns across agencies and local brands, focused on clear storytelling and
                    measurable engagement.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full bg-slate-800 px-3 py-1">Video Editing</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Motion Graphics</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Adobe Premiere Pro</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">+ After Effects</span>
                </div>
              </article>

              <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
                <div className="space-y-3">
                  <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
                    <span className="text-lg">💼</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-50">
                    Enterprise IT Consulting Services
                  </h3>
                  <p className="text-xs text-slate-300">
                    Strategic IT consulting for SMEs, including network administration, security
                    assessments, cloud enablement, and workflow optimization to align technology
                    with business goals.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full bg-slate-800 px-3 py-1">IT Consulting</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Network Administration</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Cybersecurity</span>
                </div>
              </article>

              <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
                <div className="space-y-3">
                  <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
                    <span className="text-lg">🏢</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-50">
                    Data Center Design &amp; Implementation
                  </h3>
                  <p className="text-xs text-slate-300">
                    Enterprise-grade data center design and rollout for major Ethiopian banks,
                    including network, power, and cooling optimization to support 24/7 operations.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full bg-slate-800 px-3 py-1">Infrastructure</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Network Security</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Energy Optimization</span>
                </div>
              </article>
            </div>

            {/* Additional featured technical projects */}
            <div className="grid gap-6 md:grid-cols-3">
              <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
                <div className="space-y-3">
                  <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
                    <span className="text-lg">🌐</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-50">
                    Network Infrastructure for International Organizations
                  </h3>
                  <p className="text-xs text-slate-300">
                    Large-scale enterprise network deployment for international organizations,
                    including secure VPN access and redundant edge connectivity.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full bg-slate-800 px-3 py-1">Network Design</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">VPN Implementation</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Large Scale Deployment</span>
                </div>
              </article>

              <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
                <div className="space-y-3">
                  <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
                    <span className="text-lg">📱</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-50">
                    Mobile Device Management System
                  </h3>
                  <p className="text-xs text-slate-300">
                    Implemented and managed MDM for 350+ iPads and Macs, centralizing policies,
                    security, and application delivery through Google Workspace.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full bg-slate-800 px-3 py-1">MDM</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Google Workspace</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">iOS Management</span>
                </div>
              </article>

              <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-sm text-slate-200">
                <div className="space-y-3">
                  <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-200">
                    <span className="text-lg">🐍</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-50">
                    Python Programming Education Platform
                  </h3>
                  <p className="text-xs text-slate-300">
                    Designed and delivered Python programming curriculum for high school and
                    college-level learners, focusing on problem solving and computational thinking.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                  <span className="rounded-full bg-slate-800 px-3 py-1">Python</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Education</span>
                  <span className="rounded-full bg-slate-800 px-3 py-1">Curriculum Development</span>
                </div>
              </article>
            </div>

            {/* Signature impact projects */}
            <div className="space-y-6 pt-8">
              <div className="text-center space-y-1">
                <h3 className="text-2xl font-semibold text-slate-50">Signature Projects</h3>
                <p className="text-sm text-slate-300">
                  Delivering measurable impact through enterprise IT infrastructure and automation
                  solutions
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Data Center Modernization */}
                <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-200">
                  <header className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1">
                        2019–2023
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">Data Center Modernization</h3>
                    <p className="text-[11px] text-slate-300">Hikma Electronics</p>
                  </header>

                  <div className="mt-3 space-y-2">
                    <p>
                      <span className="font-semibold text-slate-100">Problem:</span> Major banks
                      needed optimized data center infrastructure to improve efficiency and reduce
                      energy costs.
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Solution:</span> Designed and
                      implemented a modernized data center architecture, including cabling,
                      virtualization, and cooling redesign.
                    </p>
                  </div>

                  <div className="mt-3 rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-300">
                    40% improvement in uptime and 15% reduction in energy consumption.
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-slate-800 px-3 py-1">Infrastructure</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">Virtualization</span>
                  </div>
                </article>

                {/* Banking Network Rollout */}
                <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-200">
                  <header className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1">
                        2016–2018
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">Banking Network Rollout</h3>
                    <p className="text-[11px] text-slate-300">Net &amp; Com plc</p>
                  </header>

                  <div className="mt-3 space-y-2">
                    <p>
                      <span className="font-semibold text-slate-100">Problem:</span> Financial
                      institutions required secure WAN connectivity with near-zero downtime.
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Solution:</span> Architected and
                      deployed enterprise-grade network infrastructure using VPNs, Windows Server,
                      and Cisco firewalls.
                    </p>
                  </div>

                  <div className="mt-3 rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-300">
                    Secured networks for 5+ major banks with 97% uptime maintained during rollout.
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-slate-800 px-3 py-1">Network Security</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">VPN</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">Cisco Firewalls</span>
                  </div>
                </article>

                {/* ERP Support & Optimization */}
                <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-200">
                  <header className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1">
                        2018
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">ERP Support &amp; Optimization</h3>
                    <p className="text-[11px] text-slate-300">Shemu Group</p>
                  </header>

                  <div className="mt-3 space-y-2">
                    <p>
                      <span className="font-semibold text-slate-100">Problem:</span> ERP users
                      experienced operational errors and slow processes affecting business
                      performance.
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Solution:</span> Optimized
                      workflows, roles, and data validation rules within the ERP system to reduce
                      friction and errors.
                    </p>
                  </div>

                  <div className="mt-3 rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-300">
                    25% reduction in operational errors and 20% efficiency gain across key teams.
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-slate-800 px-3 py-1">ERP Administration</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">Process Optimization</span>
                  </div>
                </article>
              </div>

              {/* Additional key projects row */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* ICT Automation & Service Optimization */}
                <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-200">
                  <header className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1">
                        2024
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      ICT Automation &amp; Service Optimization
                    </h3>
                    <p className="text-[11px] text-slate-300">Ethiopian Education Initiatives</p>
                  </header>

                  <div className="mt-3 space-y-2">
                    <p>
                      <span className="font-semibold text-slate-100">Problem:</span> IT service
                      delivery for 350+ users lacked efficient ticketing and knowledge management.
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Solution:</span> Implemented an
                      automated ticketing system and documentation library, streamlining workflows
                      and first-contact resolution.
                    </p>
                  </div>

                  <div className="mt-3 rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-300">
                    30% improvement in IT response time and 95% first-contact resolution.
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-slate-800 px-3 py-1">IT Automation</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">Ticketing Systems</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">Documentation</span>
                  </div>
                </article>

                {/* Multi-AI Orchestration & Hackathon */}
                <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-200">
                  <header className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1">
                        September 2025
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      Multi-AI Orchestration &amp; Hackathon
                    </h3>
                    <p className="text-[11px] text-slate-300">ALX Capstone Hub</p>
                  </header>

                  <div className="mt-3 space-y-2">
                    <p>
                      <span className="font-semibold text-slate-100">Problem:</span> Build a
                      drone-assisted delivery solution within a hackathon timeframe.
                    </p>
                    <p>
                      <span className="font-semibold text-slate-100">Solution:</span> Orchestrated
                      collaboration between multiple AI models (research, design, validation,
                      development) to deliver an end-to-end MVP.
                    </p>
                  </div>

                  <div className="mt-3 rounded-xl bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-300">
                    Award-winning solution with 3-minute CEO pitch and full MVP delivered.
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-slate-800 px-3 py-1">AI Orchestration</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">System Design</span>
                    <span className="rounded-full bg-slate-800 px-3 py-1">Hackathon</span>
                  </div>
                </article>
              </div>

              {/* AI-Native Development & Local Impact overview */}
              <article className="mt-6 space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-200">
                <header className="space-y-1 text-center sm:text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    AI-Native Development &amp; Local Impact
                  </p>
                  <h3 className="text-sm font-semibold text-slate-50">
                    Windsurf Open Build – Addis Ababa
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    In November 2024, I joined the global Windsurf Open Build with The AI Collective
                    Addis Ababa, rapidly prototyping AI-native applications from concept to
                    deployment on the Windsurf platform.
                  </p>
                </header>

                <div className="space-y-3">
                  <p>
                    This initiative demonstrated my ability to combine <span className="font-semibold text-slate-100">rapid
                    prototyping</span>, <span className="font-semibold text-slate-100">cloud-native deployment</span>, and
                    <span className="font-semibold text-slate-100"> advanced LLM workflows</span> to solve high-value, local
                    problems in the Ethiopian context.
                  </p>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
                      <h4 className="text-[11px] font-semibold text-slate-50">
                        Ethio-Lang Translator &amp; Contextualizer
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-300">
                        Tackles the limitations of literal machine translation for Amharic by using
                        tuned LLM prompts to account for tone, formality, and cultural nuance,
                        producing socially appropriate translations.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2 text-[10px]">
                        <span className="rounded-full bg-slate-800 px-3 py-1">NLP / LLM Tuning</span>
                        <span className="rounded-full bg-slate-800 px-3 py-1">Contextual Analysis</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
                      <h4 className="text-[11px] font-semibold text-slate-50">
                        Addis Ababa Roommate Finder
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-300">
                        A web platform that scores roommate compatibility using weighted lifestyle
                        factors (cleanliness, schedules, cooking habits) and integrates trust-first
                        features like profile verification and secure messaging.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2 text-[10px]">
                        <span className="rounded-full bg-slate-800 px-3 py-1">Full-Stack Prototyping</span>
                        <span className="rounded-full bg-slate-800 px-3 py-1">Compatibility Scoring</span>
                        <span className="rounded-full bg-slate-800 px-3 py-1">Constraint Optimization</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300">
                    Together, these projects show how I translate global AI capabilities into
                    tangible, localized solutions that create real social and economic value in Addis
                    Ababa.
                  </p>
                </div>
              </article>
            </div>
          </section>

          {/* Education & Certifications */}
          <section id="certifications" className="space-y-10 pb-20">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold text-slate-50">Education &amp; Certifications</h2>
              <p className="text-sm text-slate-300">
                Committed to continuous learning with 35+ certifications spanning cloud computing,
                AI/ML, cybersecurity, creative production, and emerging technologies
              </p>
            </div>

            {/* Certifications summary stats */}
            <div className="grid gap-4 md:grid-cols-4 text-xs">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  Total Certifications
                </p>
                <p className="mt-3 text-2xl font-semibold text-emerald-300">35+ </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  Cloud &amp; DevOps
                </p>
                <p className="mt-3 text-xs text-slate-300">Azure, Microsoft 365, related certs</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  AI &amp; Emerging Tech
                </p>
                <p className="mt-3 text-xs text-slate-300">AI, automation, data tools</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-center">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  Creative Suite
                </p>
                <p className="mt-3 text-xs text-slate-300">Video, design, and content tools</p>
              </div>
            </div>

            {/* Education cards */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-200">Education</h3>
              <div className="grid gap-4 md:grid-cols-2 text-xs">
                <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h4 className="text-sm font-semibold text-slate-50">
                    B.Sc. in Information Technologies
                  </h4>
                  <p className="mt-1 inline-flex rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                    Software Engineering
                  </p>
                  <p className="mt-2 text-slate-300">
                    Adama Science and Technology University
                  </p>
                  <p className="mt-2 text-[11px] text-slate-400">Sep 2009 – Oct 2014</p>
                </article>

                <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                  <h4 className="text-sm font-semibold text-slate-50">
                    Cisco Certified Network Associate (CCNA)
                  </h4>
                  <p className="mt-2 text-slate-300">
                    Addis Ababa University, School of Commerce Cisco Local Academy
                  </p>
                  <p className="mt-2 text-[11px] text-slate-400">Feb 2016 – Jan 2017</p>
                </article>
              </div>
            </div>

            {/* Certifications grid with category filter */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-slate-200">Professional Certifications</h3>
                <span className="rounded-full border border-slate-700 px-4 py-1 text-[11px] text-slate-300">
                  {certifications.length} certifications
                </span>
              </div>

              <div className="relative -mx-1 overflow-x-auto pb-1">
                <div className="flex items-center gap-2 px-1 text-[11px]">
                  {certCategories.map((cat) => {
                    const count =
                      cat.id === 'all'
                        ? certifications.length
                        : certifications.filter((c) => c.category === cat.id).length

                    const isActive = activeCertCategory === cat.id

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCertCategory(cat.id)}
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 transition ${
                          isActive
                            ? 'border-emerald-400 bg-emerald-500/20 text-emerald-200'
                            : 'border-slate-700 bg-slate-900 text-slate-300 hover:border-emerald-500/60 hover:text-emerald-300'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span className="rounded-full bg-slate-900/60 px-2 py-0.5 text-[10px]">
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {activeCertCategory && (
                <div className="grid gap-4 md:grid-cols-3 text-xs">
                  {filteredCerts.map((cert) => (
                    <article
                      key={`${cert.title}-${cert.provider}`}
                      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                    >
                      <header className="space-y-1">
                        <h4 className="text-xs font-semibold text-slate-50">{cert.title}</h4>
                        <p className="text-[11px] text-slate-300">{cert.provider}</p>
                        <p className="text-[10px] text-slate-400">{cert.date}</p>
                      </header>

                      {cert.tags && cert.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-200">
                          {cert.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="space-y-10 pb-24">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-semibold text-slate-50">Get In</h2>
              <p className="text-sm text-slate-300">
                Ready to bring your ideas to life? Let&apos;s work together.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
              {/* Left: intro + contact info */}
              <div className="space-y-6 text-sm text-slate-300">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-50">Let&apos;s Connect</h3>
                  <p className="max-w-xl text-sm leading-relaxed">
                    I&apos;m always excited to collaborate on transformative IT projects and creative
                    initiatives. Whether you need enterprise network architecture, AI orchestration
                    for strategic solutions, data center optimization, ERP administration, team
                    leadership, or compelling video content for digital campaigns—let&apos;s discuss how
                    we can drive measurable impact together.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 text-xs">
                      @
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Email</p>
                      <p className="mt-1 text-slate-100 font-medium">
                        akabrehamkassahun@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 text-xs">
                      ☎
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Phone</p>
                      <p className="mt-1 text-slate-100 font-medium">+251 911 906 140</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 text-xs">
                      ⛯
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Location</p>
                      <p className="mt-1 text-slate-100 font-medium">Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: contact form (static) */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm text-slate-200">
                <h3 className="text-base font-semibold text-slate-50">Send a Message</h3>
                <p className="mt-1 text-xs text-slate-400">
                  Share a bit about your project, timeline, or collaboration idea.
                </p>

                <form className="mt-5 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-xs text-slate-300">Name</label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-slate-300">Email</label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300">Subject</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300">Message</label>
                    <textarea
                      rows={4}
                      className="w-full resize-none rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-xs font-medium text-slate-950 shadow-md shadow-emerald-500/30 transition hover:bg-emerald-400"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
