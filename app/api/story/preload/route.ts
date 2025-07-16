import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const storyId = searchParams.get('story_id')
  const storyName = searchParams.get('story_name')
  
  if (!storyId || !storyName) {
    return NextResponse.json(
      { error: 'Missing story_id or story_name' },
      { status: 400 }
    )
  }

  try {
    // Define assets to preload based on story
    const assetsToPreload = [
      `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${storyId}/cover-art.webp`,
      `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${storyId}/story-${storyId}-image-1.webp`,
      `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${storyId}/story-${storyId}-image-2.webp`,
      `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${storyId}/story-${storyId}-image-3.webp`,
    ]

    // Return preload hints
    const response = NextResponse.json({
      success: true,
      storyId,
      storyName,
      preloadAssets: assetsToPreload,
    })

    // Add preload headers for critical assets
    assetsToPreload.forEach(asset => {
      response.headers.append('Link', `<${asset}>; rel=preload; as=image`)
    })

    // Cache this response for 1 hour
    response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600')

    return response
  } catch (error) {
    console.error('Error in preload API:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}