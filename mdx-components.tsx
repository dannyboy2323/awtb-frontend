import type { MDXComponents } from 'mdx/types'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-amber-100 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-4 text-amber-100 leading-tight">
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed mb-4 text-amber-50/90">
        {children}
      </p>
    ),
    ...components,
  }
}