import React from 'react';
import { 
  FolderGit2, 
  Trophy, 
  Navigation, 
  IndianRupee, 
  Database, 
  BarChart3, 
  LineChart, 
  Search, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  PieChart
} from 'lucide-react';
import { PERSONAL_INFO, KEY_STATISTICS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2': return <FolderGit2 className="w-5 h-5 text-blue-600" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'Navigation': return <Navigation className="w-5 h-5 text-indigo-600" />;
      case 'IndianRupee': return <IndianRupee className="w-5 h-5 text-emerald-600" />;
      default: return <BarChart3 className="w-5 h-5 text-blue-600" />;
    }
  };

  const workflowSteps = [
    {
      step: '01',
      title: 'Data Extraction & SQL',
      desc: 'Querying relational databases, designing complex joins, views, window functions, and CTEs to extract reliable datasets.',
      icon: <Database className="w-4 h-4 text-blue-400" />
    },
    {
      step: '02',
      title: 'Cleaning & Power Query',
      desc: 'Handling missing values, outlier detection, data validation, standardizing types, and structuring star schemas.',
      icon: <Layers className="w-4 h-4 text-indigo-400" />
    },
    {
      step: '03',
      title: 'Modeling & DAX / Calcs',
      desc: 'Building responsive DAX measures, time-intelligence calculations, and calculated fields in Power BI and Tableau.',
      icon: <BrainCircuit className="w-4 h-4 text-sky-400" />
    },
    {
      step: '04',
      title: 'Visualization & Insights',
      desc: 'Designing intuitive executive dashboards that highlight trends, anomalies, and actionable business insights.',
      icon: <BarChart3 className="w-4 h-4 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Combining computer science fundamentals with business intelligence to translate complex data into growth strategies.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch text-left">
          
          {/* Narrative Bento Card */}
          <div className="lg:col-span-7 bg-slate-50/60 rounded-3xl border border-slate-200 p-7 sm:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Analytical Philosophy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Transforming Complex Datasets Into Strategic Business Value
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm">
                I am a <strong className="text-slate-900 font-semibold">Computer Science & Engineering graduate (Completed May 2026)</strong> from D Y Patil Technical Campus with a dedicated focus on <strong className="text-blue-600 font-semibold">Data Analytics</strong> and <strong className="text-blue-600 font-semibold">Business Intelligence</strong>.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                My technical foundation blends software engineering rigor with data-driven decision-making. I specialize in <strong className="text-slate-900 font-semibold">data analysis</strong>, <strong className="text-slate-900 font-semibold">data visualization</strong>, and <strong className="text-slate-900 font-semibold">dashboard development</strong> using industry-standard tools including <strong className="text-slate-900 font-semibold">SQL, Excel, Power BI, Tableau</strong>, and <strong className="text-slate-900 font-semibold">Python</strong>.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm">
                Whether optimizing urban mobility fleets, modeling 15+ seasons of cricket data, or identifying revenue surges in global sales, my goal is always discovering hidden patterns and delivering clear <strong className="text-blue-700 font-semibold">executive insights</strong>.
              </p>

              {/* Core Competencies Badges */}
              <div className="pt-3">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">Core Competencies:</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Data Extraction & SQL',
                    'Dashboard Development',
                    'Power BI & DAX Modeling',
                    'Tableau Visualizations',
                    'Excel & Pivot Calculations',
                    'Python (Pandas, NumPy)',
                    'Statistical Analysis',
                    'Business Storytelling'
                  ].map((item, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Education snapshot */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/70">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Education Status</div>
                <div className="text-xs font-bold text-slate-900">B.Tech Computer Science & Eng. (Completed May 2026)</div>
                <div className="text-[11px] text-slate-500">D Y Patil Technical Campus • CGPA: 8.2 / 10</div>
              </div>
              <a
                href="#education"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 bg-slate-50 hover:bg-blue-50 px-3 py-1.5 rounded-xl border border-slate-200 transition-colors"
              >
                <span>View Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Stat Bento Tiles + Workflow Pipeline Bento Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* 4 Bento Statistics Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              {KEY_STATISTICS.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white p-4.5 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-left flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform">
                      {getIcon(stat.icon)}
                    </div>
                    {stat.trend && (
                      <span className="text-[9px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                        {stat.trend}
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5 leading-snug">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Workflow Pipeline Bento Card */}
            <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-lg border border-slate-800 text-left flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-bold tracking-wider uppercase text-blue-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Analytical Workflow
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-2 py-0.5 rounded">
                    End-to-End
                  </span>
                </div>

                <div className="space-y-2.5">
                  {workflowSteps.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2 rounded-2xl bg-slate-800/80 border border-slate-700/60">
                      <div className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center shrink-0 text-blue-300 font-mono text-xs font-bold">
                        {item.step}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-100">{item.title}</div>
                        <div className="text-[11px] text-slate-400 leading-snug mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
