import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects";
import {
  HiArrowLeft,
  HiExternalLink,
  HiCode,
  HiLightBulb,
  HiShieldCheck,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

// All 3 project pages are prerendered at build time; unknown ids call notFound().
export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));
  return {
    title: project ? project.title : "Project Not Found",
  };
}

const ProjectDetails = async ({params,}: {params: Promise<{ id: string }>}) => {
  const { id } = await params;
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gray-50/60 text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden p-6 sm:p-10 space-y-8">

          {/* Main Screenshot */}
          <div className="relative rounded-xl overflow-hidden border border-gray-200/80 shadow-md aspect-video bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 896px) 896px, calc(100vw - 48px)"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Category */}
          <div className="space-y-3">
            {project.category && (
              <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                {project.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <HiCode className="text-blue-600 text-base" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-50 text-blue-800 border border-blue-100 px-3 py-1 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-gray-900">Project Overview</h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <HiShieldCheck className="text-emerald-600 text-lg" />
                Technical Challenges &amp; Solutions
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Enhancements */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-blue-50/50 border border-blue-100">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <HiLightBulb className="text-amber-500 text-lg" />
                Future Roadmap &amp; Enhancements
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-700">
                {project.future.map((enhancement) => (
                  <li key={enhancement}>{enhancement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition"
              >
                <span>Live Demo</span>
                <HiExternalLink className="text-base" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold shadow-sm hover:shadow transition"
              >
                <FaGithub className="text-lg" />
                <span>Source Code</span>
              </a>
            )}

            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline ml-auto"
            >
              View Developer Resume &rarr;
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
