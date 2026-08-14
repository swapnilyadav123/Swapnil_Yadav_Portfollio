import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  BarChart3, 
  Database, 
  Copy, 
  Check, 
  TrendingUp, 
  Layers, 
  Code2, 
  Lightbulb, 
  CheckCircle2,
  Table,
  PieChart,
  LineChart
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'insights' | 'queries' | 'visuals'>('overview');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!project) return null;

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] text-left"
        onClick={(e) => e.stopPropagation()}
        id="project-modal-container"
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white p-5 flex items-start justify-between border-b border-slate-800 shrink-0">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-600 text-white">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Project Deep-Dive & Telemetry
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="bg-slate-100 border-b border-slate-200 px-5 pt-2 flex gap-2 overflow-x-auto text-xs shrink-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'border-blue-600 text-blue-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Overview & Metrics</span>
          </button>

          <button
            onClick={() => setActiveTab('insights')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'insights'
                ? 'border-blue-600 text-blue-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>Business Insights</span>
          </button>

          <button
            onClick={() => setActiveTab('queries')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'queries'
                ? 'border-blue-600 text-blue-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-indigo-500" />
            <span>SQL & DAX Logic</span>
          </button>

          <button
            onClick={() => setActiveTab('visuals')}
            className={`pb-2.5 px-3 font-semibold border-b-2 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeTab === 'visuals'
                ? 'border-blue-600 text-blue-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Visual Analytics</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Executive Summary</h4>
                <p className="text-sm leading-relaxed text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {project.description}
                </p>
              </div>

              {/* 5 Feature Badges (if available e.g. Ride Hailing) */}
              {project.featureBadges && project.featureBadges.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Dashboard Analytical Views</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.featureBadges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Metrics Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Project Metrics</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 text-left">
                      <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                      <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Highlights */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Implementation Highlights</h4>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BUSINESS INSIGHTS */}
          {activeTab === 'insights' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span>Strategic Decision-Making Findings</span>
                </div>
                <p className="text-xs text-amber-800">
                  Analytical discoveries uncovered through exploratory data analysis, aggregations, and business metrics modeling.
                </p>
              </div>

              <div className="space-y-3">
                {project.keyInsights.map((insight, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 mb-1">Insight #{idx + 1}</h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{insight}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Value Realization Box */}
              <div className="p-4 rounded-xl bg-slate-900 text-white">
                <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Business Impact</h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  By structuring raw telemetry into quantifiable KPIs, stakeholders can diagnose operational bottlenecks, eliminate revenue leakages, and optimize capital allocation with confident, data-backed decisions.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: SQL & DAX */}
          {activeTab === 'queries' && (
            <div className="space-y-6">
              
              {/* SQL Queries */}
              {project.sqlSnippets && project.sqlSnippets.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Database className="w-4 h-4 text-blue-600" />
                      <span>SQL Extraction & Transformation Queries</span>
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">ANSI SQL / MySQL</span>
                  </div>

                  {project.sqlSnippets.map((query, idx) => (
                    <div key={idx} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                      <div className="bg-slate-800/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-700 text-xs">
                        <div>
                          <span className="font-bold text-slate-200">{query.title}</span>
                          <p className="text-[11px] text-slate-400">{query.description}</p>
                        </div>
                        <button
                          onClick={() => handleCopy(query.code, `sql-${idx}`)}
                          className="flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
                        >
                          {copiedCode === `sql-${idx}` ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy SQL</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 text-xs font-mono text-blue-200 overflow-x-auto leading-relaxed">
                        {query.code}
                      </pre>
                    </div>
                  ))}
                </div>
              )}

              {/* DAX Measures */}
              {project.daxSnippets && project.daxSnippets.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <Code2 className="w-4 h-4 text-indigo-600" />
                      <span>DAX Measures & Calculations</span>
                    </h4>
                    <span className="text-[10px] text-slate-500 font-mono">Power BI DAX</span>
                  </div>

                  {project.daxSnippets.map((dax, idx) => (
                    <div key={idx} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
                      <div className="bg-slate-800/90 px-4 py-2.5 flex items-center justify-between border-b border-slate-700 text-xs">
                        <div>
                          <span className="font-bold text-slate-200">{dax.title}</span>
                          <p className="text-[11px] text-slate-400">{dax.description}</p>
                        </div>
                        <button
                          onClick={() => handleCopy(dax.code, `dax-${idx}`)}
                          className="flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-slate-700 text-slate-300 hover:bg-slate-600 transition-colors"
                        >
                          {copiedCode === `dax-${idx}` ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy DAX</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-4 text-xs font-mono text-emerald-200 overflow-x-auto leading-relaxed">
                        {dax.code}
                      </pre>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          {/* TAB 4: VISUAL ANALYTICS */}
          {activeTab === 'visuals' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Interactive Dashboard Data Preview</h4>
                <p className="text-xs text-slate-600 mb-4">
                  Aggregated telemetry visualizer demonstrating data modeling output and distribution curves.
                </p>

                {project.chartData && (
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <h5 className="text-sm font-bold text-slate-800 mb-3">{project.chartData.title}</h5>
                    
                    {project.chartData.type === 'bar' && (
                      <div className="space-y-2.5">
                        {project.chartData.data.map((item: any, i: number) => (
                          <div key={i} className="text-xs">
                            <div className="flex justify-between text-xs mb-1">
                              <span className="font-semibold text-slate-700">{item.label}</span>
                              <span className="font-mono text-blue-600 font-bold">{item.rate || `${item.value} Titles`}</span>
                            </div>
                            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                                style={{ width: `${(item.value / 5) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {project.chartData.type === 'donut' && (
                      <div className="space-y-3">
                        <div className="h-4 bg-slate-100 rounded-full overflow-hidden flex">
                          {project.chartData.data.map((item: any, i: number) => (
                            <div 
                              key={i}
                              style={{ width: `${(item.value / 103024) * 100}%`, backgroundColor: item.color }}
                              className="h-full"
                              title={`${item.label}: ${item.value.toLocaleString()}`}
                            />
                          ))}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-2">
                          {project.chartData.data.map((item: any, i: number) => (
                            <div key={i} className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                              <div>
                                <div className="font-bold text-slate-800">{item.label}</div>
                                <div className="text-[11px] text-slate-500">{item.value.toLocaleString()} Rides</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.chartData.type === 'line' && (
                      <div className="h-28 flex items-end justify-between gap-2 pt-6 px-2">
                        {project.chartData.data.map((item: any, i: number) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group">
                            <span className="text-[10px] font-mono text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                              ${item.value}M
                            </span>
                            <div 
                              className={`w-full rounded-t transition-all ${
                                item.label.includes('Peak') ? 'bg-sky-600' : 'bg-blue-400 group-hover:bg-blue-600'
                              }`} 
                              style={{ height: `${(item.value / 1.5) * 100}%` }}
                            />
                            <span className="text-[10px] font-medium text-slate-600">{item.label.split(' ')[0]}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Database className="w-4 h-4 text-blue-600" />
            <span>Dataset validated & tested</span>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 transition-colors shadow-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
