import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx'
import { mdxComponents } from '@/components/mdx-components'
import type { Metadata } from 'next'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export async function generateStaticParams() {
    const slugs = getAllPostSlugs()
    return slugs.map((slug) => ({
        slug,
    }))
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: `${post.metadata.title} - My Blog`,
        description: post.metadata.excerpt,
        keywords: post.metadata.tags || [],
    }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const formattedDate = new Date(post.metadata.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <article>
            <div className="post-header">
                <h1 className="post-title">{post.metadata.title}</h1>
                <div className="post-meta">
                    <span>{formattedDate}</span>
                    {post.metadata.author && <span>By {post.metadata.author}</span>}
                </div>
                {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="post-card-tags" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                        {post.metadata.tags.map((tag) => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="post-content">
                <MDXRemote
                    source={post.content}
                    components={mdxComponents}
                    options={{
                        mdxOptions: {
                            rehypePlugins: [
                                rehypeHighlight as any,
                                rehypeSlug as any,
                                [rehypeAutolinkHeadings as any, { behavior: 'wrap' }],
                            ],
                        },
                    }}
                />
            </div>
        </article>
    )
}
