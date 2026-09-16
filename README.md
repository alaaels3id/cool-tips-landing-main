# Cool Tips - Official Learning & Landing Platform

<p align="center">
  <img src="src/assets/logo.png" alt="Cool Tips Logo" width="120" height="120" style="border-radius: 50%;" />
</p>

<p align="center">
  <strong>The official web platform for the Cool Tips (@coooltips) YouTube channel.</strong><br>
  Modern Laravel shortcuts, clean architecture patterns, PHP 8+ internals, and high-performance database optimization tutorials.
</p>

<p align="center">
  <a href="https://github.com/alaaels3id/cool-tips-landing-main/releases/tag/v1.0.0"><img src="https://img.shields.io/badge/Release-v1.0.0-7c3aed.svg" alt="Release v1.0.0" /></a>
  <img src="https://img.shields.io/badge/React-18.3-61dafb.svg?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178c6.svg?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg?logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-6.4-646cff.svg?logo=vite" alt="Vite" />
  <a href="https://www.youtube.com/@coooltips"><img src="https://img.shields.io/badge/YouTube-@coooltips-red.svg?logo=youtube" alt="YouTube" /></a>
</p>

---

## 🌟 Key Features

- **🌐 Full Bilingual Internationalization (i18n):**
  - Instant, smooth switching between **English (LTR)** and **Arabic (RTL)**.
  - Direction-aware typography using **Plus Jakarta Sans**, **Inter**, and **Cairo**.

- **🎥 Rich Video Tutorial Catalog:**
  - Categorized library covering **Laravel**, **PHP**, **MySQL**, **Architecture**, **Security**, and **Developer Tools**.
  - Interactive individual video pages with embedded responsive YouTube players, topic tags, and direct code links.

- **🔍 Global Command Palette (`⌘K` / `Ctrl+K`):**
  - Instant search across all tutorials, playlists, and tags with keyboard navigation.

- **🎨 Modern Design & Dark/Light Themes:**
  - Built with Tailwind CSS and shadcn/ui components.
  - High-contrast color tokens adhering to WCAG accessibility guidelines.
  - Custom SVG branding for **YouTube**, **X** (formerly Twitter), and **Facebook**.

- **📦 Developer Resources & Series:**
  - Curated GitHub repositories, cheat sheets, and categorized playlist collections.

- **🚀 SEO & Production Ready:**
  - Dynamic meta tags, OpenGraph previews, `robots.txt`, and automated `sitemap.xml`.

---

## 🛠️ Technology Stack

- **Core:** [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vitejs.dev/) with SWC React plugin
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives via [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Brand SVGs
- **i18n:** [react-i18next](https://react.i18next.com/) & [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languageDetector)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/alaaels3id/cool-tips-landing-main.git
   cd cool-tips-landing-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:8080](http://localhost:8080) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production bundle:**
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```text
cool-tips-landing/
├── public/
│   ├── favicon.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/             # Logos, brand assets, and graphics
│   ├── components/
│   │   ├── common/         # Custom Brand SVGs (YouTubeIcon, XIcon, FacebookIcon)
│   │   ├── layout/         # AppLayout, Header (bilingual nav), Footer
│   │   ├── playlist/       # Playlist cards and list components
│   │   ├── resource/       # Resource & cheat sheet cards
│   │   ├── search/         # GlobalSearchDialog (Command Palette)
│   │   ├── seo/            # Dynamic SEO and OpenGraph component
│   │   ├── ui/             # shadcn/ui primitives (Button, Badge, Dialog, etc.)
│   │   └── video/          # VideoCard, VideoPlayer
│   ├── data/               # Structured data (videos, playlists, categories, resources)
│   ├── locales/            # Translation files (en.json, ar.json)
│   ├── pages/              # Index, Videos, VideoDetails, Playlists, Resources, About, Contact, Privacy, Terms
│   ├── repositories/       # Abstraction layer for video, playlist, and resource queries
│   ├── types/              # TypeScript interfaces and data models
│   ├── App.tsx             # Root router and app providers
│   ├── i18n.ts             # i18next configuration and language detector
│   ├── index.css           # Design tokens, color system, and typography
│   └── main.tsx            # Application entry point
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🌐 Community & Social Links

Connect with Cool Tips across all platforms:

- **YouTube:** [https://www.youtube.com/@coooltips](https://www.youtube.com/@coooltips)
- **Facebook:** [https://www.facebook.com/coooltips](https://www.facebook.com/coooltips)
- **X (Twitter):** [https://x.com/coool_tips](https://x.com/coool_tips)
- **GitHub:** [https://github.com/coooltips](https://github.com/coooltips)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
