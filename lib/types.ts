export interface PostMetadata {
    title: string
    date: string
    excerpt: string
    slug: string
    author?: string
    tags?: string[]
}

export interface Post {
    metadata: PostMetadata
    content: string
}
