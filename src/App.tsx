import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { BrandEcosystemPage } from './components/BrandEcosystemPage';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageSwitcher } from './components/PageSwitcher';
import { TeenEcosystemPage } from './components/TeenEcosystemPage';
import { PageId } from './data/funngroData';

const PAGE_META: Record<
  PageId,
  { path: string; title: string; description: string }
> = {
  teen: {
    path: '/how-it-works',
    title: 'Funngro – How It Works & Teen Earning Ecosystem',
    description:
      'Step-by-step guide to signing up on Funngro, completing verified brand tasks, building skills from surveys to leadership, and receiving UPI or bank payouts.',
  },
  brand: {
    path: '/brand-ecosystem',
    title: 'Funngro – Services & Two-Sided Brand Ecosystem',
    description:
      'Explore Funngro brand campaign formats including content creation, promotion, referrals, sampling, surveys, and micro-tasks across fintech, BFSI, mobility, and D2C.',
  },
};

function getInitialPage(): PageId {
  if (typeof window === 'undefined') return 'teen';
  const path = window.location.pathname.toLowerCase();
  if (path.includes('brand') || path.includes('services')) {
    return 'brand';
  }
  return 'teen';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(getInitialPage);

  // Sync SEO title, meta description, and canonical tags on page switch
  useEffect(() => {
    const meta = PAGE_META[activePage];
    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', meta.title);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', meta.description);
  }, [activePage]);

  // Listen to browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback(
    (targetPage: PageId, sectionId?: string) => {
      const targetMeta = PAGE_META[targetPage];
      const pageChanged = targetPage !== activePage;

      if (pageChanged) {
        setActivePage(targetPage);
        try {
          window.history.pushState({ page: targetPage }, '', targetMeta.path);
        } catch {
          // Ignore pushState restrictions in sandboxed environments
        }
      }

      if (sectionId) {
        // Delay briefly if page switched so the target DOM section mounts first
        window.setTimeout(
          () => {
            const el = document.getElementById(sectionId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          },
          pageChanged ? 120 : 0
        );
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [activePage]
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0B192C] text-slate-100 flex flex-col">
        <Navbar activePage={activePage} onNavigate={handleNavigate} />
        <PageSwitcher activePage={activePage} onNavigate={handleNavigate} />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            {activePage === 'teen' ? (
              <motion.div
                key="page-teen"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <TeenEcosystemPage onNavigate={handleNavigate} />
              </motion.div>
            ) : (
              <motion.div
                key="page-brand"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <BrandEcosystemPage onNavigate={handleNavigate} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer activePage={activePage} onNavigate={handleNavigate} />
      </div>
    </MotionConfig>
  );
}
