# Giulian's Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing professional experience, projects, education, certifications, and technical skills.

**Live Demo:** [giulian.me](https://www.giulian.me)

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui, Base UI
- **Icons:** Lucide React, React Icons
- **3D Graphics:** Three.js, OGL
- **Animations:** Custom CSS animations, Intersection Observer API

## Features

- **Responsive Design** - Mobile-first approach with fluid typography
- **Dark/Light Mode** - Theme toggle with OS preference detection
- **Smooth Animations** - Fade-in effects, hover transitions, and marquee scrolling
- **Section Navigation** - Fixed sidebar with scroll spy functionality
- **Dynamic Content** - JSON-based content management for easy updates

### Sections

| Section | Description |
|---------|-------------|
| Hero | Animated introduction with location and experience |
| About | Personal bio, values, and interests |
| Tech Stack | Skills grid with proficiency indicators |
| Projects | Featured and standard project showcases |
| Education | Formal education and online courses |
| Certificates | Professional certifications with status badges |
| Contact | Email, LinkedIn, and GitHub links |

## Project Structure

```
next/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── layout.tsx        # Root layout with providers
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # shadcn UI components
│   ├── theme-provider.tsx
│   ├── animated-card.tsx
│   └── footer.tsx
├── data/                 # JSON content files
│   ├── about.json
│   ├── projects.json
│   ├── education.json
│   ├── certificates.json
│   └── tech-stack.json
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets (SVG icons)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/giulian/giulian-portfolio.git
cd giulian-portfolio/next

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Customization

### Content

Update the JSON files in the `data/` directory to customize:

- `about.json` - Bio, values, interests, social links
- `projects.json` - Portfolio projects with links
- `tech-stack.json` - Skills with proficiency levels (0-100)
- `education.json` - Education entries and courses
- `certificates.json` - Professional certifications

### Theming

The project uses OKLCH color space for theming. Modify CSS variables in `globals.css` to adjust colors.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

```bash
npm run build
```

Alternatively, deploy to any platform that supports Next.js.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with Next.js and deployed on Vercel
