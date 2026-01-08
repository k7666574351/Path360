"use client";

export default function Hero() {
  return (
    <main className="min-h-screen bg-emerald-50 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-2 bg-slate-900 backdrop-blur sticky top-0 z-10 border-b">
        <h1 className="text-3xl font-bold text-emerald-600 flex items-center gap-2">
          <span className="inline-flex w-6 h-6 bg-emerald-600 rounded-lg"></span>
          Path360
        </h1>

        <div className="hidden md:flex space-x-8 text-slate-100 font-medium">
          <a href="#features" className="hover:text-emerald-600 transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-emerald-600 transition">
            Pricing
          </a>
          <a href="#login" className="hover:text-emerald-600 transition">
            Login
          </a>
        </div>

        <button className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
            🌱 AI-Powered Career Guidance
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Path<span className="text-emerald-600">360</span>
          </h1>
          {/* Heading */}
          <h5 className="mt-5 text-3xl md:text-3xl font-bold text-slate-900 leading-tight ">
            Your Smart <span className="text-emerald-600">AI </span>
             Career Coach
          </h5>

          {/* Description */}
          <p className="mt-6 text-lg text-slate-600">
            Your career is more than a job — it’s a journey. Path360 combines
            AI intelligence with structured roadmaps to help you discover,
            plan, and achieve your career goals with clarity and confidence.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-emerald-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-emerald-700 transition">
              Get Started Free
            </button>

            <button className="px-8 py-3 border border-emerald-600 text-emerald-600 rounded-xl text-lg font-semibold hover:bg-emerald-100 transition">
              Explore Features
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Stat value="10K+" label="Users Guided" />
            <Stat value="500+" label="Career Paths" />
            <Stat value="AI-Driven" label="Personalized Plans" />
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-slate-600">{label}</p>
    </div>
  );
}
