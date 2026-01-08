"use client";

const features = [
  {
    title: "AI Career Guidance",
    description:
      "Get intelligent career recommendations based on your skills, interests, and goals using AI-driven insights.",
  },
  {
    title: "Personalized Roadmaps",
    description:
      "Follow step-by-step career roadmaps tailored specifically to your desired role and experience level.",
  },
  {
    title: "Skill Gap Analysis",
    description:
      "Identify missing skills and receive focused learning suggestions to stay industry-ready.",
  },
  {
    title: "Progress Tracking",
    description:
      "Track your learning journey, milestones, and growth over time in one centralized dashboard.",
  },
  {
    title: "Real-World Insights",
    description:
      "Understand market demand, trending roles, and required technologies before making career decisions.",
  },
  {
    title: "Smart Recommendations",
    description:
      "Receive smart suggestions for courses, projects, and next steps to accelerate your growth.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-emerald-50 dark:bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <div className="mb-14">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
            🌱 Features
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
            Everything You Need to
            <span className="text-emerald-600 dark:text-emerald-400">
              {" "}
              Build Your Career
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Path360 provides powerful AI-driven tools to guide you from
            exploration to execution with confidence.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-left shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}
