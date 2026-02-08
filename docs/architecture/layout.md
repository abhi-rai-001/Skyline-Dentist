# Detailed Layout Architecture

## Core Philosophy
**"The Trust Tunnel"**: Every scroll depth must build more trust and reduce friction to booking.
**Sticky Elements**: The "Book Now" CTA must never be more than a noticeable glance away.

---

## 1. Global Elements

### 1.1 Sticky Navbar (The Compass)
- **Position**: Fixed top, glassmorphism (`backdrop-filter: blur(12px)`, `bg-white/90`).
- **Left**: **Logo** (Tooth Icon + "Skyline Dental" in `Montserrat`).
- **Center (Desktop)**:
    - "Services" (Dropdown)
    - "Our Team"
    - "Patients" (Reviews/Before & After)
    - "FAQ"
- **Right**:
    - **Phone Number**: Click-to-call, subtle gray text.
    - **Primary CTA**: "Book Appointment" (Pill shape, Orange `#f3722c`, Shadow).

### 1.2 Footer (The Anchor)
- **Background**: Deep Blue (`#0077b6`). Text: White.
- **Columns**:
    1.  **Brand**: Logo + slogan "Elevating Your Smile".
    2.  **Quick Links**: Home, Services, Contact, Privacy.
    3.  **Contact**: Address (Link to Maps), Phone, Email.
    4.  **Hours**: Monday-Friday grid.
- **Bottom**: Copyright + "Designed by Skyrn Studio".

---

## 2. Page: Home (The Conversion Engine)

### 2.1 Hero Section (Above the Fold)
*Goal: Immediate relevance & Action.*
- **Layout**: Split Screen (Desktop) / Stacked (Mobile).
- **Left (Content)**:
    - **H1**: "Experience Dentistry That [Smiles Back/Feels Like Home]."
    - **Subtext**: "Gentle care, advanced technology, and a team that listens. Join 500+ happy patients in [City Name]."
    - **CTAs**:
        - Primary: "Schedule Visit" (Orange).
        - Secondary: "Virtual Tour" (Outline Blue + Play Icon).
    - **Trust Badge**: "Voted Best of 2024" or small "5-Star Google" rating widget.
- **Right (Visual)**: 
    - High-quality image of a diverse patient smiling naturally (NOT a stock model with perfect veneers, but genuine happiness).
    - *Motion*: Subtle "float" animation.

### 2.2 The "Trust Bar"
*Goal: Instant Credibility.*
- **Background**: Very light gray (`#f8f9fa`).
- **Content**: Row of grayscale logos (ADA, Local Chamber of Commerce, Insurance Partners) opacity 60%.

### 2.3 Services Preview (The Solution)
*Goal: Identify user need.*
- **Heading**: "Comprehensive Care for the Whole Family."
- **Grid**: 3 Cards.
    1.  **General**: Checkups, Cleanings (Icon: Toothbrush).
    2.  **Cosmetic**: Whitening, Veneers (Icon: Sparkle).
    3.  **Surgical**: Implants, Root Canals (Icon: Implant).
- **Interaction**: Hovering a card lifts it (`-y-2`) and turns the icon Orange.

### 2.4 "Why Choose Us" (The Differentiator)
*Goal: Overcome objections (Fear, Cost, Time).*
- **Layout**: Alternating Text + Image features.
- **Feature 1**: "Anxiety-Free Dentistry" (Mention sedation/comfort menu).
- **Feature 2**: "Transparent Pricing" (No hidden fees, insurance friendly).
- **Feature 3**: "Tech-Forward" (Same-day crowns, digital x-rays).

### 2.5 Social Proof (The Validation)
*Goal: Emotional connection.*
- **Component**: Infinite scroll carousel of Google Reviews.
- **Highlight**: One "Hero Story" testimonial with a patient photo and a pull-quote.
- **Before/After Slider**: Interactive slider revealing a smile transformation.

### 2.6 The Team (The Human Element)
*Goal: Familiarity.*
- **Content**: Doctor's Bio + Photo.
- **Tone**: Warm, approachable (not just a white coat against a blue wall).
- **Details**: "Dr. [Name] loves hiking and coffee." (Humanizes the dentist).

### 2.7 FAQ Accordion (The Objection Handler)
*Goal: Remove final friction.*
- Q: "Do you take my insurance?"
- Q: "Is the procedure painful?"
- Q: "How do I book?"

### 2.8 Final CTA (The Closer)
*Goal: Catch the scroller.*
- **Background**: Orange Gradient.
- **Text**: "Ready for your best smile?"
- **Button**: "Book Now - Available Slots Today".

---

## 3. Page: Booking (The Funnel)
*Goal: Capture the lead.*
- **Layout**: Simple, distract-free (No header links).
- **Steps**:
    1.  **Reason**: "Cleaning", "Pain", "Consult".
    2.  **Time**: Calendar picker.
    3.  **Details**: Name, Phone, Email.
- **Confirmation**: "Success! We'll text you shortly."
