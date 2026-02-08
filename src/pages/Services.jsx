import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Services = () => {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-background-light dark:bg-background-dark">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <img src="/services-hero.png" alt="Dental Office" className="w-full h-full object-cover opacity-30 dark:opacity-10 blur-sm" />
             <div className="absolute inset-0 bg-gradient-to-t from-background-light via-background-light/80 to-transparent dark:from-background-dark dark:via-background-dark/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={staggerContainer}
            >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    World-Class Care
                </motion.div>
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-text-main dark:text-white mb-8 leading-tight">
                    Comprehensive <span className="text-primary">Dental Solutions</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                    From routine checkups to complete smile makeovers, we provide personalized care you can trust, using the latest technology for your comfort.
                </motion.p>
                
                {/* Trust Signals */}
                <motion.div variants={fadeInUp} className="flex justify-center items-center gap-6 md:gap-12 flex-wrap opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">star</span>
                        <span className="font-bold text-sm text-text-main dark:text-white">4.9/5 Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">verified_user</span>
                        <span className="font-bold text-sm text-text-main dark:text-white">ADA Member</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">shield</span>
                        <span className="font-bold text-sm text-text-main dark:text-white">In-Network</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white dark:bg-background-dark/50 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-gray-100 dark:border-white/5 relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category 1: General Dentistry */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start"
            >
               {/* Left Content */}
               <motion.div variants={fadeInUp} className="lg:col-span-4 sticky top-32">
                   <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] mb-8 shadow-2xl group">
                       <img alt="General Dentistry" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/general-dentistry.png"/>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8">
                           <h2 className="text-white text-3xl font-bold">General Dentistry</h2>
                       </div>
                   </div>
                   <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4">Preserving Your Natural Smile</h3>
                   <p className="text-text-muted dark:text-gray-400 mb-8 text-lg leading-relaxed">Routine care is the foundation of oral health. We focus on prevention and early detection to keep your teeth healthy for life.</p>
                   <Button variant="secondary" className="gap-2 w-full sm:w-auto" to="/booking">Schedule Checkup <span className="material-symbols-outlined text-sm">arrow_forward</span></Button>
               </motion.div>
               
               {/* Right Grid */}
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: 'dentistry', title: 'Cleanings & Exams', desc: 'Comprehensive plaque removal, polishing, and thorough examination.' },
                    { icon: 'health_and_safety', title: 'Composite Fillings', desc: 'Tooth-colored restorations that blend seamlessly with your natural enamel.' },
                    { icon: 'medical_services', title: 'Root Canal Therapy', desc: 'Advanced treatment to save infected teeth, performed with modern anesthetics.' },
                    { icon: 'child_care', title: 'Pediatric Dentistry', desc: 'Gentle, fun, and educational dental care designed specifically for children.' }
                  ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-[2rem] bg-background-light dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary/30 hover:shadow-lg transition-all group"
                      >
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                          </div>
                          <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">{item.title}</h4>
                          <p className="text-text-muted dark:text-gray-400 leading-relaxed">{item.desc}</p>
                      </motion.div>
                  ))}
               </div>
            </motion.div>

            <div className="h-px bg-gray-100 dark:bg-white/5 w-full my-16"></div>

            {/* Category 2: Cosmetic Dentistry */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-start"
            >
               <motion.div variants={fadeInUp} className="lg:col-span-4 lg:order-2 sticky top-32">
                   <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] mb-8 shadow-2xl group">
                       <img alt="Cosmetic Dentistry" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"/>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8">
                           <h2 className="text-white text-3xl font-bold">Cosmetic Dentistry</h2>
                       </div>
                   </div>
                   <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4">Designing Your Perfect Look</h3>
                   <p className="text-text-muted dark:text-gray-400 mb-8 text-lg leading-relaxed">Unlock the full potential of your smile. Our cosmetic treatments are tailored to enhance your natural beauty.</p>
                   <Button variant="secondary" className="gap-2 w-full sm:w-auto" to="/booking">View Smile Gallery <span className="material-symbols-outlined text-sm">arrow_forward</span></Button>
               </motion.div>
               
               <div className="lg:col-span-8 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: 'auto_fix_high', title: 'Teeth Whitening', desc: 'Professional in-office or take-home whitening kits to brighten your smile safely.' },
                    { icon: 'masks', title: 'Porcelain Veneers', desc: 'Thin, custom-made shells designed to cover the front surface of teeth.' },
                    { icon: 'grid_on', title: 'Invisalign®', desc: 'Clear aligners that straighten teeth discreetly without metal braces.' },
                    { icon: 'brush', title: 'Cosmetic Bonding', desc: 'Quick repair for chipped or cracked teeth using tooth-colored resin.' }
                  ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-[2rem] bg-background-light dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary/30 hover:shadow-lg transition-all group"
                      >
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                          </div>
                          <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">{item.title}</h4>
                          <p className="text-text-muted dark:text-gray-400 leading-relaxed">{item.desc}</p>
                      </motion.div>
                  ))}
               </div>
            </motion.div>

            <div className="h-px bg-gray-100 dark:bg-white/5 w-full my-16"></div>

             {/* Category 3: Specialized Care */}
             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
            >
               <motion.div variants={fadeInUp} className="lg:col-span-4 sticky top-32">
                   <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] mb-8 shadow-2xl group">
                       <img alt="Specialized Care" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"/>
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-8">
                           <h2 className="text-white text-3xl font-bold">Specialized Care</h2>
                       </div>
                   </div>
                   <h3 className="text-2xl font-bold text-text-main dark:text-white mb-4">Advanced Solutions</h3>
                   <p className="text-text-muted dark:text-gray-400 mb-8 text-lg leading-relaxed">For complex dental needs, we offer specialized surgical and restorative procedures, utilizing state-of-the-art techniques.</p>
                   <Button variant="secondary" className="gap-2 w-full sm:w-auto" to="/booking">Learn About Implants <span className="material-symbols-outlined text-sm">arrow_forward</span></Button>
               </motion.div>
               
               <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: 'hardware', title: 'Dental Implants', desc: 'Permanent, natural-looking replacements for missing teeth that restore full function.' },
                    { icon: 'night_shelter', title: 'Sedation Dentistry', desc: 'Relaxing options including nitrous oxide and oral sedation for anxiety-free visits.' },
                    { icon: 'dentistry', title: 'Oral Surgery', desc: 'Extractions, bone grafting, and other surgical procedures performed with precision.' },
                    { icon: 'emergency', title: 'Emergency Care', desc: 'Same-day appointments available for toothaches, accidents, and urgent dental needs.' }
                  ].map((item, i) => (
                      <motion.div 
                        key={i} 
                        variants={fadeInUp}
                        whileHover={{ y: -5 }}
                        className="p-8 rounded-[2rem] bg-background-light dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:border-primary/30 hover:shadow-lg transition-all group"
                      >
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                          </div>
                          <h4 className="text-xl font-bold text-text-main dark:text-white mb-3">{item.title}</h4>
                          <p className="text-text-muted dark:text-gray-400 leading-relaxed">{item.desc}</p>
                      </motion.div>
                  ))}
               </div>
            </motion.div>

         </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 lg:py-32 bg-background-light dark:bg-background-dark relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="text-center max-w-3xl mx-auto mb-20">
                 <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Innovation</span>
                 <h2 className="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6">Advanced Technology</h2>
                 <p className="text-text-muted dark:text-gray-400 text-xl leading-relaxed">We invest in the latest equipment to ensure your treatments are faster, more precise, and more comfortable.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: 'view_in_ar', title: '3D Cone Beam', desc: 'Precise 3D imaging for implants and diagnostics with low radiation.' },
                    { icon: 'colorize', title: 'Laser Dentistry', desc: 'Minimally invasive soft tissue treatments with faster healing times.' },
                    { icon: 'camera_alt', title: 'Intraoral Cameras', desc: 'See what we see. High-res images help you understand your oral health.' },
                    { icon: 'print', title: 'Digital Impressions', desc: 'No more goop. Fast, accurate digital scans for crowns and clear aligners.' }
                ].map((item, i) => (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        key={i} 
                        className="flex flex-col items-center text-center p-8 bg-white dark:bg-white/5 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 hover:border-primary/20 transition-all hover:-translate-y-2"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-text-main dark:text-white">{item.title}</h3>
                        <p className="text-text-muted dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
             </div>
         </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary relative overflow-hidden py-24 lg:py-32 px-4">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Not sure what you need?</h2>
              <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">Our team is here to help. Schedule a consultation and we'll create a personalized treatment plan just for you.</p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button variant="white" className="h-16 px-10 text-xl w-full sm:w-auto" to="/booking">Book Free Consultation</Button>
                  <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold h-16 px-10 rounded-full transition-all text-xl">
                      Call (555) 123-4567
                  </button>
              </div>
              <p className="mt-8 text-sm text-white/60 font-medium">* Free consultations available for new patients for cosmetic and implant services.</p>
          </div>
      </section>
    </div>
  );
};
