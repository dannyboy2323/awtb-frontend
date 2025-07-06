import { notFound } from 'next/navigation'

// This would normally come from a CMS or file system
const getStoryContent = async (slug: string) => {
  // For now, we'll return a placeholder
  // In a real implementation, this would load MDX files dynamically
  if (slug === 'the-beginning') {
    return {
      title: 'The Beginning',
      content: null // MDX content would be imported here
    }
  }
  return null
}

interface StoryPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function StoryPage({ params }: StoryPageProps) {
  const resolvedParams = await params
  const story = await getStoryContent(resolvedParams.slug)
  
  if (!story) {
    notFound()
  }

  // For demonstration, showing the structure
  // In practice, you'd import and render the MDX content here
  return (
    <div className="min-h-screen">
      <div className="text-center py-16">
        <h2 className="text-2xl text-amber-200 mb-8">Story: {story.title}</h2>
        <p className="text-amber-100/80 mb-8">
          This is where the MDX content would be rendered.
        </p>
        <p className="text-amber-200/60 text-sm">
          Create an MDX file at <code>app/stories/{resolvedParams.slug}/page.mdx</code> to add your story content.
        </p>
      </div>
    </div>
  )
}

// Generate static params for known stories
export async function generateStaticParams() {
  return [
    { slug: 'the-beginning' },
    { slug: 'coming-soon' },
    { slug: 'hidden-tale' },
    { slug: 'secret-path' },
  ]
}