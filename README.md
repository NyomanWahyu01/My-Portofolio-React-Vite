# I Nyoman Wahyu — Portfolio

Personal portfolio website untuk menampilkan karya, pengalaman, layanan, dan keahlian dalam membangun produk digital yang cepat, responsif, dan mudah digunakan.

Built with React, Vite, Tailwind CSS, Motion, dan Lenis.

## Preview

![Portfolio preview](public/assets/profile-about.webp)

## Highlights

- Responsive layout untuk mobile, tablet, dan desktop.
- Light mode dan dark mode dengan design token yang konsisten.
- English dan Bahasa Indonesia.
- Smooth scrolling dengan Lenis.
- Scroll reveal dan micro-interactions dengan Motion.
- Portfolio project dengan filter, detail, demo, dan repository.
- Section layanan dengan proses kerja yang jelas.
- Experience carousel dengan navigasi keyboard-friendly.
- Education, thesis, certification, dan training links.
- Contact section dengan WhatsApp, email, GitHub, LinkedIn, dan Instagram.
- Accessibility support melalui focus state, semantic label, reduced motion, dan live region.

## Sections

| Section | Description |
| --- | --- |
| Hero | Intro singkat, role, CV, dan CTA project |
| About | Profile story, statistics, dan role cards |
| Projects | Project showcase, category filter, demo, dan GitHub |
| Services | Website, information system, UI/UX, dan work process |
| Experience | Work experience carousel, education, dan certification |
| Tools | Development dan design tools |
| Contact | Contact cards dan social links |

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | UI component architecture |
| Vite | Development server dan production build |
| Tailwind CSS | Utility-first styling |
| Motion | UI animation dan scroll reveal |
| Lenis | Smooth page scrolling |
| Remix Icon | Interface icons |

## Getting Started

### Requirements

- Node.js 18+
- npm 9+

### Installation

```bash
git clone <repository-url>
cd portofolio
npm install
```

### Development

```bash
npm run dev
```

Open URL shown by Vite, usually:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
npm run preview
```

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Project Structure

```text
src/
├── App.jsx
├── main.jsx
├── data.js
├── index.css
├── theme.js
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Design.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   ├── Tools.jsx
│   └── WordReveal.jsx
└── i18n/
    ├── en.js
    ├── id.js
    └── LanguageProvider.jsx
```

## Design Direction

The interface combines neo-brutalist structure with a studio-style visual system:

- Strong borders and offset shadows.
- Bright accent colors for hierarchy and interaction.
- Folder-inspired cards for services and project content.
- Clear typography using Anton and Space Grotesk.
- Theme-aware color tokens instead of component-level hardcoded colors.
- Compact layouts that keep content readable across screen sizes.

## Customization

Update portfolio content in:

- `src/data.js` — projects, tools, design work, and service stacks.
- `src/i18n/id.js` — Bahasa Indonesia content.
- `src/i18n/en.js` — English content.
- `src/index.css` — color tokens, typography, theme, and shared styles.

Update profile assets in:

```text
public/assets/
```

## Accessibility

The interface includes:

- Semantic sections and navigation.
- Visible focus states.
- Accessible labels for icon buttons and carousel controls.
- Live announcement for experience carousel changes.
- `prefers-reduced-motion` support for Motion and smooth scrolling.
- External links opened with safe `noopener noreferrer` attributes where applicable.

## Quality Checks

Run before opening a pull request:

```bash
npm run lint
npm run build
git diff --check
```

## Author

**I Nyoman Wahyu**

- GitHub: [@NyomanWahyu01](https://github.com/NyomanWahyu01)
- LinkedIn: [I Nyoman Wahyu](https://www.linkedin.com/in/i-nyoman-wahyu/)

Made with React, thoughtful interaction, and a focus on practical digital products.
