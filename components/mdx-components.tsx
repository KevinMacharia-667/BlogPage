import Image from 'next/image'
import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
    h1: ({ children }) => (
        <h1 className="mdx-h1">{children}</h1>
    ),
    h2: ({ children }) => (
        <h2 className="mdx-h2">{children}</h2>
    ),
    h3: ({ children }) => (
        <h3 className="mdx-h3">{children}</h3>
    ),
    p: ({ children }) => <p className="mdx-p">{children}</p>,
    a: ({ href, children }) => (
        <a href={href} className="mdx-link" target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    ),
    ul: ({ children }) => <ul className="mdx-ul">{children}</ul>,
    ol: ({ children }) => <ol className="mdx-ol">{children}</ol>,
    li: ({ children }) => <li className="mdx-li">{children}</li>,
    code: ({ children, className }) => {
        const isInline = !className
        if (isInline) {
            return <code className="mdx-code-inline">{children}</code>
        }
        return <code className={className}>{children}</code>
    },
    pre: ({ children }) => (
        <pre className="mdx-pre">{children}</pre>
    ),
    blockquote: ({ children }) => (
        <blockquote className="mdx-blockquote">{children}</blockquote>
    ),
    img: ({ src, alt }) => (
        <span className="mdx-image-wrapper">
            <Image
                src={src as string}
                alt={alt || ''}
                width={800}
                height={400}
                className="mdx-image"
            />
        </span>
    ),
}
