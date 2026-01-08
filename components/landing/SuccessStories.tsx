"use client";

const successStories = [
  {
    name: "Aarav Mehta",
    role: "Software Developer",
    story:
      "Path360 helped me identify the right skills to focus on and guided me with a clear roadmap. Within months, I transitioned from a confused beginner to a confident developer working on real-world projects.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Data Analyst",
    story:
      "I was unsure about switching my career to data analytics. Path360’s AI recommendations and step-by-step roadmap gave me clarity and confidence to make the transition successfully.",
  },
  {
    name: "Rahul Patil",
    role: "Product Designer",
    story:
      "The personalized guidance and skill gap analysis helped me understand exactly what I needed to learn. Path360 made my career journey structured and stress-free.",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 px-6 bg-emerald-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-slate-100">
          Success Stories
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          See how Path360 has helped learners gain clarity and confidence in
          their career journeys.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 text-left shadow-sm"
            >
              <p className="text-slate-700 dark:text-slate-300">
                “{story.story}”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  {story.name}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {story.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
