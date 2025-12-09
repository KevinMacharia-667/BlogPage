import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getFontBySlug, getAllFontSlugs } from '@/lib/fonts'
import { FontShowcase } from '@/components/font-showcase'

export async function generateStaticParams() {
    const slugs = getAllFontSlugs()
    return slugs.map((slug) => ({
        fontName: slug,
    }))
}

export async function generateMetadata({
    params,
}: {
    params: { fontName: string }
}): Promise<Metadata> {
    const font = getFontBySlug(params.fontName)

    if (!font) {
        return {
            title: 'Font Not Found',
        }
    }

    return {
        title: `${font.displayName} - Font Showcase`,
        description: `${font.description}. View ${font.displayName} in different cases and styles.`,
        keywords: ['font', 'typography', font.name, font.displayName],
    }
}

export default function FontDetailPage({ params }: { params: { fontName: string } }) {
    const font = getFontBySlug(params.fontName)

    if (!font) {
        notFound()
    }

    const samples = [
        {
            label: 'UPPERCASE',
            title: 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG',
            paragraph: 'TYPOGRAPHY IS THE ART AND TECHNIQUE OF ARRANGING TYPE TO MAKE WRITTEN LANGUAGE LEGIBLE, READABLE AND APPEALING WHEN DISPLAYED. GOOD TYPOGRAPHY ESTABLISHES A STRONG VISUAL HIERARCHY AND PROVIDES A GRAPHIC BALANCE TO THE WEBSITE.',
        },
        {
            label: 'lowercase',
            title: 'the quick brown fox jumps over the lazy dog',
            paragraph: 'typography is the art and technique of arranging type to make written language legible, readable and appealing when displayed. good typography establishes a strong visual hierarchy and provides a graphic balance to the website.',
        },
        {
            label: 'Title Case',
            title: 'The Quick Brown Fox Jumps Over The Lazy Dog',
            paragraph: 'Typography Is The Art And Technique Of Arranging Type To Make Written Language Legible, Readable And Appealing When Displayed. Good Typography Establishes A Strong Visual Hierarchy And Provides A Graphic Balance To The Website.',
        },
        {
            label: 'camelCase',
            title: 'theQuickBrownFoxJumpsOverTheLazyDog',
            paragraph: 'typographyIsTheArtAndTechniqueOfArrangingTypeToMakeWrittenLanguageLegibleReadableAndAppealingWhenDisplayed goodTypographyEstablishesAStrongVisualHierarchyAndProvidesAGraphicBalanceToTheWebsite',
        },
        {
            label: 'Toggle Case (aLtErNaTiNg)',
            title: 'tHe qUiCk bRoWn fOx jUmPs oVeR tHe lAzY dOg',
            paragraph: 'tYpOgRaPhY iS tHe aRt aNd tEcHnIqUe oF aRrAnGiNg tYpE tO mAkE wRiTtEn lAnGuAgE lEgIbLe, ReAdAbLe aNd aPpEaLiNg wHeN dIsPlAyEd. GoOd tYpOgRaPhY eStAbLisHeS a sTrOnG vIsUaL hIeRaRcHy aNd pRoViDeS a gRaPhIc bAlAnCe tO tHe wEbSiTe.',
        },
    ]

    return (
        <article>
            <div className="font-detail-hero">
                <h1
                    className="font-detail-name"
                    style={{ fontFamily: font.fontFamily }}
                >
                    {font.displayName}
                </h1>

                <p className="font-detail-description">
                    {font.description}
                </p>

                <div className="breadcrumb">
                    <Link href="/fonts" className="breadcrumb-link">
                        Fonts
                    </Link>
                    <span className="breadcrumb-separator">/</span>
                    <span>{font.displayName}</span>
                </div>
            </div>

            <div className="font-samples-container">
                {samples.map((sample, index) => (
                    <FontShowcase
                        key={sample.label}
                        fontFamily={font.fontFamily}
                        label={sample.label}
                        titleText={sample.title}
                        paragraphText={sample.paragraph}
                        index={index}
                    />
                ))}
            </div>
        </article>
    )
}
