import { notFound } from 'next/navigation'
import { AlbumDetail } from '@/components/album-detail'

const albumData: Record<string, {
    title: string
    artist: string
    year: string
    cover: string
    genre: string
    label: string
    tracks: number
    synopsis: string
    highlights: string[]
}> = {
    'certified-lover-boy': {
        title: 'Certified Lover Boy',
        artist: 'Drake',
        year: '2021',
        cover: '/images/Classic Albums/CERTIFIED LOVER BOY.jpg',
        genre: 'Hip-Hop, R&B, Pop Rap',
        label: 'OVO Sound, Republic Records',
        tracks: 21,
        synopsis: `Certified Lover Boy is the sixth studio album by Canadian rapper Drake, released on September 3, 2021. The album was initially scheduled for release in January 2021 but was delayed after Drake suffered a knee injury. The cover art, featuring twelve pregnant woman emojis, became an internet phenomenon upon its reveal.

The album debuted at number one on the Billboard 200 with 613,000 album-equivalent units, marking Drake\'s tenth number-one album. It broke the record for the most streams in a single day on both Apple Music and Spotify. All 21 tracks charted on the Billboard Hot 100, with nine songs debuting in the top 10.

Featuring collaborations with Jay-Z, Lil Wayne, Travis Scott, Future, Young Thug, Lil Baby, 21 Savage, and Kid Cudi, the album explores themes of love, fame, fatherhood, and personal reflection. Singles include "Laugh Now Cry Later" featuring Lil Durk and "Way 2 Sexy" featuring Future and Young Thug, which debuted at number one.`,
        highlights: [
            'Debuted at #1 on Billboard 200 with 613,000 units',
            'All 21 tracks charted on Billboard Hot 100',
            'Features collaborations with Jay-Z, Travis Scott, Future',
            '"Way 2 Sexy" debuted at #1 on Hot 100'
        ]
    },
    'luv-is-rage-2': {
        title: 'Luv Is Rage 2',
        artist: 'Lil Uzi Vert',
        year: '2017',
        cover: '/images/Classic Albums/LUV IS RAGE 2.jpg',
        genre: 'Hip-Hop, Trap, Emo Rap',
        label: 'Generation Now, Atlantic Records',
        tracks: 16,
        synopsis: `Luv Is Rage 2 is the debut studio album by American rapper Lil Uzi Vert, released on August 25, 2017. The album serves as a sequel to his 2015 mixtape Luv Is Rage and features production from Metro Boomin, Pharrell Williams, and Don Cannon, among others.

The album debuted at number one on the Billboard 200 with 135,000 album-equivalent units. It includes the massively successful single "XO Tour Llif3," which peaked at number seven on the Billboard Hot 100 and was nominated for Best Rap/Sung Performance at the 2018 Grammy Awards. The song has been certified Diamond by the RIAA.

The album showcases Lil Uzi Vert\'s signature sound, blending melodic rap with rock and electronic influences. Tracks like "The Way Life Goes," "Neon Guts" featuring Pharrell Williams, and "Dark Queen" highlight his emotional vulnerability and distinctive vocal style that helped define the emo rap subgenre.`,
        highlights: [
            'Debuted at #1 on Billboard 200',
            '"XO Tour Llif3" certified Diamond (10x Platinum)',
            'Grammy nominated for Best Rap/Sung Performance',
            'Defined the emo rap subgenre'
        ]
    },
    'what-happened-to-the-streets': {
        title: 'What Happened to the Streets',
        artist: '21 Savage',
        year: '2025',
        cover: '/images/Classic Albums/WHAT HAPPENED TO THE STREETS (by 21 Savage).jpg',
        genre: 'Hip-Hop, Trap, Gangsta Rap',
        label: 'Slaughter Gang, Epic Records',
        tracks: 15,
        synopsis: `What Happened to the Streets is a studio album by American rapper 21 Savage, released in 2024. The album represents a return to his raw, street-oriented sound that first brought him to prominence with projects like "Savage Mode."

Known for his deadpan delivery and vivid storytelling about street life in Atlanta, 21 Savage uses this project to question the evolution of hip-hop culture and street authenticity. The album features his characteristic minimalist trap production with hard-hitting 808s and sparse, atmospheric beats.

The project showcases 21 Savage\'s growth as an artist while maintaining the gritty realism that defines his music. Through personal narratives and social commentary, he explores themes of survival, loyalty, and the changing nature of street credibility in modern hip-hop.`,
        highlights: [
            'Return to raw, street-oriented sound',
            'Commentary on hip-hop culture evolution',
            'Gritty Atlanta trap production',
            'Personal narratives and social commentary'
        ]
    }
}

export function generateStaticParams() {
    return Object.keys(albumData).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const album = albumData[params.slug]
    if (!album) return { title: 'Album Not Found' }
    return {
        title: `${album.title} by ${album.artist} | Kevin's Blog`,
        description: album.synopsis.substring(0, 160)
    }
}

export default function AlbumPage({ params }: { params: { slug: string } }) {
    const album = albumData[params.slug]

    if (!album) {
        notFound()
    }

    return <AlbumDetail album={album} />
}
