import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Check,
  ChevronRight,
  FileCheck2,
  Landmark,
  Layers,
  UserPlus,
  Wallet,
} from 'lucide-react';
import {
  ECOSYSTEM_PROGRESSION,
  PageId,
  SKILL_OUTCOMES,
  SYSTEM_FLOW_STEPS,
} from '../data/funngroData';
import { ResilientImage } from './ResilientImage';

interface TeenEcosystemPageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

const STEP_ICONS = [UserPlus, Briefcase, FileCheck2, BadgeCheck, Wallet];

export function TeenEcosystemPage({ onNavigate }: TeenEcosystemPageProps) {
  const [selectedStepId, setSelectedStepId] = useState<number>(1);
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(0);

  const activeStep =
    SYSTEM_FLOW_STEPS.find((s) => s.id === selectedStepId) ?? SYSTEM_FLOW_STEPS[0];
  const activeStage = ECOSYSTEM_PROGRESSION[selectedStageIdx];

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
                For Teens &amp; Young Earners · How Funngro Works
              </p>
              <h1
                className="mt-4 font-bold tracking-tight text-white text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08 }}
              >
                Earn your first real income through verified brand work.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Work on real projects from trusted companies—from product testing and short reels to surveys—and receive direct payouts straight to your UPI or bank account.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('system-flow')}
                className="inline-flex items-center gap-2 rounded-xl bg-[#22C55E] px-6 py-3 text-sm font-semibold text-[#061810] transition-colors hover:bg-[#16A34A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>See How Earning Works</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('brand')}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#13233A] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#182C48] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Explore Brand Services</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-[#13233A] sm:h-96 lg:h-full">
              <ResilientImage
                src="/src/assets/images/funngro_teen_workspace_1795056774269.jpg"
                alt="Young Indian university students and teen creators collaborating remotely on laptops and smartphones"
                className="h-full w-full object-cover"
                fallbackTitle="Remote Teenlancer Workspace"
                fallbackSubtitle="Students collaborating on brand campaigns, surveys, and content creation."
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B192C]/85 via-[#0B192C]/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-medium text-[#22C55E]">
                  Flexible Remote Work · Built Around Classes
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  Pick projects from your phone or laptop whenever your study schedule allows.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Highlights */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/8 bg-[#13233A] p-5">
            <p className="font-mono-tabular text-2xl font-semibold text-white">5 Steps</p>
            <p className="mt-1 text-sm font-medium text-slate-200">Simple Workflow</p>
            <p className="mt-1 text-xs text-slate-400">
              Sign up, complete a brief, verify, and withdraw.
            </p>
          </div>
          <div className="rounded-xl border border-white/8 bg-[#13233A] p-5">
            <p className="font-mono-tabular text-2xl font-semibold text-[#22C55E]">UPI &amp; Bank</p>
            <p className="mt-1 text-sm font-medium text-slate-200">Direct Payouts</p>
            <p className="mt-1 text-xs text-slate-400">
              Transfer approved earnings straight to your account.
            </p>
          </div>
          <div className="rounded-xl border border-white/8 bg-[#13233A] p-5">
            <p className="font-mono-tabular text-2xl font-semibold text-white">3 Levels</p>
            <p className="mt-1 text-sm font-medium text-slate-200">Clear Growth Path</p>
            <p className="mt-1 text-xs text-slate-400">
              Grow from starter tasks into squad leadership.
            </p>
          </div>
          <div className="rounded-xl border border-white/8 bg-[#13233A] p-5">
            <p className="font-mono-tabular text-2xl font-semibold text-white">100% Remote</p>
            <p className="mt-1 text-sm font-medium text-slate-200">Real Experience</p>
            <p className="mt-1 text-xs text-slate-400">
              Build content, research, and leadership skills.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: 5-Step System Flow */}
      <section
        id="system-flow"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 border-b border-white/8 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium text-[#22C55E]">
              How Funngro Works
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
              From sign-up to verified UPI payout in five steps
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Click any step below to see what you do, how proof is checked, and how payouts reach your account.
          </p>
        </div>

        {/* Interactive 5-Step Horizontal Selector */}
        <div
          role="tablist"
          aria-label="Funngro 5-step earning process"
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
        >
          {SYSTEM_FLOW_STEPS.map((step, index) => {
            const Icon = STEP_ICONS[index];
            const isActive = step.id === selectedStepId;
            return (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedStepId(step.id)}
                className={`group flex flex-col justify-between rounded-xl border p-4 text-left transition-all cursor-pointer ${
                  isActive
                    ? 'border-[#22C55E] bg-[#13233A]'
                    : 'border-white/8 bg-[#13233A]/70 hover:border-white/20 hover:bg-[#13233A]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono-tabular text-xs font-semibold ${
                      isActive ? 'text-[#22C55E]' : 'text-slate-400'
                    }`}
                  >
                    Step {step.code}
                  </span>
                  <Icon
                    className={`h-4 w-4 ${
                      isActive ? 'text-[#22C55E]' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-white">
                  {step.shortTitle}
                </p>
                <p className="mt-1 text-xs text-slate-400">{step.durationLabel}</p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Breakdown Card */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#13233A] p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="font-mono-tabular font-semibold text-[#22C55E]">
                  Step {activeStep.code} of 05
                </span>
                <span aria-hidden="true">·</span>
                <span>{activeStep.durationLabel}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                {activeStep.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {activeStep.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {activeStep.actionDetail}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedStepId((prev) => (prev < 5 ? prev + 1 : 1))
                  }
                  className="inline-flex items-center gap-2 rounded-lg bg-[#22C55E] px-4 py-2 text-xs font-semibold text-[#061810] transition-colors hover:bg-[#16A34A] whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>
                    {activeStep.id < 5 ? 'Next Step' : 'Back to Step 01'}
                  </span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-5 border-t border-white/8 pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Why This Matters
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-200">
                  {activeStep.verificationNote}
                </p>
              </div>

              <div className="border-t border-white/8 pt-5">
                <p className="text-xs font-medium text-slate-400">
                  What Happens Next
                </p>
                <p className="mt-2 flex items-start gap-2.5 text-sm font-medium text-[#22C55E]">
                  <Landmark className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{activeStep.deliverableExample}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Ecosystem Progression Timeline */}
      <section
        id="progression"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-4 border-b border-white/8 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium text-[#22C55E]">
              Teen Ecosystem Progression
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
              Start with simple tasks and grow into campaign leadership
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Consistent quality on early projects unlocks content briefs, referral drives, and team lead roles.
          </p>
        </div>

        {/* 3-Stage Progression Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {ECOSYSTEM_PROGRESSION.map((stage, idx) => {
            const isSelected = idx === selectedStageIdx;
            return (
              <button
                key={stage.tier}
                type="button"
                onClick={() => setSelectedStageIdx(idx)}
                className={`flex flex-col justify-between rounded-2xl border p-6 text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-[#22C55E] bg-[#13233A]'
                    : 'border-white/8 bg-[#13233A]/75 hover:border-white/20 hover:bg-[#13233A]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono-tabular font-semibold text-[#22C55E]">
                      {stage.tier}
                    </span>
                    <span className="text-slate-400">
                      {idx === 0 ? 'Getting Started' : idx === 1 ? 'Growing Creator' : 'Squad Leader'}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">
                    {stage.stageName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/8 pt-4">
                  <p className="text-xs font-medium text-slate-400">How You Unlock This</p>
                  <p className="mt-1 text-xs font-medium text-slate-200">
                    {stage.unlockRequirement}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detailed Breakdown */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-[#13233A] p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Layers className="h-4 w-4 text-[#22C55E]" aria-hidden="true" />
                <span className="font-mono-tabular text-[#22C55E]">{activeStage.tier}</span>
                <span aria-hidden="true">·</span>
                <span>{activeStage.earningModel}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-white">
                {activeStage.headline}
              </h3>
              <ul className="mt-5 space-y-3">
                {activeStage.campaignFormats.map((format) => (
                  <li
                    key={format}
                    className="flex items-start gap-3 text-sm text-slate-200"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                      aria-hidden="true"
                    />
                    <span>{format}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/8 pt-6 lg:col-span-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <p className="text-xs font-medium text-slate-400">
                Skills You Build at {activeStage.tier}
              </p>
              <div className="mt-4 space-y-4">
                {activeStage.skillsBuilt.map((skill, sIdx) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-sm font-medium text-white">{skill}</span>
                    <span className="font-mono-tabular text-xs text-slate-400">
                      0{sIdx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Skill-Building Alongside Remote Earning */}
      <section
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-medium text-[#22C55E]">
                Skills &amp; Flexible Income
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
                Build practical career skills while earning remotely
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Every brand brief gives you hands-on experience in digital marketing, product testing, and communication—alongside real money you earn yourself.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#13233A]">
              <div className="aspect-[4/3] w-full">
                <ResilientImage
                  src="/src/assets/images/funngro_creator_content_1795056773637.jpg"
                  alt="Young creator filming a consumer product unboxing and review reel on a smartphone"
                  className="h-full w-full object-cover"
                  fallbackTitle="Creator Content Production"
                  fallbackSubtitle="Short-form product reviews and studio-free photography."
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-[#22C55E]">
                  Reels · Product Photography · App Feedback
                </p>
                <p className="mt-1.5 text-sm text-slate-300">
                  Work with consumer brands, fintech apps, and new launches right from home.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {SKILL_OUTCOMES.map((card) => (
              <article
                key={card.index}
                className="flex flex-col justify-between rounded-2xl border border-white/8 bg-[#13233A] p-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono-tabular font-semibold text-[#22C55E]">
                      {card.index}
                    </span>
                    <span>Remote Skill</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {card.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/8 pt-4">
                  <p className="text-xs font-medium text-slate-400">What You Take Away</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-200">
                    {card.practicalOutcome}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Banner to Brand Ecosystem */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-[#13233A] p-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium text-[#22C55E]">
              For Companies &amp; Marketing Teams
            </p>
            <h2 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">
              Explore Funngro Services &amp; the Brand Ecosystem
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              See how fintech, BFSI, research, mobility, and consumer brands run youth campaigns across six formats.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('brand')}
            className="inline-flex items-center gap-2 rounded-xl bg-[#22C55E] px-6 py-3 text-sm font-semibold text-[#061810] transition-colors hover:bg-[#16A34A] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Explore Brand Services</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
