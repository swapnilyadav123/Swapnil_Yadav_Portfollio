import React, { useState } from 'react';
import { 
  BarChart3, 
  Database, 
  TrendingUp, 
  Download, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Code, 
  PieChart, 
  Layers, 
  ArrowUpRight,
  Filter,
  RefreshCw,
  Terminal,
  Activity,
  Award,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeDataset, setActiveDataset] = useState<'rides' | 'ipl' | 'sales'>('rides');
  const [showSqlCode, setShowSqlCode] = useState(false);

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-slate-50 border-b border-slate-200/80"
    >
      {/* Background subtle dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bento Grid Container */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5 text-left">
          
          {/* Bento 1: Primary Profile & Hero Card */}
          <div className="col-span-12 lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider border border-blue-100/80">
                  B.Tech Graduate (May 2026)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open to Opportunities
                </span>
              </div>

              {/* Title & Subhead */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-3 tracking-tight">
                Hi, I'm <span className="text-blue-600">Swapnil Yadav</span>
              </h1>
              
              <div className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                <span>Data Analyst</span>
                <span className="text-blue-500">•</span>
                <span>Business Intelligence</span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Detail-oriented aspiring Data Analyst with a strong foundation in <strong className="text-slate-800 font-semibold">SQL, Excel, Power BI, Tableau, and Python</strong>. I enjoy transforming raw, complex datasets into interactive decision-making dashboards and actionable business insights.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a 
                  href="#projects"
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-blue-700 active:scale-98 transition-all shadow-sm shadow-blue-600/25 inline-flex items-center gap-2 cursor-pointer"
                  id="hero-btn-view-projects"
                >
                  <BarChart3 className="w-4 h-4" />
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button 
                  onClick={onOpenResume}
                  className="border border-slate-200 bg-white text-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-50 hover:border-slate-300 active:scale-98 transition-all inline-flex items-center gap-2 cursor-pointer"
                  id="hero-btn-resume"
                >
                  <Download className="w-4 h-4 text-blue-600" />
                  <span>Resume</span>
                </button>
              </div>
            </div>

            {/* Bottom Connect Box */}
            <div className="pt-4 border-t border-slate-100">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Connect</h4>
                  <span className="text-xs font-semibold text-slate-700">{PERSONAL_INFO.email}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 flex items-center justify-center text-slate-600 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-slate-400 hover:text-slate-900 flex items-center justify-center text-slate-600 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4 text-slate-800" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 flex items-center justify-center text-slate-600 transition-colors"
                    title="Email"
                  >
                    <Mail className="w-4 h-4 text-rose-500" />
                  </a>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-emerald-300 hover:text-emerald-600 flex items-center justify-center text-slate-600 transition-colors"
                    title="Phone"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bento 2: Analytics Impact Card (Vibrant Electric Blue) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-blue-600 rounded-3xl p-6 text-white flex flex-col justify-between shadow-lg shadow-blue-200 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xs font-semibold opacity-85 uppercase tracking-widest">
                  Analytics Impact
                </h3>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-mono font-bold">
                  SQL + BI
                </span>
              </div>
              
              <div className="text-4xl font-black tracking-tight mt-2">
                103K+
              </div>
              
              <p className="text-xs text-blue-100 font-medium leading-relaxed mt-1">
                Ride Bookings Analyzed with ₹35M+ Total Value
              </p>

              <div className="mt-4 pt-3 border-t border-white/20 text-[11px] space-y-1">
                <div className="flex justify-between text-blue-100">
                  <span>SQL Views Authored:</span>
                  <span className="font-bold text-white">10 Modular</span>
                </div>
                <div className="flex justify-between text-blue-100">
                  <span>Cancellation Rate:</span>
                  <span className="font-bold text-white">28.08% Tracked</span>
                </div>
              </div>
            </div>

            {/* Bottom Visual Bar Telemetry Graphic */}
            <div className="flex gap-1.5 items-end mt-6 relative z-10 pt-2">
              <div className="h-7 flex-1 bg-white/20 rounded-t-sm" title="Jan: 45K" />
              <div className="h-11 flex-1 bg-white/40 rounded-t-sm" title="Feb: 68K" />
              <div className="h-8 flex-1 bg-white/20 rounded-t-sm" title="Mar: 52K" />
              <div className="h-16 flex-1 bg-white/80 rounded-t-sm" title="Peak Yield" />
              <div className="h-10 flex-1 bg-white/30 rounded-t-sm" title="Avg: 60K" />
              <div className="h-14 flex-1 bg-white/60 rounded-t-sm" title="Dec: 85K" />
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-40 pointer-events-none" />
          </div>

          {/* Bento 3: Technical Stack Bento Card */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold flex items-center gap-2 text-slate-900">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Technical Stack
                </h3>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                  v2.0.26
                </span>
              </div>

              {/* 4 Tech Progress Bars */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800">SQL & MySQL</span>
                    <span className="text-[10px] font-mono font-bold text-blue-600">95%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-[95%] h-full bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800">Power BI</span>
                    <span className="text-[10px] font-mono font-bold text-blue-600">95%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-[95%] h-full bg-blue-600 rounded-full"></div>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800">Tableau</span>
                    <span className="text-[10px] font-mono font-bold text-blue-600">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800">Python</span>
                    <span className="text-[10px] font-mono font-bold text-blue-600">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-[85%] h-full bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pill chips */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {['DAX Measures', 'Pandas', 'NumPy', 'Excel Pivot', 'Star Schema', 'Git'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-slate-100/80 text-[10px] font-semibold text-slate-700 rounded-lg border border-slate-200/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bento 4: Featured Project Bento Card (IPL) */}
          <div className="col-span-12 md:col-span-4 bg-white rounded-3xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  Featured Project
                </span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  Power BI
                </span>
              </div>

              {/* Visual mini graphic */}
              <div className="bg-slate-900 rounded-2xl p-3 mb-3 border border-slate-800 text-white overflow-hidden relative">
                <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1.5">
                  <span>Match Win %</span>
                  <span className="text-amber-400 font-bold">53.8% Bowling First</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden flex">
                  <div className="bg-blue-500 h-full" style={{ width: '53.8%' }} />
                  <div className="bg-amber-500 h-full" style={{ width: '46.2%' }} />
                </div>
                <div className="flex justify-between text-[9px] text-slate-400 font-mono mt-2">
                  <span>230K+ Deliveries</span>
                  <span>24+ DAX Measures</span>
                </div>
              </div>

              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                IPL Performance Analytics
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                15+ seasons of IPL match data analyzed with dynamic points tables, strike rates, and toss decision impact.
              </p>
            </div>

            <a
              href="#projects"
              className="w-full mt-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Dashboard</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Bento 5: Professional Path Bento Card */}
          <div className="col-span-12 md:col-span-4 bg-white rounded-3xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Professional Path
                </h3>
                <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full">
                  3 Milestones
                </span>
              </div>

              <div className="space-y-3">
                {/* Node 1: Deloitte */}
                <div className="flex gap-3 items-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    D.
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-900 truncate">Deloitte — Data Analytics</p>
                    <p className="text-[10px] text-slate-500">Job Simulation • March 2026</p>
                  </div>
                </div>

                {/* Node 2: Tata */}
                <div className="flex gap-3 items-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    T.
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-900 truncate">Tata — Data Visualization</p>
                    <p className="text-[10px] text-slate-500">Executive Storytelling • March 2026</p>
                  </div>
                </div>

                {/* Node 3: B.Tech */}
                <div className="flex gap-3 items-center p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center font-bold text-[10px] shrink-0 shadow-xs">
                    DY
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-900 truncate">B.Tech Computer Science & Eng.</p>
                    <p className="text-[10px] text-slate-500 font-medium">CGPA: 8.2 / 10 • Completed May 2026</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 mt-2 flex items-center justify-between text-[11px] text-slate-500">
              <span>D Y Patil Technical Campus</span>
              <a href="#experience" className="font-bold text-blue-600 hover:text-blue-700">View Details &rarr;</a>
            </div>
          </div>

          {/* Bento 6: Global Sales & Peak Revenue Highlight Bento */}
          <div className="col-span-12 md:col-span-4 bg-white rounded-3xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between text-center hover:shadow-md transition-all">
            <div>
              <div className="mb-2 flex justify-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="w-2 h-2 rounded-full bg-blue-200"></div>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                Global Sales Analysis
              </h3>
              
              <div className="text-3xl font-black text-slate-900 tracking-tight">
                $1.50M
              </div>
              
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                Peak Monthly Revenue (November Q4)
              </p>
            </div>

            {/* 3 mini stat pillars */}
            <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-3 gap-2">
              <div className="p-1.5 bg-slate-50 rounded-xl">
                <p className="text-xs font-bold text-blue-600">15+</p>
                <p className="text-[9px] text-slate-500 font-medium">Seasons</p>
              </div>
              <div className="p-1.5 bg-slate-50 rounded-xl">
                <p className="text-xs font-bold text-blue-600">10</p>
                <p className="text-[9px] text-slate-500 font-medium">SQL Views</p>
              </div>
              <div className="p-1.5 bg-slate-50 rounded-xl">
                <p className="text-xs font-bold text-blue-600">8.2</p>
                <p className="text-[9px] text-slate-500 font-medium">B.Tech CGPA</p>
              </div>
            </div>
          </div>

          {/* Bento 7: Executive Interactive Live Workspace & Telemetry Banner */}
          <div className="col-span-12 bg-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-xs font-mono font-bold border border-slate-700">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>Interactive Live BI Visualizer</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Ready to drive data-led business decisions?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Explore switchable datasets below to review live calculated metrics, cancellation rates, and SQL aggregations.
              </p>
              
              {/* Dataset tabs */}
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => setActiveDataset('rides')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeDataset === 'rides' 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Ride Analytics (103K)
                </button>
                <button
                  onClick={() => setActiveDataset('ipl')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeDataset === 'ipl' 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  IPL Seasons (15+)
                </button>
                <button
                  onClick={() => setActiveDataset('sales')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeDataset === 'sales' 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  Global Sales ($1.5M)
                </button>
                <button
                  onClick={() => setShowSqlCode(!showSqlCode)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                    showSqlCode 
                      ? 'bg-amber-500 text-slate-950 font-bold' 
                      : 'bg-slate-800 text-amber-400 hover:bg-slate-700'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{showSqlCode ? 'Hide SQL' : 'View SQL Query'}</span>
                </button>
              </div>
            </div>

            {/* Right Side Info & Action */}
            <div className="w-full lg:w-auto bg-slate-800/80 rounded-2xl border border-slate-700 p-5 flex flex-col sm:flex-row lg:flex-col gap-4 min-w-[280px]">
              <div>
                <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Contact Email</div>
                <div className="text-xs font-bold text-slate-200 mt-0.5 truncate">{PERSONAL_INFO.email}</div>
                <div className="flex items-center gap-2 mt-2 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for Full-time Roles</span>
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-2.5 px-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-xs text-center transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Send Direct Message</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Expanded SQL snippet (when toggled) */}
          {showSqlCode && (
            <div className="col-span-12 bg-slate-950 rounded-3xl p-5 border border-slate-800 text-xs font-mono text-slate-300 animate-fadeIn">
              <div className="flex items-center justify-between mb-2 text-blue-400 font-bold">
                <span>-- SQL Query Snippet for Active Dataset ({activeDataset.toUpperCase()})</span>
                <span className="text-slate-500 text-[10px]">MySQL 8.0 Engine</span>
              </div>
              {activeDataset === 'rides' && (
                <p className="leading-relaxed">
                  <span className="text-purple-400">SELECT</span> vehicle_type, <br />
                  &nbsp;&nbsp;<span className="text-amber-400">SUM</span>(booking_value) <span className="text-purple-400">AS</span> total_revenue, <br />
                  &nbsp;&nbsp;<span className="text-amber-400">COUNT</span>(*) <span className="text-purple-400">AS</span> total_bookings, <br />
                  &nbsp;&nbsp;<span className="text-amber-400">ROUND</span>(<span className="text-amber-400">AVG</span>(rating), 2) <span className="text-purple-400">AS</span> avg_rating <br />
                  <span className="text-purple-400">FROM</span> ride_bookings <br />
                  <span className="text-purple-400">GROUP BY</span> vehicle_type <br />
                  <span className="text-purple-400">ORDER BY</span> total_revenue <span className="text-purple-400">DESC</span>;
                </p>
              )}
              {activeDataset === 'ipl' && (
                <p className="leading-relaxed">
                  <span className="text-purple-400">SELECT</span> season, winner, <br />
                  &nbsp;&nbsp;<span className="text-amber-400">COUNT</span>(*) <span className="text-purple-400">AS</span> match_wins <br />
                  <span className="text-purple-400">FROM</span> ipl_matches <br />
                  <span className="text-purple-400">GROUP BY</span> season, winner <br />
                  <span className="text-purple-400">ORDER BY</span> season <span className="text-purple-400">DESC</span>, match_wins <span className="text-purple-400">DESC</span>;
                </p>
              )}
              {activeDataset === 'sales' && (
                <p className="leading-relaxed">
                  <span className="text-purple-400">SELECT</span> month_name, <br />
                  &nbsp;&nbsp;<span className="text-amber-400">SUM</span>(sales_amount) <span className="text-purple-400">AS</span> monthly_revenue, <br />
                  &nbsp;&nbsp;<span className="text-amber-400">SUM</span>(profit) <span className="text-purple-400">AS</span> total_profit <br />
                  <span className="text-purple-400">FROM</span> global_sales <br />
                  <span className="text-purple-400">GROUP BY</span> month_name <br />
                  <span className="text-purple-400">ORDER BY</span> monthly_revenue <span className="text-purple-400">DESC</span>;
                </p>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
