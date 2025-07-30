import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS"];
  const backendSkills = ["Node.js", "Next.js", "Python", "MongoDB", "SQL", "Spring Boot"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            As a full stack developer, I combine my analytical skills with strong frontend and backend development to create efficient and user-friendly digital experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white.10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 ">🎓Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                        <strong>B.Tech in CSE-Data Science</strong> - Vignan's Lara Institute of Technology and Scinece (2023-2026)
                    </li>
                    <li>
                        <strong>Diploma in Mechanical Engineering</strong> - Diviseema Polytechnic College (2019-2022)
                    </li>
                    <li>
                        <strong>10th Standard</strong> - Sri Chaitanya School (2018-2019)
                    </li>
                </ul>
            </div>
            <div className="p-6 rounded-xl border-white.10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 ">💼Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold">Generative AI Intern</h4> - ( June 2025-July 2025)
                        <p>A 2-month virtual internship focused on Generative AI using the IBM Cloud platform.Engineered and refined prompts for foundation models on the IBM Watsonx.ai platform.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">AI & Data Analytics Intern</h4> - ( June 2025-July 2025)
                        <p>A 4-week virtual program focused on applying AI and Data Analytics to Green Skills, part of the Skills4Future initiative.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Python Programming Intern</h4> - ( May 2024-July 2024)
                        <p>A 2-month virtual internship focused on core Python development and problem-solving, completed with outstanding remarks.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
