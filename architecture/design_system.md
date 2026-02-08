# Design System SOP

## 1. Visual Identity
**Theme**: "Clinical Excellence & Compassionate Care"
Based on color psychology for medical trust and converting anxiety into comfort.

### Color Palette
- **Primary (Trust & Stability)**: `#0077b6` (Honest Blue)
    - *Usage*: Navbar, Primary Headings, Icons.
- **Secondary (Calm & Hygiene)**: `#caf0f8` (Soft Cyan)
    - *Usage*: Background highlights, secondary buttons.
- **Accent (Energy & Action)**: `#f3722c` (Vitality Orange)
    - *Usage*: "Book Now" Buttons, CTAs. *High contrast against blue/white.*
- **Neutral (Modernity)**: `#f8f9fa` (Clinical White) & `#212529` (Readable Dark Gray)
    - *Usage*: Backgrounds and Body Text.

## 2. Typography
- **Headings**: `Inter`, sans-serif (Weights: 600, 700). Clean, universal, easy to read.
- **Body**: `Lato`, sans-serif (Weights: 400, 700). Friendly and legible.

## 3. UI Components (React)
- **Buttons**:
    - Primary: Pill-shaped, `#f3722c`, White text, Drop Shadow.
    - Secondary: Outline `#0077b6`.
- **Cards**:
    - `VerifiedCard`: White bg, soft shadow (`0 4px 12px rgba(0,0,0,0.05)`), rounded-xl (`1rem`).
- **Feedback**:
    - Hover states: Scale up 1.02x, brightness 110%.
    - Loading: Skeleton loaders (gray pulse).

## 4. Accessibility
- All text must meet WCAG AA contrast ratio.
- Focus rings on all interactive elements.
