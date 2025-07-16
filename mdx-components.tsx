import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Basic HTML elements with story-specific styling
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-8 text-journal-ink">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-6 text-journal-ink">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-medium mb-4 text-journal-ink">{children}</h3>,
    p: ({ children }) => <p className="mb-6 leading-relaxed text-journal-ink">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-bull-brown pl-6 py-4 my-6 italic bg-journal-stain/20 rounded-r">
        {children}
      </blockquote>
    ),
    
    // Image component with optimized loading
    img: ({ src, alt, ...props }) => (
      <div className="my-8">
        <Image
          src={typeof src === 'string' ? src : ''}
          alt={alt || ''}
          width={800}
          height={600}
          className="rounded-lg shadow-lg w-full h-auto"
          {...props}
        />
      </div>
    ),

    // Custom components for story elements
    ...components,
  }
}