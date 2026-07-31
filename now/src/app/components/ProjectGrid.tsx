"use client";
import { useEffect, useState, type MouseEvent } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import aetherShot from '../assets/imgs/aether.jpeg';
import calgpaShot from '../assets/imgs/calgpa.jpeg';
import zephraShot from '../assets/imgs/zephra.jpeg';
import minimindsShot from '../assets/imgs/miniminds.jpeg';
import carsioShot from '../assets/imgs/cario.jpeg';
import roledocShot from '../assets/imgs/roledoc.jpeg';
import textotestShot from '../assets/imgs/textotest.jpeg';

type PhoneMockupProps = {
  screenshotSrc?: string | StaticImageData;
  alt: string;
  accentClassName: string;
  topVisibleImageOnly?: boolean;
  imageClassName?: string;
  topGapPx?: number;
  frameClassName?: string;
};

type ProjectKey = 'calgpa' | 'zephra' | 'aether' | 'campusnow' | 'miniminds' | 'carsio' | 'roledoc' | 'textotest' | 'cardone' | 'cardtwo';

type BracketButtonProps = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  label: string;
  expanded: boolean;
  className?: string;
  iconClassName?: string;
};

type ProjectMeta = {
  name: string;
  short: string;
  badge: string;
  logoIcon: string;
  logoTone: string;
  accentClassName: string;
  description: string;
  workedOn: string;
  domain: string;
  role: string;
  stack: string[];
  repoUrl: string;
  liveUrl: string;
};

type ProjectRating = {
  count: number;
  average: number;
  starCounts: number[];
};

const groupedDesktopRows: ProjectKey[][] = [
  ['aether', 'calgpa', 'zephra'],
  ['campusnow', 'miniminds', 'carsio', 'roledoc'],
  ['textotest', 'cardone', 'cardtwo'],
];

function createEmptyRatings(): Record<ProjectKey, ProjectRating> {
  return {
    calgpa: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
    zephra: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
    aether: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
    campusnow: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
    miniminds: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
    carsio: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
    roledoc: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
    textotest: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
    cardone: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
    cardtwo: { count: 0, average: 0, starCounts: [0, 0, 0, 0] },
  };
}

function BracketButton({ onClick, label, expanded, className = '', iconClassName = '' }: BracketButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`absolute top-3 right-3 z-20 h-8 w-8 rounded-xl border border-[#10b981]/70 bg-[#10b981] text-white backdrop-blur-md shadow-[0_10px_24px_rgba(16,185,129,0.20)] inline-flex items-center justify-center transition-colors hover:bg-[#059669] ${className}`}
    >
      <span className={`material-symbols-outlined block text-[0.9rem] leading-none ${iconClassName}`} aria-hidden="true">{expanded ? 'expand_less' : 'expand_more'}</span>
    </button>
  );
}

function PhoneMockup({ screenshotSrc, alt, accentClassName, topVisibleImageOnly = false, imageClassName = '', topGapPx = 0, frameClassName = '' }: PhoneMockupProps) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-[var(--site-card-bg-strong)] rounded-[2.1rem] ${frameClassName}`}>
      {screenshotSrc ? (
        topVisibleImageOnly ? (
          <div className="h-full w-full flex flex-col">
            <div className="relative h-[90%] w-full overflow-hidden">
              <Image src={screenshotSrc} alt={alt} fill className={`object-cover object-top ${imageClassName}`} sizes="(max-width: 768px) 90vw, 370px" />
            </div>
            <div className="h-[10%] w-full bg-gradient-to-b from-[var(--site-card-bg-strong)]/28 to-[var(--site-card-bg-strong)]/55" />
          </div>
        ) : (
          <>
            <Image src={screenshotSrc} alt={alt} fill className={`object-cover ${imageClassName}`} sizes="(max-width: 768px) 90vw, 370px" />
            {topGapPx > 0 ? <div className="absolute inset-x-0 top-0 z-10 bg-[var(--site-card-bg-strong)]/40" style={{ height: `${topGapPx}px` }} /> : null}
          </>
        )
      ) : (
        <div className={`h-full w-full ${accentClassName} p-3 text-white`}>
          <div className="h-full w-full rounded-[1.35rem] bg-white/18 backdrop-blur-[1px] border border-white/30 p-3 flex flex-col gap-2.5">
            <div className="h-4 w-2/3 rounded-full bg-white/70" />
            <div className="h-16 rounded-xl bg-white/80" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-white/70" />
              <div className="h-10 rounded-lg bg-white/55" />
            </div>
            <div className="h-3 w-5/6 rounded-full bg-white/70" />
            <div className="h-3 w-4/6 rounded-full bg-white/55" />
            <div className="mt-auto grid grid-cols-3 gap-2">
              <div className="h-8 rounded-lg bg-white/80" />
              <div className="h-8 rounded-lg bg-white/60" />
              <div className="h-8 rounded-lg bg-white/70" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectLogo({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] shadow-[0_6px_14px_rgba(0,0,0,0.25)] inline-flex items-center justify-center" aria-label={label}>
      <span className="material-symbols-outlined text-[1.1rem] leading-none text-[#10b981]" aria-hidden="true">{icon}</span>
    </div>
  );
}

export default function ProjectGrid() {
  const [activeProject, setActiveProject] = useState<ProjectKey | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [ratings, setRatings] = useState<Record<ProjectKey, ProjectRating>>(createEmptyRatings);
  const [isSubmittingRating, setIsSubmittingRating] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<ProjectKey, boolean>>(() => ({
    calgpa: false,
    zephra: false,
    aether: true,
    campusnow: true,
    miniminds: false,
    carsio: false,
    roledoc: false,
    textotest: false,
    cardone: false,
    cardtwo: false,
  }));
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeProject]);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const syncDesktop = () => setIsDesktop(media.matches);
    syncDesktop();

    media.addEventListener('change', syncDesktop);
    return () => media.removeEventListener('change', syncDesktop);
  }, []);

  useEffect(() => {
    let stopped = false;

    const fetchRatings = async () => {
      try {
        const response = await fetch('/api/project-ratings', { cache: 'no-store' });
        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { ratings?: Partial<Record<ProjectKey, ProjectRating>> };
        if (!stopped && data.ratings) {
          setRatings((prev) => ({ ...prev, ...data.ratings }));
        }
      } catch {
        // Ignore transient network errors.
      }
    };

    fetchRatings();

    return () => {
      stopped = true;
    };
  }, []);

  const submitRating = async (projectKey: ProjectKey, stars: number) => {
    if (isSubmittingRating) {
      return;
    }

    setIsSubmittingRating(true);
    try {
      const response = await fetch('/api/project-ratings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectKey, stars }),
      });

      if (!response.ok) {
        return;
      }

      const data = (await response.json()) as { ratings?: Partial<Record<ProjectKey, ProjectRating>> };
      if (data.ratings) {
        setRatings((prev) => ({ ...prev, ...data.ratings }));
      }
    } catch {
      // Ignore submit errors to keep popup interactions smooth.
    } finally {
      setIsSubmittingRating(false);
    }
  };

  const renderRatingSummary = (projectKey: ProjectKey, compact = false) => {
    const stats = ratings[projectKey] ?? { count: 0, average: 0, starCounts: [0, 0, 0, 0] };
    const filledStars = Math.round(stats.average);

    return (
      <div className={`mt-2 flex items-center gap-2 ${compact ? 'text-[11px]' : 'text-sm'}`}>
        <span className="inline-flex gap-[2px] text-[#10b981]">
          {[0, 1, 2, 3].map((star) => (
            <span key={star}>{star < filledStars ? '★' : '☆'}</span>
          ))}
        </span>
        <span className="font-semibold text-[var(--text-secondary)]">
          {stats.count > 0 ? `${stats.average.toFixed(1)} (${stats.count})` : 'No ratings yet'}
        </span>
      </div>
    );
  };

  // ServiceNow leaf green rating choices
  const ratingChoices = [
    { stars: 1, label: 'Poor', className: 'border-[#34d399]/70 bg-[#34d399] text-white' },
    { stars: 2, label: 'Fair', className: 'border-[#10b981]/70 bg-[#10b981] text-white' },
    { stars: 3, label: 'Good', className: 'border-[#059669]/80 bg-[#059669] text-white' },
    { stars: 4, label: 'Great', className: 'border-[#047857]/85 bg-[#047857] text-white' },
  ] as const;

  const screenshots: Record<ProjectKey, StaticImageData> = {
    calgpa: calgpaShot,
    zephra: zephraShot,
    aether: aetherShot,
    campusnow: calgpaShot,
    miniminds: minimindsShot,
    carsio: carsioShot,
    roledoc: roledocShot,
    textotest: textotestShot,
    cardone: calgpaShot,
    cardtwo: zephraShot,
  };

  const popupProjects: Record<ProjectKey, ProjectMeta> = {
    calgpa: {
      name: 'CalGPA',
      short: 'Academic tool GPA semester performance.',
      badge: 'Academic Tool • PWA',
      logoIcon: 'school',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#10b981] to-[#059669]',
      description:
        'CalGPA gives students a fast performance cockpit to track coursework, simulate grade outcomes, and plan future semesters with confidence.',
      workedOn: '2025',
      domain: 'EdTech Productivity',
      role: 'Full Stack Developer',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PWA'],
      repoUrl: 'https://github.com/your-username/calgpa',
      liveUrl: 'https://your-calgpa-app-url.com',
    },
    zephra: {
      name: 'Zephra',
      short: 'Climate tracking and air quality forecasting.',
      badge: 'Climate Tracking • PWA',
      logoIcon: 'air',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#10b981] to-[#10b981]',
      description:
        'Zephra blends satellite and ground sensing into clear, actionable air-quality intelligence with an interface designed for quick comprehension.',
      workedOn: '2025',
      domain: 'Climate Intelligence',
      role: 'Frontend + Data UX Developer',
      stack: ['Next.js', 'TypeScript', 'Framer Motion', 'Visualization APIs'],
      repoUrl: 'https://github.com/your-username/zephra',
      liveUrl: 'https://your-zephra-app-url.com',
    },
    aether: {
      name: 'Aether',
      short: 'AI companion with journaling and habits.',
      badge: 'Featured App',
      logoIcon: 'auto_awesome',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#10b981] to-[#047857]',
      description:
        'Aether combines journaling, habits, and emotional analytics into a single adaptive loop with AI-assisted behavior support.',
      workedOn: '2026',
      domain: 'AI Companion / Wellness',
      role: 'Product Engineer',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Workflows'],
      repoUrl: 'https://github.com/your-username/aether',
      liveUrl: 'https://your-aether-app-url.com',
    },
    campusnow: {
      name: 'CampusNow',
      short: 'University management dashboard for students, faculty, and admin workflows.',
      badge: 'University Management',
      logoIcon: 'domain',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#10b981] to-[#047857]',
      description:
        'CampusNow is a university management concept that brings academic, administrative, and student-facing tasks into one clear dashboard.',
      workedOn: '2026',
      domain: 'Campus Operations',
      role: 'Product Engineer',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Operations UI'],
      repoUrl: 'https://github.com/your-username/campusnow',
      liveUrl: 'https://your-campusnow-app-url.com',
    },
    miniminds: {
      name: 'Mini-Minds',
      short: 'Fun e-learning with levels and mini exercises.',
      badge: 'E-Learning Prototype',
      logoIcon: 'toys',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#10b981] to-[#10b981]',
      description: 'A playful learning platform concept for children with mini exercises, levels, and progress rewards.',
      workedOn: '2024',
      domain: 'Kids E-Learning',
      role: 'Frontend Developer',
      stack: ['React', 'TypeScript', 'Tailwind CSS'],
      repoUrl: 'https://github.com/your-username/miniminds',
      liveUrl: 'https://your-miniminds-app-url.com',
    },
    carsio: {
      name: 'Cars.IO',
      short: 'SQL retail DB for car sales and purchases.',
      badge: 'DBMS • SQL',
      logoIcon: 'directions_car',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#10b981] to-[#059669]',
      description: 'A SQL-based retail database system that tracks car inventory, purchases, and sales records.',
      workedOn: '2024',
      domain: 'Retail Data Systems',
      role: 'Database Developer',
      stack: ['SQL', 'Database Design', 'DBMS'],
      repoUrl: 'https://github.com/your-username/cars-io',
      liveUrl: 'https://your-cars-io-demo-url.com',
    },
    roledoc: {
      name: 'RoleDoc',
      short: 'RAG chatbot that talks with your documents.',
      badge: 'AI RAG Assistant',
      logoIcon: 'description',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#10b981] to-[#047857]',
      description: 'A document-chat assistant that reads uploaded files and responds with role-aware, context-smart answers.',
      workedOn: '2025',
      domain: 'AI Knowledge Assistant',
      role: 'AI Engineer',
      stack: ['RAG', 'LLM APIs', 'Next.js'],
      repoUrl: 'https://github.com/your-username/roledoc',
      liveUrl: 'https://your-roledoc-app-url.com',
    },
    textotest: {
      name: 'TexToTest',
      short: 'Context-based advanced MCQ generation.',
      badge: 'AI MCQ Generation',
      logoIcon: 'quiz',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#34d399] to-[#10b981]',
      description: 'An AI-powered question generator that creates context-aware MCQs from source content for faster practice workflows.',
      workedOn: '2026',
      domain: 'AI Assessment',
      role: 'AI Product Developer',
      stack: ['Next.js', 'TypeScript', 'LLM APIs', 'Prompt Engineering'],
      repoUrl: 'https://github.com/your-username/textotest',
      liveUrl: 'https://your-textotest-app-url.com',
    },
    cardone: {
      name: 'Card 1',
      short: 'Portfolio extension card in the same glassmorphism style.',
      badge: 'Design System Extension',
      logoIcon: 'widgets',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#34d399] to-[#059669]',
      description:
        'Card 1 expands your project rail with a compact-first presentation that opens into a complete showcase card while preserving popup details.',
      workedOn: '2026',
      domain: 'UI System Prototype',
      role: 'Frontend Developer',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      repoUrl: 'https://github.com/your-username/card-one',
      liveUrl: 'https://your-card-one-demo-url.com',
    },
    cardtwo: {
      name: 'Card 2',
      short: 'Second extension card with matching visual language.',
      badge: 'Design System Extension',
      logoIcon: 'dashboard_customize',
      logoTone: 'text-[#10b981]',
      accentClassName: 'bg-gradient-to-b from-[#34d399] to-[#10b981]',
      description:
        'Card 2 continues the same visual rhythm as your existing cards and supports compact row behavior with on-demand expansion.',
      workedOn: '2026',
      domain: 'UI System Prototype',
      role: 'Frontend Developer',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      repoUrl: 'https://github.com/your-username/card-two',
      liveUrl: 'https://your-card-two-demo-url.com',
    },
  };

  const toggleExpand = (projectKey: ProjectKey, event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    setExpandedCards((prev) => {
      const nextState = !prev[projectKey];
      const next = { ...prev };
      const desktopGroup = groupedDesktopRows.find((group) => group.includes(projectKey));

      if (isDesktop && desktopGroup) {
        for (const key of desktopGroup) {
          next[key] = nextState;
        }
        return next;
      }

      next[projectKey] = nextState;
      return next;
    });
  };

  const renderCompactCard = (projectKey: ProjectKey, className = '', delay = 0) => {
    const project = popupProjects[projectKey];

    return (
      <motion.div
        id={projectKey}
        key={`${projectKey}-compact`}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.93, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-24px' }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1], delay }}
        className={`relative h-full min-h-[176px] rounded-[1.7rem] border border-[var(--site-border)] bg-[var(--site-card-bg)] backdrop-blur-lg px-4 py-4 md:px-5 md:py-4 flex items-center gap-3 shadow-[0_18px_45px_rgba(0,0,0,0.15)] cursor-pointer ${className}`}
        onClick={() => setActiveProject(projectKey)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setActiveProject(projectKey);
          }
        }}
      >
        <ProjectLogo icon={project.logoIcon} label={`${project.name} logo`} />
        <div className="min-w-0 pr-9">
          <p className="truncate text-sm md:text-base font-black font-doto text-[var(--text-card)]">{project.name}</p>
          <p className="truncate text-xs md:text-sm text-[var(--text-muted)] font-medium">{project.short}</p>
        </div>
        <BracketButton
          onClick={(event) => toggleExpand(projectKey, event)}
          label={`Expand ${project.name} card`}
          expanded={expandedCards[projectKey]}
        />
      </motion.div>
    );
  };

  const renderLandscapeCard = (projectKey: ProjectKey, className = '', delay = 0, isLargeFeature = false, featureIndex = 0) => {
    const project = popupProjects[projectKey];
    const isPhoneLeft = featureIndex % 2 === 0; // Alternate placement

    return (
      <motion.div
        id={projectKey}
        key={`${projectKey}-landscape`}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 22 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-36px' }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay }}
        className={`relative h-full min-h-[320px] overflow-hidden rounded-[2.35rem] border border-[var(--site-border)] bg-[var(--site-card-bg)] backdrop-blur-lg p-5 md:p-6 shadow-[0_22px_54px_rgba(0,0,0,0.2)] cursor-pointer ${className}`}
        onClick={() => setActiveProject(projectKey)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setActiveProject(projectKey);
          }
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.16),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.08),_transparent_32%)]" />

        {isLargeFeature && (
          <motion.div
            initial={{ opacity: 0, x: isPhoneLeft ? -30 : 30, rotate: isPhoneLeft ? -15 : 15 }}
            whileInView={{ opacity: 1, x: 0, rotate: isPhoneLeft ? -12 : 12 }}
            whileHover={{ scale: 1.05, rotate: isPhoneLeft ? -8 : 8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`absolute ${isPhoneLeft ? '-left-8 top-1/2 -translate-y-1/2' : '-right-8 top-1/2 -translate-y-1/2'} w-32 md:w-40 lg:w-48 z-20 pointer-events-none`}
            style={{ perspective: '1000px' }}
          >
            <div className="relative aspect-[9/19] rounded-[1.8rem] border-[8px] border-[var(--site-border)] bg-[var(--site-card-bg-strong)] shadow-[0_25px_50px_rgba(0,0,0,0.3)] overflow-hidden backdrop-blur-xl"
              style={{ transform: `rotateY(${isPhoneLeft ? 15 : -15}deg) rotateX(5deg)` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <PhoneMockup
                screenshotSrc={screenshots[projectKey] || undefined}
                alt={`${project.name} floating preview`}
                accentClassName={project.accentClassName}
                frameClassName="rounded-[1.2rem]"
              />
            </div>
          </motion.div>
        )}

        <div className="relative grid h-full grid-cols-1 gap-4 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div className="flex h-full flex-col">
            <div className="flex items-start justify-between gap-3">
              <ProjectLogo icon={project.logoIcon} label={`${project.name} logo`} />
              <BracketButton
                onClick={(event) => toggleExpand(projectKey, event)}
                label={`Toggle ${project.name} card`}
                expanded={expandedCards[projectKey]}
              />
            </div>

            <p className="mt-4 inline-flex w-fit text-[#10b981] font-bold text-[10px] tracking-[0.14em] uppercase bg-[#10b981]/10 px-4 py-1.5 rounded-full">
              {project.badge}
            </p>
            <h3 className="mt-3 text-3xl md:text-4xl font-black font-doto text-[var(--text-heading)] leading-tight">{project.name}</h3>
            <p className="mt-2 max-w-xl text-sm md:text-base text-[var(--text-secondary)] font-medium leading-relaxed">{project.short}</p>

            <div className="mt-auto pt-4 text-white">{renderRatingSummary(projectKey)}</div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-[1.8rem] border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <PhoneMockup
              screenshotSrc={screenshots[projectKey] || undefined}
              alt={`${project.name} preview`}
              accentClassName={project.accentClassName}
              topVisibleImageOnly
              frameClassName="rounded-[1.4rem]"
            />
          </div>
        </div>
      </motion.div>
    );
  };

  const renderExpandedPrimaryCard = (projectKey: ProjectKey) => {
    const project = popupProjects[projectKey];

    return (
      <motion.div
        id={projectKey}
        key={`${projectKey}-expanded`}
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.34 }}
        className="rounded-[2.4rem] border border-[var(--site-border)] bg-[var(--site-card-bg)] backdrop-blur-lg p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 group flex flex-col h-[560px] md:h-[590px] overflow-hidden relative shadow-[0_20px_60px_rgba(129,181,50,0.05)] scroll-mt-28 cursor-pointer"
        onClick={() => setActiveProject(projectKey)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setActiveProject(projectKey);
          }
        }}
      >
        <div className="relative min-h-[88px]">
          <div className="absolute left-0 top-0">
            <ProjectLogo icon={project.logoIcon} label={`${project.name} logo`} />
          </div>
          <BracketButton
            onClick={(event) => toggleExpand(projectKey, event)}
            label={`Collapse ${project.name} card`}
            expanded={expandedCards[projectKey]}
            className="top-0 right-0"
          />
          <div className="mx-auto max-w-[72%] text-center pt-1">
            <h3 className="text-4xl font-extrabold font-doto text-[var(--text-heading)] leading-tight">{project.name}</h3>
            {renderRatingSummary(projectKey)}
          </div>
        </div>

        <p className="mt-3 mx-auto inline-flex w-fit text-[#10b981] font-bold text-[10px] tracking-[0.14em] uppercase bg-[#10b981]/10 px-4 py-1.5 rounded-full">{project.badge}</p>
        <p className="mt-4 text-[var(--text-secondary)] text-[1.1rem] font-medium leading-relaxed line-clamp-4 text-center px-3">{project.short}</p>

        <div className="mt-auto relative overflow-hidden aspect-[9/19] w-[72%] md:w-[66%] max-w-[290px] mx-auto -mb-[32%] rounded-[2.2rem] border-[9px] border-[var(--site-border)] shadow-[0_34px_52px_rgba(0,0,0,0.32)] transition-transform duration-500 md:group-hover:-translate-y-3 bg-[var(--site-card-bg-strong)]">
          <PhoneMockup
            screenshotSrc={screenshots[projectKey] || undefined}
            alt={`${project.name} mobile preview`}
            accentClassName={project.accentClassName}
            topVisibleImageOnly
          />
        </div>
      </motion.div>
    );
  };

  const renderExpandedMiniCard = (projectKey: ProjectKey) => {
    const project = popupProjects[projectKey];

    return (
      <motion.div
        id={projectKey}
        key={`${projectKey}-mini-expanded`}
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.32 }}
        className="relative rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-card-bg)] backdrop-blur-lg p-5 md:p-6 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col min-h-[360px] md:min-h-[395px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden cursor-pointer"
        onClick={() => setActiveProject(projectKey)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setActiveProject(projectKey);
          }
        }}
      >
        <div className="relative min-h-[72px]">
          <div className="absolute left-0 top-0">
            <ProjectLogo icon={project.logoIcon} label={`${project.name} logo`} />
          </div>
          <BracketButton
            onClick={(event) => toggleExpand(projectKey, event)}
            label={`Collapse ${project.name} card`}
            expanded={expandedCards[projectKey]}
            className="top-0 right-0"
          />
          <h4 className="text-[1.3rem] font-extrabold font-doto text-[var(--text-heading)] leading-tight text-center px-12 pt-1">{project.name}</h4>
        </div>
        <p className="mt-2 inline-flex w-fit text-[#10b981] font-bold text-[10px] tracking-[0.14em] uppercase bg-[#10b981]/10 px-3 py-1.5 rounded-full">{project.badge}</p>
        {renderRatingSummary(projectKey, true)}
        <p className="mt-1 text-[0.95rem] leading-relaxed text-[var(--text-secondary)] font-medium pr-1">{project.short}</p>

        <div className="pointer-events-none absolute left-1/2 bottom-[-52%] md:bottom-[-56%] -translate-x-1/2 overflow-hidden aspect-[9/20] w-[54%] md:w-[72%] rounded-[1.5rem] md:rounded-[2rem] border-[6px] md:border-[8px] border-[var(--site-border)] shadow-[0_14px_22px_rgba(0,0,0,0.26)] bg-[var(--site-card-bg-strong)] transition-transform duration-500 md:group-hover:-translate-y-2">
          <PhoneMockup
            screenshotSrc={screenshots[projectKey]}
            alt={`${project.name} mini mobile preview`}
            accentClassName={project.accentClassName}
            frameClassName="rounded-none"
            imageClassName="object-cover object-top scale-[1.02]"
          />
        </div>
      </motion.div>
    );
  };

  const selectedProject = activeProject ? popupProjects[activeProject] : null;
  const selectedScreenshot = activeProject ? screenshots[activeProject] : undefined;

  return (
    <section id="projects" className="px-6 md:px-12 w-full max-w-7xl mx-auto scroll-mt-28">
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline font-doto text-[var(--text-heading)] mb-6">
          Projects Made<span className="font-doto text-4xl sm:text-5xl md:text-7xl font-extrabold rubber-spin-dot inline-flex items-center justify-center w-[1em] h-[1em] leading-none align-middle text-[#10b981]">+</span>
        </h2>
        <p className="text-xl text-[var(--text-secondary)] font-medium">Real projects I built to solve real problems, with design and engineering working together.</p>
      </div>

      {/* ── Desktop magazine grid ── */}
      <div className="hidden md:grid gap-5 auto-rows-[minmax(176px,auto)]" style={{
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      }}>
        {/* Row 1: Small + Large Feature */}
        <div className="col-span-1 row-span-1">
          {renderCompactCard('calgpa', 'min-h-[176px]', 0.08)}
        </div>
        <div className="col-span-2 row-span-2">
          {renderLandscapeCard('aether', 'min-h-[380px]', 0, true, 0)}
        </div>

        {/* Row 2: Tall + Medium + Tall */}
        <div className="col-span-1 row-span-2">
          {renderCompactCard('zephra', 'min-h-[380px]', 0.14)}
        </div>
        <div className="col-span-1 row-span-1">
          {renderLandscapeCard('campusnow', 'min-h-[240px]', 0.1)}
        </div>
        <div className="col-span-1 row-span-2">
          {renderCompactCard('miniminds', 'min-h-[380px]', 0.06)}
        </div>

        {/* Row 3: Large Feature + Small */}
        <div className="col-span-2 row-span-1">
          {renderLandscapeCard('textotest', 'min-h-[240px]', 0.04, true, 1)}
        </div>
        <div className="col-span-1 row-span-1">
          {renderCompactCard('carsio', 'min-h-[176px]', 0.12)}
        </div>

        {/* Row 4: Small + Small + Small */}
        <div className="col-span-1 row-span-1">
          {renderCompactCard('roledoc', 'min-h-[176px]', 0.18)}
        </div>
        <div className="col-span-1 row-span-1">
          {renderCompactCard('cardone', 'min-h-[176px]', 0.12)}
        </div>
        <div className="col-span-1 row-span-1">
          {renderCompactCard('cardtwo', 'min-h-[176px]', 0.18)}
        </div>
      </div>

      {/* ── Tablet 2-column adaptive grid ── */}
      <div className="hidden md:hidden lg:hidden grid gap-5 auto-rows-[minmax(176px,auto)]" style={{
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      }}>
        {/* Row 1: Small + Large Feature */}
        <div className="col-span-1 row-span-1">
          {renderCompactCard('calgpa', 'min-h-[176px]', 0.08)}
        </div>
        <div className="col-span-1 row-span-2">
          {renderLandscapeCard('aether', 'min-h-[380px]', 0, true, 0)}
        </div>

        {/* Row 2: Tall + Medium */}
        <div className="col-span-1 row-span-2">
          {renderCompactCard('zephra', 'min-h-[380px]', 0.14)}
        </div>
        <div className="col-span-1 row-span-1">
          {renderLandscapeCard('campusnow', 'min-h-[240px]', 0.1)}
        </div>

        {/* Row 3: Tall + Small */}
        <div className="col-span-1 row-span-2">
          {renderCompactCard('miniminds', 'min-h-[380px]', 0.06)}
        </div>
        <div className="col-span-1 row-span-1">
          {renderCompactCard('carsio', 'min-h-[176px]', 0.12)}
        </div>

        {/* Row 4: Large Feature + Small */}
        <div className="col-span-1 row-span-1">
          {renderLandscapeCard('textotest', 'min-h-[240px]', 0.04, true, 1)}
        </div>
        <div className="col-span-1 row-span-1">
          {renderCompactCard('roledoc', 'min-h-[176px]', 0.18)}
        </div>

        {/* Row 5: Small + Small */}
        <div className="col-span-1 row-span-1">
          {renderCompactCard('cardone', 'min-h-[176px]', 0.12)}
        </div>
        <div className="col-span-1 row-span-1">
          {renderCompactCard('cardtwo', 'min-h-[176px]', 0.18)}
        </div>
      </div>

      {/* ── Mobile list ── */}
      <div className="space-y-4 md:hidden">
        {(['aether', 'calgpa', 'zephra', 'miniminds', 'carsio', 'roledoc', 'campusnow', 'textotest', 'cardone', 'cardtwo'] as ProjectKey[]).map((projectKey, i) => (
          projectKey === 'aether' || projectKey === 'campusnow' || projectKey === 'textotest'
            ? renderLandscapeCard(projectKey, '', i * 0.06)
            : renderCompactCard(projectKey, '', i * 0.06)
        ))}
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-[var(--site-overlay)] backdrop-blur-[2px] px-2 pb-24 pt-20 md:px-8 md:pb-8 md:pt-24"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.99 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative h-full w-full md:mx-auto md:h-[82vh] md:max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] backdrop-blur-md shadow-[0_24px_58px_rgba(0,0,0,0.35)]"
            >
              <div className="pointer-events-none absolute -top-20 right-6 h-36 w-36 rounded-full bg-[#10b981]/5 blur-3xl" />
              <div className="h-full overflow-y-auto p-4 md:p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="pr-2">
                    <p className="text-[10px] tracking-[0.16em] uppercase text-[#10b981] font-bold">Project Spotlight</p>
                    <h3 className="mt-1 text-2xl md:text-3xl font-black font-doto text-[var(--text-heading)] leading-tight">{selectedProject.name}</h3>
                    <p className="mt-2 text-sm md:text-[15px] text-[var(--text-secondary)] max-w-3xl leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="h-10 w-10 rounded-xl border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] text-[var(--text-secondary)] hover:bg-[var(--site-card-bg)] transition-colors shrink-0 inline-flex items-center justify-center cursor-pointer"
                    aria-label="Close popup"
                  >
                    <span className="material-symbols-outlined text-[1.15rem] leading-none">close</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4 md:gap-5">
                  <div className="rounded-[1.25rem] border border-[var(--site-border)] bg-[var(--site-card-bg)] backdrop-blur-sm p-4 shadow-[0_10px_22px_rgba(0,0,0,0.2)]">
                    <div className="mx-auto relative overflow-hidden aspect-[9/19] w-[68%] sm:w-[46%] lg:w-full max-w-[210px] rounded-[1.45rem] border-[7px] border-[var(--site-border)] shadow-[0_18px_30px_rgba(0,0,0,0.3)] bg-[var(--site-card-bg-strong)]">
                      <PhoneMockup
                        screenshotSrc={selectedScreenshot}
                        alt={`${selectedProject.name} popup preview`}
                        accentClassName="bg-gradient-to-b from-[#34d399] to-[#059669]"
                        frameClassName="rounded-none"
                      />
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] border border-[var(--site-border)] bg-[var(--site-card-bg)] backdrop-blur-sm p-4 md:p-5 shadow-[0_10px_22px_rgba(0,0,0,0.2)]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                      <div className="rounded-xl border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] px-3 py-2">
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[#10b981] font-bold">Domain</p>
                        <p className="mt-0.5 text-sm font-bold text-[var(--text-card)]">{selectedProject.domain}</p>
                      </div>
                      <div className="rounded-xl border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] px-3 py-2">
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[#10b981] font-bold">Community Rating</p>
                        {activeProject ? renderRatingSummary(activeProject, true) : null}
                      </div>
                      <div className="rounded-xl border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] px-3 py-2">
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[#10b981] font-bold">Project Year</p>
                        <p className="mt-0.5 text-sm font-bold text-[var(--text-card)]">{selectedProject.workedOn}</p>
                      </div>
                      <div className="rounded-xl border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] px-3 py-2">
                        <p className="text-[10px] tracking-[0.12em] uppercase text-[#10b981] font-bold">Role</p>
                        <p className="mt-0.5 text-sm font-bold text-[var(--text-card)] line-clamp-2">{selectedProject.role}</p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] p-3">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#10b981] font-bold">Rate This Project</p>
                      <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {ratingChoices.map((entry) => (
                          <button
                            key={entry.stars}
                            type="button"
                            onClick={() => activeProject && submitRating(activeProject, entry.stars)}
                            disabled={isSubmittingRating}
                            className={`rounded-full border px-3 py-2 text-xs font-bold tracking-wide transition-all hover:-translate-y-0.5 disabled:opacity-65 cursor-pointer ${entry.className}`}
                            aria-label={`Rate ${entry.stars} stars`}
                          >
                            {entry.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <h4 className="mt-4 text-[11px] tracking-[0.14em] uppercase font-bold font-doto text-[var(--text-secondary)]">Tech Stack</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full text-sm font-medium bg-[var(--site-card-bg-strong)] text-[#10b981] border border-[var(--site-border)]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-[var(--site-border)] bg-[var(--site-card-bg-strong)] px-4 py-3 text-center font-semibold text-[var(--text-secondary)] hover:bg-[var(--site-card-bg)] transition-colors"
                      >
                        Open Repository
                      </a>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-[var(--site-border)] bg-[var(--site-accent)] text-white px-4 py-3 text-center font-semibold hover:bg-[var(--site-accent-hover)] transition-colors"
                      >
                        Open Live App
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
