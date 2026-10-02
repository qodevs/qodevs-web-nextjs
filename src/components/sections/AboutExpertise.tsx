"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export function AboutExpertise({ dict }: { dict: any }) {
  return (
    <section className="py-24 px-6 bg-background transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 bg-muted-foreground" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">About</span>
            </div>
            
            <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-muted-foreground leading-[1.5]">
              {/* Neon green star inline */}
              <svg className="inline-block w-6 h-6 mr-3 mb-1 relative -top-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="var(--primary)"/>
              </svg>
              <span className="text-foreground">{dict.title_prefix}</span>{dict.title_suffix}
            </h2>
          </div>
          
          {/* Client Logos - Right side, centered vertically and horizontally side by side */}
          <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 w-full lg:w-auto lg:flex-1 transition-all duration-500">
            <Image 
              src="/ref-mementor.png" 
              alt="Mementor" 
              width={260} 
              height={90} 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
            <Image 
              src="/ref-mobilehealth.png" 
              alt="Mobile Health" 
              width={260} 
              height={90} 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* Big Cards mimicking reference stats */}
        <div className="grid md:grid-cols-3 gap-1">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card dark:bg-[#111111] p-12 flex flex-col justify-between min-h-[340px]"
          >
            <h3 className="text-[56px] font-medium text-foreground tracking-tight">{dict.c1_title}</h3>
            <div className="text-[14px] text-muted-foreground max-w-[200px] leading-relaxed">
              {dict.c1_desc}<br/><br/><span className="text-muted-foreground">{dict.c1_tag}</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card dark:bg-[#111111] p-12 flex flex-col justify-between min-h-[340px]"
          >
            <h3 className="text-[56px] font-medium text-foreground tracking-tight">{dict.c2_title}</h3>
            <div className="text-[14px] text-muted-foreground max-w-[200px] leading-relaxed">
              {dict.c2_desc}<br/><br/><span className="text-muted-foreground">{dict.c2_tag}</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card dark:bg-[#111111] p-12 flex flex-col justify-between min-h-[340px]"
          >
            <h3 className="text-[56px] font-medium text-foreground tracking-tight">{dict.c3_title}</h3>
            <div className="text-[14px] text-muted-foreground max-w-[200px] leading-relaxed">
              {dict.c3_desc}<br/><br/><span className="text-muted-foreground">{dict.c3_tag}</span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card dark:bg-[#111111] p-12 flex flex-col justify-between min-h-[340px]"
          >
            <h3 className="text-[56px] font-medium text-foreground tracking-tight">{dict.c4_title}</h3>
            <div className="text-[14px] text-muted-foreground max-w-[200px] leading-relaxed">
              {dict.c4_desc}<br/><br/><span className="text-muted-foreground">{dict.c4_tag}</span>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-card dark:bg-[#111111] p-12 flex flex-col justify-between min-h-[340px]"
          >
            <h3 className="text-[56px] font-medium text-foreground tracking-tight">{dict.c5_title}</h3>
            <div className="text-[14px] text-muted-foreground max-w-[200px] leading-relaxed">
              {dict.c5_desc}<br/><br/><span className="text-muted-foreground">{dict.c5_tag}</span>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-card dark:bg-[#111111] p-12 flex flex-col justify-between min-h-[340px]"
          >
            <h3 className="text-[56px] font-medium text-foreground tracking-tight">{dict.c6_title}</h3>
            <div className="text-[14px] text-muted-foreground max-w-[200px] leading-relaxed">
              {dict.c6_desc}<br/><br/><span className="text-muted-foreground">{dict.c6_tag}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
