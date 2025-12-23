'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface AlbumCardProps {
    album: {
        title: string
        artist: string
        year: string
        cover: string
        description: string
    }
    index: number
    useClassicFont?: boolean
}

export function AlbumCard({ album, index, useClassicFont = false }: AlbumCardProps) {
    return (
        <motion.div
            className={useClassicFont ? 'classic-album-card' : 'album-card'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
        >
            <div className="album-cover">
                <Image
                    src={album.cover}
                    alt={`${album.title} by ${album.artist}`}
                    width={300}
                    height={300}
                    className="album-cover-image"
                />
            </div>
            <div className="album-info">
                <h3 className="album-title">{album.title}</h3>
                <p className="album-artist">{album.artist}</p>
                <p className="album-year">{album.year}</p>
                <p className="album-description">{album.description}</p>
            </div>
        </motion.div>
    )
}
