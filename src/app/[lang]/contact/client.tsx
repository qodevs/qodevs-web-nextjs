"use client";

export default function ContactClient({ dict, lang }: { dict: any, lang: string }) {
  const t = dict.contact_page;
  return (
    <main className="w-full pt-20 bg-background min-h-[calc(100vh-20rem)]">
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-80 -left-20 w-80 h-80 bg-tertiary-fixed/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
{/* BEGIN: LeftInfoColumn */}
<section className="lg:col-span-5 space-y-10">
{/* Headline & Context */}
<div className="space-y-4">
<h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.12]">
              {t.title.split("\n").map((line: string, i: number) => <span key={i}>{line}<br/></span>)}
            </h1>
<p className="text-base lg:text-lg text-muted-foreground font-normal leading-relaxed max-w-md">
              {t.desc}
            </p>
</div>
<hr className="border-border w-full max-w-md"/>
{/* Clean Direct Contact Details */}
<div className="space-y-6 max-w-md text-sm">
{/* Direct Email Block */}
<div>
<span className="block text-xs uppercase tracking-wider text-muted-foreground/70 font-medium mb-1">Direct Engineering Mail</span>
<div className="flex items-center space-x-3">
<a className="text-foreground font-semibold text-lg hover:text-primary transition-colors" href="mailto:info@qodevs.com">
                  info@qodevs.com
                </a>
<button className="text-xs px-2.5 py-1 text-muted-foreground bg-muted hover:bg-muted/80 rounded border border-border transition-colors" onClick={(e) => { navigator.clipboard.writeText('info@qodevs.com'); e.currentTarget.textContent = 'Copied!'; }} title="Copy to clipboard" type="button">
                  Copy
                </button>
</div>
</div>
{/* Engineering Hub Block */}
<div>
<span className="block text-xs uppercase tracking-wider text-muted-foreground/70 font-medium mb-1">{t.location_title}</span>
<p className="text-foreground font-medium">
                Denizli, Türkiye <span className="text-muted-foreground/70 font-normal text-xs ml-1">(GMT+3)</span>
</p>
</div>
{/* Direct Scheduling Simple Banner */}
<div className="p-4 rounded-sm bg-card space-y-2">
<span className="text-xs uppercase tracking-wider font-semibold text-primary block">Calendar Scheduling</span>
<p className="text-muted-foreground text-xs leading-relaxed">
                {t.cal_desc || "Prefer a direct technical session? Reserve a 30-minute introductory architecture call with our principal engineers."}
              </p>
<a className="inline-block text-xs font-semibold text-primary hover:underline pt-1" href="#contact-form">
                {t.cal_btn || "Fill the brief form to book →"}
              </a>
</div>
</div>
{/* Compliance Baseline */}
<div className="flex items-center space-x-2 text-xs text-muted-foreground pt-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
<span>{t.strict_nda || "Strict mutual NDA & German/EU GDPR compliant."}</span>
</div>
</section>
{/* END: LeftInfoColumn */}
{/* BEGIN: RightFormColumn */}
<section className="lg:col-span-7">
<div className="bg-card rounded-2xl p-8 sm:p-10 lg:p-12" id="contact-form">
{/* Form Card Header */}
<div className="mb-8">
<span className="text-xs uppercase tracking-widest font-semibold text-primary block mb-1">Inquiry Portal</span>
<h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">{t.send_msg_title || "Send a Message"}</h2>
<p className="text-sm text-muted-foreground mt-1.5">{t.send_msg_desc || "Tell us about your device, clinical use-case, or regulatory milestones."}</p>
</div>
{/* Contact Form */}
<form action="#" className="space-y-6" method="POST" onSubmit={(e) => e.preventDefault()}>
{/* Two-column: Name & Work Email */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-semibold text-foreground tracking-wide mb-1.5 uppercase" htmlFor="fullName">
                    Full Name <span className="text-rose-500">*</span>
</label>
<input className="w-full px-3.5 py-2.5 text-sm bg-background rounded-md border border-border text-foreground placeholder-muted-foreground/50 focus:bg-background focus:border-primary transition-all outline-none" id="fullName" name="fullName" placeholder="Dr. Elena Fischer" required type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-foreground tracking-wide mb-1.5 uppercase" htmlFor="workEmail">
                    Work Email <span className="text-rose-500">*</span>
</label>
<input className="w-full px-3.5 py-2.5 text-sm bg-background rounded-md border border-border text-foreground placeholder-muted-foreground/50 focus:bg-background focus:border-primary transition-all outline-none" id="workEmail" name="workEmail" placeholder="elena@therapeutics.de" required type="email"/>
</div>
</div>
{/* Inquiry Type / Focus Selection Buttons */}
<div>
<label className="block text-xs font-semibold text-foreground tracking-wide mb-2 uppercase">
                  Inquiry Type / Engagement Focus
                </label>
<div aria-label="Inquiry Type" className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" role="radiogroup">
<label className="cursor-pointer">
<input defaultChecked className="peer sr-only" name="engagementType" type="radio" value="diga"/>
<div className="h-full px-3 py-2.5 rounded-md border border-border text-center text-xs font-medium text-muted-foreground hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all flex items-center justify-center">
                      DiGA Fast-Track
                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="engagementType" type="radio" value="samd"/>
<div className="h-full px-3 py-2.5 rounded-md border border-border text-center text-xs font-medium text-muted-foreground hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all flex items-center justify-center">
                      SaMD Architecture
                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="engagementType" type="radio" value="mdr"/>
<div className="h-full px-3 py-2.5 rounded-md border border-border text-center text-xs font-medium text-muted-foreground hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all flex items-center justify-center">
                      MDR / Regulatory
                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="engagementType" type="radio" value="general"/>
<div className="h-full px-3 py-2.5 rounded-md border border-border text-center text-xs font-medium text-muted-foreground hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary transition-all flex items-center justify-center">
                      General Inquiry
                    </div>
</label>
</div>
</div>
{/* Project Overview Textarea */}
<div>
<label className="block text-xs font-semibold text-foreground tracking-wide mb-1.5 uppercase" htmlFor="projectOverview">
                  Project Overview <span className="text-rose-500">*</span>
</label>
<textarea className="w-full px-3.5 py-2.5 text-sm bg-background rounded-md border border-border text-foreground placeholder-muted-foreground/50 focus:bg-background focus:border-primary transition-all outline-none resize-y" id="projectOverview" name="projectOverview" placeholder={t.f_overview_placeholder || "Tell us about your clinical product, technology stack, certification targets, or timeline goals..."} required rows={4}></textarea>
</div>
{/* Submit CTA Button */}
<div>
<button className="w-full py-3.5 px-6 rounded-md bg-primary hover:bg-primary/90 text-white text-sm font-semibold tracking-wide flex items-center justify-center space-x-2 transition-all shadow-sm" type="submit">
<span>{t.f_submit_btn || "Send Message & Request Consultation"}</span>
<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
{/* Trust / Privacy Disclaimer */}
<p className="text-center text-xs text-muted-foreground/70 pt-1">
                {t.f_disclaimer || "Bilateral mutual NDA applied automatically upon submission. Zero spam policy."}
              </p>
</form>
</div>
</section>
</div>
</div>
</div>
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-regulatory text-label-regulatory uppercase tracking-widest text-[#0f766e] font-semibold">
            Answers Before You Sign
          </span>
          <h2 className="font-headline-lg text-3xl lg:text-4xl text-on-surface mt-2 font-bold tracking-tight">
            {t.faq_title || "Frequently Asked Questions"}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-3 leading-relaxed">
            Clear architectural answers regarding intellectual property,
            regulatory compliance, and engineering collaboration protocols.
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <details
            open
            className="group bg-surface-container-lowest rounded-sm border border-transparent hover:border-[#0d9488]/50 transition-all overflow-hidden"
          >
            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-primary text-[#0f766e] flex items-center justify-center shrink-0 border border-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    shield
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg font-semibold text-on-surface">
                  How do you protect our intellectual property and clinical
                  confidentiality?
                </h3>
              </div>
              <span className="material-symbols-outlined text-muted-foreground group-open:rotate-180 transition-transform text-[22px] shrink-0">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 pt-1 text-on-surface-variant text-body-md leading-relaxed border-t border-border/50">
              <p className="mt-3">
                All engagements begin with an executed bilateral Non-Disclosure
                Agreement governed under German and European Union law. All
                software, architectural blueprints, automated tests, and
                verification artifacts created during the project remain 100%
                your client-owned intellectual property with full Git repository
                access transferred from day one.
              </p>
            </div>
          </details>
          <details className="group bg-surface-container-lowest rounded-sm border border-transparent hover:border-[#0d9488]/50 transition-all overflow-hidden">
            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-primary text-[#0f766e] flex items-center justify-center shrink-0 border border-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    verified
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg font-semibold text-on-surface">
                  Do you provide end-to-end DiGA fast-track certification
                  support?
                </h3>
              </div>
              <span className="material-symbols-outlined text-muted-foreground group-open:rotate-180 transition-transform text-[22px] shrink-0">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 pt-1 text-on-surface-variant text-body-md leading-relaxed border-t border-border/50">
              <p className="mt-3">
                Yes. We design and construct your application strictly within
                IEC 62304 (Medical Device Software Life Cycle Processes),
                integrate BfArM data protection requirements, assist with ISO
                13485 technical documentation, and collaborate directly with
                your clinical principal investigators and notified bodies to
                guarantee a frictionless CE marking and DiGA fast-track dossier.
              </p>
            </div>
          </details>
          <details className="group bg-surface-container-lowest rounded-sm border border-transparent hover:border-[#0d9488]/50 transition-all overflow-hidden">
            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-primary text-[#0f766e] flex items-center justify-center shrink-0 border border-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    assignment_turned_in
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg font-semibold text-on-surface">
                  Can we start with a discrete architectural audit or regulatory
                  consultation?
                </h3>
              </div>
              <span className="material-symbols-outlined text-muted-foreground group-open:rotate-180 transition-transform text-[22px] shrink-0">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 pt-1 text-on-surface-variant text-body-md leading-relaxed border-t border-border/50">
              <p className="mt-3">
                Absolutely. Many clients engage us for an initial 2- to 3-week
                Technical &amp; Regulatory Gap Audit. We evaluate your existing
                codebase, FHIR/HL7 telemetry pipelines, and cloud security
                posture to produce an actionable remediation roadmap before
                committing to large-scale engineering phases.
              </p>
            </div>
          </details>
          <details className="group bg-surface-container-lowest rounded-sm border border-transparent hover:border-[#0d9488]/50 transition-all overflow-hidden">
            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-primary text-[#0f766e] flex items-center justify-center shrink-0 border border-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    groups
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg font-semibold text-on-surface">
                  How does your team integrate with our internal clinical or
                  data science leads?
                </h3>
              </div>
              <span className="material-symbols-outlined text-muted-foreground group-open:rotate-180 transition-transform text-[22px] shrink-0">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 pt-1 text-on-surface-variant text-body-md leading-relaxed border-t border-border/50">
              <p className="mt-3">
                We operate in high-cadence 2-week sprints with transparent
                Jira/Linear tracking, joint daily standups, and direct
                Slack/Teams engineering channels. Our engineers routinely pair
                with internal machine learning scientists and medical advisors
                to translate clinical algorithms into certified production
                firmware and cloud applications.
              </p>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
