'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'
import { AlbumCard } from '@/components/album-card'

const topAlbums = [
    {
        title: 'Midnight Dreams',
        artist: 'The Synthwave Collective',
        year: '2024',
        cover: '/images/albums/album-1.png',
        description: 'A modern masterpiece blending electronic beats with ambient soundscapes.',
        slug: ''
    },
    {
        title: 'Urban Echoes',
        artist: 'Metro Beats',
        year: '2024',
        cover: '/images/albums/album-3.png',
        description: 'Raw hip-hop energy capturing the pulse of city life.',
        slug: ''
    }
]

const classicAlbums = [
    {
        title: 'Certified Lover Boy',
        artist: 'Drake',
        year: '2021',
        cover: '/images/Classic Albums/CERTIFIED LOVER BOY.jpg',
        description: 'Drake\'s sixth studio album featuring Lil Baby, Future, Young Thug, and more.',
        slug: 'certified-lover-boy'
    },
    {
        title: 'Luv Is Rage 2',
        artist: 'Lil Uzi Vert',
        year: '2017',
        cover: '/images/Classic Albums/LUV IS RAGE 2.jpg',
        description: 'Lil Uzi Vert\'s debut studio album including the hit single "XO Tour Llif3".',
        slug: 'luv-is-rage-2'
    },
    {
        title: 'What Happened to the Streets',
        artist: '21 Savage',
        year: '2025',
        cover: '/images/Classic Albums/WHAT HAPPENED TO THE STREETS (by 21 Savage).jpg',
        description: '21 Savage\'s raw exploration of street life and personal evolution.',
        slug: 'what-happened-to-the-streets'
    }
]

export function MusicContent() {
    return (
        <div className="music-section">
            <ScrollReveal>
                <h1 className="music-title">Music</h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <p className="music-text">
                    Welcome to the music section of my blog. Here you&apos;ll find my thoughts on music,
                    playlists, reviews, and discussions about various genres and artists that inspire me.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <h2 className="music-subtitle">What I Love</h2>
                <p className="music-text">
                    Music has always been a significant part of my life. From discovering new artists to
                    revisiting classic albums, I find joy in exploring different sounds and rhythms.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
                <h2 className="music-subtitle">Favorite Genres</h2>
                <ul className="music-list">
                    <li className="music-list-item">Jazz & Blues</li>
                    <li className="music-list-item">Electronic & House</li>
                    <li className="music-list-item">Hip-Hop & R&B</li>
                    <li className="music-list-item">Rock & Alternative</li>
                    <li className="music-list-item">Classical & Orchestral</li>
                </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
                <h2 className="music-subtitle">Top Albums of the Year</h2>
                <div className="albums-grid">
                    {topAlbums.map((album, index) => (
                        <AlbumCard key={album.title} album={album} index={index} />
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
                <h2 className="music-subtitle">Classic Albums</h2>
                <div className="albums-grid">
                    {classicAlbums.map((album, index) => (
                        album.slug ? (
                            <Link href={`/music/albums/${album.slug}`} key={album.title} style={{ textDecoration: 'none' }}>
                                <AlbumCard album={album} index={index} useClassicFont={true} />
                            </Link>
                        ) : (
                            <AlbumCard key={album.title} album={album} index={index} useClassicFont={true} />
                        )
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
                <h2 className="music-subtitle">Currently Listening To</h2>
                <p className="music-text">
                    I believe that music tells stories and creates connections. Whether it&apos;s a deep album dive
                    or a catchy single on repeat, every track has something unique to offer.
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
                <p className="music-text">
                    Stay tuned for music recommendations, playlist curation, and thoughts on the latest releases!
                </p>
            </ScrollReveal>
        </div>
    )
}
