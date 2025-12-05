'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <div className="error-container">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="error-code">404</h1>
                <p className="error-message">Oops! Page not found.</p>
                <Link href="/" className="button-primary">
                    Return Home
                </Link>
            </motion.div>
        </div>
    )
}
