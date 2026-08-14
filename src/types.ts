export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Power BI' | 'Tableau' | 'SQL' | 'Python' | 'Excel';
  technologies: string[];
  description: string;
  featureBadges?: string[];
  highlights: string[];
  metrics: {
    label: string;
    value: string;
    icon?: string;
  }[];
  keyInsights: string[];
  sqlSnippets?: {
    title: string;
    code: string;
    description: string;
  }[];
  daxSnippets?: {
    title: string;
    code: string;
    description: string;
  }[];
  chartData?: {
    type: 'bar' | 'donut' | 'line' | 'table';
    title: string;
    data: any;
  };
  githubUrl?: string;
  demoUrl?: string;
  visualTheme: {
    primaryColor: string;
    badgeBg: string;
    badgeText: string;
  };
}

export interface SkillCategory {
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient", "Intermediate", "Basic"
    percentage: number;
    icon?: string;
    tag?: string;
    experienceNote?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  dateBadge: string;
  type: string;
  location: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  forageProgram?: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  platform?: string;
  date: string;
  credentialId?: string;
  skillsCovered: string[];
  summary: string;
  viewUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  status: string;
  location: string;
  coursework?: string[];
  highlights?: string[];
}

export interface MetricStat {
  label: string;
  value: string;
  description: string;
  icon: string;
  trend?: string;
}
