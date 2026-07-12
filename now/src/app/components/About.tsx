"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import mePhoto from "../assets/imgs/me.png";

const coreStack = [
    { name: "Git", icon: "https://img.icons8.com/color/96/git.png" },
    { name: "GitHub", icon: "https://img.icons8.com/color/96/github--v1.png" },
    { name: "Figma", icon: "https://img.icons8.com/color/96/figma--v1.png" },
    { name: "Docker", icon: "https://img.icons8.com/color/96/docker.png" },
    { name: "Python", icon: "https://img.icons8.com/color/96/python--v1.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/color/96/javascript--v1.png" },
    { name: "React", icon: "https://img.icons8.com/color/96/react-native.png" },
    { name: "Next.js", icon: "https://img.icons8.com/color/96/nextjs.png" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/color/96/tailwindcss.png" },
    { name: "Flutter", icon: "https://img.icons8.com/color/96/flutter.png" },
    { name: "FastAPI", icon: "https://img.icons8.com/color/96/api-settings.png" },
    { name: "SQL", icon: "https://img.icons8.com/color/96/sql.png" },
    { name: "Workflow Automation", icon: "https://img.icons8.com/color/96/data-configuration.png" },
    { name: "Prompt Engineering", icon: "https://img.icons8.com/color/96/chatgpt.png" },
    { name: "PWA", icon: "https://img.icons8.com/color/96/web.png" },
];

const journey = [
    {
        date: "May 2025 - Present",
        title: "Lead Web Developer · DSU MUNS Club",
        blurb: "Built event systems and React interfaces that scaled student applications and team output.",
    },
    {
        date: "Jun 2024 - Jul 2025",
        title: "AI Intern · Akeshya Pvt Ltd",
        blurb: "Engineered RAG-driven workflows with HuggingFace + FAISS for faster retrieval and cleaner doc intelligence.",
    },
];

const certs = [
    { name: "ServiceNow SysAdmin", issuer: "ServiceNow" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp" },
    { name: "Full Stack Development", issuer: "Udemy" },
];

const loopTitles = [
    "DevOps Engineering",
    "Product Development",
    "UI/UX Systems",
    "ServiceNow Workflows",
    "Workflow Automation",
    "Enterprise UX",
    "AI + RAG Systems",
    "Full Stack Delivery",
    "Performance Driven",
    "Design-Led Building",
];

const focusAreas = [
    { label: "DevOps & Delivery", level: 80 },
    { label: "UI/UX Design", level: 92 },
    { label: "Full Stack Development", level: 79 },
    { label: "ServiceNow Workflows", level: 82 },
];

const education = [
    {
        institution: "Dayananda Sagar University",
        period: "Sep 2023 - May 2027",
        score: "8.4 CGPA",
    },
    {
        institution: "Narayana Institute",
        period: "Aug 2021 - Mar 2023",
        score: "87%",
    },
    {
        institution: "Ratnam High School",
        period: "Jun 2016 - Apr 2021",
        score: "9.8",
    },
];

const quickStats = [
    { label: "Github Repositories", value: "17" },
    { label: "Deployed Repositories", value: "8" },
    { label: "Github Contributions", value: "1800+" },
    { label: "GitHub Stars", value: "464" },
];

const githubUsername = "alurubalakarthikeya";


export default function About() {
    const reduceMotion = useReducedMotion();

    return (
        <section id="about" className="relative w-full min-h-screen pb-10 overflow-hidden">
            <div className="relative px-6 md:px-12 w-full max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-14"
                >
                    <p className="inline-block px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                        About / Design + Dev + Me
                    </p>
                    <h2 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-extrabold font-headline font-doto text-slate-100 tracking-tight leading-[0.95]">
                        Building Apps, <br />
                        With Passion<span className="font-doto text-4xl sm:text-5xl md:text-7xl font-extrabold rubber-spin-dot inline-flex items-center justify-center w-[1em] h-[1em] leading-none align-middle text-[#10b981]">+</span>
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-slate-300 font-medium max-w-3xl mx-auto">
                        I enjoy building products end-to-end, from thoughtful UI to reliable backend systems, with DevOps and ServiceNow shaping how I ship.
                    </p>
                    <div className="mt-6 flex justify-center">
                        <a
                            href="/resume.pdf"
                            download="Aluru-Bala-Karthikeya-Resume.pdf"
                            className="inline-flex items-center gap-2 rounded-full border border-[#1c4f8a]/60 bg-[#081b3a]/60 px-6 py-3 text-sm md:text-base font-extrabold tracking-[0.08em] uppercase text-[#10b981] shadow-[0_10px_24px_rgba(16,185,129,0.08)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-[#0d2a54]/80 hover:text-white"
                        >
                            Download Resume
                            <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">download</span>
                        </a>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10">
                    <motion.article
                        initial={{ opacity: 0, x: -26 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="lg:col-span-7 rounded-[2.6rem] border border-[#1c4f8a]/30 bg-[#0d2a54]/25 backdrop-blur-xl p-7 md:p-9 shadow-[0_20px_56px_rgba(16,185,129,0.05)]"
                    >
                        <p className="inline-flex px-4 py-1.5 rounded-full text-[11px] tracking-[0.16em] uppercase font-bold text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20">
                            Product Stats
                        </p>
                        <h3 className="mt-5 text-3xl md:text-5xl font-extrabold font-doto text-slate-100 leading-[1.04]">
                            Apps with clean UI,
                            and real Use.
                        </h3>
                        <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-medium">
                            I always enjoy making my custom UI models by playing around rather than a static plan which makes them much better and unique.
                        </p>

                        <div className="mt-7 grid grid-cols-2 gap-3 md:gap-4">
                            {quickStats.map((item) => (
                                <div key={item.label} className="rounded-2xl border border-[#1c4f8a]/30 bg-[#081b3a]/50 px-4 py-4 shadow-sm">
                                    <p className="text-[11px] tracking-[0.14em] uppercase text-[#10b981] font-bold">{item.label}</p>
                                    <p className="mt-1 text-xl md:text-2xl font-black text-slate-100">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.article>

                    <motion.aside
                        initial={{ opacity: 0, x: 26 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="lg:col-span-5 rounded-[2.6rem] border border-[#10b981]/20 bg-gradient-to-br from-[#10b981]/20 to-[#059669]/10 backdrop-blur-xl p-7 md:p-9 shadow-[0_24px_64px_rgba(0,0,0,0.2)] text-white relative overflow-hidden"
                    >
                        <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#10b981]/10 blur-2xl" />
                        <div className="relative z-10 flex items-start gap-4">
                            <div className="relative w-27 h-27 rounded-2xl border border-white/30 overflow-hidden shadow-[0_14px_24px_rgba(0,0,0,0.2)] shrink-0">
                                <Image
                                    src={mePhoto}
                                    alt="Karthikeya profile"
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                    priority
                                />
                            </div>
                            <div>
                                <p className="text-sm tracking-[0.14em] uppercase text-[#10b981] font-bold">Hello there, I&apos;m</p>
                                <h4 className="text-2xl font-black leading-tight mt-1 text-slate-100">Aluru Bala Karthikeya</h4>
                                <p className="text-sm tracking-[0.14em] uppercase text-[#10b981] mt-1 font-bold">24K @LinkedIn</p>
                            </div>
                        </div>
                        <p className="relative z-10 mt-6 text-slate-200 text-base leading-relaxed font-medium">
                            A Pre-final year Computer Science student at Dayananda Sagar University who enjoys turning ideas into real world working products. I like to build applications that solves meaningful problems while exploring the domains of software engineering, AI systems, and product design. My approach of building products is simple: solve real problems, design unique UI experiences, and build scalable systems.
                        </p>
                        <div className="relative z-10 mt-6 flex flex-wrap gap-2.5">
                            {[
                                "DevOps",
                                "ServiceNow",
                                "AI Workflows",
                                "Frontend Systems",
                                "Product Thinking",
                            ].map((chip) => (
                                <span key={chip} className="rounded-full px-3 py-1.5 text-xs font-bold tracking-[0.1em] uppercase border border-[#10b981]/25 bg-[#10b981]/10 text-[#10b981]">
                                    {chip}
                                </span>
                            ))}
                        </div>
                    </motion.aside>
                </div>

                <motion.section
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="mb-10 rounded-[2.4rem] border border-[#1c4f8a]/30 bg-[#0d2a54]/25 backdrop-blur-lg p-5 md:p-7 shadow-[0_18px_45px_rgba(129,181,50,0.05)]"
                >
                    <div className="flex flex-row items-center justify-between gap-3 mb-4">
                        <div>
                            <p className="text-[11px] tracking-[0.16em] uppercase font-bold text-[#10b981]">GitHub graph</p>
                        </div>
                        <a
                            href={`https://github.com/${githubUsername}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-fit px-3 py-1.5 rounded-full text-xs font-bold tracking-[0.1em] uppercase bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20"
                        >
                            @{githubUsername}
                        </a>
                    </div>

                    <div className="w-full">
                        <img
                            src={`https://ghchart.rshah.org/10b981/${githubUsername}`}
                            alt={`${githubUsername} GitHub contributions graph`}
                            className="w-full h-auto rounded-2xl border border-[#1c4f8a]/20 bg-[#081b3a]/60 p-2"
                            loading="lazy"
                        />
                    </div>
                </motion.section>

                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden rounded-none border-y border-[#1c4f8a]/20 bg-[#0d2a54]/25 backdrop-blur-2xl shadow-[0_12px_32px_rgba(0,0,0,0.2)] mb-10">
                    <motion.div
                        className="flex gap-4 w-max py-4 px-6 md:px-12"
                        animate={reduceMotion ? undefined : { x: [0, -860] }}
                        transition={reduceMotion ? undefined : { duration: 22, ease: "linear", repeat: Infinity }}
                    >
                        {[...loopTitles, ...loopTitles, ...loopTitles].map((title, index) => (
                            <span
                                key={`single-${index}`}
                                className="px-4 py-1.5 rounded-full text-xs md:text-sm tracking-[0.13em] uppercase font-extrabold bg-[#10b981]/8 text-[#10b981] border border-[#10b981]/15 whitespace-nowrap"
                            >
                                {title}
                            </span>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10">
                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="lg:col-span-7 relative rounded-[2.3rem] bg-[#0d2a54]/25 border border-[#1c4f8a]/30 p-7 md:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden backdrop-blur-lg"
                    >
                        <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#10b981]/5 blur-3xl" />

                        <h3 className="text-3xl md:text-4xl font-extrabold font-doto text-slate-100 leading-tight mb-4">About Me</h3>
                        <p className="text-lg text-slate-300 leading-relaxed font-medium">
                            Beyond development, I also help professionals improve their LinkedIn presence and personal branding by helping them optimize their profiles for better visibility and opportunities.
                        </p>
                        <h4 className="text-1xl md:text-2xl font-extrabold font-doto text-slate-200 leading-tight mt-4">Hobbies</h4>
                        <div className="relative z-10 mt-6 flex flex-wrap gap-2.5">
                            {[
                                "Drawing",
                                "Reading News",
                                "Learning New Things",
                                "Music",
                                "Wikipedia",
                                "History",
                                "Art",
                                "Psychology"
                            ].map((chip) => (
                                <span key={chip} className="rounded-full px-3 py-1.5 text-xs font-bold tracking-[0.1em] uppercase border border-[#10b981]/20 bg-[#10b981]/10 text-[#10b981]">
                                    {chip}
                                </span>
                            ))}
                        </div>
                        <h4 className="text-1xl md:text-2xl font-extrabold font-doto text-slate-200 leading-tight mt-6">Languages I Speak:</h4>
                        <p className="text-lg text-slate-300 leading-relaxed font-medium mt-4">
                            - English (Professional proficiency) <br />
                            - Hindi (Professional proficiency) <br />
                            - Telugu (Native / Professional proficiency) <br />
                            - Kannada (Basic proficiency)
                        </p>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="lg:col-span-5 rounded-[2.3rem] bg-[#081b3a]/60 text-white border border-[#1c4f8a]/30 p-7 md:p-9 shadow-[0_22px_54px_rgba(0,0,0,0.15)] backdrop-blur-lg"
                    >
                        <h3 className="text-3xl font-extrabold font-doto mb-6">Skills</h3>
                        <div className="space-y-4 mb-7">
                            {focusAreas.map((item) => (
                                <div key={item.label}>
                                    <div className="flex items-center justify-between text-sm font-semibold mb-1 text-slate-300">
                                        <span>{item.label}</span>
                                        <span>{item.level}%</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-[#081b3a] overflow-hidden border border-[#1c4f8a]/20">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="h-full rounded-full bg-gradient-to-r from-[#10b981] to-[#34d399]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2.5">
                            {coreStack.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="rounded-xl border border-[#1c4f8a]/40 bg-[#081b3a]/70 hover:border-[#10b981]/40 px-1.5 py-2.5 flex items-center justify-center min-h-[56px] transition-colors"
                                >
                                    <img
                                        src={skill.icon}
                                        alt={`${skill.name} icon`}
                                        loading="lazy"
                                        width={28}
                                        height={28}
                                        className="h-7 w-7 object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.article>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4 rounded-[2.3rem] border border-[#1c4f8a]/30 bg-[#0d2a54]/25 backdrop-blur-lg p-7 md:p-9 shadow-[0_16px_40px_rgba(0,0,0,0.1)]"
                    >
                        <h3 className="text-2xl md:text-3xl font-extrabold font-doto text-slate-100">Currently Working</h3>
                        <p className="mt-3 text-lg text-slate-300 font-medium leading-relaxed">
                            • ServiceNow platform for application development, <br />• Automation of workflows, <br />• AI Systems and Intelligent Agents
                            <br />• UI/UX and Product Design
                        </p>
                    </motion.div>

                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                        className="lg:col-span-8 rounded-[2.3rem] bg-[#0d2a54]/25 border border-[#1c4f8a]/30 p-7 md:p-9 shadow-[0_18px_48px_rgba(0,0,0,0.1)] backdrop-blur-lg"
                    >
                        <h3 className="text-3xl md:text-4xl font-extrabold font-doto text-slate-100 mb-6">Education</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {education.map((item) => (
                                <div key={item.institution} className="rounded-2xl bg-[#081b3a]/50 border border-[#1c4f8a]/20 px-4 py-4">
                                    <p className="text-lg font-bold text-slate-200 leading-snug">{item.institution}</p>
                                    <p className="mt-2 text-[11px] tracking-[0.08em] uppercase text-[#10b981] font-bold">{item.period}</p>
                                    <p className="mt-2 text-slate-300 font-semibold">Score: {item.score}</p>
                                </div>
                            ))}
                        </div>
                    </motion.article>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-10">
                    <motion.article
                        id="experience"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-8 rounded-[2.3rem] bg-[#0d2a54]/25 border border-[#1c4f8a]/30 p-7 md:p-9 shadow-[0_18px_48px_rgba(0,0,0,0.1)] backdrop-blur-md"
                    >
                        <h3 className="text-3xl md:text-4xl font-extrabold font-doto text-slate-100 mb-7">Experiences</h3>
                        <div className="space-y-5">
                            {journey.map((item, index) => (
                                <div key={item.title} className="relative rounded-2xl bg-[#081b3a]/50 border border-[#1c4f8a]/20 px-5 py-4">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#10b981] to-[#059669]" />
                                    <p className="text-xs tracking-[0.14em] uppercase text-[#10b981] font-bold ml-2">{item.date}</p>
                                    <h4 className="mt-1 text-xl font-bold text-slate-200 ml-2">{item.title}</h4>
                                    <p className="mt-2 text-slate-300 font-medium leading-relaxed ml-2">{item.blurb}</p>
                                    {index < journey.length - 1 ? <div className="mt-4 border-b border-[#1c4f8a]/20" /> : null}
                                </div>
                            ))}
                        </div>
                    </motion.article>

                    <motion.article
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-4 rounded-[2.3rem] bg-[#0d2a54]/40 text-white border border-[#1c4f8a]/30 p-7 md:p-9 shadow-[0_22px_55px_rgba(0,0,0,0.15)]"
                    >
                        <h3 className="text-3xl font-extrabold font-doto mb-5 text-slate-100">Credentials</h3>
                        <div className="space-y-4">
                            {certs.map((cert) => (
                                <div key={cert.name} className="rounded-2xl bg-[#081b3a]/50 border border-[#1c4f8a]/20 px-4 py-3">
                                    <p className="text-xs tracking-[0.12em] uppercase text-[#10b981] font-bold">{cert.issuer}</p>
                                    <p className="mt-1 font-bold text-slate-200 text-lg leading-tight">{cert.name}</p>
                                </div>
                            ))}
                        </div>
                    </motion.article>
                </div>
            </div>

        </section>
    );
}
