import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const SERVICES = [
  { id: 'cleaning', title: 'Cleaning & Checkup', icon: 'dentistry', duration: '45 mins' },
  { id: 'whitening', title: 'Teeth Whitening', icon: 'auto_fix_high', duration: '60 mins' },
  { id: 'consultation', title: 'General Consultation', icon: 'medical_services', duration: '30 mins' },
  { id: 'emergency', title: 'Emergency', icon: 'emergency', duration: 'ASAP' },
];

const TIME_SLOTS = {
  morning: ['09:00 AM', '09:30 AM', '10:00 AM', '11:15 AM'],
  afternoon: ['01:00 PM', '02:30 PM', '03:45 PM', '04:15 PM']
};

export const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: null,
    date: new Date(),
    time: null,
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  // helpers
  const updateData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.service) {
        newErrors.service = 'Please select a service to continue.';
        isValid = false;
      }
    }
    
    if (currentStep === 2) {
      if (!formData.time) {
        newErrors.time = 'Please select a time slot.';
        isValid = false;
      }
    }

    if (currentStep === 3) {
      if (!formData.name.trim()) newErrors.name = 'Name is required.';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required.';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
      if (Object.keys(newErrors).length > 0) isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  // Format Date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  // Step 4: Success View
  if (step === 4) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-4">
        <div className="bg-white dark:bg-white/5 rounded-[2rem] shadow-2xl p-8 md:p-12 max-w-lg w-full text-center border border-gray-100 dark:border-white/10">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-5xl">check_circle</span>
          </div>
          <h2 className="text-3xl font-black text-text-main dark:text-white mb-2">Booking Confirmed!</h2>
          <p className="text-text-muted dark:text-gray-400 mb-8">
            Thank you, {formData.name}. Your appointment for <strong>{formData.service?.title}</strong> on <strong>{formatDate(formData.date)} at {formData.time}</strong> has been scheduled.
          </p>
          <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-4 mb-8 text-sm text-text-muted dark:text-gray-400">
            A confirmation email has been sent to {formData.email}.
          </div>
          <Link to="/" className="inline-flex items-center justify-center w-full rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-hover hover:-translate-y-1">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-text-main dark:text-gray-100 flex flex-col">
      {/* Minimal Header */}
      <header className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 px-6 py-4 lg:px-40 bg-white dark:bg-background-dark sticky top-0 z-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-3xl">dentistry</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-text-main dark:text-white">Skyline Dental</h2>
        </Link>
        <Link to="/" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined">close</span>
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
        {/* Progress Stepper */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 dark:bg-white/10 -z-10 rounded-full"></div>
            <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            {['Service', 'Date & Time', 'Details'].map((label, i) => {
                const stepNum = i + 1;
                const isActive = step === stepNum;
                const isCompleted = step > stepNum;
                
                return (
                    <div key={i} className="flex flex-col items-center gap-2 cursor-pointer bg-background-light dark:bg-background-dark px-2 z-10" onClick={() => step > stepNum && setStep(stepNum)}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ring-4 ring-background-light dark:ring-background-dark
                            ${isActive ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30' : 
                              isCompleted ? 'bg-primary text-white' : 
                              'bg-gray-200 text-gray-500 dark:bg-white/10 dark:text-gray-400'}`}>
                            {isCompleted ? <span className="material-symbols-outlined text-sm">check</span> : stepNum}
                        </div>
                        <span className={`text-xs font-bold hidden sm:block ${isActive || isCompleted ? 'text-primary' : 'text-text-muted'}`}>{label}</span>
                    </div>
                );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: The Form Funnel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Step 1: Service Selection */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-text-main dark:text-white mb-2">Select a Service</h2>
                            <p className="text-text-muted dark:text-gray-400 mb-8">What type of appointment would you like to book?</p>
                            
                            {errors.service && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined">error</span> {errors.service}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {SERVICES.map((srv) => (
                                    <button
                                        key={srv.id}
                                        onClick={() => updateData('service', srv)}
                                        className={`flex items-start gap-4 p-6 rounded-2xl border-2 text-left transition-all duration-200
                                            ${formData.service?.id === srv.id 
                                                ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' 
                                                : 'border-white dark:border-white/5 bg-white dark:bg-white/5 hover:border-primary/30 hover:shadow-lg'}`}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors
                                            ${formData.service?.id === srv.id ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-white/10 text-text-muted dark:text-gray-400'}`}>
                                            <span className="material-symbols-outlined">{srv.icon}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-text-main dark:text-white mb-1">{srv.title}</h3>
                                            <p className="text-sm text-text-muted dark:text-gray-400">{srv.duration}</p>
                                        </div>
                                        <div className={`ml-auto w-6 h-6 rounded-full border-2 flex items-center justify-center
                                            ${formData.service?.id === srv.id ? 'border-primary bg-primary' : 'border-gray-200 dark:border-white/20'}`}>
                                            {formData.service?.id === srv.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Date & Time */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-text-main dark:text-white mb-2">Select Date & Time</h2>
                            <p className="text-text-muted dark:text-gray-400 mb-8">Choose a slot that works for you.</p>

                            {errors.time && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold flex items-center gap-2 mb-4">
                                    <span className="material-symbols-outlined">error</span> {errors.time}
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-8">
                                {/* Simple Custom Calendar UI */}
                                <div className="flex-1 bg-white dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="font-bold text-lg dark:text-white">October 2023</h4>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center"><span className="material-symbols-outlined">chevron_left</span></button>
                                            <button className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 flex items-center justify-center"><span className="material-symbols-outlined">chevron_right</span></button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                        {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => <div key={d} className="text-text-muted font-bold text-xs uppercase mb-2">{d}</div>)}
                                        {/* Offset */}
                                        <div></div><div></div>
                                        {[...Array(30)].map((_, i) => {
                                            const day = i + 1;
                                            // Mock active states
                                            const isSelected = formData.date.getDate() === day;
                                            return (
                                                <button 
                                                    key={i}
                                                    onClick={() => {
                                                        const newDate = new Date();
                                                        newDate.setDate(day);
                                                        updateData('date', newDate);
                                                    }}
                                                    className={`aspect-square rounded-full flex items-center justify-center font-medium transition-all
                                                        ${isSelected ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'hover:bg-gray-100 dark:hover:bg-white/10 text-text-main dark:text-white'}`}
                                                >
                                                    {day}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Time Slots */}
                                <div className="w-full md:w-64 space-y-4">
                                     <div>
                                        <h5 className="text-xs font-bold uppercase text-text-muted mb-3 tracking-wider">Morning</h5>
                                        <div className="grid grid-cols-1 gap-2">
                                            {TIME_SLOTS.morning.map(time => (
                                                <button
                                                    key={time}
                                                    onClick={() => updateData('time', time)}
                                                    className={`py-2 px-4 rounded-lg text-sm font-bold border transition-all text-center
                                                        ${formData.time === time 
                                                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                                                            : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-text-main dark:text-white hover:border-primary'}`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                     </div>
                                     <div>
                                        <h5 className="text-xs font-bold uppercase text-text-muted mb-3 tracking-wider">Afternoon</h5>
                                        <div className="grid grid-cols-1 gap-2">
                                            {TIME_SLOTS.afternoon.map(time => (
                                                <button
                                                    key={time}
                                                    onClick={() => updateData('time', time)}
                                                    className={`py-2 px-4 rounded-lg text-sm font-bold border transition-all text-center
                                                        ${formData.time === time 
                                                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                                                            : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-text-main dark:text-white hover:border-primary'}`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Details */}
                    {step === 3 && (
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-text-main dark:text-white mb-2">Your Details</h2>
                            <p className="text-text-muted dark:text-gray-400 mb-8">We need a bit of info to confirm your appointment.</p>
                            
                            <div className="grid gap-6 bg-white dark:bg-white/5 p-8 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm">
                                <div>
                                    <label className="block text-sm font-bold text-text-main dark:text-white mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        value={formData.name}
                                        onChange={(e) => updateData('name', e.target.value)}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold dark:text-white
                                            ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-white/10'}`}
                                        placeholder="Jane Doe"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 font-bold">{errors.name}</p>}
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-text-main dark:text-white mb-2">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            value={formData.phone}
                                            onChange={(e) => updateData('phone', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold dark:text-white
                                                ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-white/10'}`}
                                            placeholder="(555) 123-4567"
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-text-main dark:text-white mb-2">Email Address</label>
                                        <input 
                                            type="email" 
                                            value={formData.email}
                                            onChange={(e) => updateData('email', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold dark:text-white
                                                ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-white/10'}`}
                                            placeholder="jane@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-text-main dark:text-white mb-2">Notes (Optional)</label>
                                    <textarea 
                                        value={formData.notes}
                                        onChange={(e) => updateData('notes', e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium dark:text-white h-32 resize-none"
                                        placeholder="Any specific concerns or questions?"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Actions */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100 dark:border-white/10">
                {step > 1 ? (
                    <button 
                        onClick={prevStep}
                        className="px-6 py-3 rounded-full font-bold text-text-muted hover:text-text-main dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">arrow_back</span> Back
                    </button>
                ) : (
                    <div></div>
                )}
                
                <button 
                    onClick={nextStep}
                    className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 flex items-center gap-2"
                >
                    {step === 3 ? 'Confirm Booking' : 'Continue'} 
                    <span className="material-symbols-outlined">{step === 3 ? 'check' : 'arrow_forward'}</span>
                </button>
            </div>
          </div>

          {/* Right Column: Summary Sticky Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-white dark:bg-white/5 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-white/5 sticky top-32">
              <h3 className="text-lg font-black text-text-main dark:text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                Booking Summary
              </h3>
              
              <div className="space-y-6">
                <div className={`flex gap-4 items-start transition-opacity ${step >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">dentistry</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Service</p>
                    <p className="text-text-main dark:text-white font-bold text-lg leading-tight">{formData.service?.title || 'Select a service'}</p>
                    {formData.service && <p className="text-sm text-text-muted dark:text-gray-400 mt-1">{formData.service.duration}</p>}
                  </div>
                </div>
                
                <div className="h-px bg-gray-100 dark:bg-white/10 w-full"></div>
                
                <div className={`flex gap-4 items-start transition-opacity ${step >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">calendar_today</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Date & Time</p>
                    <p className="text-text-main dark:text-white font-bold text-lg leading-tight">{formatDate(formData.date)}</p>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-1">{formData.time || 'Select a time'}</p>
                  </div>
                </div>
                
                <div className="h-px bg-gray-100 dark:bg-white/10 w-full"></div>
                
                <div className={`flex gap-4 items-start transition-opacity ${step >= 3 ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-gray-400">person</span>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-bold uppercase tracking-wider mb-1">Patient</p>
                    <p className="text-text-main dark:text-white font-bold text-lg leading-tight">{formData.name || 'Enter details'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
