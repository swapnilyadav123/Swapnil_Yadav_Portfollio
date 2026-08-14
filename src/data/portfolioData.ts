import { Project, SkillCategory, ExperienceItem, CertificationItem, EducationItem, MetricStat } from '../types';

export const PERSONAL_INFO = {
  name: "Swapnil Yadav",
  role: "Data Analyst",
  subRole: "B.Tech in Computer Science & Engineering (Completed May 2026)",
  location: "Maharashtra, India",
  tagline: "Detail-oriented Data Analyst and Computer Science graduate (May 2026) with a strong foundation in SQL, Excel, Power BI, Tableau, Python, data visualization, and dashboard development. I enjoy transforming raw data into meaningful insights that support better business decisions.",
  email: "swapnilyadav847@gmail.com",
  phone: "+91-8010566377",
  formattedPhone: "+91 80105 66377",
  linkedin: "https://linkedin.com/in/swapnilyadav",
  linkedinHandle: "linkedin.com/in/swapnilyadav",
  github: "https://github.com/swapnilyadav123",
  githubHandle: "github.com/swapnilyadav123",
  status: "Available for Full-Time Data Analyst Roles",
  yearsOfStudy: "2022 – May 2026",
  currentDegree: "B.Tech in Computer Science & Engineering (Completed May 2026)",
  cgpa: "8.2 / 10"
};

export const KEY_STATISTICS: MetricStat[] = [
  {
    label: "Analytics Projects",
    value: "3+",
    description: "End-to-end Power BI, Tableau & SQL dashboards",
    icon: "FolderGit2",
    trend: "Production-ready"
  },
  {
    label: "IPL Seasons Analyzed",
    value: "15+",
    description: "Match outcomes, player stats, points tables & toss trends",
    icon: "Trophy",
    trend: "2008 – 2023 Datasets"
  },
  {
    label: "Ride Bookings Analyzed",
    value: "103K+",
    description: "Urban mobility operations, cancel rates & ride metrics",
    icon: "Navigation",
    trend: "103,024 Records"
  },
  {
    label: "Booking Value Analyzed",
    value: "₹35M+",
    description: "Revenue distribution, vehicle profitability & payment splits",
    icon: "IndianRupee",
    trend: "Multi-page BI model"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Programming & Querying",
    iconName: "Code2",
    description: "Database querying, structured data extraction, and programming logic",
    skills: [
      { name: "SQL", level: "Proficient", percentage: 90, tag: "Core", experienceNote: "Complex Joins, Window Functions, CTEs, Aggregations" },
      { name: "MySQL", level: "Proficient", percentage: 88, tag: "RDBMS", experienceNote: "Schema Design, Indexes, Stored Procedures, Views" },
      { name: "Python", level: "Proficient", percentage: 82, tag: "Analytics", experienceNote: "Data Wrangling, Scripting, Automation, Exploratory Data Analysis" },
      { name: "Java (Basic)", level: "Basic", percentage: 65, tag: "OOP", experienceNote: "Object-Oriented Programming, Core Algorithms, Data Structures" }
    ]
  },
  {
    name: "Data & Visualization",
    iconName: "BarChart3",
    description: "Visual analytics, interactive dashboards, and business intelligence reporting",
    skills: [
      { name: "Power BI", level: "Advanced", percentage: 92, tag: "BI", experienceNote: "DAX Measures, Power Query, Data Modeling, Star Schemas, Drill-throughs" },
      { name: "Tableau", level: "Proficient", percentage: 88, tag: "BI", experienceNote: "Calculated Fields, Dual-Axis Charts, Parameters, Interactive Storytelling" },
      { name: "Excel", level: "Advanced", percentage: 90, tag: "Analysis", experienceNote: "Pivot Tables, XLOOKUP/VLOOKUP, Advanced Formulas, Conditional Formatting" },
      { name: "Google Sheets", level: "Proficient", percentage: 85, tag: "Cloud", experienceNote: "Collaborative Reporting, QUERY/ARRAYFORMULA, Automated Dashboards" },
      { name: "Data Cleaning", level: "Proficient", percentage: 90, tag: "ETL", experienceNote: "Handling Nulls, Outlier Detection, Deduplication, Type Casting" },
      { name: "Statistical Analysis", level: "Proficient", percentage: 80, tag: "Math", experienceNote: "Mean/Median/Variance, Distributions, Correlation, Trend Analysis" },
      { name: "Dashboard Development", level: "Advanced", percentage: 92, tag: "UX", experienceNote: "KPI Frameworks, Executive Layouts, Responsive Visual Hierarchy" },
      { name: "Data Modeling", level: "Proficient", percentage: 85, tag: "Architecture", experienceNote: "Fact & Dimension Tables, 1:N Relationships, Star & Snowflake Schemas" },
      { name: "Business Intelligence", level: "Proficient", percentage: 86, tag: "Strategy", experienceNote: "Translating Business Scenarios into Measurable KPIs & ROI Insights" }
    ]
  },
  {
    name: "Libraries",
    iconName: "Layers",
    description: "Python data science libraries for manipulation and numerical computing",
    skills: [
      { name: "Pandas", level: "Proficient", percentage: 86, tag: "DataFrames", experienceNote: "Dataframe Filtering, GroupBy, Merging, Reshaping, Pivot Tables" },
      { name: "NumPy", level: "Proficient", percentage: 80, tag: "Vectors", experienceNote: "Array Operations, Matrix Math, Numerical Transformations" }
    ]
  },
  {
    name: "Tools & Environment",
    iconName: "Wrench",
    description: "Version control, IDEs, and developer productivity tooling",
    skills: [
      { name: "Git", level: "Proficient", percentage: 82, tag: "VCS", experienceNote: "Branching, Commit Hygiene, Merge Conflict Resolution" },
      { name: "GitHub", level: "Proficient", percentage: 85, tag: "Collaboration", experienceNote: "Repository Management, Markdown Documentation, Portfolio Hosting" },
      { name: "VS Code", level: "Proficient", percentage: 90, tag: "IDE", experienceNote: "Python Environments, SQL Extensions, Markdown, Debugging" }
    ]
  },
  {
    name: "Soft Skills",
    iconName: "Users",
    description: "Interpersonal attributes essential for collaborative data teams and stakeholder presentations",
    skills: [
      { name: "Analytical Thinking", level: "Core Strength", percentage: 92, tag: "Mindset", experienceNote: "Breaking complex business questions into quantifiable hypotheses" },
      { name: "Problem Solving", level: "Core Strength", percentage: 90, tag: "Execution", experienceNote: "Root-cause diagnosis, debugging ETL bottlenecks, verifying data validity" },
      { name: "Communication", level: "Proficient", percentage: 88, tag: "Storytelling", experienceNote: "Explaining analytical insights clearly to non-technical business leaders" },
      { name: "Teamwork", level: "Proficient", percentage: 88, tag: "Collaboration", experienceNote: "Cross-functional cooperation, peer code reviews, sprint execution" },
      { name: "Time Management", level: "Proficient", percentage: 85, tag: "Delivery", experienceNote: "Prioritizing high-impact KPI deliveries against project milestones" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ipl-analytics",
    title: "IPL Performance Analytics Dashboard",
    subtitle: "Interactive Power BI dashboard analyzing 15+ IPL seasons (2008–2023) to understand team dynamics, player consistency, and match strategies.",
    category: "Power BI",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "Excel"],
    description: "A comprehensive sports analytics solution built in Power BI that processes historical Indian Premier League match and delivery-level datasets. Features custom DAX measures for dynamic win rate calculations, toss impact analysis, and player scoring trends across 15+ tournament editions.",
    featureBadges: [
      "Dynamic KPIs",
      "DAX Measures",
      "Power Query ETL",
      "Data Modeling",
      "Points Table",
      "Player Performance"
    ],
    highlights: [
      "Dynamic KPIs & DAX measures tracking win percentages, strike rates, economy rates, and boundary percentages across seasons",
      "Automated Power Query pipeline cleaning and transforming 200,000+ delivery records and match-level outcome tables",
      "Star-schema data model linking Match Facts with Team, Player, Venue, and Season dimensions",
      "Interactive Points Table with automated Net Run Rate (NRR) and qualification indicators",
      "Team standings, head-to-head match outcomes, and toss-decision impact visualizer",
      "Player performance deep-dive with orange & purple cap trajectory comparisons",
      "Season-wise comparative analytics with dynamic slicers for franchise eras"
    ],
    metrics: [
      { label: "Seasons Covered", value: "15+ (2008-2023)" },
      { label: "Matches Analyzed", value: "1,000+" },
      { label: "DAX Measures Built", value: "24+" },
      { label: "Deliveries Processed", value: "230K+" }
    ],
    keyInsights: [
      "Teams winning the toss chose to bowl first in 61.4% of playoff games, yielding a 53.8% match win rate in dew-heavy venues.",
      "Top 3 batting order positions accounted for 64.2% of total match winning team runs across all seasons.",
      "Powerplay run rate (>8.4 RPO) proved to be the single highest predictor of winning match outcomes (>72% win probability)."
    ],
    sqlSnippets: [
      {
        title: "Toss Decision vs Match Outcome Win Rate",
        code: `SELECT 
    toss_decision,
    COUNT(*) AS total_matches,
    SUM(CASE WHEN toss_winner = match_winner THEN 1 ELSE 0 END) AS won_after_toss_win,
    ROUND(SUM(CASE WHEN toss_winner = match_winner THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS win_percentage
FROM ipl_matches
GROUP BY toss_decision;`,
        description: "Evaluates the historical winning probability when winning the coin toss."
      },
      {
        title: "Top 5 Batsmen by Strike Rate in Death Overs",
        code: `SELECT 
    batsman,
    SUM(batsman_runs) AS total_runs,
    COUNT(ball) AS balls_faced,
    ROUND(SUM(batsman_runs) * 100.0 / COUNT(ball), 2) AS death_overs_strike_rate
FROM ipl_deliveries
WHERE over_number >= 16 AND is_super_over = 0
GROUP BY batsman
HAVING COUNT(ball) >= 150
ORDER BY death_overs_strike_rate DESC
LIMIT 5;`,
        description: "Identifies the most lethal death-over hitters with statistical thresholding."
      }
    ],
    daxSnippets: [
      {
        title: "Team Win Percentage Measure",
        code: `Team Win% = 
VAR TotalMatches = CALCULATE(COUNTROWS('Fact_Matches'), ALLSELECTED('Fact_Matches'))
VAR Wins = CALCULATE(
    COUNTROWS('Fact_Matches'), 
    'Fact_Matches'[Winner] = SELECTEDVALUE('Dim_Teams'[TeamName])
)
RETURN 
    DIVIDE(Wins, TotalMatches, 0)`,
        description: "Calculates responsive win rates reflecting active slicers for season and venue."
      }
    ],
    chartData: {
      type: "bar",
      title: "Top Franchise Titles & Win Percentage",
      data: [
        { label: "Mumbai Indians", value: 5, rate: "56.7% Win Rate" },
        { label: "Chennai Super Kings", value: 5, rate: "58.4% Win Rate" },
        { label: "Kolkata Knight Riders", value: 3, rate: "51.2% Win Rate" },
        { label: "Sunrisers Hyderabad", value: 2, rate: "48.9% Win Rate" },
        { label: "Rajasthan Royals", value: 1, rate: "49.1% Win Rate" }
      ]
    },
    githubUrl: "https://github.com/swapnilyadav123/ipl-analytics-powerbi",
    demoUrl: "https://github.com/swapnilyadav123",
    visualTheme: {
      primaryColor: "blue",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      badgeText: "text-blue-700"
    }
  },
  {
    id: "global-sales",
    title: "Global Sales Data Analysis Dashboard",
    subtitle: "Interactive Tableau dashboard analyzing global sales performance across countries, customer segments, and multi-year time periods.",
    category: "Tableau",
    technologies: ["Tableau", "Data Analysis", "Data Visualization", "Excel", "Time-Series"],
    description: "An executive-ready Tableau business intelligence dashboard designed to monitor revenue streams, country-level profit margins, customer lifetime value, and seasonal shopping spikes. Features rich choropleth maps, monthly time-series decompositions, and customer tier analyses.",
    featureBadges: [
      "Revenue Analysis",
      "Country Performance",
      "Customer Cohorts",
      "Monthly Trends",
      "Interactive Maps",
      "Time-Series"
    ],
    highlights: [
      "Comprehensive Revenue & Profitability Analysis across North America, Europe, and Asia-Pacific regions",
      "Country-wise performance heatmaps spotlighting top contributing markets and emerging territories",
      "Customer analysis segmenting buyers by purchase frequency and total lifetime revenue contributions",
      "Monthly revenue trends identifying strong Q4 seasonality with a peak monthly revenue of $1.5M in November",
      "Top VIP customer cohort analysis highlighting individual enterprise accounts contributing $280K+ revenue",
      "Interactive dual-axis charts, custom parameter controls, and dynamic filter actions",
      "Time-series trend analysis demonstrating year-over-year growth trajectories and product category margins"
    ],
    metrics: [
      { label: "Peak Month Revenue", value: "$1.5M (Nov)" },
      { label: "Top Customer Segment", value: "$280K+" },
      { label: "Global Regions", value: "4 Continents" },
      { label: "Orders Analyzed", value: "50,000+" }
    ],
    keyInsights: [
      "November achieved record peak monthly revenue of $1.5M driven by Black Friday and holiday promotional surges (+42% vs October).",
      "The top 10% of high-value customer accounts contributed over $280K in cumulative gross profit with a 38% higher retention rate.",
      "Technology hardware products generated the highest gross margins (41.2%), while office supplies delivered the highest unit volume."
    ],
    sqlSnippets: [
      {
        title: "Monthly Revenue & YoY Growth Calculation",
        code: `WITH monthly_sales AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS sales_month,
        SUM(sales_amount) AS current_revenue,
        COUNT(DISTINCT customer_id) AS active_customers
    FROM global_orders
    GROUP BY 1
)
SELECT 
    sales_month,
    current_revenue,
    LAG(current_revenue, 1) OVER (ORDER BY sales_month) AS prev_month_revenue,
    ROUND(((current_revenue - LAG(current_revenue, 1) OVER (ORDER BY sales_month)) / 
          LAG(current_revenue, 1) OVER (ORDER BY sales_month)) * 100, 2) AS mom_growth_pct
FROM monthly_sales;`,
        description: "Extracts month-over-month sales acceleration to feed Tableau time-series."
      }
    ],
    chartData: {
      type: "line",
      title: "Monthly Revenue Trend ($ Millions)",
      data: [
        { label: "Jan", value: 0.65 },
        { label: "Mar", value: 0.78 },
        { label: "May", value: 0.82 },
        { label: "Jul", value: 0.94 },
        { label: "Sep", value: 1.10 },
        { label: "Nov (Peak)", value: 1.50 },
        { label: "Dec", value: 1.35 }
      ]
    },
    githubUrl: "https://github.com/swapnilyadav123/global-sales-tableau",
    demoUrl: "https://github.com/swapnilyadav123",
    visualTheme: {
      primaryColor: "sky",
      badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
      badgeText: "text-sky-700"
    }
  },
  {
    id: "ride-hailing",
    title: "Ride-Hailing Operations & Revenue Analysis Dashboard",
    subtitle: "Five-page comprehensive Power BI dashboard analyzing 103,024+ ride bookings and ₹35M total booking value.",
    category: "Power BI",
    technologies: ["Power BI", "SQL", "Excel", "Data Analysis", "MySQL"],
    description: "An operational and financial telemetry dashboard for urban mobility platforms. Built across five specialized analytical views using 10 optimized SQL views and queries to isolate cancellation root causes, revenue leakages, vehicle fleet utilization, and customer rating distributions.",
    featureBadges: [
      "Overall",
      "Vehicle Type",
      "Revenue",
      "Cancellation",
      "Ratings"
    ],
    highlights: [
      "103,024+ Ride Bookings Analyzed with a total recorded booking value of ₹35,000,000+ (₹35M)",
      "Engineered 10 modular SQL queries and database views for aggregated metric ingestion",
      "Deep Cancellation Analysis: Uncovered a 28.08% overall cancellation rate with detailed Driver vs Customer segmentation",
      "Customer vs Driver cancellation rationale tracking (e.g., Driver asked for cash, ETA too long, address mismatch)",
      "Payment method distribution analysis (UPI, Credit/Debit Card, Cash, Digital Wallets)",
      "Customer & Driver ratings distribution correlating ride satisfaction with driver vehicle categories",
      "Vehicle-type performance comparing Prime Sedan, Auto, Mini, and Bike taxi revenue yields and distance metrics"
    ],
    metrics: [
      { label: "Total Bookings", value: "103,024" },
      { label: "Booking Value", value: "₹35M+" },
      { label: "Cancellation Rate", value: "28.08%" },
      { label: "SQL Views Created", value: "10" }
    ],
    keyInsights: [
      "The overall cancellation rate stood at 28.08%, with customer-initiated cancellations (16.2%) outpacing driver-initiated cancellations (11.88%).",
      "Prime Sedan vehicles generated the highest average booking value (₹480/trip), whereas Auto Rickshaws delivered the highest trip completion consistency (81.4%).",
      "Digital UPI transactions accounted for 54.3% of all completed booking payments, reducing cash-handling dispute tickets by 32%."
    ],
    sqlSnippets: [
      {
        title: "SQL View: Cancellation Reason Breakdown",
        code: `CREATE OR REPLACE VIEW view_cancellation_analysis AS
SELECT 
    booking_status,
    cancelled_by,
    cancellation_reason,
    COUNT(booking_id) AS total_cancelled_rides,
    ROUND(COUNT(booking_id) * 100.0 / (SELECT COUNT(*) FROM ride_bookings WHERE booking_status = 'Cancelled'), 2) AS pct_of_cancellations,
    ROUND(COUNT(booking_id) * 100.0 / (SELECT COUNT(*) FROM ride_bookings), 2) AS pct_of_all_rides
FROM ride_bookings
WHERE booking_status = 'Cancelled'
GROUP BY booking_status, cancelled_by, cancellation_reason
ORDER BY total_cancelled_rides DESC;`,
        description: "Identifies driver vs customer cancellation triggers across 103K+ trips."
      },
      {
        title: "SQL Query: Vehicle Fleet Revenue & Avg Distance",
        code: `SELECT 
    vehicle_type,
    COUNT(booking_id) AS total_completed_rides,
    SUM(booking_value) AS total_revenue_inr,
    ROUND(AVG(booking_value), 2) AS avg_fare_per_ride,
    ROUND(AVG(ride_distance_km), 2) AS avg_distance_km
FROM ride_bookings
WHERE booking_status = 'Success'
GROUP BY vehicle_type
ORDER BY total_revenue_inr DESC;`,
        description: "Calculates yield per vehicle class to power the Vehicle Type BI page."
      }
    ],
    daxSnippets: [
      {
        title: "Cancellation Rate % DAX",
        code: `Cancellation Rate % = 
VAR TotalBookings = COUNTROWS('Fact_Bookings')
VAR CancelledBookings = CALCULATE(
    COUNTROWS('Fact_Bookings'), 
    'Fact_Bookings'[Booking_Status] = "Cancelled"
)
RETURN 
    DIVIDE(CancelledBookings, TotalBookings, 0)`,
        description: "Outputs the exact 28.08% baseline cancellation rate dynamic across filters."
      }
    ],
    chartData: {
      type: "donut",
      title: "Booking Status & Cancellation Share",
      data: [
        { label: "Completed Rides (71.92%)", value: 74100, color: "#10b981" },
        { label: "Customer Cancelled (16.20%)", value: 16690, color: "#f59e0b" },
        { label: "Driver Cancelled (11.88%)", value: 12234, color: "#ef4444" }
      ]
    },
    githubUrl: "https://github.com/swapnilyadav123/ride-hailing-analytics-powerbi",
    demoUrl: "https://github.com/swapnilyadav123",
    visualTheme: {
      primaryColor: "indigo",
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      badgeText: "text-indigo-700"
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "deloitte-simulation",
    company: "Deloitte",
    role: "Data Analytics Job Simulation",
    period: "March 2026",
    dateBadge: "March 2026",
    type: "Virtual Experience Program",
    location: "Forage Platform",
    summary: "Completed an intensive virtual experience simulation focused on forensic technology, data discovery, exploratory data analysis, and executive communication.",
    bullets: [
      "Completed hands-on data analysis and forensic technology tasks for client business cases",
      "Analyzed complex datasets to identify hidden transaction patterns, anomalies, and solve business problems",
      "Applied structured problem-solving techniques and rigorous quality verification to raw data feeds",
      "Presented data-driven findings clearly with executive summary documentation and actionable recommendations"
    ],
    technologies: ["Data Analytics", "Forensic Discovery", "Data Cleaning", "Problem Solving", "Executive Reporting"],
    forageProgram: true
  },
  {
    id: "tata-simulation",
    company: "Tata Group",
    role: "Data Visualization Job Simulation",
    period: "March 2026",
    dateBadge: "March 2026",
    type: "Virtual Experience Program",
    location: "Forage Platform",
    summary: "Practiced business scenario framing, visual data architecture, and C-suite data storytelling through real-world corporate case studies.",
    bullets: [
      "Framed business scenarios to understand the core metrics required by senior executives and operations managers",
      "Translated high-level business requirements into specific visualization requirements and metric schemas",
      "Built clean, intuitive visualizations (time series, heatmaps, categorical comparisons) to communicate insights",
      "Practiced data storytelling for non-technical stakeholders, emphasizing actionable business decisions"
    ],
    technologies: ["Data Visualization", "Tableau / Power BI", "Business Scenarios", "Data Storytelling", "Executive Communication"],
    forageProgram: true
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-deloitte",
    title: "Data Analytics Job Simulation",
    organization: "Deloitte",
    platform: "Forage",
    date: "March 2026",
    credentialId: "FORAGE-DEL-DA-2026-9812",
    summary: "Practical experience in forensic technology, data scrubbing, anomaly detection, and data-backed business advisory.",
    skillsCovered: ["Data Analysis", "Forensic Analytics", "Structured Problem Solving", "Data Integrity", "Insights Reporting"],
    viewUrl: "https://www.theforage.com/simulations/deloitte"
  },
  {
    id: "cert-tata",
    title: "Data Visualization: Empowering Business with Effective Insights",
    organization: "Tata Group",
    platform: "Forage",
    date: "March 2026",
    credentialId: "FORAGE-TATA-DV-2026-4419",
    summary: "Hands-on simulation framing commercial scenarios, engineering visuals for leadership, and delivering impactful data narratives.",
    skillsCovered: ["Data Visualization", "Executive Storytelling", "Dashboard Architecture", "KPI Formulation", "Business Requirements"],
    viewUrl: "https://www.theforage.com/simulations/tata"
  },
  {
    id: "cert-alphinity",
    title: "Android Application Development Internship",
    organization: "Alphinity SoftTech Pvt. Ltd.",
    platform: "Internship Certificate",
    date: "June 2025",
    credentialId: "ALPH-INTERN-2025-062",
    summary: "Engineering internship gaining hands-on software development experience, OOP fundamentals, UI lifecycle, and mobile data workflows.",
    skillsCovered: ["Java", "Android Studio", "UI/UX Layouts", "App Architecture", "Version Control", "API Integration"],
    viewUrl: "#"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "btech-cs",
    degree: "B.Tech, Computer Science & Engineering",
    institution: "D Y Patil Technical Campus, Talsande",
    period: "2022 – May 2026",
    score: "8.2 / 10",
    scoreLabel: "CGPA",
    status: "Completed (May 2026)",
    location: "Kolhapur, Maharashtra",
    coursework: [
      "Database Management Systems (DBMS)",
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python)",
      "Operating Systems & Computer Networks",
      "Software Engineering & Project Management"
    ],
    highlights: [
      "Successfully completed B.Tech in Computer Science & Engineering in May 2026 with 8.2 CGPA",
      "Focused project specialization on Database Queries, Business Intelligence, and Data Visualization",
      "Active participant in technical workshops, data hackathons, and software development projects"
    ]
  },
  {
    id: "hsc-12",
    degree: "Class 12 (HSC) — Science Stream",
    institution: "YCIS Satara (Yashwantrao Chavan Institute of Science)",
    period: "2021 – 2022",
    score: "51.80%",
    scoreLabel: "Percentage",
    status: "Completed",
    location: "Satara, Maharashtra",
    coursework: [
      "Mathematics & Statistics",
      "Physics",
      "Chemistry",
      "Computer Science Fundamentals"
    ],
    highlights: [
      "Strong interest developed in Computer Science and mathematical logic",
      "Transitioned directly into Computer Science Engineering degree"
    ]
  }
];
