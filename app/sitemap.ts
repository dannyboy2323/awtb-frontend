import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.adventureswiththebull.com'
  
  // Define your stories here - in production this would come from your CMS/database
  const stories = [
    {
      storyId: '00001',
      storyName: 'the-beginning',
      lastModified: new Date('2024-12-01'),
      priority: 0.9,
    },
    // Add more stories as they're created
  ]

  // Generate story routes
  const storyRoutes = stories.map(story => ({
    url: `${baseUrl}/story/${story.storyId}/${story.storyName}`,
    lastModified: story.lastModified,
    changeFrequency: 'weekly' as const,
    priority: story.priority,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...storyRoutes,
    {
      url: `${baseUrl}/api/story/preload`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1,
    },
  ]
}