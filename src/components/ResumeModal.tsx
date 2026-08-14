import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
SWAPNIL YADAV
Data Analyst | B.Tech Computer Science Graduate (Completed May 2026)
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
Detail-oriented Data Analyst and Computer Science graduate (Completed May 2026) with a strong foundation in SQL, Excel, Power BI, Tableau, Python, data visualization, and dashboard development. Experienced in analyzing large datasets (103K+ records), creating multi-page business intelligence dashboards, writing complex SQL queries, and translating raw data into actionable insights for strategic decision-making.

TECHNICAL SKILLS
• Programming & Querying: SQL, MySQL, Python, Java (Basic)
• BI & Visualization: Power BI (DAX, Power Query), Tableau, Excel (Pivot Tables, Advanced Formulas), Google Sheets
• Python Libraries: Pandas, NumPy
• Tools & Version Control: Git, GitHub, VS Code
• Core Competencies: Data Cleaning, Exploratory Data Analysis, Star Schema Modeling, Statistical Analysis, KPI Dashboarding

FEATURED ANALYTICS PROJECTS
1. Ride-Hailing Operations & Revenue Analysis Dashboard (Power BI, SQL, Excel)
   • Analyzed 103,024+ ride bookings and ₹35M total booking value across 5 interactive dashboard views.
   • Authored 10 SQL queries and views to calculate driver vs customer cancellation rates (28.08% total rate).
   • Dissected payment methods (54.3% UPI), vehicle fleet yields, and customer satisfaction ratings.

2. IPL Performance Analytics Dashboard (Power BI, DAX, Power Query)
   • Built an interactive dashboard evaluating 15+ IPL seasons (2008–2023) and 230K+ ball-by-ball deliveries.
   • Formulated 24+ custom DAX measures for dynamic win rate, strike rate, and player impact calculations.
   • Created dynamic points tables, match outcome visualizers, and toss decision impact analytics.

3. Global Sales Data Analysis Dashboard (Tableau, Excel, Time-Series)
   • Engineered executive Tableau dashboard analyzing global sales trends, profit margins, and customer tiers.
   • Identified peak monthly revenue of $1.5M in November and top customer cohorts contributing $280K+.
   • Implemented dual-axis charts, custom parameter controls, and geographic heatmaps.

EXPERIENCE & SIMULATIONS
• Deloitte — Data Analytics Job Simulation (Forage, March 2026)
  Completed hands-on data analysis, forensic discovery tasks, and business problem-solving for enterprise scenarios.
• Tata Group — Data Visualization Job Simulation (Forage, March 2026)
  Framed business scenarios, translated requirements into visualization models, and practiced C-suite data storytelling.

EDUCATION
• B.Tech in Computer Science & Engineering (2022 – May 2026 | Completed)
  D Y Patil Technical Campus, Talsande | CGPA: 8.2 / 10
• Class 12 (HSC) (2021 – 2022)
  YCIS Satara | Percentage: 51.80%

CERTIFICATIONS
• Data Analytics Job Simulation — Deloitte (Forage, March 2026)
• Data Visualization: Empowering Business with Effective Insights — Tata Group (Forage, March 2026)
• Android Application Development Internship — Alphinity SoftTech Pvt. Ltd. (June 2025)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-400" />
            <span className="font-bold text-sm">Swapnil_Yadav_Resume.pdf</span>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded hidden sm:inline">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              title="Copy Text Version"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-100/60 flex-1">
          <div 
            id="printable-resume" 
            className="bg-white max-w-3xl mx-auto p-8 sm:p-12 rounded-xl shadow-md border border-slate-200 text-slate-800 font-sans space-y-6"
          >
            {/* Header */}
            <div className="text-center border-b border-slate-300 pb-5 space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                SWAPNIL YADAV
              </h1>
              <div className="text-sm font-bold text-blue-700">
                Data Analyst | B.Tech Computer Science Graduate (Completed May 2026)
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 pt-1">
                <span>{PERSONAL_INFO.email}</span>
                <span>•</span>
                <span>{PERSONAL_INFO.formattedPhone}</span>
                <span>•</span>
                <span>{PERSONAL_INFO.location}</span>
                <span>•</span>
                <span className="font-mono">{PERSONAL_INFO.linkedinHandle}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                Detail-oriented Data Analyst and Computer Science graduate (Completed May 2026) with a strong foundation in SQL, Excel, Power BI, Tableau, Python, and data modeling. Proven experience analyzing over 103K+ ride records and 15+ IPL tournament seasons, authoring modular SQL views, developing custom DAX measures, and designing interactive dashboards that transform raw data into clear business insights.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Technical Skills
              </h2>
              <div className="text-xs space-y-1 text-slate-700">
                <div><strong className="font-semibold text-slate-900">Querying & Databases:</strong> SQL, MySQL (Joins, CTEs, Window Functions, Views, Aggregations)</div>
                <div><strong className="font-semibold text-slate-900">BI & Visualization:</strong> Power BI (DAX, Power Query, Star Schema), Tableau, Excel (Pivot Tables, Advanced Formulas), Google Sheets</div>
                <div><strong className="font-semibold text-slate-900">Programming & Libraries:</strong> Python (Pandas, NumPy), Java (Basic OOP)</div>
                <div><strong className="font-semibold text-slate-900">Tools & Methodologies:</strong> Git, GitHub, VS Code, Data Cleaning, Statistical Analysis, Executive Reporting</div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Key Analytics Projects
              </h2>
              
              {/* Project 1 */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-900">Ride-Hailing Operations & Revenue Analysis Dashboard</span>
                  <span className="text-[11px] font-mono text-slate-500">Power BI, SQL, Excel</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 leading-snug">
                  <li>Engineered a 5-page Power BI dashboard analyzing 103,024+ ride bookings and ₹35M total booking value.</li>
                  <li>Authored 10 modular SQL views to compute a 28.08% cancellation rate, segmented by Driver vs Customer reasons.</li>
                  <li>Analyzed vehicle fleet revenue yields (Prime Sedan ₹480 avg fare) and payment methods (54.3% UPI share).</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-900">IPL Performance Analytics Dashboard</span>
                  <span className="text-[11px] font-mono text-slate-500">Power BI, DAX, Power Query</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 leading-snug">
                  <li>Extracted and cleaned 15+ tournament seasons (2008–2023) comprising 230K+ delivery-level records.</li>
                  <li>Constructed 24+ DAX measures to power interactive points tables, dynamic team win rates, and player rankings.</li>
                  <li>Discovered that teams electing to field after winning the toss secured a 53.8% win rate in playoff fixtures.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-900">Global Sales Data Analysis Dashboard</span>
                  <span className="text-[11px] font-mono text-slate-500">Tableau, Time-Series</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5 leading-snug">
                  <li>Built interactive Tableau visualizations tracking global regional revenue, product margins, and customer tiers.</li>
                  <li>Identified a Q4 seasonal peak of $1.5M revenue in November and isolated VIP customer accounts contributing $280K+.</li>
                </ul>
              </div>
            </div>

            {/* Experience & Simulations */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Experience & Simulations
              </h2>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-900">Deloitte — Data Analytics Job Simulation</span>
                  <span className="text-[11px] text-slate-500">March 2026</span>
                </div>
                <p className="text-xs text-slate-700">
                  Completed hands-on data analysis, forensic discovery tasks, and business problem-solving for enterprise client cases.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-bold text-slate-900">Tata Group — Data Visualization Job Simulation</span>
                  <span className="text-[11px] text-slate-500">March 2026</span>
                </div>
                <p className="text-xs text-slate-700">
                  Framed business scenarios, translated requirements into visualization models, and practiced C-suite data storytelling.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Education
              </h2>

              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <span className="font-bold text-slate-900">B.Tech, Computer Science & Engineering</span> — <span className="text-slate-600">D Y Patil Technical Campus, Talsande</span>
                </div>
                <div className="text-right font-mono">
                  <span className="font-bold text-blue-700">CGPA: 8.2 / 10</span> (2022–May 2026)
                </div>
              </div>

              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <span className="font-bold text-slate-900">Class 12 (HSC)</span> — <span className="text-slate-600">YCIS Satara</span>
                </div>
                <div className="text-right font-mono">
                  <span className="font-bold text-slate-700">51.80%</span> (2021–2022)
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                Certifications
              </h2>
              <div className="text-xs text-slate-700 space-y-1">
                <div>• Data Analytics Job Simulation — Deloitte (Forage, March 2026)</div>
                <div>• Data Visualization: Empowering Business with Effective Insights — Tata Group (Forage, March 2026)</div>
                <div>• Android Application Development Internship — Alphinity SoftTech Pvt. Ltd. (June 2025)</div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Click 'Print / Save PDF' to generate an ATS-ready document.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-bold bg-slate-200 text-slate-700 hover:bg-slate-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
