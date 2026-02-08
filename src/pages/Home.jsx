import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 dark:border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors">{question}</span>
        <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-muted dark:text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-deep-blue/5 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col items-start gap-8 lg:pr-8"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 rounded-full bg-deep-blue/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-deep-blue dark:bg-deep-blue/20 dark:text-blue-300">
                <span className="h-2 w-2 rounded-full bg-deep-blue animate-pulse"></span>
                New Patients Welcome
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold leading-[1.1] tracking-tight text-text-main dark:text-white sm:text-6xl lg:text-7xl">
                Experience Dentistry That Feels Like <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Home</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="max-w-xl text-xl text-text-muted dark:text-gray-300 leading-relaxed">
                Top-rated dental care in the heart of the city. We prioritize your comfort, health, and confidence with a gentle touch and modern technology.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <Link className="flex min-w-[180px] items-center justify-center rounded-full bg-primary h-14 px-8 text-lg font-bold text-white shadow-xl shadow-primary/25 transition-all hover:bg-primary-hover hover:-translate-y-1 hover:shadow-primary/40" to="/booking">
                  Book Appointment
                </Link>
                <Link className="flex min-w-[180px] items-center justify-center rounded-full border-2 border-deep-blue/10 h-14 px-8 text-lg font-bold text-deep-blue dark:text-blue-300 dark:border-blue-300/20 transition-all hover:bg-deep-blue/5 hover:border-deep-blue/30 dark:hover:bg-blue-300/10" to="/services">
                  Our Services
                </Link>
              </motion.div>

              {/* Reviewers */}
              <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-5 p-4 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/5 shadow-sm">
                <div className="flex -space-x-4">
                  <img alt="Patient 1" className="h-12 w-12 rounded-full border-4 border-white dark:border-gray-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxtA2nnPK4QGDRxcud4g-DOrEOJb2A7hORjFchVVZves5POmoOoGbjBe3rTwvlUFCIczG0wXbTgRwFMNIJahJD5UEdAxxXFKYRz2cAHwzifzmdxaH8uG-qmemgL-GPo8EiHm3yl7Jl_aVBzmqzPLH3EQuDBtzhg2sxCK-kp-LE2Wu2YYKkbTs8WZB9pD65GVXEp30ccN5V0nFnLJP4-TKiI-BJziZZCAQAYLsSeFhk0yl26r2fFYodDSnhsLAp48pSaiVqmQwo64xh"/>
                  <img alt="Patient 2" className="h-12 w-12 rounded-full border-4 border-white dark:border-gray-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlJvFi_WEtwHYkVD6gFHsIiLIHscYPA5HzlpGiO9oOQksNBymD0UZmasitxzpRD2hQmBPgaPchqwqV7tVK0mqIJxAObx8CLXGvuAAnqSxIY3F5VIRnOkS_3iV30qTGtkO0wexv4rfaa3PBW-WaIB7XLVlBQ9VTN4X6t2xcmPVPXpa1GcZm-gDFeGj-j6E4qIE27031r9rN8szJHwyQOJjUKmoENx2SHJF9uQYUm5CQJQKTEBr-vGyv3DKQwV1E-HUZfuu4I-2HMQ_Z"/>
                  <img alt="Patient 3" className="h-12 w-12 rounded-full border-4 border-white dark:border-gray-900 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPxJUDIi0libNYprD-EUwxWQ_w-HvOtnwIEql5625qW8A3CrdRZTZNPaJqHnYeIiyAySLArlWimYTwJ2hgngCdaYPjv7CNkpvUJEyeZz4_LvGLK9wo9MZ-GMe3-QxbD3dv9Kx-12GvVOOv48cuia3G5Hyy9odch6T_xvElV3G_XnYCpg5XynFRP3fdGHFBfi5U86ZuMoJEAUtzm1vIVn7nkdzpKRobW0a75Hmq5wW_kVI-9eOk0YzTD4pywY0aOhVBJ1kO9-arg8lN"/>
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 text-base mb-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[20px] fill-current">star</span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-text-main dark:text-white">500+ Happy Smiles</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full w-full lg:h-auto"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] bg-gray-100 shadow-2xl dark:bg-white/5 sm:aspect-[4/3] lg:aspect-square group">
                <img alt="Smiling patient" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmi8v_O0TSE8bGFnZBPNq-8e1HVYUPabfZj0iSRulezPGfCOa84IiJUpEHGfji2J_mcliSqJV33duv8sD_9Hr22RBYrUevAe7IbhAlcwNVRJ3okyhQshwjkpVtDs_F-vmKn1VTmEpMUCc67acO4_EsqYITuVSpi-Dc5TavmbekEE6Uni8--uu9CWsicp5N_B5U28TlbTmg4T2Zjniq7ITSBST4bN4GdoAf48CcvIe0NM-Da1eW3yKWwmRL1lJ_QUHjnfw3dnoYCaI8"/>
                
                {/* Floating Badge */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/95 p-6 backdrop-blur-xl shadow-xl dark:bg-gray-900/95 sm:right-auto sm:max-w-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <span className="material-symbols-outlined text-2xl">verified</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-text-main dark:text-white mb-1">Pain-Free Dentistry</p>
                      <p className="text-sm text-text-muted dark:text-gray-400">Our advanced techniques ensure you stay comfortable during every procedure.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-gray-100 bg-white/50 backdrop-blur-sm py-12 dark:border-white/5 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-8 text-sm font-bold uppercase tracking-widest text-text-muted/60 dark:text-gray-500">Trusted by leading insurance providers</p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
            {['DeltaDental', 'Cigna', 'Aetna', 'MetLife', 'UnitedHealth'].map((brand) => (
                <div key={brand} className="flex items-center gap-2 text-2xl font-bold text-gray-400 dark:text-gray-500">
                    <span className="material-symbols-outlined text-3xl">verified_user</span> {brand}
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (NEW) */}
      <section className="py-24 lg:py-32 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl font-bold text-deep-blue dark:text-blue-400 sm:text-4xl mb-4">Why Skyline Dental?</h2>
              <p className="text-xl text-text-muted dark:text-gray-400">We do things differently. Here's what you can expect when you walk through our doors.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-10">
              {[
                  { icon: 'favorite', title: 'Patient-First Approach', desc: 'We listen first. Your goals and comfort are the driving force behind every treatment plan.' },
                  { icon: 'science', title: 'Modern Technology', desc: 'From digital scanning to laser dentistry, we use the best tools for better results.' },
                  { icon: 'calendar_clock', title: 'Flexible Scheduling', desc: 'Early mornings, evenings, and weekends available to fit your busy lifestyle.' }
              ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-white/5 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 dark:border-white/5"
                  >
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                          <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">{feature.title}</h3>
                      <p className="text-text-muted dark:text-gray-400 leading-relaxed">{feature.desc}</p>
                  </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-gray-50 dark:bg-white/5" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Our Expertise</span>
                <h2 className="text-4xl font-bold text-text-main dark:text-white mb-4">Comprehensive Care Under One Roof</h2>
                <p className="text-lg text-text-muted dark:text-gray-400">Everything you need for a healthy smile, from routine cleanings to complex restorative work.</p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View All Services <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-sm dark:bg-gray-900 border border-gray-100 dark:border-white/10"
            >
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-deep-blue transition-colors dark:bg-blue-900/20 dark:text-blue-300">
                <span className="material-symbols-outlined text-4xl">dentistry</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-text-main dark:text-white">General Dentistry</h3>
              <p className="mb-8 text-text-muted dark:text-gray-400 leading-relaxed">Routine exams, cleanings, and preventative care to keep your smile healthy and strong for years to come.</p>
              <Link className="inline-flex items-center gap-2 font-bold text-deep-blue dark:text-blue-300 transition-all group-hover:gap-3" to="/services">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>

             {/* Service 2 */}
             <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-sm dark:bg-gray-900 border border-gray-100 dark:border-white/10"
            >
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-primary transition-colors dark:bg-orange-900/20 dark:text-orange-300">
                <span className="material-symbols-outlined text-4xl">auto_awesome</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-text-main dark:text-white">Cosmetic Dentistry</h3>
              <p className="mb-8 text-text-muted dark:text-gray-400 leading-relaxed">Transform your smile with whitening, veneers, and bonding designed to boost your confidence.</p>
              <Link className="inline-flex items-center gap-2 font-bold text-primary transition-all group-hover:gap-3" to="/services">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>

             {/* Service 3 */}
             <motion.div 
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white p-10 shadow-sm dark:bg-gray-900 border border-gray-100 dark:border-white/10"
            >
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 transition-colors dark:bg-teal-900/20 dark:text-teal-300">
                <span className="material-symbols-outlined text-4xl">medical_services</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-text-main dark:text-white">Surgical Dentistry</h3>
              <p className="mb-8 text-text-muted dark:text-gray-400 leading-relaxed">Expert care for implants, extractions, and restorative procedures in a safe, sterile environment.</p>
              <Link className="inline-flex items-center gap-2 font-bold text-teal-600 dark:text-teal-300 transition-all group-hover:gap-3" to="/services">
                Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-24 lg:py-32" id="about">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full lg:w-1/2"
            >
              <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[3rem] bg-gray-200 dark:bg-gray-800 shadow-2xl">
                <img alt="Dr. Sarah Mitchell portrait" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlVOuR0JpXKaHZcZWmnbqKIkPEBKCvPNYMT191-pdq8FVaB8TKH-9RgYurdT9tU_kbNaAu5d1SamFTmSABIj-TxU1vvyLwCNvh9CsaoMZU9-HroawTIlis4s39vVQ8xfFOWZMnQjXxPbYBWU2-dF4Hrn1H15_KNEa7R_rwV66hfzgXLPj8jOHJQfE8fmCOmhTJjP57XlwoRi53LoiEzaob7yeeWQ1uq3KNAV2hqyABOJiTaYskMUoASJe6uBWCL1jRP1DGCHtUuuaR"/>
              </div>
              <div className="absolute -bottom-10 -right-4 z-10 max-w-xs rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-900 md:right-12 border border-gray-100 dark:border-white/10">
                <span className="material-symbols-outlined mb-4 text-5xl text-primary/40">format_quote</span>
                <p className="text-base italic text-text-muted dark:text-gray-300 leading-relaxed">"I believe everyone deserves a smile they are proud to show the world. We treat people, not just teeth."</p>
              </div>
            </motion.div>
            
            <div className="w-full lg:w-1/2 lg:pl-12">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Meet the Doctor</h4>
              <h2 className="mb-8 text-4xl font-black text-text-main dark:text-white sm:text-5xl">Dr. Sarah Mitchell, DDS</h2>
              <div className="mb-8 space-y-6 text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                <p>With over 15 years of clinical experience, Dr. Mitchell combines artistic vision with medical precision. She is passionate about creating a stress-free environment where patients feel heard and cared for.</p>
                <p>Dr. Mitchell is a member of the American Dental Association and constantly updates her skills with the latest advancements in dental technology.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8 dark:border-white/10">
                <div>
                  <h5 className="text-4xl font-bold text-deep-blue dark:text-blue-400">15+</h5>
                  <p className="text-sm font-bold uppercase tracking-wide text-text-muted dark:text-gray-400 mt-1">Years Experience</p>
                </div>
                <div>
                  <h5 className="text-4xl font-bold text-deep-blue dark:text-blue-400">2k+</h5>
                  <p className="text-sm font-bold uppercase tracking-wide text-text-muted dark:text-gray-400 mt-1">Successful Implants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (NEW) */}
      <section className="py-24 lg:py-32 bg-background-light dark:bg-background-dark">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-text-main dark:text-white sm:text-4xl mb-4">Frequently Asked Questions</h2>
                <p className="text-text-muted dark:text-gray-400">Common questions about our services and policies.</p>
            </div>
            
            <div className="space-y-2">
                <FAQItem 
                    question="Do you accept dental insurance?" 
                    answer="Yes! We accept most major PPO insurance plans including Delta Dental, Cigna, MetLife, and Aetna. Our team will handle the paperwork to maximize your benefits." 
                />
                 <FAQItem 
                    question="What if I have a dental emergency?" 
                    answer="We set aside time daily for emergency appointments. If you are in pain or have had an accident, please call us immediately at (555) 123-4567." 
                />
                 <FAQItem 
                    question="Do you offer payment plans?" 
                    answer="Absolutely. We believe financial constraints shouldn't prevent you from getting quality care. We offer flexible financing options through CareCredit and in-house plans." 
                />
                 <FAQItem 
                    question="How often should I visit the dentist?" 
                    answer="The American Dental Association recommends visiting your dentist every six months for routine checkups and cleanings to maintain optimal oral health." 
                />
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-deep-blue to-[#005f91] px-6 py-20 text-center shadow-2xl sm:px-12 lg:py-32">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
            <div className="absolute inset-0 z-0">
              <img alt="Dental office background" className="h-full w-full object-cover opacity-20 mix-blend-overlay blur-[2px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBIdezGcL8w_1bmky8bHkb9yXiu8mmiFF8K7EXLJ2qhcU5-0UWGHgbposw48wEH7lIFGsAg9ki8BYPNYL2OGe7ArJ1anbWs-EYYPAoNCebsWh9Quoa_qCt0sbyLBuERbhOd6cDOjZvlLO0Cwa-dvNxyaPvIckTyVqy-tvLvgeUnAKR_6thyZNWAxJ7vMIpz9xzydPY5wdL7H78YI0roi28HlhDxqhWu-HHSbuzoNELSeSPDoRrg4WQ8DDDDn1idW-OU9o88Pd4gyMy"/>
            </div>
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="mb-8 text-4xl font-black text-white sm:text-5xl lg:text-6xl">Ready for your best smile?</h2>
              <p className="mb-12 text-xl text-blue-100 max-w-2xl mx-auto">Schedule your visit today and experience the difference of patient-centered care. No hidden fees, just great dentistry.</p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Link className="flex min-w-[200px] items-center justify-center rounded-full bg-primary h-16 px-10 text-xl font-bold text-white shadow-xl shadow-gray-900/20 transition-all hover:bg-primary-hover hover:scale-105" to="/booking">
                  Book Appointment
                </Link>
                <button className="flex min-w-[200px] items-center justify-center rounded-full bg-white/10 h-16 px-10 text-xl font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
