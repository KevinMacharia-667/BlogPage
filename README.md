# Modern Next.js Blog with MDX

A beautiful, modern blog built with Next.js 14+, featuring smooth animations, dark mode, and MDX blog posts.

## ✨ Features

- **Next.js 14+** with App Router
- **Vanilla CSS** with premium design aesthetics
- **Framer Motion** for smooth page transitions and animations
- **MDX** for rich blog post content
- **Dark Mode** with smooth theme switching
- **Syntax Highlighting** for code blocks
- **SEO Optimized** with metadata for each post
- **Responsive Design** that works on all devices
- **Scroll-Based Animations** for engaging user experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone or navigate to the project directory**

```bash
cd "c:\Users\ADMIN\Desktop\blog page"
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to see your blog in action!

## 📁 Project Structure

```
blog page/
├── app/                      # Next.js App Router
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic blog post page
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Homepage
│   └── not-found.tsx         # 404 page
├── components/               # Reusable React components
│   ├── providers/
│   │   └── theme-provider.tsx
│   ├── footer.tsx
│   ├── mdx-components.tsx
│   ├── navbar.tsx
│   ├── page-transition.tsx
│   ├── post-card.tsx
│   └── scroll-reveal.tsx
├── content/
│   └── posts/                # MDX blog posts
│       ├── getting-started-nextjs.mdx
│       ├── framer-motion-animations.mdx
│       └── building-blog-with-mdx.mdx
├── lib/                      # Utility functions
│   ├── mdx.ts                # MDX parsing utilities
│   └── types.ts              # TypeScript types
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript configuration
```

## 📝 Creating Blog Posts

Create new MDX files in the `content/posts/` directory:

```mdx
---
title: "Your Post Title"
date: "2024-03-15"
excerpt: "A brief description of your post"
author: "Your Name"
tags: ["Tag1", "Tag2"]
---

# Your Post Title

Your content here...

## Code Examples

\```javascript
const example = "Hello, World!"
console.log(example)
\```
```

The blog will automatically detect and display new posts!

## 🎨 Customization

### Styling

Edit `app/globals.css` to customize colors, fonts, and design:

- Change color scheme in CSS variables (`:root` and `.dark`)
- Modify spacing, shadows, and animations
- Update typography and layout styles

### Components

All components are in the `components/` directory. Customize:

- `navbar.tsx` - Navigation and branding
- `footer.tsx` - Footer content and links
- `post-card.tsx` - Blog post card design
- `mdx-components.tsx` - MDX element styling

### Site Metadata

Update in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'Your Blog Name',
  description: 'Your blog description',
  keywords: ['your', 'keywords'],
}
```

## 📦 Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Test the production build locally:

```bash
npm start
```

## 📚 Tech Stack

- **Next.js 14+** - React framework
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **next-mdx-remote** - MDX processing
- **gray-matter** - Frontmatter parsing
- **rehype-highlight** - Syntax highlighting
- **next-themes** - Dark mode support
- **Vanilla CSS** - Custom styling

## 🎯 Performance

This blog is optimized for performance:

- ✅ Server-side rendering
- ✅ Static page generation
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Minimal JavaScript bundle

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to customize this blog for your own use. Add features, improve styling, or extend functionality!

---

Built with ❤️ using Next.js 14
