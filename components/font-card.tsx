'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import type { FontMetadata } from '@/lib/fonts'

interface FontCardProps {
    font: FontMetadata
    index: number
}

export function FontCard({ font, index }: FontCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link href={`/fonts/${font.slug}`} className="font-card">
                <h3
                    className="font-card-name"
                    style={{ fontFamily: font.fontFamily }}
                >
                    {font.displayName}
                </h3>

                <p className="font-card-description">
                    {font.description}
                </p>

                <div className="font-card-preview">
                    <p
                        className="font-card-preview-text"
                        style={{ fontFamily: font.fontFamily }}
                    >
                        The Quick Brown Fox Jumps Over The Lazy Dog
                    </p>
                </div>

                <span className="font-card-link-text">
                    View Details
                </span>
            </Link>
        </motion.div>
    )
}
