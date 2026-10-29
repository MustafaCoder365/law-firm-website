<div align="center">

# ⚖️ Hammurabi Law

**A bilingual (Arabic / English) website concept for a law firm in Baghdad, built with Next.js, TypeScript, and Tailwind CSS.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-23282E?style=for-the-badge&logo=githubpages&logoColor=white)](https://mustafacoder365.github.io/law-firm-website/)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)

</div>

> **Concept project.** Hammurabi Law is a fictional firm. Names, contact details, and dates are sample content, and the site does not give legal advice.

---

## ✨ Highlights

- 🏛️ **An identity rooted in Iraq** — named after the Code of Hammurabi, one of the world's oldest written legal codes. The hero is a black stone stele with a real photo as its relief and the firm's promises "carved" below, over a field of cuneiform wedges.
- 🌍 **Full Arabic and English** — separate routes (`/ar`, `/en`), right-to-left layout for Arabic, and automatic language pick on first visit
- ✍️ **Classic typography** — Amiri for headings (Arabic naskh and Latin serif in one family) and IBM Plex Sans Arabic for body text
- 📷 **Real photography** — Baghdad on the Tigris, a client meeting, and partner portraits, served responsively with `srcset`
- 📝 **Consultation form** — practice-area picker, call or WhatsApp preference, Iraqi phone validation, accessible errors, and a confirmation state
- ♿ **Accessible** — semantic landmarks, skip link, keyboard focus styles, and reduced-motion support
- ⚡ **Static export** — no server needed, deployed to GitHub Pages with GitHub Actions

## 🧭 Page sections

| Section | What it does |
|---|---|
| **Hero** | The firm's promise, consultation and call buttons, and the stele with three written commitments |
| **Practice areas** | Six areas, each with what it covers and who it's for |
| **Why Hammurabi** | The story behind the name, tied to the firm's way of working |
| **How we work** | Four steps from the first call to written updates |
| **Partners** | Three partners with portraits, focus areas, and bar membership |
| **Office** | Full-width Baghdad photo with address, hours, and a map link |
| **FAQ** | Fees, foreign clients, remote follow-up, and confidentiality |
| **Consultation** | Validated request form with phone, WhatsApp, and email |

## 🛠️ Tech Stack

| Area | Tools |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, static export) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) with design tokens |
| **Typography** | [Amiri](https://fonts.google.com/specimen/Amiri) and [IBM Plex Sans Arabic](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic) |
| **Icons** | [Lucide](https://lucide.dev/) |
| **Deployment** | GitHub Pages via GitHub Actions |

## 📂 Project Structure

```
app/
├── (root)/        # Language picker for "/"
└── [lang]/        # Arabic and English pages (layout sets lang + dir)
components/        # Header, stele, consultation form, logo
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
