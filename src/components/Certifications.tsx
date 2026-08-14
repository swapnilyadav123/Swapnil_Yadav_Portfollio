import React, { useState } from 'react';
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  Eye, 
  ShieldCheck, 
  X,
  FileCheck2,
  Sparkles,
  Building
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Professional certifications validating practical analytical competencies and software engineering foundations.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Bento Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col justify-between text-left group"
              id={`cert-card-${cert.id}`}
            >
              <div className="space-y-4">
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-0.5 rounded-full flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-700 mt-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{cert.organization}</span>
                    {cert.platform && (
                      <span className="text-slate-400 font-normal">({cert.platform})</span>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.summary}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-slate-50 text-slate-700 border border-slate-200/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-bold bg-blue-50 text-blue-700 hover:bg-blue-100/80 border border-blue-200 transition-all cursor-pointer shadow-2xs"
                  id={`btn-view-cert-${cert.id}`}
                >
                  <FileCheck2 className="w-4 h-4 text-blue-600" />
                  <span>View Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Modal Viewer */}
        {selectedCert && (
          <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
            <div 
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 text-left relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                    Verified Credential Preview
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 leading-tight">
                    {selectedCert.title}
                  </h4>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-700 mb-5">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Issued To:</span>
                  <span className="font-bold text-slate-900">Swapnil Yadav</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Issuing Body:</span>
                  <span className="font-bold text-slate-900">{selectedCert.organization} {selectedCert.platform ? `(${selectedCert.platform})` : ''}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Issue Date:</span>
                  <span className="font-bold text-slate-900">{selectedCert.date}</span>
                </div>
                {selectedCert.credentialId && (
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500 font-medium">Credential ID:</span>
                    <span className="font-mono font-bold text-blue-700">{selectedCert.credentialId}</span>
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-6">
                <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Skills Validated:</h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skillsCovered.map((s, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 text-blue-800 border border-blue-100">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400">
                  Verified Academic & Simulation Record
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 rounded-2xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
