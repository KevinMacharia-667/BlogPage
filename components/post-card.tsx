'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PostMetadata } from '@/lib/types'

interface PostCardProps {
    post: PostMetadata
    index: number
}

export function PostCard({ post, index }: PostCardProps) {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <Link href={`/blog/${post.slug}`} className="post-card">
                <div className="post-card-content">
                    <h2 className="post-card-title">{post.title}</h2>
                    <p className="post-card-date">{formattedDate}</p>
                    <p className="post-card-excerpt">{post.excerpt}</p>
                    {post.tags && post.tags.length > 0 && (
                        <div className="post-card-tags">
                            {post.tags.map((tag) => (
                                <span key={tag} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </motion.div>
    )
}
