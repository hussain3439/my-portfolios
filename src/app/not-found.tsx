import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

// Reuses the exact "Project Not Found" card from the original pages/ProjectDetails.jsx,
// shown when a requested project (or page) does not exist.
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h2>
        <p className="text-gray-600 text-sm mb-6">
          The project you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold transition"
        >
          <HiArrowLeft /> Back to Projects
        </Link>
      </div>
    </div>
  );
}
