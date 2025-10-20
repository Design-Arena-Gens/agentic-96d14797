const automationSuites = [
  {
    title: "AI Voice Agents",
    description:
      "Conversational AI that owns inbound and outbound calls, schedules appointments, qualifies leads, and follows up across phone, SMS, WhatsApp, and email.",
    highlights: [
      "Natural voice and multilingual support",
      "Real-time CRM syncing",
      "Automated sequencing and routing",
    ],
  },
  {
    title: "Custom Web Experiences",
    description:
      "Bespoke websites and web apps engineered for each workflow—fast, secure, and tied directly into your automation stack.",
    highlights: [
      "Design systems aligned with your brand",
      "Performance-first engineering",
      "Composable integrations and analytics",
    ],
  },
  {
    title: "Growth Strategy Consulting",
    description:
      "Roadmaps that turn automation ideas into measured impact. From MVP validation to ROI tracking across teams and channels.",
    highlights: [
      "Automation opportunity discovery",
      "Lifecycle and funnel diagnostics",
      "Launch plans with KPI scorecards",
    ],
  },
  {
    title: "Operations Intelligence",
    description:
      "Inventory and property management tools that keep your operations synchronized in real time with finance, service, and fulfillment.",
    highlights: [
      "Stock, usage, and cost telemetry",
      "Tenant, lease, and maintenance workflows",
      "Usage alerts and predictive forecasting",
    ],
  },
];

const productEcosystem = [
  {
    heading: "Marketing Automation",
    body: "Campaign orchestration, SEO insights, and audience journeys that respond instantly to behavior.",
    tools: ["Email & SMS Journeys", "SEO Intelligence", "Audience Segmentation"],
  },
  {
    heading: "Website Templates",
    body: "Beautiful, modular templates with analytics baked in, deployable in minutes on top of Grovia infrastructure.",
    tools: ["Conversion Landing Pages", "Analytics Dashboards", "Guided Onboarding"],
  },
  {
    heading: "Commerce Utilities",
    body: "Ecommerce, invoicing, scheduling, and membership building blocks that plug directly into your operations.",
    tools: ["Headless Storefronts", "Automated Billing", "Service & Content Memberships"],
  },
];

const metrics = [
  { label: "Avg. time saved per team", value: "38%", context: "reclaimed weekly" },
  { label: "Leads converted", value: "4.2x", context: "higher vs. manual outreach" },
  { label: "Deployment speed", value: "14 days", context: "from idea to live" },
];

const sectors = [
  "Enterprise & Corporate",
  "Healthcare & Clinics",
  "Hospitality & Tourism",
  "Real Estate Operators",
  "Retail & Ecommerce",
  "Professional Services",
];

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <div className="relative overflow-hidden">
        <header className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-12 sm:px-10 md:pt-16">
          <nav className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/30 bg-white/60 px-6 py-4 shadow-lg shadow-blue-950/5 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="pill bg-gradient-to-r from-[#4a5eff] to-[#00d2ad] px-4 py-1 font-semibold uppercase tracking-[0.2em] text-[11px] text-white">
                Grovia
              </span>
              <p className="text-sm text-slate-600">
                Intelligent automation for modern operators
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
              <a href="#platform" className="hover:text-slate-900 transition">
                Platform
              </a>
              <a href="#ecosystem" className="hover:text-slate-900 transition">
                Ecosystem
              </a>
              <a href="#insights" className="hover:text-slate-900 transition">
                Insights
              </a>
              <a
                href="#contact"
                className="pill bg-slate-900 px-4 py-2 text-white shadow-md shadow-slate-900/20 transition hover:bg-slate-700"
              >
                Book a demo
              </a>
            </div>
          </nav>

          <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1.25fr),minmax(0,1fr)] md:gap-16 lg:gap-20">
            <div className="flex flex-col gap-6">
              <span className="pill bg-black/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                Automate progress
              </span>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Run your business on autopilot with Grovia’s AI-driven growth
                platform.
              </h1>
              <p className="text-lg text-slate-600">
                Grovia unifies AI voice agents, bespoke digital experiences, and
                revenue operations expertise so every team can focus on outcomes
                instead of repetitive work. Launch intelligent workflows once
                and scale them across every channel.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="pill bg-gradient-to-r from-[#4a5eff] to-[#00d2ad] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-[#4a5eff]/25 transition hover:opacity-90"
                >
                  Start blueprint
                </a>
                <a
                  href="#insights"
                  className="pill border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
                >
                  See the ROI
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="glass-surface rounded-2xl border border-white/60 px-4 py-6 text-center"
                  >
                    <p className="text-3xl font-semibold text-slate-900">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                      {metric.context}
                    </p>
                    <p className="mt-3 text-sm text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-surface relative rounded-[32px] border border-white/50 p-8">
                <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-[#00d2ad]/30 blur-3xl" />
                <div className="absolute -bottom-12 right-0 h-32 w-32 rounded-full bg-[#4a5eff]/20 blur-3xl" />
                <h2 className="text-lg font-medium text-slate-900">
                  The Grovia Flywheel
                </h2>
                <p className="mt-4 text-sm text-slate-600">
                  AI with human oversight, connected data, and proactive
                  automation rituals keep your teams aligned and performant. We
                  activate each stage of growth in sprints measured by customer
                  impact, operational efficiency, and profitability.
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="pill mt-1 inline-flex aspect-square h-7 items-center justify-center bg-[#4a5eff]/10 text-xs font-semibold text-[#4a5eff]">
                      1
                    </span>
                    Discover friction across your funnel with data-backed field
                    research and playbooks.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="pill mt-1 inline-flex aspect-square h-7 items-center justify-center bg-[#00d2ad]/10 text-xs font-semibold text-[#00d2ad]">
                      2
                    </span>
                    Orchestrate intelligent voice, web, and back-office flows
                    tuned to your brand and operations.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="pill mt-1 inline-flex aspect-square h-7 items-center justify-center bg-slate-900/10 text-xs font-semibold text-slate-900">
                      3
                    </span>
                    Scale with feedback loops, dashboards, and A/B experimentation
                    connected to your ROI scorecards.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 sm:px-10">
          <section
            id="platform"
            className="rounded-[32px] border border-white/50 bg-white/70 p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur"
          >
            <div className="flex flex-col gap-4">
              <span className="pill bg-[#4a5eff]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#4a5eff]">
                Platform Pillars
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                Every capability you need to automate growth end-to-end.
              </h2>
              <p className="max-w-3xl text-base text-slate-600">
                Our modular platform connects branded experiences, customer voice
                touchpoints, and deep operational workflows into one command
                center. Assemble what you need today and expand without
                re-platforming.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {automationSuites.map((suite) => (
                <div
                  key={suite.title}
                  className="glass-surface relative overflow-hidden rounded-3xl border border-white/60 p-8"
                >
                  <div className="absolute -right-16 top-10 h-32 w-32 rounded-full bg-[#00d2ad]/10 blur-3xl" />
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {suite.title}
                    </h3>
                    <p className="text-sm text-slate-600">{suite.description}</p>
                    <ul className="space-y-3 text-sm text-slate-600">
                      {suite.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#4a5eff]/10 text-[10px] font-semibold uppercase text-[#4a5eff]">
                            AI
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="ecosystem" className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-[32px] border border-white/40 bg-white/60 p-10 shadow-xl">
              <span className="pill bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                Ecosystem
              </span>
              <h2 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Specialized product categories designed to launch faster.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Plug-and-play components accelerate delivery across marketing,
                commerce, and analytics. Every module is built atop the same data
                and governance layer, so your teams stay aligned.
              </p>

              <div className="mt-10 space-y-8">
                {productEcosystem.map((product) => (
                  <div key={product.heading} className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {product.heading}
                    </h3>
                    <p className="text-sm text-slate-600">{product.body}</p>
                    <div className="flex flex-wrap gap-3">
                      {product.tools.map((tool) => (
                        <span
                          key={tool}
                          className="pill border border-slate-200 bg-white px-4 py-1 text-xs font-medium uppercase tracking-wide text-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="glass-surface rounded-[32px] border border-white/60 p-10">
                <h3 className="text-xl font-semibold text-slate-900">
                  Trusted across sectors
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Grovia adapts to the rhythms of your industry, blending AI
                  precision with compliance, brand nuance, and team adoption.
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                  {sectors.map((sector) => (
                    <li
                      key={sector}
                      className="flex items-center gap-2 rounded-2xl border border-white/70 bg-white/70 px-4 py-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#00d2ad]" />
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-surface rounded-[32px] border border-white/60 p-10">
                <h3 className="text-xl font-semibold text-slate-900">
                  Measurable by design
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Dashboards ship with every engagement, highlighting adoption,
                  revenue performance, and operational gains.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/70 bg-white/70 p-5 text-sm text-slate-600">
                    <p className="text-2xl font-semibold text-slate-900">
                      3-week
                    </p>
                    <p className="mt-2">time-to-value guarantees with milestone checkpoints.</p>
                  </div>
                  <div className="rounded-3xl border border-white/70 bg-white/70 p-5 text-sm text-slate-600">
                    <p className="text-2xl font-semibold text-slate-900">
                      100%
                    </p>
                    <p className="mt-2">
                      visibility through real-time dashboards and executive
                      briefings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="insights"
            className="rounded-[32px] border border-white/40 bg-white/70 p-10 shadow-xl"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="pill bg-[#00d2ad]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#00d2ad]">
                  Insights
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Growth loops that compound results.
                </h2>
                <p className="mt-3 max-w-2xl text-base text-slate-600">
                  Grovia maps automations to the metrics that matter—qualified
                  pipeline, customer lifetime value, and operational efficiency.
                  Every iteration is informed by experiments, voice of customer
                  analysis, and integrated analytics across your tool stack.
                </p>
              </div>
              <a
                href="#contact"
                className="pill border border-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Request the insights deck
              </a>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="glass-surface rounded-3xl border border-white/60 p-8">
                <h3 className="text-lg font-semibold text-slate-900">
                  Revenue copilots
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Deploy AI voice teams that book meetings, nurture leads, and
                  feed qualified opportunities back to your CRM with sentiment
                  analysis and context captured.
                </p>
              </div>
              <div className="glass-surface rounded-3xl border border-white/60 p-8">
                <h3 className="text-lg font-semibold text-slate-900">
                  Unified data layer
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Centralize product, marketing, and operations data to inform
                  decisions. Grovia integrates with your current stack and
                  surfaces actions through live dashboards.
                </p>
              </div>
              <div className="glass-surface rounded-3xl border border-white/60 p-8">
                <h3 className="text-lg font-semibold text-slate-900">
                  Human-in-the-loop governance
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Experts monitor automations, refine scripts, and adapt playbooks
                  to protect brand integrity while unlocking efficiency.
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer
          id="contact"
          className="border-t border-white/40 bg-white/70 shadow-inner shadow-slate-900/5"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10">
            <div className="glass-surface flex flex-col gap-6 rounded-[32px] border border-white/60 px-8 py-10 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Ready to accelerate growth with Grovia?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-slate-600">
                  Share your goals and we’ll architect a roadmap—from voice
                  automation pilots to full digital transformation. Expect a
                  tailored blueprint within 72 hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm text-slate-600">
                <a
                  href="mailto:hello@grovia.ai"
                  className="pill bg-slate-900 px-6 py-3 text-center font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-slate-700"
                >
                  hello@grovia.ai
                </a>
                <a
                  href="https://cal.com"
                  className="pill border border-slate-300 px-6 py-3 text-center font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
                >
                  Schedule a strategy call
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-slate-500">
              <span>© {new Date().getFullYear()} Grovia Automation, Inc.</span>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#platform" className="hover:text-slate-800 transition">
                  Platform
                </a>
                <a href="#ecosystem" className="hover:text-slate-800 transition">
                  Ecosystem
                </a>
                <a href="#insights" className="hover:text-slate-800 transition">
                  Insights
                </a>
                <a href="#contact" className="hover:text-slate-800 transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
