"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

export function Hero({ lang, dict }: { lang: string, dict: any }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } }
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center pt-24 overflow-hidden bg-background transition-colors duration-300">
      {/* Dynamic Split Background Images (3:1 Ratio) */}
      <div className="absolute inset-0 z-0 flex w-full overflow-hidden">
        {/* Main image (75%) */}
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" as any }}
          className="w-2/3 h-full"
          style={{
            backgroundImage: 'url("/hero-doctor-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center'
          }}
        />
        {/* Secondary image from the old Certified card (25%) */}
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" as any }}
          className="w-1/3 h-full border-l border-border/40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2940&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'none'
          }}
        />
      </div>
      
      {/* Gradient overlays adjusted for bright image to keep white text readable */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/50 to-transparent opacity-90" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex justify-between items-center">
        
        {/* Left Content with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[700px]"
        >
          
          <motion.h1 variants={itemVariants} className="text-[64px] md:text-[80px] font-medium tracking-tight text-foreground mb-6 leading-[1.05]">
            {dict.title1} <br/> {dict.title2}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-[15px] text-muted-foreground mb-10 max-w-[480px] leading-relaxed">
            {dict.desc}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Link href={`/${lang}/contact`} className="px-7 py-3.5 rounded-full bg-primary text-white text-[13px] font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-pointer">{dict.btn1}</Link>
            <Link href={`/${lang}/services`} className="px-7 py-3.5 rounded-full bg-card border border-border text-foreground text-[13px] font-medium hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer">{dict.btn2}</Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
