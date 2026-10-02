"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    id: "01",
    title: "Software as a Medical Device (SaMD)",
    description: "End-to-end engineering of mobile and web applications under strict IEC 62304 life cycle compliance. We architect scalable, user-centric software for MDR Class I and IIa medical devices.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "DiGA Fast-Track Readiness",
    description: "Turnkey technical development and BSI TR-03161 cryptographic implementation to guarantee immediate listing readiness for BfArM reimbursement in Germany.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "Medical Cloud & FHIR / HL7 APIs",
    description: "Scalable, high-availability backend architectures and secure interoperability interfaces tailored for modern healthcare data pipelines and hospital IT integrations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "eQMS & Regulatory Compliance",
    description: "Automated ISO 13485 compliance engines, continuous risk management (ISO 14971), and fully integrated Quality Management Systems embedded directly into your CI/CD workflows.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop"
  }
];

export function ServicesAccordion() {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  return (
    <section className="py-24 px-6 bg-background transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto border-t border-border pt-24">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-muted-foreground" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Our Services</span>
            </div>
            <h2 className="text-[40px] md:text-[56px] font-medium text-foreground leading-tight">
              Certified Development <br/> for Digital Health
            </h2>
          </div>
          <div className="lg:flex lg:items-end lg:justify-end">
            <p className="text-muted-foreground max-w-sm text-[13px] leading-relaxed">
              From initial architecture to Notified Body audits, we provide turnkey medical software engineering and continuous regulatory compliance tailored strictly for European digital health innovators.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Accordion List */}
          <div className="flex flex-col border-t border-border">
            {SERVICES.map((service) => {
              const isActive = activeService.id === service.id;
              
              return (
                <div 
                  key={service.id}
                  className="border-b border-border py-8 cursor-pointer group"
                  onClick={() => setActiveService(service)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-6">
                      <span className={`text-[12px] font-bold ${isActive ? 'text-primary' : 'text-muted-foreground/70 group-hover:text-primary transition-colors'}`}>
                        {service.id}
                      </span>
                      <h3 className={`text-[20px] font-medium transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <ArrowUpRight className={`w-5 h-5 transition-transform ${isActive ? 'text-foreground rotate-45' : 'text-muted-foreground/70 opacity-0 group-hover:opacity-100 group-hover:text-foreground'}`} />
                  </div>
                  
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pl-11 text-muted-foreground pr-8 pb-4 text-[13px] leading-relaxed max-w-[400px]">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Dynamic Image */}
          <div className="relative h-[600px] w-full rounded-tr-[80px] rounded-bl-[80px] overflow-hidden bg-card hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
