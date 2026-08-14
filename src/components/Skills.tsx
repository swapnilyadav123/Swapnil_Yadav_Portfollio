import React, { useState } from 'react';
import { 
  Code2, 
  BarChart3, 
  Layers, 
  Wrench, 
  Users, 
  Search, 
  Check, 
  Sparkles, 
  Database,
  Cpu,
  FileSpreadsheet,
  Terminal,
  Activity
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.name)];

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Programming & Querying': return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Data & Visualization': return <BarChart3 className="w-5 h-5 text-indigo-600" />;
      case 'Libraries': return <Layers className="w-5 h-5 text-amber-600" />;
      case 'Tools & Environment': return <Wrench className="w-5 h-5 text-slate-700" />;
      case 'Soft Skills': return <Users className="w-5 h-5 text-emerald-600" />;
      default: return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  // Filter categories and skills based on active tab and search query
  const filteredCategories = SKILL_CATEGORIES.map(cat => {
    if (selectedCategory !== 'All' && cat.name !== selectedCategory) {
      return null;
    }
    
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.experienceNote && s.experienceNote.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (matchingSkills.length === 0) return null;

    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-slate-50 border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>Technical Stack & Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Practical skills honed through large-scale analytical datasets, multi-page business intelligence dashboards, and computer science coursework.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Filter Bar & Search Bento Container */}
        <div className="bg-white p-3.5 sm:p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/25'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
                id={`skill-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. SQL, DAX)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Bento Skill Groups Grid */}
        <div className="space-y-6">
          {filteredCategories.map((group) => {
            if (!group) return null;
            return (
              <div 
                key={group.name} 
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm transition-all hover:shadow-md text-left"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-blue-50 border border-blue-100">
                      {getCategoryIcon(group.name)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{group.name}</h3>
                      <p className="text-xs text-slate-500">{group.description}</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-0.5 rounded-full">
                    {group.skills.length} Skills
                  </span>
                </div>

                {/* Skills Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {group.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {skill.tag && (
                              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-white text-slate-500 border border-slate-200 font-semibold">
                                {skill.tag}
                              </span>
                            )}
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              skill.level === 'Advanced' || skill.level === 'Core Strength'
                                ? 'bg-blue-100 text-blue-800'
                                : skill.level === 'Proficient'
                                ? 'bg-indigo-100 text-indigo-800'
                                : 'bg-slate-200 text-slate-700'
                            }`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        {/* Progress indicator */}
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden my-2">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              skill.percentage >= 90 
                                ? 'bg-blue-600' 
                                : skill.percentage >= 80 
                                ? 'bg-indigo-500' 
                                : 'bg-slate-400'
                            }`}
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Experience Note */}
                      {skill.experienceNote && (
                        <p className="text-[11px] text-slate-500 leading-snug mt-1">
                          {skill.experienceNote}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 text-slate-500">
              <Search className="w-8 h-8 mx-auto text-slate-300 mb-2" />
              <p className="font-semibold text-slate-700">No skills match your search query "{searchQuery}"</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-3 text-xs text-blue-600 font-bold hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
