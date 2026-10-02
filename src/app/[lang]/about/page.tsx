"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export default function AboutPage() {
  return (
<main className="w-full pt-20 bg-background min-h-screen"><div className="flex flex-col w-full">
{/*  SECTION 1: Hero & Mission Section  */}
<section className="relative w-full pt-16 pb-20 lg:pt-24 lg:pb-28 flex flex-col items-center overflow-hidden border-b border-border/40">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="relative z-10 flex flex-col items-center gap-8 max-w-5xl mx-auto px-6 lg:px-12 text-center">
<motion.h1 
  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
  className="font-headline-lg text-headline-lg text-on-surface tracking-tight max-w-3xl text-balance">
Engineering certainty for digital health<br/>and regulated medical software.
</motion.h1>
<p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-3xl text-balance">
QODEVS implements digital solutions in the areas of web, app, and DiGA development, tailored to meet the specific needs of clients. From modern websites to custom mobile applications, our goal is to create lasting value through innovative and functional technologies. Quality, efficiency, and your vision are at the heart of our approach to achieving digital success together.
</p>
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-3 pt-4">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-label-md text-label-md font-medium border border-slate-200/80">
<span className="w-1.5 h-1.5 rounded-none bg-primary-container"></span>
<span className="">Web &amp; Mobile Engineering</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-label-md text-label-md font-medium border border-slate-200/80">
<span className="w-1.5 h-1.5 rounded-none bg-primary-container"></span>
<span className="">DiGA &amp; Medical Apps</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-label-md text-label-md font-medium border border-slate-200/80">
<span className="w-1.5 h-1.5 rounded-none bg-primary-container"></span>
<span className="">Certified Agile Processes</span>
</div>
</motion.div>
</div>
</section>

{/*  SECTION 2: Regulatory Engineering Principles & Trust Bar  */}

{/*  SECTION 3: Leadership & Vision Section  */}
<section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
{/*  Portrait Column  */}
<motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="lg:col-span-5 relative">
<div className="relative w-full max-w-md mx-auto aspect-square rounded-[10px] overflow-hidden shadow-2xl shadow-on-surface/[0.08] bg-surface-container">
<img alt="Engineering Leadership &amp; Founder" className="w-full h-full object-cover" src="/images/ceo-real.jpg" />
</div>
<div className="mt-4 flex flex-col items-center gap-1">
  <h3 className="text-sm font-medium tracking-wide text-foreground">Ömer Mutluel</h3>
  <p className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground">Engineering Leadership & Founder</p>
</div>
{/*  Decorative Ambient Underlay  */}
<div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
</motion.div>
{/*  Text & Vision Column  */}
<div className="lg:col-span-7 flex flex-col items-start gap-6">
<h3 className="font-label-regulatory text-label-regulatory tracking-widest uppercase text-secondary font-bold mb-1">Leadership &amp; Vision</h3>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Committed to the highest standards of digital transformation.
        </h2>
<div className="relative p-6 lg:p-8 bg-white rounded-sm">
<span className="material-symbols-outlined text-primary/20 text-[56px] absolute -top-4 -left-2 select-none pointer-events-none">format_quote</span>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed relative z-10 font-medium">
            “With my extensive experience and clear vision, I lead QODEVS into the future of digital transformation. Through my passion for innovative solutions and an unwavering commitment to quality, I ensure that every project meets the highest standards and that our clients’ needs are always the top priority. I rely on quality-optimized processes to guarantee excellent results.”
          </p>
</div>

</div>
</div>
</section>
{/*  SECTION 4: Core Values Grid (Why you should work with us)  */}
<section className="w-full bg-muted/40 py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-16">
{/*  Section Header  */}
<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5 }} className="flex flex-col items-center text-center max-w-2xl gap-4">
<div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-muted">
<span className="w-1.5 h-1.5 rounded-none bg-primary-container"></span>
<span className="font-label-regulatory text-label-regulatory uppercase tracking-widest text-secondary font-bold">Our Core Values</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Why you should work with us
        </h2>
<p className="font-body-lg text-body-lg text-secondary">
          Principles that drive our engineering discipline and client partnerships.
        </p>
</motion.div>
{/*  Values Grid: Balanced 3 Top, 2 Bottom Layout  */}
<div className="w-full flex flex-col gap-8">
{/*  Top Row of 3  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Card 1: Reliability  */}
<div className="bg-white dark:bg-[#111111] p-8 lg:p-10 rounded-lg shadow-xl shadow-on-surface/[0.02] hover:shadow-primary-container/10 transition-all flex flex-col items-start gap-5">
<div className="flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">task_alt</span>
</div>
<div className="flex flex-col gap-2">
<div className="font-label-regulatory text-label-regulatory uppercase text-primary font-bold">Value 01</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Reliability</h3>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              Reliability is one of our core values. We keep our promises and always deliver on time and with the highest quality. You can rely on us – from the initial consultation to the final implementation.
            </p>
</div>
{/*  Card 2: Expertise  */}
<div className="bg-white dark:bg-[#111111] p-8 lg:p-10 rounded-lg shadow-xl shadow-on-surface/[0.02] hover:shadow-primary-container/10 transition-all flex flex-col items-start gap-5">
<div className="flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">psychology</span>
</div>
<div className="flex flex-col gap-2">
<div className="font-label-regulatory text-label-regulatory uppercase text-primary font-bold">Value 02</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Expertise</h3>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              With years of experience and in-depth knowledge, we successfully execute your digital projects. We tackle complex challenges and deliver measurable, high-quality results that provide real value to you.
            </p>
</div>
{/*  Card 3: Sustainability  */}
<div className="bg-white dark:bg-[#111111] p-8 lg:p-10 rounded-lg shadow-xl shadow-on-surface/[0.02] hover:shadow-primary-container/10 transition-all flex flex-col items-start gap-5">
<div className="flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">eco</span>
</div>
<div className="flex flex-col gap-2">
<div className="font-label-regulatory text-label-regulatory uppercase text-primary font-bold">Value 03</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Sustainability</h3>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              Sustainability plays a key role for us. We develop solutions that not only last today but also remain relevant in the future. We focus on using resources efficiently and creating long-term value.
            </p>
</div>

{/*  Card 4: Customer-Centered  */}
<div className="bg-white dark:bg-[#111111] p-8 lg:p-10 rounded-lg shadow-xl shadow-on-surface/[0.02] hover:shadow-primary-container/10 transition-all flex flex-col items-start gap-5">
<div className="flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">favorite</span>
</div>
<div className="flex flex-col gap-2">
<div className="font-label-regulatory text-label-regulatory uppercase text-primary font-bold">Value 04</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Customer-Centered</h3>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              The success of our clients is always at the core of what we do. We listen carefully, analyze your needs, and develop tailored solutions that are perfectly aligned with your business. Our approach is based on trust, transparency, and a long-term partnership.
            </p>
</div>
{/*  Card 5: Transparency  */}
<div className="bg-white dark:bg-[#111111] p-8 lg:p-10 rounded-lg shadow-xl shadow-on-surface/[0.02] hover:shadow-primary-container/10 transition-all flex flex-col items-start gap-5">
<div className="flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">visibility</span>
</div>
<div className="flex flex-col gap-2">
<div className="font-label-regulatory text-label-regulatory uppercase text-primary font-bold">Value 05</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Transparency</h3>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              We rely on clear communication and transparent processes, so you always know the status of your project. You maintain full control and are continuously informed about the progress, fostering efficient and trustworthy collaboration.
            </p>
</div>

{/*  Card 6: Geographic Advantage  */}
<div className="bg-white dark:bg-[#111111] p-8 lg:p-10 rounded-lg shadow-xl shadow-on-surface/[0.02] hover:shadow-primary-container/10 transition-all flex flex-col items-start gap-5">
<div className="flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">public</span>
</div>
<div className="flex flex-col gap-2">
<div className="font-label-regulatory text-label-regulatory uppercase text-primary font-bold">Value 06</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Geographic Advantage</h3>
</div>
<p className="font-body-md text-body-md text-secondary leading-relaxed">
              Operating from our engineering hub in Türkiye allows us to deliver world-class medical software at highly optimized economics. You benefit from highly competitive European-standard development without compromising on quality, security, or compliance.
            </p>
</div>

</div>
</div>
</div>
</section>
{/*  SECTION 4.5: Client Logos  */}
<section className="w-full border-t border-b border-border/40 bg-white/30 dark:bg-[#111111]/30 py-16">
  <div className="max-w-5xl mx-auto px-6 lg:px-12 flex flex-col items-center gap-10">
    <p className="font-label-md text-label-md text-secondary uppercase tracking-widest font-semibold text-center">Trusted by Innovative Health Tech Companies</p>
    <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 transition-all duration-500">
      <img src="/ref-mementor.png" alt="Mementor" className="h-12 md:h-14 lg:h-16 w-auto object-contain" />
      <img src="/ref-mobilehealth.png" alt="Mobile Health" className="h-12 md:h-14 lg:h-16 w-auto object-contain" />
    </div>
  </div>
</section>

{/*  SECTION 5: Brutalist Typography CTA  */}
<section className="w-full mt-12 py-24 lg:py-32">
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
          Ready to architect<br/>your certified software?
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
          Whether you need a full DiGA application, a certified medical web platform, or architectural consultation, we are ready to discuss your roadmap.
        </p>
        <Link href="/contact" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-[13px] font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-pointer w-fit">
          <span>Start a conversation</span>
          <ArrowRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  </div>
</section>
</div></main>
  );
}
