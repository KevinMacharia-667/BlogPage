'use client'

import { ScrollReveal } from '@/components/scroll-reveal'
import Link from 'next/link'

export function AboutContent() {
    return (
        <div className="page-section">
            <ScrollReveal>
                <h1 className="page-title">About This Blog</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <p className="page-text">
                    Welcome to Kevin&apos;s Blog – a personal space where I share my thoughts, experiences, and insights on web development,
                    modern technologies, music, typography, and creative coding solutions.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <h2 className="mdx-h2">Built with Modern Technologies</h2>
                <p className="page-text">
                    This blog is built with cutting-edge technologies including Next.js 14, Framer Motion for smooth
                    animations, and MDX for rich content creation. The design emphasizes a clean, modern aesthetic with
                    smooth transitions and an engaging user experience.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
                <h2 className="mdx-h2">What You&apos;ll Find Here</h2>
                <ul className="mdx-ul">
                    <li className="mdx-li">
                        <Link href="/blog" className="mdx-link">Blog Posts</Link> - In-depth articles on web development, JavaScript frameworks, and best practices
                    </li>
                    <li className="mdx-li">
                        <Link href="/fonts" className="mdx-link">Font Showcase</Link> - Explore 9 unique typefaces including Biondeggiare, Affigere, Squatina, and more
                    </li>
                    <li className="mdx-li">
                        <Link href="/music" className="mdx-link">Music Section</Link> - My musical journey, favorite genres, and recommendations
                    </li>
                    <li className="mdx-li">Creative coding experiments and innovative projects</li>
                </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
                <h2 className="mdx-h2">Key Features</h2>
                <ul className="mdx-ul">
                    <li className="mdx-li">🌓 Dark/Light mode toggle for comfortable reading</li>
                    <li className="mdx-li">✨ Smooth scroll animations powered by Framer Motion</li>
                    <li className="mdx-li">🎨 Custom typography showcase with premium fonts</li>
                    <li className="mdx-li">📱 Fully responsive design for all devices</li>
                    <li className="mdx-li">🚀 Optimized performance with Next.js 14</li>
                    <li className="mdx-li">📝 MDX support for rich blog content</li>
                </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
                <h2 className="mdx-h2">Connect With Me</h2>
                <p className="page-text">
                    Feel free to explore the blog posts, check out the font showcase, discover my music tastes,
                    and reach out if you have any questions or suggestions! You can find my contact information
                    in the footer.
                </p>
            </ScrollReveal>
        </div>
    )
}
