import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educationHistory = [
  {
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "Your University / College Name",
    location: "Dhaka, Bangladesh",
    period: "2022 – 2026 (Expected)",
    grade: "CGPA: 3.50+ / 4.00",
    description:
      "Gained comprehensive theoretical and practical knowledge in computational thinking, software engineering, and web technologies.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/C++)",
      "Database Management Systems (DBMS)",
      "Web Technologies & Engineering",
      "Operating Systems & Computer Networks",
      "Software Design Patterns",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Your College Name",
    location: "Dhaka, Bangladesh",
    period: "2019 – 2021",
    grade: "GPA: 5.00 / 5.00 (A+)",
    description:
      "Completed higher secondary education with a major in Science, developing strong analytical thinking and mathematical problem-solving skills.",
    coursework: ["Physics", "Chemistry", "Higher Mathematics", "Information & Communication Tech (ICT)"],
  },
  {
    degree: "Secondary School Certificate (SSC) – Science",
    institution: "Your High School Name",
    location: "Dhaka, Bangladesh",
    period: "2017 – 2019",
    grade: "GPA: 5.00 / 5.00 (A+)",
    description:
      "Graduated secondary school with distinction in Science, establishing foundational curiosity for science and computing.",
    coursework: ["General Science", "Advanced Mathematics", "Computer Studies"],
  },
];

const certifications = [
  {
    title: "Complete Web Development Bootcamp (MERN)",
    issuer: "Online Learning Academy",
    year: "2024",
    desc: "Built 10+ real-world applications covering React, Tailwind CSS, Node.js, Express, and MongoDB.",
  },
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    year: "2023",
    desc: "Verified competency in semantic HTML5, modern CSS Grid/Flexbox, and accessible web standards.",
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2024",
    desc: "Mastery of ES6+, functional programming, OOP in JS, and algorithmic problem-solving.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineAcademicCap className="text-blue-600 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Education</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600">
          My educational journey and professional credentials that built my foundational computer science and engineering mindset.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Formal Degrees Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-blue-600" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="space-y-6">
            {educationHistory.map((edu) => (
              <div
                key={edu.degree}
                className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative left accent border */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 mt-0.5">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <HiOutlineCalendar className="text-gray-400" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiOutlineLocationMarker className="text-gray-400" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Coursework list */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1">
                    <HiOutlineBookOpen className="text-blue-600 text-sm" />
                    Key Courses Studied
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-700 border border-gray-100"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications & Continuous Learning (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
            <FaCertificate className="text-amber-500" />
            <span>Certifications &amp; Courses</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:border-amber-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <HiOutlineBadgeCheck className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 bg-amber-50/80 border border-amber-200 px-2 py-0.5 rounded">
                    {cert.year}
                  </span>
                </div>

                <h4 className="font-bold text-gray-900 text-sm mt-3">
                  {cert.title}
                </h4>
                <p className="text-xs font-semibold text-blue-600 mt-0.5">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}

            {/* Quick Note Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md">
              <h4 className="font-bold text-base mb-1">Continuous Learner</h4>
              <p className="text-xs text-blue-100 leading-relaxed mb-3">
                Always sharpening my problem-solving abilities and keeping updated with modern web standards and React 19 innovations.
              </p>
              <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full">
                Active Code Contributor
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
