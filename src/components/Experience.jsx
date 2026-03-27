import { useEffect, useRef } from "react";

const experiences = [
    {
        period: "Apr 2025 — Jul 2025",
        current: true,
        role: "Full Stack Developer Intern",
        company: "Pentagon Technologies",
        description:
            "Designed and deployed responsive web solutions for B2B clients, including Sudarshan Moulds and Alamiko. Conducted UI/UX research to prototype scalable eCommerce platforms and implemented SEO strategies to boost search visibility and user engagement.",
        tags: ["WordPress", "Figma", "SEO", "UI/UX Research"],
    },
    {
        period: "Jan 2025 — Mar 2025",
        current: false,
        role: "MERN Stack Developer Intern",
        company: "TechAsia Mechatronics Pvt Ltd",
        description:
            "Developed the Smart Energy Meter platform using the MERN stack for real-time monitoring and analytics[cite: 13]. Engineered scalable REST APIs and optimized database queries to significantly improve system performance and responsiveness[cite: 14, 15].",
        tags: ["React", "Node.js", "MongoDB", "Redux", "REST APIs"],
    },
];

export default function Experience() {
    const sectionRef = useRef(null);
    const titleRef   = useRef(null);
    const countRef   = useRef(null);
    const dividerRef = useRef(null);
    const rowsRef    = useRef(null);
    const bottomRef  = useRef(null);
    const ctaRef     = useRef(null);

    useEffect(() => {
        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;
        if (!gsap || !ScrollTrigger) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const letters = titleRef.current?.querySelectorAll(".letter");
            gsap.fromTo(letters,
                { y: "110%", opacity: 0 },
                {
                    y: "0%", opacity: 1,
                    stagger: 0.03, duration: 0.85, ease: "power3.out",
                    scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
                }
            );

            gsap.fromTo(countRef.current,
                { opacity: 0, x: 30 },
                {
                    opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
                    scrollTrigger: { trigger: titleRef.current, start: "top 85%" },
                }
            );

            gsap.fromTo(dividerRef.current,
                { scaleX: 0, transformOrigin: "left center" },
                {
                    scaleX: 1, duration: 1.1, ease: "power2.inOut",
                    scrollTrigger: { trigger: dividerRef.current, start: "top 90%" },
                }
            );

            const rows = rowsRef.current?.querySelectorAll(".exp-row");
            gsap.fromTo(rows,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0,
                    stagger: 0.13, duration: 0.75, ease: "power3.out",
                    scrollTrigger: { trigger: rowsRef.current, start: "top 88%" },
                }
            );

            gsap.fromTo(bottomRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
                    scrollTrigger: { trigger: bottomRef.current, start: "top 95%" },
                }
            );
        }, sectionRef);

        const cta = ctaRef.current;
        if (cta && gsap) {
            const onMove = (e) => {
                const r = cta.getBoundingClientRect();
                gsap.to(cta, {
                    x: (e.clientX - r.left - r.width / 2) * 0.2,
                    y: (e.clientY - r.top - r.height / 2) * 0.2,
                    duration: 0.12, ease: "none",
                });
            };
            const onLeave = () =>
                gsap.to(cta, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });

            cta.addEventListener("mousemove", onMove);
            cta.addEventListener("mouseleave", onLeave);
            return () => {
                ctx.revert();
                cta.removeEventListener("mousemove", onMove);
                cta.removeEventListener("mouseleave", onLeave);
            };
        }

        return () => ctx.revert();
    }, []);

    const splitLetters = (text) =>
        text.split("").map((ch, i) => (
            <span key={i} className="letter inline-block">
                {ch === " " ? "\u00A0" : ch}
            </span>
        ));

    return (
        <section
            ref={sectionRef}
            className="bg-[#e7e7e7] text-[#1a1a1a] px-6 md:px-32 pt-20 md:pt-36 tracking-wider"
        >
            <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
                <div>
                    <p className="mono text-xl tracking-widest uppercase text-[#1a1a1a]/40 mb-4">
                        Career
                    </p>

                    <div
                        ref={titleRef}
                        className="font-light text-5xl md:text-[64px] leading-tight text-[#1a1a1a] overflow-hidden"
                    >
                        {splitLetters("Experience.")}
                    </div>
                </div>

                <div
                    ref={countRef}
                    className="mono font-bold text-[48px] leading-none tracking-tight select-none"
                    style={{ color: "transparent", WebkitTextStroke: "1px rgba(26,26,26,0.15)" }}
                >
                    {String(experiences.length).padStart(2, "0")}
                </div>
            </div>

            <div
                ref={dividerRef}
                className="h-px bg-[#1a1a1a]/[0.12] origin-left"
            />

            <div ref={rowsRef}>
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className={`exp-row group relative flex flex-col md:grid md:grid-cols-[200px_1fr_auto] items-start gap-6 md:gap-10 py-8 md:py-12
                            ${i < experiences.length - 1 ? "border-b border-[#1a1a1a]/10" : ""}
                        `}
                    >
                        <div className="absolute -left-16 -right-16 top-0 bottom-0 bg-[#1a1a1a]/[0.025] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />

                        <div className="relative mono text-xl font-light text-[#1a1a1a]/40 leading-relaxed pt-1">
                            {exp.period}
                            {exp.current && (
                                <div className="flex items-center gap-2 mt-3">
                                    <span className="relative flex w-2 h-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                                        <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
                                    </span>
                                    <span className="mono text-sm tracking-widest uppercase text-[#1a1a1a]/40">
                                        Current
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="relative flex flex-col gap-3">
                            <h3 className="font-light text-[32px] leading-tight text-[#1a1a1a]">
                                {exp.role}
                            </h3>

                            <p className="mono text-2xl font-light tracking-wider text-[#1a1a1a]/50">
                                {exp.company}
                            </p>

                            <p className="font-light text-xl leading-relaxed text-[#1a1a1a]/55 max-w-[560px] mt-1">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="mono text-sm tracking-widest uppercase text-[#1a1a1a]/40 px-3 py-1.5 border border-[#1a1a1a]/15 transition-all duration-200 group-hover:border-[#1a1a1a]/35 group-hover:text-[#1a1a1a]/65"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div
                            className="relative mono font-bold text-[48px] leading-none tracking-tight select-none pt-1 shrink-0 transition-all duration-200"
                            style={{
                                color: "transparent",
                                WebkitTextStroke: `1px rgba(26,26,26,${i === 0 ? "0.12" : "0.1"})`,
                            }}
                            ref={(el) => {
                                if (!el) return;
                                el.addEventListener("mouseenter", () => {
                                    el.style.WebkitTextStroke = "1px rgba(26,26,26,0.4)";
                                });
                                el.addEventListener("mouseleave", () => {
                                    el.style.WebkitTextStroke = `1px rgba(26,26,26,${i === 0 ? "0.12" : "0.1"})`;
                                });
                            }}
                        >
                            {String(i + 1).padStart(2, "0")}
                        </div>
                    </div>
                ))}
            </div>

            <div
                ref={bottomRef}
                className="flex items-center justify-between flex-wrap gap-6 mt-14"
            >
                <div ref={ctaRef} className="inline-block">
                    <a
                        href="#"
                        className="inline-flex items-center gap-4 px-10 py-5 bg-[#1a1a1a] text-[#ebebeb] mono text-xl tracking-widest uppercase no-underline transition-colors duration-300 hover:bg-[#e7e7e7] hover:border hover:border-[#1a1a1a] hover:text-[#1a1a1a] cursor-pointer"
                    >
                        View Full Resume
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                        </svg>
                    </a>
                </div>

                <p className="mono text-xl font-light tracking-wider text-[#1a1a1a]/35">
                    {experiences.length} years · Mumbai, India
                </p>
            </div>

        </section>
    );
}
