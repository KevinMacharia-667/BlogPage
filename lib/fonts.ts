export interface FontMetadata {
    name: string
    displayName: string
    fontFamily: string
    slug: string
    description: string
}

export const fontsList: FontMetadata[] = [
    {
        name: 'Affigere',
        displayName: 'Affigere Regular',
        fontFamily: 'Affigere',
        slug: 'affigere',
        description: 'A clean and elegant typeface perfect for headings and titles',
    },
    {
        name: 'Americaine',
        displayName: 'Americaine Condensed',
        fontFamily: 'Americaine',
        slug: 'americaine',
        description: 'A condensed font with strong character and bold presence',
    },
    {
        name: 'Biondeggiare',
        displayName: 'Biondeggiare Regular',
        fontFamily: 'Biondeggiare',
        slug: 'biondeggiare',
        description: 'A sophisticated serif font with timeless appeal',
    },
    {
        name: 'Excessive',
        displayName: 'Excessive ExtraCondensed',
        fontFamily: 'Excessive',
        slug: 'excessive',
        description: 'An ultra-condensed typeface for dramatic impact',
    },
    {
        name: 'GravePresse',
        displayName: 'Grave Presse ExtraBold',
        fontFamily: 'GravePresse',
        slug: 'gravepresse',
        description: 'A bold and commanding font with extra weight',
    },
    {
        name: 'NouvelleGrotesquerie',
        displayName: 'Nouvelle Grotesquerie Regular',
        fontFamily: 'NouvelleGrotesquerie',
        slug: 'nouvellegrotesquerie',
        description: 'A modern grotesque with contemporary styling',
    },
    {
        name: 'Rosette',
        displayName: 'Rosette Regular',
        fontFamily: 'Rosette',
        slug: 'rosette',
        description: 'A delicate and refined typeface with elegant curves',
    },
    {
        name: 'Squatina',
        displayName: 'Squatina Regular',
        fontFamily: 'Squatina',
        slug: 'squatina',
        description: 'A versatile font with balanced proportions',
    },
    {
        name: 'ThestralNeue',
        displayName: 'Thestral Neue Bold',
        fontFamily: 'ThestralNeue',
        slug: 'thestralneue',
        description: 'A bold and modern sans-serif with clean lines',
    },
]

export function getFontBySlug(slug: string): FontMetadata | undefined {
    return fontsList.find((font) => font.slug === slug)
}

export function getAllFontSlugs(): string[] {
    return fontsList.map((font) => font.slug)
}
