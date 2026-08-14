import React, { useState } from 'react';
import { 
  BarChart3, 
  ExternalLink, 
  Github, 
  Layers, 
  TrendingUp, 
  Code2, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  Database,
  PieChart,
  LayoutDashboard
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterOptions = ['All', 'Power BI', 'Tableau', 'SQL', 'Python', 'Excel'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedTech === 'All') return true;
    return project.technologies.some(tech => tech.toLowerCase().includes(selectedTech.toLowerCase())) ||
           project.category === selectedTech;
  });

  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Analytics Projects
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Comprehensive business intelligence dashboards, SQL transformations, and statistical exploratory analyses built for production-grade insights.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Filter Tabs in Bento Pill Container */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedTech(filter)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                selectedTech === filter
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                  : 'bg-slate-100/90 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
              id={`project-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left group"
              id={`project-card-${project.id}`}
            >
              <div>
                {/* Card Dashboard Visual Preview Banner */}
                <div className="relative h-48 bg-slate-900 overflow-hidden p-5 flex flex-col justify-between border-b border-slate-200">
                  {/* Background ambient gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 opacity-90" />
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                  {/* Top preview badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-400/30 flex items-center gap-1">
                      <LayoutDashboard className="w-3 h-3 text-blue-400" />
                      {project.category} Dashboard
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800/90 px-2 py-0.5 rounded-md border border-slate-700">
                      Interactive BI
                    </span>
                  </div>

                  {/* Simulated Chart preview graphics */}
                  <div className="relative z-10 my-auto py-1">
                    {project.id === 'ipl-analytics' && (
                      <div className="space-y-1.5 bg-slate-800/90 backdrop-blur-xs p-3 rounded-xl border border-slate-700/60">
                        <div className="flex justify-between text-[10px] text-slate-300 font-mono">
                          <span>Win% by Toss Decision</span>
                          <span className="text-amber-400 font-bold">53.8% Bowl First</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden flex">
                          <div className="bg-blue-500 h-full" style={{ width: '53.8%' }} />
                          <div className="bg-amber-500 h-full" style={{ width: '46.2%' }} />
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                          <span>15+ Seasons</span>
                          <span>24+ DAX Measures</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'global-sales' && (
                      <div className="space-y-1.5 bg-slate-800/90 backdrop-blur-xs p-3 rounded-xl border border-slate-700/60">
                        <div className="flex justify-between text-[10px] text-slate-300 font-mono">
                          <span>Peak Revenue: Nov</span>
                          <span className="text-emerald-400 font-bold">$1.5M Monthly</span>
                        </div>
                        <div className="h-6 flex items-end gap-1 px-1">
                          {[30, 45, 40, 60, 50, 75, 100, 85].map((h, i) => (
                            <div 
                              key={i} 
                              className={`flex-1 rounded-t ${i === 6 ? 'bg-sky-400' : 'bg-slate-600'}`} 
                              style={{ height: `${h}%` }} 
                            />
                          ))}
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                          <span>Top Segment: $280K+</span>
                          <span>Tableau Visuals</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'ride-hailing' && (
                      <div className="space-y-1.5 bg-slate-800/90 backdrop-blur-xs p-3 rounded-xl border border-slate-700/60">
                        <div className="flex justify-between text-[10px] text-slate-300 font-mono">
                          <span>Cancellation Breakdown</span>
                          <span className="text-rose-400 font-bold">28.08% Rate</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden flex">
                          <div className="bg-emerald-500 h-full" style={{ width: '71.9%' }} />
                          <div className="bg-amber-400 h-full" style={{ width: '16.2%' }} />
                          <div className="bg-rose-500 h-full" style={{ width: '11.9%' }} />
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                          <span>103K+ Bookings</span>
                          <span>₹35M Value</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom metrics teaser */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-slate-800">
                    <span>{project.metrics[0]?.label}: <strong className="text-white">{project.metrics[0]?.value}</strong></span>
                    {project.metrics[1] && (
                      <span className="text-blue-400 font-semibold">{project.metrics[1]?.label}: {project.metrics[1]?.value}</span>
                    )}
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 space-y-4">
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-700 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlight Bullets */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0 mt-2 flex items-center gap-2">
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 active:scale-98 transition-all cursor-pointer shadow-xs shadow-blue-600/20"
                  id={`btn-view-case-study-${project.id}`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Case Study & Details</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-2xl bg-slate-100 text-slate-700 hover:bg-slate-200/90 hover:text-slate-900 border border-slate-200 transition-colors"
                    title="View GitHub Repository"
                    id={`btn-github-${project.id}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-2xl bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition-colors"
                    title="Live Dashboard Preview"
                    id={`btn-live-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />

      </div>
    </section>
  );
};
