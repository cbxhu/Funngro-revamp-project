import { ArrowRight } from 'lucide-react';
import { PageId } from '../data/funngroData';

interface PageSwitcherProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export function PageSwitcher({ activePage, onNavigate }: PageSwitcherProps) {
  return (
    <div className="border-b border-white/8 bg-[#081322]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div
          role="tablist"
          aria-label="Ecosystem pages"
          className="inline-flex w-full sm:w-auto items-center rounded-xl border border-white/10 bg-[#0B192C] p-1"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activePage === 'teen'}
            onClick={() => onNavigate('teen')}
            className={`flex-1 sm:flex-initial rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activePage === 'teen'
                ? 'bg-[#22C55E] text-[#061810]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            01. How It Works &amp; Teen Ecosystem
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activePage === 'brand'}
            onClick={() => onNavigate('brand')}
            className={`flex-1 sm:flex-initial rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activePage === 'brand'
                ? 'bg-[#22C55E] text-[#061810]'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            02. Services &amp; Brand Ecosystem
          </button>
        </div>

        <button
          type="button"
          onClick={() => onNavigate(activePage === 'teen' ? 'brand' : 'teen')}
          className="hidden lg:inline-flex items-center gap-2 text-xs font-medium text-slate-300 transition-colors hover:text-[#22C55E] whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>
            {activePage === 'teen'
              ? 'Next: Explore Services & Brand Ecosystem'
              : 'Back: Explore How It Works & Teen Progression'}
          </span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
