'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface AlbumDetailProps {
    album: {
        title: string
        artist: string
        year: string
        cover: string
        genre: string
        label: string
        tracks: number
        synopsis: string
        highlights: string[]
    }
}

export function AlbumDetail({ album }: AlbumDetailProps) {
    return (
        <div className="container" style={{ padding: '2rem 1.5rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Breadcrumb */}
                <nav className="breadcrumb" style={{ justifyContent: 'flex-start', marginBottom: '2rem' }}>
                    <Link href="/music" className="breadcrumb-link">Music</Link>
                    <span className="breadcrumb-separator">›</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{album.title}</span>
                </nav>

                {/* Album Header */}
                <div className="album-detail-header">
                    <div className="album-detail-cover">
                        <Image
                            src={album.cover}
                            alt={`${album.title} by ${album.artist}`}
                            width={400}
                            height={400}
                            className="album-cover-image"
                            priority
                        />
                    </div>
                    <div className="album-detail-info">
                        <h1 className="album-detail-title" style={{ fontFamily: "'NouvelleGrotesquerie', 'Inter', sans-serif" }}>
                            {album.title}
                        </h1>
                        <p className="album-detail-artist">{album.artist}</p>
                        <div className="album-detail-meta">
                            <span>{album.year}</span>
                            <span>•</span>
                            <span>{album.genre}</span>
                            <span>•</span>
                            <span>{album.tracks} tracks</span>
                        </div>
                        <p className="album-detail-label">{album.label}</p>
                    </div>
                </div>

                {/* Synopsis */}
                <div className="album-detail-section">
                    <h2 className="album-detail-section-title">Synopsis</h2>
                    {album.synopsis.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="album-detail-text">{paragraph}</p>
                    ))}
                </div>

                {/* Highlights */}
                <div className="album-detail-section">
                    <h2 className="album-detail-section-title">Highlights</h2>
                    <ul className="album-detail-highlights">
                        {album.highlights.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                        ))}
                    </ul>
                </div>

                {/* Back Link */}
                <Link href="/music" className="button-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>
                    ← Back to Music
                </Link>
            </motion.div>
        </div>
    )
}
