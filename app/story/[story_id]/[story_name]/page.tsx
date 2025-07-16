import { notFound } from 'next/navigation'
import { StoryLayout } from '@/components/story/story-layout'
import { readFile } from 'fs/promises'
import { join } from 'path'

export const revalidate = 3600 // Revalidate every hour (ISR)

interface StoryPageProps {
  params: Promise<{
    story_id: string
    story_name: string
  }>
}

// Generate static params for ISR
export async function generateStaticParams() {
  // This would typically come from your CMS or database
  return [
    { story_id: '00001', story_name: 'the-beginning' },
    // Add more story params as they're created
  ]
}

// Generate metadata for SEO
export async function generateMetadata({ params }: StoryPageProps) {
  const { story_id, story_name } = await params
  
  const title = `Story #${story_id}: ${story_name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`
  const description = `Adventure story from Adventures with the Bull - ${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      authors: ['Adventures with the Bull'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

async function getStoryContent(storyId: string, storyName: string) {
  try {
    // Try to read from content directory first
    const contentPath = join(process.cwd(), 'content', 'stories', `${storyName}.mdx`)
    
    try {
      const content = await readFile(contentPath, 'utf-8')
      return content
    } catch {
      // Fallback to a default story structure
      return `
# ${storyName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}

Welcome to this adventure story from Adventures with the Bull.

## Chapter 1: The Journey Begins

*The story begins here...*

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

![Story Image](https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${storyId}/story-${storyId}-image-1.webp)

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Chapter 2: The Adventure Continues

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

![Story Image](https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${storyId}/story-${storyId}-image-2.webp)

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

## Chapter 3: The Conclusion

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

*And so the adventure comes to an end, but the journey continues...*
      `
    }
  } catch (error) {
    console.error('Error loading story content:', error)
    return null
  }
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { story_id, story_name } = await params

  // Validate story parameters
  if (!story_id || !story_name) {
    notFound()
  }

  // Load story content
  const mdxContent = await getStoryContent(story_id, story_name)
  
  if (!mdxContent) {
    notFound()
  }

  // Define cover image URL (from Vercel Blob or CDN)
  const coverImageUrl = `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${story_id}/cover-art.webp`
  
  // Define additional story images
  const storyImages = [
    `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${story_id}/story-${story_id}-image-1.webp`,
    `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${story_id}/story-${story_id}-image-2.webp`,
    `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${story_id}/story-${story_id}-image-3.webp`,
  ]

  return (
    <StoryLayout
      storyId={story_id}
      storyName={story_name}
      coverImageUrl={coverImageUrl}
      mdxContent={mdxContent}
      storyImages={storyImages}
    />
  )
}