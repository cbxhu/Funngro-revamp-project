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
  sampleCampaigns: string[];
  typicalFormats: string;
  youthInsightFocus: string;
}

export const SYSTEM_FLOW_STEPS: FlowStep[] = [
  {
    id: 1,
    code: '01',
    title: 'Sign Up & Set Up Your Profile',
    shortTitle: 'Sign Up',
    summary:
      'Register with basic student credentials, select your skill interests, and complete simple identity and guardian-consent onboarding.',
    actionDetail:
      'Choose categories such as short-form video, product reviews, surveys, or app testing so the feed prioritizes matching briefs.',
    verificationNote: 'Standard KYC & student verification ensures a trusted marketplace for partner companies.',
    durationLabel: '3–5 mins onboarding',
    deliverableExample: 'Verified Teenlancer profile with UPI-ready payout destination',
  },
  {
    id: 2,
    code: '02',
    title: 'Choose a Verified Brand Campaign',
    shortTitle: 'Pick Campaign',
    summary:
      'Browse active projects posted by consumer, fintech, and research brands with transparent payout amounts and clear completion rules.',
    actionDetail:
      'Inspect the step-by-step brief, required deliverables, submission deadline, and acceptance criteria before claiming a slot.',
    verificationNote: 'Every campaign displays fixed payout terms upfront with zero bidding wars or hidden deductions.',
    durationLabel: 'Self-paced selection',
    deliverableExample: 'Claimed brief · e.g. UPI wallet UX walkthrough or 30s product reel',
  },
  {
    id: 3,
    code: '03',
    title: 'Complete the Task & Submit Proof',
    shortTitle: 'Submit Proof',
    summary:
      'Execute the required activity remotely from your phone or laptop and upload structured proof directly inside the campaign dashboard.',
    actionDetail:
      'Attach task screenshots, published reel URLs, survey completion receipts, or written feedback reports following the checklist.',
    verificationNote: 'Guided proof fields prevent accidental missing details or formatting rejections.',
    durationLabel: '15 mins – 48 hrs',
    deliverableExample: 'Uploaded proof pack: video link + analytics screenshot + brief notes',
  },
  {
    id: 4,
    code: '04',
    title: 'Campaign Review & Verification',
    shortTitle: 'Verification',
    summary:
      'Funngro moderation and partner brand reviewers audit your submitted proof against the campaign checklist for accuracy and quality.',
    actionDetail:
      'If a minor edit is required—such as a clearer screenshot or caption tag—actionable revision notes appear inside your task log.',
    verificationNote: 'Automated fraud filtering paired with human quality checks protects genuine earners and brand ROI.',
    durationLabel: '24–48 hrs review',
    deliverableExample: 'Status updated to Approved · Payout queued for settlement',
  },
  {
    id: 5,
    code: '05',
    title: 'Get Paid via UPI or Bank Transfer',
    shortTitle: 'UPI Payout',
    summary:
      'Approved campaign earnings credit straight to your Funngro wallet and transfer seamlessly to your UPI ID or linked bank account.',
    actionDetail:
      'Track every completed project, pending review, and settled transaction in one transparent ledger with instant payout receipts.',
    verificationNote: 'Direct settlement via verified UPI rails or IMPS/NEFT bank transfer with zero payout friction.',
    durationLabel: 'Instant to 24 hrs transfer',
    deliverableExample: 'Credited to UPI / Bank · Reflected in transaction history',
  },
];

export const ECOSYSTEM_PROGRESSION: ProgressionStage[] = [
  {
    tier: 'Stage 01',
    stageName: 'Foundation · Tasks, Surveys & Sampling',
    headline: 'Build reliability with low-barrier remote tasks',
    description:
      'New members start with structured micro-tasks, consumer feedback surveys, app usability checks, and physical or digital product sampling. Every accurately verified submission builds an on-platform reliability score.',
    unlockRequirement: 'Verified profile & onboarding completion',
    campaignFormats: [
      'Structured youth sentiment surveys',
      'App installation & UI bug feedback',
      'Product sampling & honest usage reviews',
      'Merchant & catalog verification micro-tasks',
    ],
    earningModel: 'Fixed per-task payouts · Fast verification turnaround',
    skillsBuilt: ['Attention to detail', 'Structured feedback writing', 'Deadline discipline'],
  },
  {
    tier: 'Stage 02',
    stageName: 'Growth · Content Creation & Referrals',
    headline: 'Scale earnings through creative output and peer reach',
    description:
      'Consistent accuracy unlocks creative content briefs and community referral programs. Earners produce short-form reels, carousel posts, product photos, and editorial blogs while driving authentic peer adoption.',
    unlockRequirement: 'Proven completion accuracy across Foundation briefs',
    campaignFormats: [
      'Short-form Reels & Shorts product storytelling',
      'Instagram posts, campus stories & photography',
      'Long-form product blogs & review articles',
      'Tracked peer referral & app onboarding drives',
    ],
    earningModel: 'Higher per-deliverable payouts + referral milestone bonuses',
    skillsBuilt: ['Short-form video production', 'Copywriting & hooks', 'Audience persuasion'],
  },
  {
    tier: 'Stage 03',
    stageName: 'Leadership · Tier-1 Campaigns & Squad Lead',
    headline: 'Lead campus squads and flagship multi-week activations',
    description:
      'Top-rated Teenlancers graduate into flagship retainers and team leadership. Squad leads mentor newer earners, coordinate campus or city-level brand activations, and deliver strategic insights directly to brand managers.',
    unlockRequirement: 'High verification score & multi-campaign track record',
    campaignFormats: [
      'Flagship brand ambassador retainers',
      'Peer squad coordination & proof mentoring',
      'Multi-city campus launch activations',
      'Focus group moderation & Gen-Z advisory panels',
    ],
    earningModel: 'Retainer stipends + team performance incentives',
    skillsBuilt: ['Team coordination', 'Campaign operations', 'Stakeholder communication'],
  },
];

export const SKILL_OUTCOMES: SkillCard[] = [
  {
    index: '01',
    title: 'Digital Content Production',
    subtitle: 'Reels · Product Photography · Copywriting',
    description:
      'Learn how real marketing teams write creative briefs, structure 30-second visual hooks, shoot crisp product frames on a phone, and deliver brand-safe assets.',
    practicalOutcome: 'Leave with a verified portfolio of live brand deliverables rather than classroom hypotheticals.',
  },
  {
    index: '02',
    title: 'Consumer Research & Product QA',
    subtitle: 'UX Audits · Beta Testing · Survey Synthesis',
    description:
      'Evaluate onboarding flows for fintech apps, test new consumer products before launch, and document actionable usability observations that product managers actually ship.',
    practicalOutcome: 'Develop analytical product thinking and structured bug-reporting habits early.',
  },
  {
    index: '03',
    title: 'Financial Independence & Discipline',
    subtitle: 'UPI Settlement · Earnings Ledger · Budgeting',
    description:
      'Experience the full cycle of earning your own money remotely—tracking pending verifications, managing project timelines, and receiving clean payouts via UPI or bank transfer.',
    practicalOutcome: 'Build real-world financial confidence before entering full-time careers.',
  },
  {
    index: '04',
    title: 'Remote Operations & Leadership',
    subtitle: 'Brief Compliance · Squad Coordination · Ownership',
    description:
      'Progress from solo contributor to mentoring campus peers, reviewing deliverable checklists, and coordinating regional campaign sprints across flexible study schedules.',
    practicalOutcome: 'Demonstrate proven project ownership on resumes and college applications.',
  },
];

export const BRAND_SERVICES: BrandService[] = [
  {
    id: 'content-creation',
    index: '01',
    category: 'content',
    categoryLabel: 'Content Creation',
    title: 'Content Creation at Youth Scale',
    formats: 'Reels · Social Posts · Blogs · Product Photos',
    description:
      'Deploy authentic Gen-Z creators to shoot short-form reels, design social carousels, write honest product blogs, and capture lifestyle photography tailored for mobile-first audiences.',
    brandOutcome: 'High-volume, relatable UGC assets delivered at a fraction of traditional studio retainers.',
    teenSkill: 'Visual storytelling, editing & brief execution',
    turnaround: '3–5 days batch delivery',
  },
  {
    id: 'brand-promotion',
    index: '02',
    category: 'growth',
    categoryLabel: 'Growth & Reach',
    title: 'Campus & Peer Brand Promotion',
    formats: 'Social Advocacy · Campus Buzz · Launch Drops',
    description:
      'Activate trusted student voices across colleges and local communities to introduce new apps, consumer launches, and seasonal offers through organic peer conversations.',
    brandOutcome: 'Hyper-local brand recall across Tier-1, Tier-2, and Tier-3 student corridors.',
    teenSkill: 'Community outreach & brand advocacy',
    turnaround: '48 hrs activation start',
  },
  {
    id: 'referrals',
    index: '03',
    category: 'growth',
    categoryLabel: 'Growth & Reach',
    title: 'Verified Referral & Acquisition Drives',
    formats: 'App Installs · Wallet Onboarding · Sign-Ups',
    description:
      'Pay strictly for verified user actions—from KYC-ready fintech wallet sign-ups to mobility app first rides—backed by strict proof validation and anti-duplication checks.',
    brandOutcome: 'Measurable customer acquisition with predictable cost-per-verified-action.',
    teenSkill: 'Persuasive pitching & funnel guidance',
    turnaround: 'Real-time conversion tracking',
  },
  {
    id: 'sampling',
    index: '04',
    category: 'research',
    categoryLabel: 'Research & QA',
    title: 'Product Sampling & Trial Campaigns',
    formats: 'Unboxing · Sensory Feedback · First-Use Logs',
    description:
      'Put physical snacks, beverages, grooming kits, or digital subscriptions directly into young consumers’ hands and capture structured usage logs plus honest photo proof.',
    brandOutcome: 'Pre-launch product validation paired with authentic word-of-mouth trial.',
    teenSkill: 'Critical evaluation & structured reporting',
    turnaround: '5–7 days cohort turnaround',
  },
  {
    id: 'surveys',
    index: '05',
    category: 'research',
    categoryLabel: 'Research & QA',
    title: 'Youth Surveys & Sentiment Panels',
    formats: 'Quant Polls · Pricing Studies · Brand Recall',
    description:
      'Collect rapid quantitative and qualitative responses from verified 14–22 year-old demographics segmented by city tier, campus stream, and digital spending habits.',
    brandOutcome: 'Clean, fraud-screened Gen-Z market intelligence without traditional agency lag.',
    teenSkill: 'Analytical reflection & market articulation',
    turnaround: '24–72 hrs panel completion',
  },
  {
    id: 'micro-tasks',
    index: '06',
    category: 'research',
    categoryLabel: 'Research & QA',
    title: 'Micro-Tasks & Digital Audits',
    formats: 'App UX Testing · Listing QA · Data Tagging',
    description:
      'Execute distributed operational sprints including mobile app usability walkthroughs, e-commerce catalog verification, store photo audits, and localized language checks.',
    brandOutcome: 'On-demand operational precision across thousands of distributed devices.',
    teenSkill: 'QA methodology & operational consistency',
    turnaround: 'Same-day sprint completion',
  },
];

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    id: 'fintech',
    name: 'Fintech',
    tagline: 'Teen wallets, UPI tools, savings & investment apps',
    description:
      'Fintech platforms partner with Funngro to test first-time user onboarding, gather honest feedback on savings interfaces, and drive verified youth adoption across campuses.',
    sampleCampaigns: [
      'UPI & digital wallet onboarding usability walkthroughs',
      'Explainer Reels demonstrating pocket-money budgeting features',
      'Verified student sign-up & first-transaction referral sprints',
    ],
    typicalFormats: 'App Testing · Referrals · Educational Reels',
    youthInsightFocus: 'Friction points in KYC flows, trust triggers, and daily UPI habits',
  },
  {
    id: 'bfsi',
    name: 'BFSI',
    tagline: 'Banks, insurance innovators & financial literacy programs',
    description:
      'Traditional and modern BFSI institutions use Funngro to make complex financial products approachable for young adults entering their first banking relationships.',
    sampleCampaigns: [
      'Financial literacy micro-blogs and carousel explainers',
      'Youth awareness surveys on student banking and debit cards',
      'Campus outreach campaigns for zero-balance youth accounts',
    ],
    typicalFormats: 'Blogs & Carousels · Surveys · Brand Promotion',
    youthInsightFocus: 'Awareness gaps in credit, insurance, and digital banking safety',
  },
  {
    id: 'research',
    name: 'Research & Insights',
    tagline: 'Market research firms, consultancies & product teams',
    description:
      'Insight teams tap directly into Funngro’s verified pan-India youth network to validate packaging concepts, pricing elasticity, media consumption, and emerging cultural trends.',
    sampleCampaigns: [
      'Multi-city quantitative surveys across Tier-1 to Tier-3 cohorts',
      'Concept & packaging A/B preference panels',
      '7-day digital media diary & app usage studies',
    ],
    typicalFormats: 'Surveys · Focus Panels · Micro-Tasks',
    youthInsightFocus: 'Regional sentiment shifts, brand switching triggers, and price sensitivity',
  },
  {
    id: 'mobility',
    name: 'Mobility & EV',
    tagline: 'Electric two-wheelers, ride-sharing & campus transit',
    description:
      'Mobility brands engage college commuters to map daily transit pain points, generate test-ride interest, and build local excitement around sustainable electric commutes.',
    sampleCampaigns: [
      'Campus commute & two-wheeler preference research polls',
      'Short-form video reviews of EV scooters & charging stations',
      'First-ride referral drives across university hubs',
    ],
    typicalFormats: 'Surveys · Reels · Referrals',
    youthInsightFocus: 'Daily commute distances, range perception, and shared transit adoption',
  },
  {
    id: 'consumer',
    name: 'Consumer & D2C Brands',
    tagline: 'Snacks, beverages, skincare, audio & lifestyle gear',
    description:
      'Fast-growing D2C and FMCG brands rely on Funngro for high-volume unboxing reels, authentic product sampling feedback, and peer-driven campus trial.',
    sampleCampaigns: [
      'Doorstep product sampling followed by structured taste/UX logs',
      'Creator-shot unboxing Reels and lifestyle product photography',
      'E-commerce marketplace review & listing quality checks',
    ],
    typicalFormats: 'Sampling · Content Creation · Micro-Tasks',
    youthInsightFocus: 'Packaging appeal, repeat-purchase intent, and peer recommendation drivers',
  },
];
