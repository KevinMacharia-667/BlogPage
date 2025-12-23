'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const sections = [
    {
        title: 'Blog Posts',
        href: '/blog',
        description: 'Exploring web development, modern technologies, and creative coding solutions',
        emoji: '📝'
    },
    {
        title: 'Font Showcase',
        href: '/fonts',
        description: '9 unique custom typefaces with live previews and text examples',
        emoji: '✨'
    },
    {
        title: 'Music',
        href: '/music',
        description: 'Discover top albums, classic records, and musical recommendations',
        emoji: '🎵'
    },
    {
        title: 'About',
        href: '/about',
        description: 'Learn more about this blog and what you\'ll find here',
        emoji: '👋'
    }
]

export function Hero() {
    return (
        <>
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="hero-title">Welcome to Kevin&apos;s Blog</h1>
                    <p className="hero-subtitle">
                        Exploring web development, design, music, and creative projects
                    </p>
                </motion.div>
            </section>

            <section className="site-sections">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="sections-grid"
                    >
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                                <Link href={section.href} className="section-card">
                                    <span className="section-emoji">{section.emoji}</span>
                                    <h3 className="section-title">{section.title}</h3>
                                    <p className="section-description">{section.description}</p>
                                    <span className="section-link-arrow">→</span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    )
}
