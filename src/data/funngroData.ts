export type PageId = 'teen' | 'brand';

export interface FlowStep {
  id: number;
  code: string;
  title: string;
  shortTitle: string;
  summary: string;
  actionDetail: string;
  verificationNote: string;
  durationLabel: string;
  deliverableExample: string;
}

export interface ProgressionStage {
  tier: string;
  stageName: string;
  headline: string;
  description: string;
  unlockRequirement: string;
  campaignFormats: string[];
  earningModel: string;
  skillsBuilt: string[];
}

export interface SkillCard {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  practicalOutcome: string;
}

export interface BrandService {
  id: string;
  index: string;
  category: 'content' | 'growth' | 'research';
  categoryLabel: string;
  title: string;
  formats: string;
  description: string;
  brandOutcome: string;
  teenSkill: string;
  turnaround: string;
}

export interface IndustryVertical {
  id: string;
  name: string;
  tagline: string;
  description: string;
  campaigns: string[];
  typicalFormats: string;
  youthInsightFocus: string;
}

export const SYSTEM_FLOW_STEPS: FlowStep[] = [
  {
    id: 1,
    code: '01',
    title: 'Sign Up & Complete Your Profile',
    shortTitle: 'Sign Up',
    summary:
      'Create your Teenlancer account with basic student details, choose your interests, and complete simple profile and guardian-consent onboarding.',
    actionDetail:
      'Pick focus areas like short-form video, product reviews, surveys, or app testing so matching brand projects appear right away.',
    verificationNote:
      'Quick student verification keeps the platform safe and trustworthy for both young earners and partner companies.',
    durationLabel: '3–5 mins setup',
    deliverableExample: 'Verified Teenlancer profile ready for UPI payouts',
  },
  {
    id: 2,
    code: '02',
    title: 'Choose a Brand Campaign',
    shortTitle: 'Choose Campaign',
    summary:
      'Browse live projects from verified companies with upfront payout amounts, clear instructions, and flexible remote deadlines.',
    actionDetail:
      'Review the campaign brief, check what proof is required, and claim a slot that fits around your school or college schedule.',
    verificationNote:
      'Every project lists fixed payout terms before you begin—no bidding wars or surprise deductions.',
    durationLabel: 'Flexible selection',
    deliverableExample: 'Active brief · e.g. app feedback task or 30-second product reel',
  },
  {
    id: 3,
    code: '03',
    title: 'Complete the Task & Submit Proof',
    shortTitle: 'Submit Proof',
    summary:
      'Finish the task remotely from your phone or laptop and upload your proof of work directly inside the project card.',
    actionDetail:
      'Attach task screenshots, published reel links, survey confirmation codes, or review notes using the guided upload form.',
    verificationNote:
      'Clear upload prompts help you include every required detail on the first attempt.',
    durationLabel: '15 mins – 48 hrs',
    deliverableExample: 'Submitted proof: post link + screenshot + short review note',
  },
  {
    id: 4,
    code: '04',
    title: 'Quality Review & Approval',
    shortTitle: 'Verification',
    summary:
      'Our review team and the partner brand check your submission against the campaign checklist to confirm accuracy.',
    actionDetail:
      'If anything small needs updating—such as a clearer screenshot or missing hashtag—you get direct notes inside your task log.',
    verificationNote:
      'Thorough verification protects genuine Teenlancers and guarantees reliable results for companies.',
    durationLabel: '24–48 hrs review',
    deliverableExample: 'Submission approved · Earnings cleared for payout',
  },
  {
    id: 5,
    code: '05',
    title: 'Get Paid via UPI or Bank Transfer',
    shortTitle: 'Get Paid',
    summary:
      'Once approved, your earnings move into your Funngro wallet and can be transferred straight to your UPI ID or linked bank account.',
    actionDetail:
      'Keep track of every completed task, pending review, and bank or UPI transfer in one clear earnings ledger.',
    verificationNote:
      'Fast settlement via verified UPI and bank transfer rails directly into your account.',
    durationLabel: 'Direct transfer',
    deliverableExample: 'Paid to UPI / Bank · Receipt saved in wallet history',
  },
];

export const ECOSYSTEM_PROGRESSION: ProgressionStage[] = [
  {
    tier: 'Level 01',
    stageName: 'Starter · Simple Tasks, Surveys & Sampling',
    headline: 'Build consistency with straightforward remote tasks',
    description:
      'Everyone starts with accessible projects such as youth surveys, app feedback tasks, and product sampling. Submitting accurate work on time builds your reliability rating.',
    unlockRequirement: 'Completed profile & basic verification',
    campaignFormats: [
      'Youth feedback surveys & brand polls',
      'Mobile app testing & usability checks',
      'Product sampling & honest first-use reviews',
      'Catalog checks & simple online micro-tasks',
    ],
    earningModel: 'Fixed per-task payouts · Quick review turnaround',
    skillsBuilt: ['Attention to detail', 'Clear written feedback', 'Meeting deadlines'],
  },
  {
    tier: 'Level 02',
    stageName: 'Creator · Content & Referral Campaigns',
    headline: 'Grow your earnings through content and peer reach',
    description:
      'A strong track record opens higher-paying creative briefs and referral drives. Create reels, social posts, product photos, and blogs while introducing peers to useful apps.',
    unlockRequirement: 'Consistent approval record on starter tasks',
    campaignFormats: [
      'Short-form Reels & Shorts product reviews',
      'Instagram posts, campus stories & photography',
      'Product blogs & comparison write-ups',
      'Verified peer referral & onboarding campaigns',
    ],
    earningModel: 'Higher per-deliverable payouts + referral milestones',
    skillsBuilt: ['Video storytelling', 'Social copywriting', 'Audience communication'],
  },
  {
    tier: 'Level 03',
    stageName: 'Leader · Flagship Campaigns & Squad Lead',
    headline: 'Lead campus teams and multi-week brand activations',
    description:
      'Top performers step into team and campaign leadership. Squad leaders guide newer Teenlancers, run campus or city-wide brand launches, and work closely with brand managers.',
    unlockRequirement: 'High reliability score & multi-campaign experience',
    campaignFormats: [
      'Long-term brand ambassador retainers',
      'Mentoring & reviewing peer squad submissions',
      'Campus & city-level product launch activations',
      'Moderating Gen-Z focus groups for brands',
    ],
    earningModel: 'Monthly retainers + team leadership incentives',
    skillsBuilt: ['Team leadership', 'Campaign management', 'Client communication'],
  },
];

export const SKILL_OUTCOMES: SkillCard[] = [
  {
    index: '01',
    title: 'Content Creation & Storytelling',
    subtitle: 'Reels · Product Photos · Blogs',
    description:
      'Learn how marketing teams brief creators, craft engaging 30-second video hooks, shoot clean product shots on a smartphone, and hit brand guidelines.',
    practicalOutcome: 'Build a real portfolio of published brand work while still in school or college.',
  },
  {
    index: '02',
    title: 'Product Testing & User Research',
    subtitle: 'UX Feedback · App QA · Surveys',
    description:
      'Test new fintech apps and consumer products before wider rollouts, spot friction in onboarding screens, and write feedback that product teams act on.',
    practicalOutcome: 'Gain practical product sense and structured analytical thinking early.',
  },
  {
    index: '03',
    title: 'Real Financial Independence',
    subtitle: 'UPI Payouts · Wallet Tracking · Saving',
    description:
      'Manage the complete cycle of earning independently—tracking approvals, hitting weekly goals, and receiving your own money via UPI or bank transfer.',
    practicalOutcome: 'Develop smart money habits and confidence before your first full-time job.',
  },
  {
    index: '04',
    title: 'Campaign & Team Leadership',
    subtitle: 'Peer Coordination · Campus Launches · Ownership',
    description:
      'Move from individual contributor to guiding campus squads, checking deliverable quality, and coordinating flexible remote campaigns around classes.',
    practicalOutcome: 'Show real-world project ownership on college applications and resumes.',
  },
];

export const BRAND_SERVICES: BrandService[] = [
  {
    id: 'content-creation',
    index: '01',
    category: 'content',
    categoryLabel: 'Content Creation',
    title: 'Content Creation',
    formats: 'Reels · Posts · Blogs · Photos',
    description:
      'Work with young creators to shoot short-form reels, publish social posts, write relatable blogs, and capture authentic product photography for mobile-first feeds.',
    brandOutcome: 'Steady stream of relatable youth-made creative assets without heavy studio costs.',
    teenSkill: 'Video editing, photography & copywriting',
    turnaround: '3–5 days delivery',
  },
  {
    id: 'brand-promotion',
    index: '02',
    category: 'growth',
    categoryLabel: 'Growth & Reach',
    title: 'Brand Promotion',
    formats: 'Campus Buzz · Social Sharing · Launch Drives',
    description:
      'Build genuine word-of-mouth across schools, colleges, and student communities through peer-led social sharing and local launch campaigns.',
    brandOutcome: 'Organic awareness across metro and Tier-2/Tier-3 youth hubs.',
    teenSkill: 'Community outreach & advocacy',
    turnaround: '48 hrs campaign launch',
  },
  {
    id: 'referrals',
    index: '03',
    category: 'growth',
    categoryLabel: 'Growth & Reach',
    title: 'Referrals & User Onboarding',
    formats: 'App Sign-Ups · Wallet Activations · First Rides',
    description:
      'Drive verified sign-ups and first-time activations for consumer apps, digital wallets, and student subscriptions with strict proof checks on every conversion.',
    brandOutcome: 'Predictable customer acquisition where budgets pay only for verified actions.',
    teenSkill: 'Product pitching & onboarding support',
    turnaround: 'Live conversion tracking',
  },
  {
    id: 'sampling',
    index: '04',
    category: 'research',
    categoryLabel: 'Research & QA',
    title: 'Product Sampling',
    formats: 'Home Trials · Unboxing · Honest Reviews',
    description:
      'Send snacks, beverages, personal care kits, or digital trials straight to young consumers and collect verified unboxing photos alongside candid product ratings.',
    brandOutcome: 'Real-world product trial paired with structured pre-launch feedback.',
    teenSkill: 'Product evaluation & review writing',
    turnaround: '5–7 days feedback loop',
  },
  {
    id: 'surveys',
    index: '05',
    category: 'research',
    categoryLabel: 'Research & QA',
    title: 'Youth Surveys & Feedback',
    formats: 'Market Polls · Pricing Checks · Brand Recall',
    description:
      'Gather fast, verified survey responses from ages 14–22 across regions to test pricing ideas, brand perception, and emerging youth trends.',
    brandOutcome: 'Clean Gen-Z consumer insights delivered quickly without agency delays.',
    teenSkill: 'Structured market reflection',
    turnaround: '24–72 hrs response window',
  },
  {
    id: 'micro-tasks',
    index: '06',
    category: 'research',
    categoryLabel: 'Research & QA',
    title: 'Micro-Tasks & App Testing',
    formats: 'UX Walkthroughs · Listing Checks · Data QA',
    description:
      'Run distributed digital sprints for mobile app usability testing, e-commerce catalog verification, store audits, and regional language reviews.',
    brandOutcome: 'Fast, accurate operational checks across real devices and cities.',
    teenSkill: 'QA testing & detail accuracy',
    turnaround: 'Same-day sprint results',
  },
];

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    id: 'fintech',
    name: 'Fintech',
    tagline: 'Digital wallets, UPI apps, savings & teen banking',
    description:
      'Fintech companies use Funngro to test onboarding flows with first-time digital earners, create simple explainer reels, and drive verified student sign-ups.',
    campaigns: [
      'UPI & wallet onboarding usability checks',
      'Short explainer reels on savings and pocket-money tools',
      'Verified student sign-up and first-transaction referrals',
    ],
    typicalFormats: 'App Testing · Referrals · Explainer Reels',
    youthInsightFocus: 'Onboarding drop-offs, trust signals, and everyday UPI habits',
  },
  {
    id: 'bfsi',
    name: 'BFSI',
    tagline: 'Banks, insurers & youth financial literacy',
    description:
      'Banks and financial institutions partner with Funngro to simplify insurance, debit cards, and smart saving habits for students stepping into formal finance.',
    campaigns: [
      'Financial literacy blogs and social carousel posts',
      'Student surveys on banking preferences and debit cards',
      'Campus awareness campaigns for youth savings accounts',
    ],
    typicalFormats: 'Blogs & Posts · Surveys · Brand Promotion',
    youthInsightFocus: 'Financial awareness gaps and digital banking expectations',
  },
  {
    id: 'research',
    name: 'Research',
    tagline: 'Market research teams, consumer panels & product insights',
    description:
      'Research teams tap into Funngro’s verified pan-India youth community to test packaging concepts, study spending patterns, and track brand recall.',
    campaigns: [
      'Multi-city quantitative surveys across Tier-1, 2, and 3 towns',
      'Packaging and concept preference panels',
      'Weekly digital media and app usage logs',
    ],
    typicalFormats: 'Surveys · Focus Panels · Micro-Tasks',
    youthInsightFocus: 'Regional buying habits, price sensitivity, and brand switching',
  },
  {
    id: 'mobility',
    name: 'Mobility',
    tagline: 'EV two-wheelers, ride-sharing & student commute',
    description:
      'Mobility and EV brands work with college commuters to understand daily travel needs, generate local buzz around new launches, and drive test rides.',
    campaigns: [
      'Campus commute and two-wheeler preference surveys',
      'Short video reviews of electric scooters and charging access',
      'First-ride referral drives around university campuses',
    ],
    typicalFormats: 'Surveys · Reels · Referrals',
    youthInsightFocus: 'Daily commute distances, range expectations, and ride-sharing habits',
  },
  {
    id: 'consumer',
    name: 'Consumer Brands',
    tagline: 'Food & beverage, skincare, audio & D2C lifestyle',
    description:
      'Consumer and D2C brands rely on Funngro for high-volume unboxing reels, home product sampling, and peer-driven campus trial.',
    campaigns: [
      'Doorstep product sampling with taste and quality logs',
      'Creator-shot unboxing reels and lifestyle photos',
      'Marketplace listing and review verification checks',
    ],
    typicalFormats: 'Sampling · Content Creation · Micro-Tasks',
    youthInsightFocus: 'Packaging appeal, repeat purchase intent, and peer recommendations',
  },
];
