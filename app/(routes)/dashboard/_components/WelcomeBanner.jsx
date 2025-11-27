"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-[#2563EB] flex items-center gap-2">
          <span className="inline-flex w-6 h-6 bg-[#2563EB] rounded-lg"></span>
          CareerCoachAI
        </h1>

        <div className="space-x-8 text-[#1E293B] font-medium">
          <a href="#features" className="hover:text-[#2563EB] transition">Features</a>
          <a href="#pricing" className="hover:text-[#2563EB] transition">Pricing</a>
          <a href="#login" className="hover:text-[#2563EB] transition">Login</a>
        </div>

        <button className="px-5 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-20 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Text */}
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold text-[#1E293B] leading-tight">
            Your Smart <span className="text-[#2563EB]">AI</span> <br />
            Career Coach.
          </h2>

          <p className="mt-5 text-lg text-[#64748B]">
            Analyze your resume, get a personalized roadmap, fill skill gaps, 
            and discover job opportunities — powered by intelligent AI agents.
          </p>

          <button className="mt-8 px-7 py-3 bg-[#2563EB] text-white rounded-xl text-lg shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Illustration */}
        <img
          src="/welcome3.png"
          alt="AI Career Coach"
          className="w-[420px] rounded-2xl "
        />
      </section>

      {/* Features Section */}
      <section id="features" className="px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow-md border">
          <h3 className="text-xl font-semibold text-[#1E293B]">Resume Analysis</h3>
          <p className="mt-3 text-[#64748B]">Get instant AI-powered resume evaluation.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border">
          <h3 className="text-xl font-semibold text-[#1E293B]">Skill Gap Finder</h3>
          <p className="mt-3 text-[#64748B]">Identify missing skills and learn the right ones.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border">
          <h3 className="text-xl font-semibold text-[#1E293B]">Career Roadmap</h3>
          <p className="mt-3 text-[#64748B]">Follow a personalized roadmap to success.</p>
        </div>
      </section>
    </main>
  );
}
