import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()
    const file = body.get('file') as File
    const storyId = body.get('storyId') as string
    const assetType = body.get('assetType') as string // 'cover', 'story-image', 'gallery'
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    if (!storyId) {
      return NextResponse.json(
        { error: 'Story ID is required' },
        { status: 400 }
      )
    }

    // Generate organized file path
    const timestamp = Date.now()
    const fileExtension = file.name.split('.').pop()
    let fileName: string

    switch (assetType) {
      case 'cover':
        fileName = `stories/${storyId}/cover-art.${fileExtension}`
        break
      case 'story-image':
        fileName = `stories/${storyId}/story-${storyId}-image-${timestamp}.${fileExtension}`
        break
      case 'gallery':
        fileName = `stories/${storyId}/gallery/gallery-${timestamp}.${fileExtension}`
        break
      default:
        fileName = `stories/${storyId}/misc/${timestamp}-${file.name}`
    }

    // Upload to Vercel Blob with organized structure
    const blob = await put(fileName, file, {
      access: 'public',
      addRandomSuffix: false, // We're controlling the naming
    })

    return NextResponse.json({
      success: true,
      url: blob.url,
      pathname: blob.pathname,
      storyId,
      assetType,
    })
  } catch (error) {
    console.error('Blob upload error:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
}