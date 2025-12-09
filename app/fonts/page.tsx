import type { Metadata } from 'next'
import { fontsList } from '@/lib/fonts'
import { FontCard } from '@/components/font-card'
import { ScrollReveal } from '@/components/scroll-reveal'

export const metadata: Metadata = {
    title: 'Font Showcase - My Blog',
    description: 'Explore our collection of beautiful custom fonts with live previews and examples',
    keywords: ['fonts', 'typography', 'design', 'custom fonts'],
}

export default function FontsPage() {
    return (
        <>
            <section className="fonts-hero">
                <h1 className="fonts-hero-title">Font Showcase</h1>
                <p className="fonts-hero-subtitle">
                    Explore our curated collection of beautiful custom fonts. Click on any font to see it in action with different text styles and cases.
                </p>
            </section>

            <ScrollReveal>
                <section>
                    <div className="fonts-grid">
                        {fontsList.map((font, index) => (
                            <FontCard key={font.slug} font={font} index={index} />
                        ))}
                    </div>
                </section>
            </ScrollReveal>
        </>
    )
}
