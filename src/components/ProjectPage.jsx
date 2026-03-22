import { useParams, useNavigate } from "react-router-dom";
import projects from "../constants/Projectsdata";

export default function ProjectPage() {
    const { slug } = useParams();
    const navigate  = useNavigate();

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-2xl font-bold">Project not found</p>
                <button
                    onClick={() => navigate(-1)}
                    className="text-sm text-gray-500 underline hover:text-black transition-colors"
                >
                    ← Go back
                </button>
            </div>
        );
    }

    const {
        year, status, title, subtitle, desc,
        image, tags = [], technology, highlights, next,
    } = project;

    return (
        <div className="bg-white text-[#111] min-h-screen relative overflow-x-hidden">

            <main className="max-w-[1100px] mx-auto px-12 py-12 pb-20">

                <button
                    onClick={() => navigate("/")}
                    className="text-sm text-gray-500 inline-flex items-center gap-1.5 hover:text-[#111] transition-colors cursor-pointer bg-transparent border-none p-0"
                >
                    ← Back to projects
                </button>

                <div className={`grid gap-12 items-center mt-8 mb-18 ${image ? "grid-cols-2" : "grid-cols-1"} max-[900px]:grid-cols-1`}>

                    <div>
                        <div className="flex items-center gap-3.5 mb-5">
                            {year && <span className="text-sm text-gray-500 font-medium">{year}</span>}
                            {status && (
                                <span className="bg-[#111] text-white rounded-md px-3 py-1 text-xs font-semibold tracking-wide">
                                    {status}
                                </span>
                            )}
                        </div>

                        {title && (
                            <h1 className="text-[clamp(42px,5.5vw,72px)] font-extrabold tracking-[-0.03em] leading-[1.05] text-[#111] mb-3">
                                {title}
                            </h1>
                        )}

                        {subtitle && (
                            <p className="text-xl font-normal text-gray-700 mb-4">{subtitle}</p>
                        )}

                        {desc && (
                            <p className="text-base text-gray-500 leading-relaxed mb-7">{desc}</p>
                        )}

                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2.5">
                                {tags.map((t) => (
                                    <span
                                        key={t}
                                        className="inline-block border border-gray-300 rounded-full px-3.5 py-1 text-[13px] font-medium text-gray-700 bg-transparent hover:border-[#111] hover:text-[#111] transition-colors"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {image && (
                        <div className="w-full h-[420px] max-[900px]:h-[320px] max-[900px]:mt-8 rounded-[20px] overflow-hidden border border-gray-200">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover block transition-transform duration-500 ease-in-out hover:scale-[1.03]"
                            />
                        </div>
                    )}
                </div>

                {technology && (
                    <div className="mb-18">
                        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2.5">
                            TECHNOLOGY
                        </p>
                        <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em] text-[#111] mb-7">
                            {technology.heading}
                        </h2>
                        <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5">
                            {technology.items.map((item) => (
                                <div key={item.name} className="border border-gray-200 rounded-2xl p-8 bg-[#fafafa] hover:border-green-500 hover:bg-green-50 transition-colors">
                                    <p className="text-lg font-bold text-[#111] mb-3 leading-snug">{item.name}</p>
                                    <p className="text-[15px] text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {highlights && (
                    <div className="mb-18 mt-10">
                        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-2.5">
                            HIGHLIGHTS
                        </p>
                        <h2 className="text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em] text-[#111] mb-7">
                            {highlights.heading}
                        </h2>
                        <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5">
                            {highlights.items.map((item) => (
                                <div key={item.name} className="border border-gray-200 rounded-2xl p-8 bg-[#fafafa] hover:border-green-500 hover:bg-green-50 transition-colors">
                                    <p className="text-lg font-bold text-[#111] mb-3 leading-snug">{item.name}</p>
                                    <p className="text-[15px] text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {next && (
                    <div className="flex justify-end mt-10">
                        <button
                            onClick={() => navigate(next.href)}
                            className="block border border-gray-200 rounded-xl px-7 py-6 min-w-[260px] text-right bg-[#fafafa] hover:border-green-500 hover:bg-green-50 transition-colors cursor-pointer"
                        >
                            <p className="text-[13px] text-gray-400 font-medium mb-1">Next &gt;</p>
                            <p className="text-lg font-bold text-[#111]">{next.label}</p>
                        </button>
                    </div>
                )}

            </main>

            <footer className="border-t border-gray-100 px-12 py-6 flex items-center justify-between flex-wrap gap-3">
                <span className="text-[13px] text-gray-400">
                    © 2026 · Built with <span className="text-red-500">♥</span>
                </span>
                <div className="flex gap-3">
                    {["Privacy & Terms", "Cookie preferences"].map((l) => (
                        <a key={l} href="#" className="text-[13px] text-gray-500 border border-gray-200 rounded-full px-3.5 py-1 hover:border-gray-400 transition-colors">
                            {l}
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    );
}
