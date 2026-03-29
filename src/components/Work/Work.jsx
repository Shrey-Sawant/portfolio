import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../../constants/Projectsdata";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  const titleRef = useRef(null);
  const catRef = useRef(null);
  const descRef = useRef(null);
  const counterOutRef = useRef(null);
  const counterInRef = useRef(null);
  const frameRef = useRef(null);
  const trackRef = useRef(null);
  const imgPanelRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const gsapCtxRef = useRef(null);

  const openProject = (index) => {
    if (gsapCtxRef.current) {
      gsapCtxRef.current.revert();
      gsapCtxRef.current = null;
    }
    ScrollTrigger.getAll().forEach((t) => t.kill());
    if (trackRef.current) gsap.set(trackRef.current, { clearProps: "all" });
    if (frameRef.current) gsap.set(frameRef.current, { clearProps: "all" });
    navigate(`/projects/${projects[index].slug}`);
  };

  useEffect(() => {
    gsapCtxRef.current = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const panelEls = () => [titleRef.current, catRef.current, descRef.current];
        const N = projects.length;

        const flipCounter = (newIndex, going) => {
          const exitY = going === "forward" ? "-100%" : "100%";
          const enterY = going === "forward" ? "100%" : "-100%";
          if (counterInRef.current)
            counterInRef.current.textContent = projects[newIndex].id;
          gsap.to(counterOutRef.current, {
            y: exitY,
            opacity: 0,
            duration: 0.28,
            ease: "power2.in",
          });
          gsap.fromTo(
            counterInRef.current,
            { y: enterY, opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.32,
              ease: "power3.out",
              delay: 0.05,
            },
          );
        };

        const exitContent = () => {
          gsap.to(panelEls(), {
            opacity: 0,
            y: -18,
            stagger: 0.05,
            duration: 0.3,
            ease: "power2.in",
          });
        };

        const enterContent = (newIndex) => {
          gsap.fromTo(
            panelEls(),
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.5,
              ease: "power3.out",
              delay: 0.1,
            },
          );
          if (counterOutRef.current)
            counterOutRef.current.textContent = projects[newIndex].id;
          gsap.set(counterOutRef.current, { y: "0%", opacity: 1 });
          gsap.set(counterInRef.current, { y: "100%", opacity: 0 });
        };

        gsap.fromTo(
          panelEls(),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power3.out",
            delay: 0.2,
          },
        );
        gsap.set(counterOutRef.current, { y: "0%", opacity: 1 });
        gsap.set(counterInRef.current, { y: "100%", opacity: 0 });

        const GAP_PX = 256;
        const IMAGE_H = () => window.innerHeight * 0.5;
        const getPanelH = () => IMAGE_H() + GAP_PX;
        const getTotalMove = () => getPanelH() * (N - 1);

        const updateSpacerHeight = () => {
          const spacer = document.getElementById("work-spacer");
          if (spacer) spacer.style.height = getTotalMove() + "px";
        };
        updateSpacerHeight();
        window.addEventListener("resize", updateSpacerHeight);

        ScrollTrigger.create({
          trigger: frameRef.current,
          start: "top top",
          end: () => `+=${getTotalMove()}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate(self) {
            const panelH = getPanelH();
            const totalMove = getTotalMove();
            const y = -self.progress * totalMove;

            gsap.set(trackRef.current, { y });

            const newIndex = Math.min(N - 1, Math.floor(self.progress * N ));
            if (newIndex !== activeIndexRef.current) {
              const going =
                newIndex > activeIndexRef.current ? "forward" : "back";
              activeIndexRef.current = newIndex;
              exitContent();
              flipCounter(newIndex, going);
              setTimeout(() => {
                setActiveIndex(newIndex);
                enterContent(newIndex);
              }, 360);
            }

            imgPanelRefs.current.forEach((panel, i) => {
              if (!panel) return;
              const img = panel.querySelector("img");
              if (!img) return;
              const panelTop = i * panelH;
              const offset = panelTop + y + 128;
              const rel = offset / (window.innerHeight * 0.5);
              const dist = Math.abs(rel);
              const scale = gsap.utils.clamp(1, 1.15, 1 + dist * 0.13);
              const bright = gsap.utils.clamp(0.45, 0.92, 0.92 - dist * 0.42);
              const sat = gsap.utils.clamp(0.55, 1, 1 - dist * 0.42);
              gsap.set(img, {
                scale,
                filter: `brightness(${bright}) saturate(${sat})`,
              });
            });
          },
        });

        return () => window.removeEventListener("resize", updateSpacerHeight);
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(trackRef.current, { clearProps: "all" });
        gsap.set(frameRef.current, { clearProps: "all" });
      });

    });

    return () => {
      if (gsapCtxRef.current) {
        gsapCtxRef.current.revert();
        gsapCtxRef.current = null;
      }
    };
  }, []);

  const current = projects[activeIndex];
  const total = String(projects.length).padStart(2, "0");

  return (
    <>
      <div
        id="works"
        ref={frameRef}
        className="w-full overflow-hidden relative"
      >
        <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-10 lg:gap-20 mx-6 lg:mx-20 pt-10 lg:pt-0">
          <div className="overflow-hidden lg:h-[100vh]">
            <div ref={trackRef} className="flex flex-col gap-12 lg:gap-0 will-change-transform">
              {projects.map((project, i) => (
                <div
                  key={project.id}
                  ref={(el) => (imgPanelRefs.current[i] = el)}
                  className={`flex-shrink-0 w-full lg:py-32 ${i === 0 ? "lg:mt-20" : ""}`}
                >
                  <div
                    className="w-full overflow-hidden cursor-pointer group relative"
                    style={{ height: "50vh" }}
                    onClick={() => openProject(i)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover will-change-transform"
                      style={{ willChange: "transform, filter" }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium tracking-widest uppercase border border-white px-4 py-2">
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="lg:hidden mt-6 flex flex-col items-start gap-2">
                    <h3 className="text-3xl uppercase tracking-tighter font-light">{project.title}</h3>
                    <p className="text-lg tracking-tighter">{project.category}</p>
                    <button onClick={() => openProject(i)} className="mt-2 text-sm font-medium tracking-widest uppercase border-b border-black pb-0.5">
                      View Project →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block sticky top-20 self-start pt-20">
            <div className="border-b-2 border-black flex justify-between pb-1">
              <h2 className="text-2xl uppercase text-start">Works</h2>
              <p className="text-2xl">/shrey</p>
            </div>

            <div className="mt-20 flex flex-col">
              <span
                className="font-mono text-xl"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <span>[ </span>
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    overflow: "hidden",
                    verticalAlign: "middle",
                  }}
                >
                  <span
                    style={{ visibility: "hidden", display: "inline-block" }}
                  >
                    {current.id}
                  </span>
                  <span
                    ref={counterOutRef}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {current.id}
                  </span>
                  <span
                    ref={counterInRef}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      display: "flex",
                      alignItems: "center",
                      opacity: 0,
                    }}
                  >
                    {current.id}
                  </span>
                </span>
                <span> / {total} ]</span>
              </span>

              <h3
                ref={titleRef}
                className="text-3xl uppercase tracking-tighter font-light mt-6"
              >
                {current.title}
              </h3>

              <p ref={catRef} className="text-lg tracking-tighter mt-1">
                {current.category}
              </p>

              <p ref={descRef} className="text-lg font-light mt-8">
                {current.desc}
              </p>
            </div>

            <div className="flex items-center gap-2 mt-10">
              {projects.map((_, i) => (
                <div
                  key={i}
                  className="h-[5px] rounded-full transition-all duration-300"
                  style={{
                    width: activeIndex === i ? 24 : 8,
                    backgroundColor: activeIndex === i ? "#000" : "#d1d5db",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => openProject(activeIndex)}
              className="mt-10 text-sm font-medium tracking-widest uppercase border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
            >
              View Project →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
