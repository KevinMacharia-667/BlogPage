'use client'

import { ScrollReveal } from '@/components/scroll-reveal'

export function AboutContent() {
    return (
        <div className="page-section">
            <ScrollReveal>
                <h1 className="page-title">About This Blog</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <p className="page-text">
                    Welcome to my personal blog where I share my thoughts, experiences, and insights on web development,
                    modern technologies, and creative coding solutions.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <p className="page-text">
                    This blog is built with cutting-edge technologies including Next.js 14, Framer Motion for smooth
                    animations, and MDX for rich content creation. The design emphasizes a clean, modern aesthetic with
                    smooth transitions and an engaging user experience.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
                <h2 className="mdx-h2">What You&apos;ll Find Here</h2>
                <ul className="mdx-ul">
                    <li className="mdx-li">In-depth tutorials on web development</li>
                    <li className="mdx-li">Insights into modern JavaScript frameworks</li>
                    <li className="mdx-li">Best practices for building scalable applications</li>
                    <li className="mdx-li">Creative coding experiments and projects</li>
                </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
                <p className="page-text">
                    Feel free to explore the blog posts and reach out if you have any questions or suggestions!
                </p>
            </ScrollReveal>
        </div>
    )
}
