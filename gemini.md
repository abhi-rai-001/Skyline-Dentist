# Project Constitution (gemini.md)

## 1. Data Schemas (Content Structure)

```json
{
  "site_structure": {
    "meta": {
      "title": "Skyline Dental - Elevating Your Smile",
      "description": "Premier dental care offering cosmetic, general, and orthodontic services."
    },
    "branding": {
      "theme": "Modern, Clean, Trustworthy",
      "colors": {
        "primary": "To be decided (likely calming blues/teals)",
        "accent": "To be decided (warmth for conversion)"
      },
      "typography": "Clean sans-serif (e.g., Inter, Montserrat)"
    },
    "content_sections": [
      {
        "id": "hero",
        "elements": ["Headline", "Subheadline", "Primary CTA (Book Appointment)", "Hero Image/Video"]
      },
      {
        "id": "trust_signals",
        "elements": ["Review Ratings", "Associations Badges", "Patient Count"]
      },
      {
        "id": "services",
        "items": ["General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Implants"]
      },
      {
        "id": "experience",
        "elements": ["Clinic Tour (Images)", "Technology Showcase", "Comfort Amenities"]
      },
      {
        "id": "testimonials",
        "elements": ["Patient Quotes", "Before/After Slider"]
      },
      {
        "id": "team",
        "elements": ["Lead Dentist Bio", "Staff Photos"]
      },
      {
        "id": "faq",
        "elements": ["Common Questions Accordion"]
      },
      {
        "id": "footer",
        "elements": ["Location Map", "Contact Info", "Hours", "Social Links"]
      }
    ]
  }
}
```

## 2. Behavioral Rules
- **Role**: Senior Web Developer & UI/UX Designer.
- **Tone**: Professional, authoritative, yet warm and inviting.
- **Design Philosophy**: User-centric, conversion-focused, accessible.

## 3. Architectural Invariants
- **3-Layer Architecture**: Architecture (SOPs) -> Navigation -> Tools (Scripts).
- **Data-First**: Schema must be defined before code.
- **Deterministic Logic**: No guessing; use defined SOPs.
