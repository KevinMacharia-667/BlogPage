import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post, PostMetadata } from './types'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): Post[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPosts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '')
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const { data, content } = matter(fileContents)

            return {
                metadata: {
                    slug,
                    title: data.title || 'Untitled',
                    date: data.date || new Date().toISOString(),
                    excerpt: data.excerpt || '',
                    author: data.author,
                    tags: data.tags,
                },
                content,
            }
        })

    // Sort posts by date (newest first)
    return allPosts.sort((a, b) => {
        const dateA = new Date(a.metadata.date)
        const dateB = new Date(b.metadata.date)
        return dateB.getTime() - dateA.getTime()
    })
}

export function getPostBySlug(slug: string): Post | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            metadata: {
                slug,
                title: data.title || 'Untitled',
                date: data.date || new Date().toISOString(),
                excerpt: data.excerpt || '',
                author: data.author,
                tags: data.tags,
            },
            content,
        }
    } catch (error) {
        return null
    }
}

export function getAllPostSlugs(): string[] {
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => fileName.replace(/\.mdx$/, ''))
}
