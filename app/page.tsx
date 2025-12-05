import { getAllPosts } from '@/lib/mdx'
import { PostCard } from '@/components/post-card'
import { ScrollReveal } from '@/components/scroll-reveal'
import { Hero } from '@/components/hero'

export default function HomePage() {
    const posts = getAllPosts()

    return (
        <>
            <Hero />

            <ScrollReveal>
                <section>
                    {posts.length > 0 ? (
                        <div className="posts-grid">
                            {posts.map((post, index) => (
                                <PostCard key={post.metadata.slug} post={post.metadata} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                                No blog posts yet. Check back soon!
                            </p>
                        </div>
                    )}
                </section>
            </ScrollReveal>
        </>
    )
}
