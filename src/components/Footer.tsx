import { PageId } from '../data/funngroData';

interface FooterProps {
  activePage: PageId;
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export function Footer({ activePage, onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-white/8 bg-[#081322]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={() => onNavigate('teen')}
              className="text-xl font-bold tracking-tight text-white transition-colors hover:text-[#22C55E] cursor-pointer"
            >
              Funngro
            </button>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              A two-sided teen earning and brand campaign ecosystem built around verified remote deliverables, structured skill progression, and direct UPI payouts.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-white">Page 1 · Teen Ecosystem</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('teen', 'system-flow')}
                  className={`transition-colors hover:text-white cursor-pointer ${
                    activePage === 'teen' ? 'text-[#22C55E]' : ''
                  }`}
                >
                  5-Step System Flow
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('teen', 'progression')}
                  className="transition-colors hover:text-white cursor-pointer"
                >
                  Ecosystem Progression
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('teen', 'skills')}
                  className="transition-colors hover:text-white cursor-pointer"
                >
                  Skill-Building & Earning
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-white">Page 2 · Brand Ecosystem</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('brand', 'two-sided-diagram')}
                  className={`transition-colors hover:text-white cursor-pointer ${
                    activePage === 'brand' ? 'text-[#22C55E]' : ''
                  }`}
                >
                  Two-Sided Marketplace Loop
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('brand', 'brand-services')}
                  className="transition-colors hover:text-white cursor-pointer"
                >
                  Campaign Formats & Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('brand', 'industries')}
                  className="transition-colors hover:text-white cursor-pointer"
                >
                  Industry Categories
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>Funngro Ecosystem Overview · Teenlancer & Brand Campaign Architecture</p>
          <p>Payments settled via verified UPI & bank transfer rails</p>
        </div>
      </div>
    </footer>
  );
}
