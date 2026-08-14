import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles,
  MapPin,
  Clock,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setFormStatus('submitting');

    // Simulate submission / trigger client action
    setTimeout(() => {
      setFormStatus('success');
    }, 600);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormStatus('idle');
    setValidationErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            I'm actively seeking entry-level Data Analyst opportunities and Business Intelligence roles. Feel free to reach out directly.
          </p>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto text-left">
          
          {/* Left Column: Dark Executive Bento Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
                  Direct Inquiries
                </span>
                <span className="text-[10px] bg-slate-800 text-emerald-400 font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                Swapnil Yadav
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Open to full-time Data Analyst roles, Business Intelligence opportunities, and analytical project collaborations.
              </p>

              {/* Direct Info Bento List */}
              <div className="space-y-3 text-xs mt-6">
                
                {/* Email Card */}
                <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[10px] text-slate-400 font-medium">Email Address</div>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="text-slate-200 font-bold hover:text-blue-400 transition-colors block truncate text-xs"
                        title={PERSONAL_INFO.email}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors shrink-0 ml-2 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600/30 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium">Phone / WhatsApp</div>
                      <a 
                        href={`tel:${PERSONAL_INFO.phone}`} 
                        className="text-slate-200 font-bold hover:text-emerald-400 transition-colors text-xs"
                      >
                        {PERSONAL_INFO.formattedPhone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors shrink-0 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn Card */}
                <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/30 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium">LinkedIn Profile</div>
                      <a 
                        href={PERSONAL_INFO.linkedin} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-slate-200 font-bold hover:text-blue-400 transition-colors text-xs"
                      >
                        {PERSONAL_INFO.linkedinHandle}
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors cursor-pointer"
                    title="Open LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* GitHub Card */}
                <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/30 border border-purple-400/30 flex items-center justify-center text-purple-400 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-medium">GitHub Profile</div>
                      <a 
                        href={PERSONAL_INFO.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-slate-200 font-bold hover:text-purple-400 transition-colors text-xs"
                      >
                        {PERSONAL_INFO.githubHandle}
                      </a>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors cursor-pointer"
                    title="Open GitHub"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>

            {/* Status footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Response time &lt; 24h</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Maharashtra, India</span>
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form Bento Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            {formStatus === 'success' ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn my-auto">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong className="text-slate-900">{formData.name}</strong>. I have received your message regarding "<span className="italic">{formData.subject}</span>" and will respond to <strong className="text-slate-900">{formData.email}</strong> shortly.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Swapnil,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </a>
                  
                  <button
                    onClick={resetForm}
                    className="px-5 py-2.5 rounded-2xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-form" noValidate>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Leave your details below or write to {PERSONAL_INFO.email}
                  </p>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (validationErrors.name) setValidationErrors({ ...validationErrors, name: '' });
                      }}
                      placeholder="e.g. Hiring Manager / John Doe"
                      className={`w-full px-4 py-2.5 rounded-2xl text-xs bg-slate-50 border transition-all text-slate-800 focus:outline-none focus:bg-white ${
                        validationErrors.name 
                          ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                    />
                    {validationErrors.name && (
                      <p className="text-[10px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{validationErrors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (validationErrors.email) setValidationErrors({ ...validationErrors, email: '' });
                      }}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-2.5 rounded-2xl text-xs bg-slate-50 border transition-all text-slate-800 focus:outline-none focus:bg-white ${
                        validationErrors.email 
                          ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20' 
                          : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                    />
                    {validationErrors.email && (
                      <p className="text-[10px] text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{validationErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (validationErrors.subject) setValidationErrors({ ...validationErrors, subject: '' });
                    }}
                    placeholder="e.g. Data Analyst Opportunity / Interview Invitation"
                    className={`w-full px-4 py-2.5 rounded-2xl text-xs bg-slate-50 border transition-all text-slate-800 focus:outline-none focus:bg-white ${
                      validationErrors.subject 
                        ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20' 
                        : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                  />
                  {validationErrors.subject && (
                    <p className="text-[10px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{validationErrors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (validationErrors.message) setValidationErrors({ ...validationErrors, message: '' });
                    }}
                    placeholder="Write your message here (role details, team background, dataset questions)..."
                    className={`w-full px-4 py-2.5 rounded-2xl text-xs bg-slate-50 border transition-all text-slate-800 focus:outline-none focus:bg-white resize-none ${
                      validationErrors.message 
                        ? 'border-rose-300 focus:ring-2 focus:ring-rose-500/20' 
                        : 'border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                    }`}
                  />
                  {validationErrors.message && (
                    <p className="text-[10px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{validationErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 active:scale-98 disabled:opacity-70 transition-all shadow-sm shadow-blue-600/25 cursor-pointer"
                  id="btn-send-message"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
