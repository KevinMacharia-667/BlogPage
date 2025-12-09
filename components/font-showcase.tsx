'use client'

import { motion } from 'framer-motion'

interface FontShowcaseProps {
    fontFamily: string
    label: string
    titleText: string
    paragraphText: string
    index: number
}

export function FontShowcase({ fontFamily, label, titleText, paragraphText, index }: FontShowcaseProps) {
    return (
        <motion.div
            className="font-sample-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            <span className="font-sample-label">{label}</span>

            <h2
                className="font-sample-title"
                style={{ fontFamily }}
            >
                {titleText}
            </h2>

            <p
                className="font-sample-paragraph"
                style={{ fontFamily }}
            >
                {paragraphText}
            </p>
        </motion.div>
    )
}
