export default function CareersPage() {
  return (
    <main className="flex-grow w-full bg-white dark:bg-background">
      {/* BEGIN: HeroSection */}
      <section className="hero-radial-bg pt-36 pb-32 border-b border-slate-100 dark:border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-100 dark:bg-surface-container-low border border-slate-200 dark:border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006D3C]"></span>
              <span className="text-[11px] font-mono tracking-wider font-semibold text-slate-700 dark:text-secondary uppercase">JOIN QODEVS</span>
            </div>
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-foreground mb-6 leading-tight">
              Careers at QODEVS
            </h1>
            {/* Subtitle */}
            <p className="text-lg text-slate-600 dark:text-secondary leading-relaxed font-normal">
              We build software that changes lives. Join a team of elite engineers dedicated to clinical certainty, fast-track digital therapeutics, and uncompromised quality.
            </p>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: WhyWorkWithUsSection */}
      <section className="py-24 border-b border-slate-100 dark:border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Tracker Tag */}
          <div className="mb-10">
            <p className="text-[12px] font-mono font-bold tracking-widest text-slate-800 dark:text-foreground uppercase">
              WHY WORK WITH US
            </p>
          </div>
          {/* 3 Benefit Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <article className="bg-white dark:bg-background p-8 border border-slate-200 dark:border-border flex flex-col justify-start">
              <h3 className="text-lg font-bold text-slate-900 dark:text-foreground mb-3 tracking-tight">
                Deep Engineering Focus
              </h3>
              <p className="text-sm text-slate-600 dark:text-secondary leading-relaxed font-normal">
                We don't build superficial tech. You'll architect mission-critical medical systems and DiGA platforms where your code directly impacts patient health and lives.
              </p>
            </article>
            {/* Card 2 */}
            <article className="bg-white dark:bg-background p-8 border border-slate-200 dark:border-border flex flex-col justify-start">
              <h3 className="text-lg font-bold text-slate-900 dark:text-foreground mb-3 tracking-tight">
                Elite Engineering Culture
              </h3>
              <p className="text-sm text-slate-600 dark:text-secondary leading-relaxed font-normal">
                Collaborate with a highly skilled, remote-friendly team spread across Europe and Türkiye, strictly maintaining the highest European software engineering standards.
              </p>
            </article>
            {/* Card 3 */}
            <article className="bg-white dark:bg-background p-8 border border-slate-200 dark:border-border flex flex-col justify-start">
              <h3 className="text-lg font-bold text-slate-900 dark:text-foreground mb-3 tracking-tight">
                Continuous Growth
              </h3>
              <p className="text-sm text-slate-600 dark:text-secondary leading-relaxed font-normal">
                Master rigorous regulatory frameworks (ISO 13485, MDR), FHIR/HL7 APIs, and modern cloud architectures. We invest heavily in your technical education.
              </p>
            </article>
          </div>
        </div>
      </section>
      {/* END: WhyWorkWithUsSection */}

      {/* BEGIN: CurrentOpeningsSection */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Headline */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-900 dark:text-foreground mb-14 tracking-tight">
            Current Openings
          </h2>
          {/* Empty State Box */}
          <div className="max-w-4xl mx-auto bg-[#F6F9FD] dark:bg-surface-container-low border border-slate-100 dark:border-border p-12 sm:p-16 text-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-foreground mb-3 tracking-tight">
              No open positions at the moment.
            </h3>
            <p className="text-slate-600 dark:text-secondary text-sm leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              We currently do not have any active openings, but we are always on the lookout for exceptional talent. Check back later or follow us on LinkedIn.
            </p>
            <a className="inline-flex items-center text-sm font-semibold text-[#006D3C] hover:text-[#00552E] transition-colors" href="mailto:info@qodevs.com">
              Send Spontaneous Application
              <span className="ml-1 text-base leading-none">→</span>
            </a>
          </div>
        </div>
      </section>
      {/* END: CurrentOpeningsSection */}
    </main>
  );
}
