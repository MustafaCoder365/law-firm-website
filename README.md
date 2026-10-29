<div align="center">

# ⚖️ Hammurabi Law

**A bilingual (Arabic / English) website concept for a law firm in Baghdad, built with Next.js, TypeScript, and Tailwind CSS.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-23282E?style=for-the-badge&logo=githubpages&logoColor=white)](https://mustafacoder365.github.io/law-firm-website/)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=threedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)

</div>

> **Concept project.** Hammurabi Law is a fictional firm. Names, contact details, and dates are sample content, and the site does not give legal advice.

---

## ✨ Highlights

- 🏛️ **An identity rooted in Iraq** — named after the Code of Hammurabi, one of the world's oldest written legal codes: a black stone stele with a Baghdad photo as its relief and the firm's motto "carved" over cuneiform wedges, plus a bronze tablet of written promises in the hero
- ⚖️ **3D scale of justice** — a bronze scale built in Three.js (React Three Fiber) from primitives, no model files: it rises in, follows the pointer, and turns and settles into balance as you scroll. Falls back to a flat illustration without WebGL, respects reduced motion, and stops rendering off screen
- 📜 **Pinned scroll story** — "We weigh every case": the section stays on screen while you scroll, each step lights up in turn, and the 3D scale tips one way, then the other, until it balances on the last step
- 🎬 **Opening animation** — three cuneiform wedges pressed in bronze, then the curtain lifts. Pure CSS, plays once per visit, skipped with reduced motion
- 🎗️ **Tilted marquee ribbons** — practice areas and promises scrolling in opposite directions, RTL-aware
- 🧮 **Fee estimator** — pick the matter type, complexity, and urgency to see an estimated range in IQD and how it's billed
- 📄 **A page for every practice area** — 12 static pages (6 areas × 2 languages) with overview, typical matters, area FAQs, and the responsible partner
- 🧭 **Classic masthead and interactive index** — centered firm name between split navigation, and practice areas as keyboard-accessible tabs
- 🌍 **Full Arabic and English** — separate routes (`/ar`, `/en`), right-to-left layout for Arabic, and automatic language pick on first visit
- ✍️ **Classic typography** — Amiri for headings (Arabic naskh and Latin serif in one family) and IBM Plex Sans Arabic for body text
- 📷 **Real photography** — Baghdad on the Tigris, a client meeting, and partner portraits, served responsively with `srcset`
- 📝 **Consultation form** — practice-area picker, call or WhatsApp preference, Iraqi phone validation, accessible errors, and a confirmation state
- ♿ **Accessible** — semantic landmarks, skip link, keyboard focus styles, and reduced-motion support
- ⚡ **Static export** — no server needed, deployed to GitHub Pages with GitHub Actions

## 🧭 Page sections

| Section | What it does |
|---|---|
| **Intro** | Bronze wedges pressed in, then the curtain lifts (first visit only) |
| **Hero** | Dark masthead with the 3D scale of justice, a wide photo, and a bronze tablet with three written promises |
| **Ribbons** | Two tilted marquees crossing the page |
| **Practice areas** | Tabbed index: six areas, each with typical matters and a link to its own page |
| **We weigh every case** | Pinned scroll scene: four steps, with the 3D scale tipping and balancing |
| **Partners** | Wide rows with portrait, bio, focus, bar membership, and languages |
| **Why Hammurabi** | The stele with the firm's motto, and the story behind the name |
| **Fee estimate** | Interactive calculator with a live estimated range |
| **Office** | Baghdad on the Tigris, with address, hours, and a map link set on the photo |
| **FAQ** | All answers visible in two columns |
| **Consultation** | Dark section with a validated request form, phone, WhatsApp, and email |
| **Practice area pages** | `/[lang]/practice/[id]`: overview, matters, FAQs, partner, and other areas |

## 🛠️ Tech Stack

| Area | Tools |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, static export) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) with design tokens |
| **Typography** | [Amiri](https://fonts.google.com/specimen/Amiri) and [IBM Plex Sans Arabic](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic) |
| **3D** | [Three.js](https://threejs.org/), [React Three Fiber](https://r3f.docs.pmnd.rs/), [drei](https://drei.docs.pmnd.rs/) |
| **Icons** | [Lucide](https://lucide.dev/) |
| **Deployment** | GitHub Pages via GitHub Actions |

## 📂 Project Structure

```
app/
├── (root)/        # Language picker for "/"
└── [lang]/        # Arabic and English pages (layout sets lang + dir)
    └── practice/[id]/  # A page for each practice area
components/        # Masthead, intro, ribbons, 3D scale + scroll scene, stele, practice tabs, fee estimator, forms
lib/content.ts     # All copy, in Arabic and English
lib/photos.ts      # Photo IDs and responsive image helpers
public/            # Favicon
```

## 🚀 Getting Started

```bash
git clone https://github.com/MustafaCoder365/law-firm-website.git
cd law-firm-website
npm install
npm run dev
```

Open http://localhost:3000/en or http://localhost:3000/ar.

Pushing to `main` deploys automatically through `.github/workflows/deploy.yml`.

## 📷 Photo credits

Photos from [Unsplash](https://unsplash.com), free under the [Unsplash License](https://unsplash.com/license):
Vitaly Gariev, Annika Palmari, yaz00ne alani, and حسن (Hassan).
The people pictured are not affiliated with this fictional firm.

## 👤 Author

**Mustafa Shakir** — Frontend Software Developer

[![GitHub](https://img.shields.io/badge/GitHub-MustafaCoder365-181717?style=flat-square&logo=github)](https://github.com/MustafaCoder365)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mustafa%20Shakir-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/mustafa-shakir-840374330)
[![Email](https://img.shields.io/badge/Email-Contact-0F172A?style=flat-square&logo=gmail&logoColor=white)](mailto:mustafa1997670@gmail.com)
