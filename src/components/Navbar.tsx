import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageId } from '../data/funngroData';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (page: PageId, sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#0B192C]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleLinkClick('teen')}
          className="text-xl font-bold tracking-tight text-white transition-colors hover:text-[#22C55E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#22C55E] whitespace-nowrap shrink-0 cursor-pointer"
        >
          Funngro
        </button>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium"
        >
          <button
            type="button"
            onClick={() => handleLinkClick('teen', 'system-flow')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
              activePage === 'teen'
                ? 'border-[#22C55E] text-white'
                : 'border-transparent text-slate-300 hover:text-white'
            }`}
          >
            How It Works
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('teen', 'progression')}
            className="border-b-2 border-transparent py-1 text-slate-300 transition-colors hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            Teen Progression
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('brand', 'brand-services')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
              activePage === 'brand'
                ? 'border-[#22C55E] text-white'
                : 'border-transparent text-slate-300 hover:text-white'
            }`}
          >
            Brand Services
          </button>
          <button
            type="button"
            onClick={() => handleLinkClick('brand', 'industries')}
            className="border-b-2 border-transparent py-1 text-slate-300 transition-colors hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
          >
            Industries
          </button>
        </nav>

        {/* Zone 3: Single primary action button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() =>
              handleLinkClick(activePage === 'teen' ? 'brand' : 'teen')
            }
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#22C55E] px-4 py-2 text-sm font-semibold text-[#061810] transition-colors hover:bg-[#16A34A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E] whitespace-nowrap shrink-0 cursor-pointer"
          >
            {activePage === 'teen' ? 'For Brands' : 'For Teens'}
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#13233A] text-slate-200 transition-colors hover:bg-[#182C48] md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/8 bg-[#0B192C] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            <button
              type="button"
              onClick={() => handleLinkClick('teen', 'system-flow')}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors cursor-pointer ${
                activePage === 'teen'
                  ? 'bg-[#13233A] text-[#22C55E]'
                  : 'text-slate-200 hover:bg-[#13233A]'
              }`}
            >
              <span>How It Works</span>
              <span className="text-xs text-slate-400">Teens</span>
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('teen', 'progression')}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-[#13233A] cursor-pointer"
            >
              <span>Teen Progression</span>
              <span className="text-xs text-slate-400">Growth</span>
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('brand', 'brand-services')}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors cursor-pointer ${
                activePage === 'brand'
                  ? 'bg-[#13233A] text-[#22C55E]'
                  : 'text-slate-200 hover:bg-[#13233A]'
              }`}
            >
              <span>Brand Services</span>
              <span className="text-xs text-slate-400">Brands</span>
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('brand', 'industries')}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-200 transition-colors hover:bg-[#13233A] cursor-pointer"
            >
              <span>Industries</span>
              <span className="text-xs text-slate-400">Sectors</span>
            </button>
            <button
              type="button"
              onClick={() =>
                handleLinkClick(activePage === 'teen' ? 'brand' : 'teen')
              }
              className="mt-2 w-full rounded-lg bg-[#22C55E] px-4 py-2.5 text-center text-sm font-semibold text-[#061810] transition-colors hover:bg-[#16A34A] cursor-pointer"
            >
              {activePage === 'teen'
                ? 'Switch to Brand Ecosystem'
                : 'Switch to Teen Ecosystem'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
