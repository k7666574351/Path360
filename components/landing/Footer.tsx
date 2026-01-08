"use client";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
              <span className="inline-flex w-5 h-5 bg-emerald-600 rounded-md"></span>
              Path360
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Path360 is your AI-powered career guidance platform, helping you
              discover the right path and grow with confidence.
            </p>
          </div>

          {/* Product */}
          <FooterColumn
            title="Product"
            links={["Features", "Pricing", "Success Stories", "Roadmaps"]}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={["About Us", "Careers", "Blog", "Contact"]}
          />

          {/* Legal */}
          <FooterColumn
            title="Legal"
            links={["Privacy Policy", "Terms of Service", "Cookie Policy"]}
          />
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Path360. All rights reserved.
          </p>

          <div className="flex gap-6 text-slate-600 dark:text-slate-400 text-sm">
            <a href="#" className="hover:text-emerald-600 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
