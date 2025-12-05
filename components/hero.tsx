'use client'

import { motion } from 'framer-motion'

export function Hero() {
    return (
        <section className="hero">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="hero-title">Welcome to My Blog</h1>
                <p className="hero-subtitle">
                    Exploring web development, modern technologies, and creative coding solutions
                </p>
            </motion.div>
        </section>
    )
}
