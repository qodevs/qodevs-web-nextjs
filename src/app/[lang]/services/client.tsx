"use client";

import { CheckCircle2, Activity, Settings, CloudCog, Rocket, Zap, ShieldCheck, TrendingUp, Lightbulb } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};



export default function ServicesClient({ dict, lang }: { dict: any, lang: string }) {
  const t = dict.services_page;
  // Mouse Follower Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth out the movement with a spring physics configuration (made slower and smoother)
  const springX = useSpring(mouseX, { stiffness: 15, damping: 40, mass: 1.2 });
  const springY = useSpring(mouseY, { stiffness: 15, damping: 40, mass: 1.2 });

  useEffect(() => {
    // Set initial position to center of screen
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="bg-background font-sans text-foreground antialiased selection:bg-[#0d9488]/20 selection:text-[#0f766e] relative overflow-hidden min-h-screen">
      
      {/* Animated Mouse-Following Green Gradient */}
      <motion.div 
        className="fixed top-0 left-0 w-[1000px] h-[1000px] md:w-[1600px] md:h-[1600px] pointer-events-none z-0 opacity-80 blur-[100px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(72,187,120,0.20) 0%, rgba(0,130,122,0.05) 45%, rgba(0,130,122,0) 75%)"
        }}
      />

      {/* Static fallback ambient glow for the whole page */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-gradient-to-b from-[#0d9488]/[0.08] to-transparent pointer-events-none -z-20" />

      <main className="w-full pt-20 relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.12] mb-8 max-w-4xl"
            >
              Building compliant medical software, <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-primary via-primary to-primary">simply and precisely.</span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl mb-12"
            >
              QODEVS engineers Class I & IIa SaMD, DiGA-ready patient platforms, and zero-trust FHIR health clouds aligned with MDR and IEC 62304 from day zero.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-16"
            >
              <a href="#contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0d9488] text-white font-semibold text-sm hover:opacity-95 transition-all shadow-sm hover:shadow text-center">
                Book a Consultation
              </a>
              <a href="#capabilities" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-card text-foreground border border-border font-semibold text-sm hover:bg-muted transition-all text-center">
                Explore Services
              </a>
            </motion.div>
            
            {/* Infinite Marquee Regulatory Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full max-w-4xl mx-auto overflow-hidden relative mt-8"
              style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
            >
              
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                className="flex items-center w-max gap-8 font-mono text-[11px] md:text-xs font-bold tracking-widest uppercase text-secondary/80"
              >
                {/* SET 1 */}
                <div className="flex items-center gap-8">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>ISO 13485 Certified QMS</span>
                  <span className="text-border/60">•</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>IEC 62304 Life Cycle</span>
                  <span className="text-border/60">•</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>MDR Class I & IIa Compliant</span>
                  <span className="text-border/60">•</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>DiGA Fast-Track Ready</span>
                  <span className="text-border/60">•</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>ISO 27001 & DSGVO</span>
                  <span className="text-border/60">•</span>
                </div>
                {/* SET 2 (Duplicate for seamless loop) */}
                <div className="flex items-center gap-8">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>ISO 13485 Certified QMS</span>
                  <span className="text-border/60">•</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>IEC 62304 Life Cycle</span>
                  <span className="text-border/60">•</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>MDR Class I & IIa Compliant</span>
                  <span className="text-border/60">•</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>DiGA Fast-Track Ready</span>
                  <span className="text-border/60">•</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-none bg-primary"></span>ISO 27001 & DSGVO</span>
                  <span className="text-border/60">•</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        
        {/* SPECIALIZED CORE DISCIPLINES GRID */}
        <section id="capabilities" className="py-24 md:py-32 bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header Section (Matching the Image) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 mb-16 md:mb-20">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-surface-container-low text-on-surface text-[10px] font-bold tracking-widest uppercase rounded-none">
                  Our Expertise
                </span>
                <span className="text-[10px] text-secondary font-bold tracking-widest uppercase">
                  // Specialized Core Disciplines
                </span>
              </div>
              
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.1] max-w-2xl">
                  Medical Software Engineering Disciplines
                </h2>
                <p className="text-base text-secondary leading-relaxed max-w-sm lg:pb-2">
                  Structured for venture-backed digital health scaleups, hospital systems, and global IVD/MedTech leaders.
                </p>
              </div>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              
              {/* Card 1 */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-[#111111] p-8 md:p-10 flex flex-col h-full hover:bg-white/80 dark:hover:bg-[#111111]/80 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Discipline 01
                  </span>
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  DiGA Fast-Track Development
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                  Turnkey engineering for BfArM reimbursement in Germany and PECAN in France. We integrate data protection, secure server enclaves, and medical proof of benefit engines.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">BfArM Fast Track</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">BSI TR-03161</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">GDPR 9(2)(A)</span>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-[#111111] p-8 md:p-10 flex flex-col h-full hover:bg-white/80 dark:hover:bg-[#111111]/80 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Discipline 02
                  </span>
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  SaMD Architecture (MDR Class I & IIa)
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                  Software as a Medical Device developed natively within IEC 62304 Class B & C life cycles. Modular microservice backends, deterministic algorithm testing, and fail-safe fallbacks.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">EU MDR 2017/745</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">IEC 62304</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">ISO 14971 Risk</span>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-[#111111] p-8 md:p-10 flex flex-col h-full hover:bg-white/80 dark:hover:bg-[#111111]/80 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Discipline 03
                  </span>
                  <CloudCog className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  HL7 FHIR & openEHR Interoperability
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                  Bidirectional sync with hospital information systems (HIS/KIS). Implementation of SMART on FHIR, Telematics Infrastructure (TI / gematik), and standardized archetypes.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">HL7 FHIR R4</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">SMART on FHIR</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">IHE Profiles</span>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-[#111111] p-8 md:p-10 flex flex-col h-full hover:bg-white/80 dark:hover:bg-[#111111]/80 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Discipline 04
                  </span>
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  ISO 13485 QMS Embedded Pipelines
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                  Automated GitOps pipelines generating audit-ready Design History Files (DHF) and Device Master Records (DMR) with every build, commit, and verification run.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">Automated DHF</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">CI/CD Validation</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">Traceability Matrix</span>
                </div>
              </motion.div>

              {/* Card 5 */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-[#111111] p-8 md:p-10 flex flex-col h-full hover:bg-white/80 dark:hover:bg-[#111111]/80 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Discipline 05
                  </span>
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Medical Usability (IEC 62366-1)
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                  Human factors engineering preventing use errors. Formative and summative usability testing with verified clinicians and patient cohorts under clinical laboratory control.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">IEC 62366-1</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">Summative Testing</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">UI Safety Matrix</span>
                </div>
              </motion.div>

              {/* Card 6 */}
              <motion.div variants={itemVariants} className="bg-white dark:bg-[#111111] p-8 md:p-10 flex flex-col h-full hover:bg-white/80 dark:hover:bg-[#111111]/80 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Discipline 06
                  </span>
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Cybersecurity & Cloud Enclaves
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                  Zero-trust medical cloud architectures on AWS/Azure European Healthcare Zones. Penetration testing compliant with MDCG 2019-16 cybersecurity guidelines.
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">ISO 27001</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">MDCG 2019-16</span>
                  <span className="px-2.5 py-1.5 bg-surface-container text-on-surface text-[10px] font-bold uppercase tracking-wider rounded-none">Zero-Trust Enclave</span>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>


        {/* COMPLIANCE MATRIX TABLE */}
        <section className="py-24 bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <span className="text-[10px] text-primary tracking-widest uppercase font-bold block mb-3">
                  Regulatory Coverage
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Standards & Regulatory Compliance Matrix
                </h2>
              </div>
              <span className="text-[10px] text-secondary tracking-widest uppercase font-bold pb-2">
                Last Revised: Q1 2025
              </span>
            </motion.div>

            {/* Table */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full overflow-x-auto">
              <table className="w-full bg-white dark:bg-[#111111] text-left border-collapse min-w-[800px] border-x border-border/40">
                <thead>
                  <tr className="border-t border-b border-border/40 text-[10px] text-secondary tracking-widest uppercase font-bold bg-white/50 dark:bg-[#111111]/50">
                    <th className="py-6 px-4 font-bold w-[20%]">Normative Standard</th>
                    <th className="py-6 px-4 font-bold w-[30%]">Application Scope</th>
                    <th className="py-6 px-4 font-bold w-[35%]">QODEVS Deliverable Artifact</th>
                    <th className="py-6 px-4 font-bold w-[15%]">Audit Authority</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  
                  {/* Row 1 */}
                  <tr className="border-b border-border/40 hover:bg-white dark:hover:bg-[#111111] transition-colors">
                    <td className="py-6 px-4 font-bold text-foreground">ISO 13485:2016</td>
                    <td className="py-6 px-4 text-secondary">Quality Management for Medical Devices</td>
                    <td className="py-6 px-4 text-secondary">Fully integrated eQMS processes, SOPs & Work Instructions</td>
                    <td className="py-6 px-4 text-[10px] text-secondary tracking-widest uppercase font-bold">TÜV / DEKRA / BSI</td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="border-b border-border/40 hover:bg-white dark:hover:bg-[#111111] transition-colors">
                    <td className="py-6 px-4 font-bold text-foreground">IEC 62304:2006 + A1:2015</td>
                    <td className="py-6 px-4 text-secondary">Medical Device Software Life Cycle Processes</td>
                    <td className="py-6 px-4 text-secondary">Software Architecture Spec, Software Test Documentation, Unit Traceability</td>
                    <td className="py-6 px-4 text-[10px] text-secondary tracking-widest uppercase font-bold">Notified Bodies</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="border-b border-border/40 hover:bg-white dark:hover:bg-[#111111] transition-colors">
                    <td className="py-6 px-4 font-bold text-foreground">ISO 14971:2019</td>
                    <td className="py-6 px-4 text-secondary">Application of Risk Management to Medical Devices</td>
                    <td className="py-6 px-4 text-secondary">FMEA, Hazard Analysis, Risk Management Plan & Final Report</td>
                    <td className="py-6 px-4 text-[10px] text-secondary tracking-widest uppercase font-bold">Notified Bodies</td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="border-b border-border/40 hover:bg-white dark:hover:bg-[#111111] transition-colors">
                    <td className="py-6 px-4 font-bold text-foreground">IEC 62366-1:2015</td>
                    <td className="py-6 px-4 text-secondary">Usability Engineering for Medical Devices</td>
                    <td className="py-6 px-4 text-secondary">Use Specification, Formative & Summative Usability Protocols</td>
                    <td className="py-6 px-4 text-[10px] text-secondary tracking-widest uppercase font-bold">Clinical Evaluators</td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="border-b border-border/40 hover:bg-white dark:hover:bg-[#111111] transition-colors">
                    <td className="py-6 px-4 font-bold text-foreground">BSI TR-03161</td>
                    <td className="py-6 px-4 text-secondary">Security Requirements for Digital Health Applications (DiGA)</td>
                    <td className="py-6 px-4 text-secondary">Cryptographic Proof, Vulnerability Scan Artifacts, Penetration Report</td>
                    <td className="py-6 px-4 text-[10px] text-secondary tracking-widest uppercase font-bold">BSI / BFARM</td>
                  </tr>

                </tbody>
              </table>
            </motion.div>

          </div>
        </section>

{/* HOW WE WORK (Minimal Linear Journey) */}
        <section className="py-24 md:py-32 bg-card/50 backdrop-blur-md border-t border-black/5 dark:border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16 md:mb-20"
            >
              <span className="text-xs text-primary tracking-wider uppercase font-semibold block mb-3">Clear Process</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                From initial concept to audited release.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                A linear engineering approach designed to maintain development velocity while producing complete, audit-proof technical documentation.
              </p>
            </motion.div>
            
            {/* 3-Step Linear Journey */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-background border border-border text-foreground text-sm font-bold flex items-center justify-center shadow-sm">
                    01
                  </span>
                  <div className="h-px bg-black/5 dark:bg-white/5 flex-1 hidden md:block"></div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Architecture & Classification
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We define clinical intended purpose, determine exact MDR safety class, and establish the technical baseline before a single sprint begins.
                </p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-background border border-border text-foreground text-sm font-bold flex items-center justify-center shadow-sm">
                    02
                  </span>
                  <div className="h-px bg-black/5 dark:bg-white/5 flex-1 hidden md:block"></div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Certified Agile Engineering
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rapid feature development backed by automated verification gates, static security scans, and continuous ISO 14971 risk mitigations.
                </p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-sm">
                    03
                  </span>
                  <div className="h-px bg-transparent flex-1 hidden md:block"></div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Audit-Ready Delivery
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You receive full production software along with compiled Technical Dossiers (Annex II/III) ready for immediate submission to TÜV, DEKRA, or BfArM.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        
        {/* ENGAGEMENT MODELS */}
        <section className="py-24 md:py-32 bg-background relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 mb-16 md:mb-20">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-surface-container-low text-on-surface text-[10px] font-bold tracking-widest uppercase rounded-none">
                  Engagement Framework
                </span>
                <span className="text-[10px] text-secondary font-bold tracking-widest uppercase">
                  // How We Partner
                </span>
              </div>
              
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.1] max-w-2xl">
                  Flexible Engagement Models
                </h2>
                <p className="text-base text-secondary leading-relaxed max-w-sm lg:pb-2">
                  Whether preparing for immediate Notified Body audit or building an entire certified medical application from scratch.
                </p>
              </div>
            </motion.div>

            
            {/* Cards Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="group bg-white dark:bg-[#111111] border border-transparent hover:border-primary/60 hover:shadow-[0_8px_30px_rgb(0,130,122,0.08)] p-8 md:p-10 flex flex-col h-full rounded-none transition-all duration-300">
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Model 01 // Audit Focus
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Fixed-Scope Audit & Fast-Track Readiness
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                  {t.c1_desc}
                </p>
                <ul className="space-y-4 mb-10 text-sm text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{t.c1_li1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">MDR Rule 11 classification & Gap Analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{t.c1_li3}</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-border/40 mt-auto">
                  <span className="text-[10px] font-bold text-secondary group-hover:text-primary dark:group-hover:text-primary tracking-widest uppercase transition-colors">
                    Fixed Duration & Scope
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-white dark:bg-[#111111] border border-transparent hover:border-primary/60 hover:shadow-[0_8px_30px_rgb(0,130,122,0.08)] p-8 md:p-10 flex flex-col h-full rounded-none transition-all duration-300 relative">
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Model 02 // Full Turnkey
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Full-Lifecycle SaMD Co-Development
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                  {t.c2_desc}
                </p>
                <ul className="space-y-4 mb-10 text-sm text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">Complete Class I & IIa cloud and mobile implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{t.c2_li2}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{t.c2_li3}</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-border/40 mt-auto">
                  <span className="text-[10px] font-bold text-secondary group-hover:text-primary dark:group-hover:text-primary tracking-widest uppercase transition-colors">
                    End-to-End CE Handover
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white dark:bg-[#111111] border border-transparent hover:border-primary/60 hover:shadow-[0_8px_30px_rgb(0,130,122,0.08)] p-8 md:p-10 flex flex-col h-full rounded-none transition-all duration-300">
                <div className="mb-6">
                  <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                    Model 03 // Embedded Capacity
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Regulatory Sparring & Team Augmentation
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-8 flex-grow">
                  {t.c3_desc}
                </p>
                <ul className="space-y-4 mb-10 text-sm text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{t.c3_li1}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">CI/CD traceability pipeline setup & GitOps QMS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-snug">{t.c3_li3}</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-border/40 mt-auto">
                  <span className="text-[10px] font-bold text-secondary group-hover:text-primary dark:group-hover:text-primary tracking-widest uppercase transition-colors">
                    Flexible Sprint Retractable
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
</section>

{/* FOCUSED CTA SECTION */}
        <section id="contact" className="py-20 md:py-28 relative z-10">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl bg-white text-slate-900 p-10 md:p-16 relative overflow-hidden shadow-[0_12px_40px_-15px_rgba(0,130,122,0.08)]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'url("/images/medical-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

              {/* Subtle corner gradient */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none z-0"></div>
              
              <div className="relative z-10 max-w-2xl bg-white/40 p-4 -m-4 rounded-2xl backdrop-blur-[2px]">

                
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-snug">
                  Ready to architect your certified medical application?
                </h2>
                
                <p className="text-base text-slate-600 leading-relaxed mb-8 font-medium">
                  {t.cta_desc}
                </p>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a href={`/${lang}/contact`} className="px-8 py-3.5 rounded-full bg-[#0d9488] text-white font-semibold text-sm hover:bg-[#3ea76b] transition-all text-center shadow-sm hover:shadow-md">
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
