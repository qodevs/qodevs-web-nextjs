"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function DigaClient({ dict }: { dict: any }) {
  const t = dict.diga_page;
  const cta = dict.about_page;
  return (
    <main className="w-full pt-20 bg-background min-h-screen">
      <div className="flex flex-col w-full">
        {/* Article Header & Meta Area */}
        <section className="w-full bg-background py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* Category Label & Read Time */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-foreground font-label-regulatory text-label-regulatory uppercase tracking-widest font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Insights &amp; Regulatory Strategy
              </span>
              <span className="text-muted-foreground font-label-sm text-label-sm">
                Published October 2026 · 4 min read · QODEVS Engineering Advisory
              </span>
            </div>
            {/* Main Title */}
            <h1 className="font-headline-lg text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-8">
              Navigating the German DiGA Fast-Track: What Health-Tech Founders Need to Know
            </h1>
            {/* Executive Summary / Standfirst */}
            <div className="p-6 md:p-8 rounded-none bg-surface-container-low ">
              <p className="font-body-lg text-lg text-foreground font-medium leading-relaxed">
                The German DiGA Fast-Track creates a direct route for digital health applications to unlock statutory reimbursement across roughly 73 million citizens. Achieving approval relies on pairing solid medical CE qualification with verifiable patient benefits and reliable software architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Editorial Article Body */}
        <article className="w-full bg-surface-container-lowest py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
            {/* Section 1: Simple Explanation */}
            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-primary rounded-none"></span>
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  Accelerating Your DiGA Fast-Track Success
                </h2>
              </div>
              <p className="text-lg text-secondary leading-relaxed">
                {t.s1_text}
              </p>
              {/* High-level Metric Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-5 rounded-none bg-surface-container-low  flex flex-col gap-1">
                  <span className="text-4xl font-bold text-primary">~73M</span>
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wider mt-2">Covered Lives</span>
                  <span className="text-sm text-secondary">Statutory health insurance coverage across Germany</span>
                </div>
                <div className="p-5 rounded-none bg-surface-container-low  flex flex-col gap-1">
                  <span className="text-4xl font-bold text-primary">3 Mos</span>
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wider mt-2">Fast-Track Review</span>
                  <span className="text-sm text-secondary">Formal BfArM evaluation timeline once dossier is filed</span>
                </div>
                <div className="p-5 rounded-none bg-surface-container-low  flex flex-col gap-1">
                  <span className="text-4xl font-bold text-primary">Class I/IIa</span>
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wider mt-2">Medical Scope</span>
                  <span className="text-sm text-secondary">Eligible MDR classification under EU regulations</span>
                </div>
              </div>
            </section>

            {/* Section 2: 3 High-Level Milestones */}
            <section className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-primary rounded-none"></span>
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  How QODEVS Secures Your Approval
                </h2>
              </div>
              <p className="text-base text-secondary">
                {t.s2_text}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-none bg-background  flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">01</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-xs text-foreground uppercase tracking-wider font-bold">{t.m1_tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Medical Device CE-Marking
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {t.m1_text}
                  </p>
                </div>
                <div className="p-6 rounded-none bg-background  flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">02</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-xs text-foreground uppercase tracking-wider font-bold">{t.m2_tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Fast-Track Architecture
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {t.m2_text}
                  </p>
                </div>
                <div className="p-6 rounded-none bg-background  flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">03</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-xs text-foreground uppercase tracking-wider font-bold">{t.m3_tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Clinical Study Integration
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {t.m3_text}
                  </p>
                </div>
              </div>
            </section>

            {/* Callout Takeaway Quote */}
            <section className="p-8 md:p-10 rounded-none bg-surface-container-high  text-foreground flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl shrink-0 mt-0.5">format_quote</span>
              <div className="flex flex-col gap-2">
                <blockquote className="text-xl font-semibold leading-snug">
                  "Speed to market in digital health is not about cutting corners—it is about designing regulatory compliance into your software architecture from day one."
                </blockquote>
                <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2 font-bold">
                  QODEVS Core Engineering Principle
                </span>
              </div>
            </section>

            {/* Section 3: Pitfalls to Avoid */}
            <section className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-primary rounded-none"></span>
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  Why Health-Tech Leaders Choose Us
                </h2>
              </div>
              <p className="text-base text-secondary">
                {t.s3_text}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-6 rounded-none bg-surface-container-low  flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-xl">database</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Compliance-First Architecture
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {t.p1_text}
                  </p>
                </div>
                <div className="p-6 rounded-none bg-surface-container-low  flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-xl">shield</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Bulletproof Privacy Engineering
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {t.p2_text}
                  </p>
                </div>
                <div className="p-6 rounded-none bg-surface-container-low  flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-xl">clinical_notes</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Clinical Data Telemetry
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {t.p3_text}
                  </p>
                </div>
              </div>
            </section>

            {/* Bottom Article Signature */}
            <div className="pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">QD</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.footer_title}</div>
                  <div className="text-xs text-secondary">{t.footer_subtitle}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold mr-2">Tagged:</span>
                <span className="px-2.5 py-1 rounded bg-surface-container-low text-xs text-foreground font-semibold">BfArM</span>
                <span className="px-2.5 py-1 rounded bg-surface-container-low text-xs text-foreground font-semibold">DiGA</span>
                <span className="px-2.5 py-1 rounded bg-surface-container-low text-xs text-foreground font-semibold">MDR</span>
              </div>
            </div>
          </div>
        </article>

        

        {/* CTA from About Page */}
        <section className="w-full mt-12 py-24 lg:py-32 bg-background border-t border-border/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.5 }}
                className="lg:col-span-8 flex flex-col gap-6"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
                  {cta.cta_title.split("\n").map((line: string, i: number) => <span key={i}>{line}<br/></span>)}
                </h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-4 flex flex-col gap-8"
              >
                <p className="text-lg text-secondary leading-relaxed font-medium">
                  {cta.cta_desc}
                </p>
                <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-[13px] font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-pointer w-fit">
                  <span>{cta.cta_btn}</span>
                  <ArrowRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
