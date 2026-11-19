import { useState } from 'react';
import {
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Users,
} from 'lucide-react';
import {
  BRAND_SERVICES,
  INDUSTRY_VERTICALS,
  PageId,
} from '../data/funngroData';
import { ResilientImage } from './ResilientImage';

interface BrandEcosystemPageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

type EcosystemFocus = 'loop' | 'brand' | 'teen';
type ServiceFilter = 'all' | 'content' | 'growth' | 'research';

export function BrandEcosystemPage({ onNavigate }: BrandEcosystemPageProps) {
  const [ecosystemFocus, setEcosystemFocus] = useState<EcosystemFocus>('loop');
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>('all');
  const [activeIndustryId, setActiveIndustryId] = useState<string>(
    INDUSTRY_VERTICALS[0].id
  );

  const filteredServices =
    serviceFilter === 'all'
      ? BRAND_SERVICES
      : BRAND_SERVICES.filter((item) => item.category === serviceFilter);

  const activeIndustry =
    INDUSTRY_VERTICALS.find((ind) => ind.id === activeIndustryId) ??
    INDUSTRY_VERTICALS[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#22C55E]">
                For Brands &amp; Companies · Youth Campaign Solutions
              </p>
              <h1
                className="mt-4 font-bold tracking-tight text-white text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08 }}
              >
                Reach Gen-Z through authentic content, feedback, and campus reach.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Partner with Funngro to run youth content creation, brand promotion, referrals, product sampling, surveys, and micro-tasks—backed by verified deliverables.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('brand-services')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#22C55E] px-6 py-3 text-sm font-semibold text-[#061810] transition-colors hover:bg-[#16A34A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>View Campaign Services</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('teen')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#13233A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#182C48] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>See Teen Journey</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-[#13233A] sm:h-96 lg:h-full">
              <ResilientImage
                src="/src/assets/images/funngro_brand_strategy_1795056773821.jpg"
                alt="Marketing and product strategy team reviewing campaign analytics and youth insights"
                className="h-full w-full object-cover"
                fallbackTitle="Brand Campaign Strategy"
                fallbackSubtitle="Verified youth execution, product feedback, and campaign tracking."
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-[#0B192C]/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-medium text-[#22C55E]">
                  Verified Execution · Pan-India Youth Network
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Budgets go strictly toward verified content, installs, sampling trials, and survey responses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Highlights */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/8 bg-[#13233A] p-5">
            <p className="font-mono-tabular text-2xl font-semibold text-white">6 Formats</p>
            <p className="mt-1 text-sm font-medium text-slate-200">Campaign Services</p>
            <p className="mt-1 text-xs text-slate-400">
              Content, promotion, referrals, sampling, surveys, QA.
            </p>
          </div>
          <div className="rounded-xl border border-white/8 bg-[#13233A] p-5">
            <p className="font-mono-tabular text-2xl font-semibold text-[#22C55E]">2-Sided</p>
            <p className="mt-1 text-sm font-medium text-slate-200">Mutual Ecosystem</p>
            <p className="mt-1 text-xs text-slate-400">
              Measurable brand reach paired with teen skill growth.
            </p>
          </div>
          <div className="rounded-xl border border-white/8 bg-[#13233A] p-5">
            <p className="font-mono-tabular text-2xl font-semibold text-white">100% Proof</p>
            <p className="mt-1 text-sm font-medium text-slate-200">Audited Delivery</p>
            <p className="mt-1 text-xs text-slate-400">
              Every submission is verified before payout release.
            </p>
          </div>
          <div className="rounded-xl border border-white/8 bg-[#13233A] p-5">
            <p className="font-mono-tabular text-2xl font-semibold text-white">5+ Sectors</p>
            <p className="mt-1 text-sm font-medium text-slate-200">Industry Focus</p>
            <p className="mt-1 text-xs text-slate-400">
              Fintech, BFSI, research, mobility, and consumer brands.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Two-Sided Ecosystem Diagram */}
      <section
        id="two-sided-diagram"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 border-b border-white/8 pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium text-[#22C55E]">
              How the Two-Sided Ecosystem Works
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
              Connecting company campaigns directly with young earners
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Highlight ecosystem perspective"
            className="inline-flex items-center rounded-xl border border-white/10 bg-[#13233A] p-1 self-start"
          >
            <button
              type="button"
              role="tab"
              aria-selected={ecosystemFocus === 'loop'}
              onClick={() => setEcosystemFocus('loop')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                ecosystemFocus === 'loop'
                  ? 'bg-[#22C55E] text-[#061810]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Full Ecosystem
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={ecosystemFocus === 'brand'}
              onClick={() => setEcosystemFocus('brand')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                ecosystemFocus === 'brand'
                  ? 'bg-[#22C55E] text-[#061810]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Brand Side
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={ecosystemFocus === 'teen'}
              onClick={() => setEcosystemFocus('teen')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                ecosystemFocus === 'teen'
                  ? 'bg-[#22C55E] text-[#061810]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Teen Side
            </button>
          </div>
        </div>

        {/* Visual 3-Column Two-Sided Diagram */}
        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12">
          {/* Left Node: Brands & Companies */}
          <div
            className={`flex flex-col justify-between rounded-2xl border p-6 transition-all lg:col-span-4 ${
              ecosystemFocus === 'teen'
                ? 'border-white/8 bg-[#13233A]/45 opacity-65'
                : 'border-[#22C55E]/40 bg-[#13233A]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#22C55E]">
                  Campaign Briefs &amp; Goals
                </span>
                <Building2 className="h-5 w-5 text-[#22C55E]" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">
                Brands &amp; Companies
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Businesses define their campaign goals, target youth audience, required proof, and per-task payout.
              </p>

              <ul className="mt-5 space-y-3 border-t border-white/8 pt-5 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" aria-hidden="true" />
                  <span>Reach Gen-Z creators and college communities directly</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" aria-hidden="true" />
                  <span>Collect honest product, pricing, and UX feedback</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" aria-hidden="true" />
                  <span>Scale verified user sign-ups and content assets</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 border-t border-white/8 pt-4 text-xs text-slate-400">
              Provides · Scoped briefs &amp; campaign budgets
            </div>
          </div>

          {/* Center Engine: Funngro Platform */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#22C55E]/60 bg-[#081322] p-6 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#22C55E]">
                  Matching, Review &amp; Payouts
                </span>
                <ShieldCheck className="h-5 w-5 text-[#22C55E]" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">
                Funngro Platform
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Connects briefs with verified teens, reviews every piece of submitted proof, and settles payouts cleanly.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-white/8 bg-[#13233A] p-3.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span>1. Smart Cohort Matching</span>
                    <ArrowLeftRight className="h-3.5 w-3.5 text-[#22C55E]" aria-hidden="true" />
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Matches campaigns by city tier, skills, and reliability score.
                  </p>
                </div>

                <div className="rounded-xl border border-white/8 bg-[#13233A] p-3.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span>2. Proof &amp; Quality Checks</span>
                    <ArrowLeftRight className="h-3.5 w-3.5 text-[#22C55E]" aria-hidden="true" />
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Audits screenshots, published links, and survey responses.
                  </p>
                </div>

                <div className="rounded-xl border border-white/8 bg-[#13233A] p-3.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span>3. Direct UPI Settlement</span>
                    <ArrowLeftRight className="h-3.5 w-3.5 text-[#22C55E]" aria-hidden="true" />
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Releases earnings to teen wallets once deliverables pass review.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-white/8 pt-4 text-xs font-medium text-[#22C55E]">
              Trusted payouts for teens · Verified results for brands
            </div>
          </div>

          {/* Right Node: Teens & Young Earners */}
          <div
            className={`flex flex-col justify-between rounded-2xl border p-6 transition-all lg:col-span-4 ${
              ecosystemFocus === 'brand'
                ? 'border-white/8 bg-[#13233A]/45 opacity-65'
                : 'border-[#22C55E]/40 bg-[#13233A]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#22C55E]">
                  Remote Execution &amp; Feedback
                </span>
                <Users className="h-5 w-5 text-[#22C55E]" aria-hidden="true" />
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">
                Teens &amp; Young Earners
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Students pick verified tasks, submit real proof of work, and build practical career skills.
              </p>

              <ul className="mt-5 space-y-3 border-t border-white/8 pt-5 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" aria-hidden="true" />
                  <span>Earn independent money via UPI or bank transfer</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" aria-hidden="true" />
                  <span>Gain hands-on content, QA, and research experience</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" aria-hidden="true" />
                  <span>Progress into flagship retainers and squad leadership</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 border-t border-white/8 pt-4 text-xs text-slate-400">
              Delivers · Verified tasks + real youth insights
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Services & Campaign Formats */}
      <section
        id="brand-services"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 border-b border-white/8 pb-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-medium text-[#22C55E]">
              Services &amp; Campaign Formats
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
              Six campaign formats built for measurable brand growth
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter campaign services"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-white/10 bg-[#13233A] p-1 self-start"
          >
            {(
              [
                { id: 'all', label: 'All Services (6)' },
                { id: 'content', label: 'Content' },
                { id: 'growth', label: 'Promotion & Referrals' },
                { id: 'research', label: 'Sampling, Surveys & QA' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={serviceFilter === tab.id}
                onClick={() => setServiceFilter(tab.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  serviceFilter === tab.id
                    ? 'bg-[#22C55E] text-[#061810]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-white/8 bg-[#13233A] p-6 transition-colors hover:border-white/20"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono-tabular font-semibold text-[#22C55E]">
                    {service.index}
                  </span>
                  <span>{service.categoryLabel}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#22C55E]">
                  {service.formats}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 space-y-3 border-t border-white/8 pt-4 text-xs">
                <div>
                  <span className="font-medium text-slate-400">Brand Outcome: </span>
                  <span className="text-slate-200">{service.brandOutcome}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>{service.teenSkill}</span>
                  <span className="font-mono-tabular text-slate-300 shrink-0">
                    {service.turnaround}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 3: Industry Categories */}
      <section
        id="industries"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 border-b border-white/8 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium text-[#22C55E]">
              Industries We Serve
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
              Tailored youth campaigns across key industry sectors
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Select a category to see how companies in that sector partner with Funngro.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Industry Selector List */}
          <div
            role="tablist"
            aria-label="Industry categories"
            className="flex flex-row gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0"
          >
            {INDUSTRY_VERTICALS.map((industry, idx) => {
              const isActive = industry.id === activeIndustry.id;
              return (
                <button
                  key={industry.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndustryId(industry.id)}
                  className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-left transition-all whitespace-nowrap shrink-0 lg:whitespace-normal cursor-pointer ${
                    isActive
                      ? 'border-[#22C55E] bg-[#13233A] text-white'
                      : 'border-white/8 bg-[#13233A]/60 text-slate-300 hover:border-white/20 hover:bg-[#13233A] hover:text-white'
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold">{industry.name}</p>
                    <p className="mt-0.5 hidden text-xs text-slate-400 lg:block">
                      {industry.tagline}
                    </p>
                  </div>
                  <span
                    className={`font-mono-tabular text-xs font-semibold ${
                      isActive ? 'text-[#22C55E]' : 'text-slate-500'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Detail */}
          <div className="rounded-2xl border border-white/10 bg-[#13233A] p-6 sm:p-8 lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/8 pb-4">
              <div>
                <p className="text-xs font-medium text-[#22C55E]">
                  {activeIndustry.typicalFormats}
                </p>
                <h3 className="mt-1.5 text-2xl font-bold text-white">
                  {activeIndustry.name}
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                {activeIndustry.tagline}
              </span>
            </div>

            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {activeIndustry.description}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 border-t border-white/8 pt-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-white">
                  Typical Brand Campaigns
                </p>
                <ul className="mt-3 space-y-2.5">
                  {activeIndustry.campaigns.map((camp) => (
                    <li
                      key={camp}
                      className="flex items-start gap-2.5 text-sm text-slate-300"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                        aria-hidden="true"
                      />
                      <span>{camp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-white/8 bg-[#0B192C] p-5">
                <p className="text-xs font-semibold text-[#22C55E]">
                  Insights Companies Gain
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {activeIndustry.youthInsightFocus}
                </p>
                <p className="mt-4 border-t border-white/8 pt-3 text-xs text-slate-400">
                  Structured results feed directly into brand dashboards while young earners build real industry familiarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Banner back to Teen Ecosystem */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#13233A] p-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium text-[#22C55E]">
              For Teens &amp; Students
            </p>
            <h2 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">
              See How It Works &amp; Teen Progression
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Explore the 5-step earning journey from sign-up and proof submission to UPI payouts and squad leadership.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('teen')}
            className="inline-flex items-center gap-2 rounded-xl bg-[#22C55E] px-6 py-3 text-sm font-semibold text-[#061810] transition-colors hover:bg-[#16A34A] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Teen Ecosystem</span>
          </button>
        </div>
      </section>
    </div>
  );
}
