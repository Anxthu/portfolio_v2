# ANANTHU - UI/UX Designer Portfolio

A modern, performant portfolio website built with React, TypeScript, and Vite. Features smooth animations, custom cursor interactions, and a blog system integrated with Instagram content.

## 🚀 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **3D Graphics:** Three.js + React Three Fiber
- **State Management:** TanStack Query
- **Form Handling:** React Hook Form + Zod

## ✨ Features

- Smooth scroll with Lenis
- Custom cursor interactions
- Page transitions with Framer Motion
- Blog system with Instagram integration
- Responsive design
- Dark mode support (via next-themes)
- SEO optimized with meta tags
- Accessible UI components

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables (optional):
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:8080`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## 📝 Adding Blog Posts

See [BLOG_WORKFLOW.md](./BLOG_WORKFLOW.md) for detailed instructions on adding new blog posts from Instagram.

Quick steps:
1. Add your image to `/public/images/blog/`
2. Navigate to `/blog-editor` in your browser
3. Fill in the form and copy the generated code
4. Paste into `src/lib/blogData.ts`

## 🎨 Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── images/         # Image assets
│   └── Projects Mockups/ # Project images
├── src/
│   ├── components/     # React components
│   │   └── ui/        # shadcn/ui components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and data
│   ├── pages/         # Page components
│   └── test/          # Test files
├── .vscode/           # VS Code settings
└── dist/              # Build output
```

## 🌐 Deployment

1. Update the following in `index.html`:
   - Replace `YOUR_GA_ID` with your Google Analytics ID
   - Update `og:url` and `twitter:url` with your actual domain
   - Update `og:image` path if needed

2. Build the project:
```bash
npm run build
```

3. Deploy the `dist` folder to your hosting provider (Vercel, Netlify, etc.)

## 🔧 Configuration

### Vite Config
- Server runs on port 8080
- Path alias `@` points to `src/`
- HMR overlay disabled for cleaner development

### ESLint
- TypeScript ESLint configured
- React Hooks rules enabled
- Unused vars warnings disabled (can be re-enabled)

## 📄 License

Copyright © 2024 ANANTHU. All Rights Reserved.

This is a private portfolio project. Unauthorized copying, modification, distribution, or use of this code is strictly prohibited.

## 👤 Author

**ANANTHU**
- Portfolio: [Your Website]
- LinkedIn: [ananthapadmanabhan-nair](https://www.linkedin.com/in/ananthapadmanabhan-nair/)
- Dribbble: [uxananthu](https://dribbble.com/uxananthu)
- Instagram: [@ux.ananthu](https://www.instagram.com/ux.ananthu/)
- Twitter: [@ux_ananthu](https://x.com/ux_ananthu)

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts and design inspiration from various sources

---

Made with ❤️ by ANANTHU
