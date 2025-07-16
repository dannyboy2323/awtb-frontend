import { list, put, del, PutBlobResult } from '@vercel/blob'

export interface StoryAsset {
  url: string
  pathname: string
  size: number
  uploadedAt: Date
  storyId: string
  assetType: 'cover' | 'story-image' | 'gallery' | 'misc'
}

export class BlobStoryManager {
  private static getStoriesPrefix(storyId: string): string {
    return `stories/${storyId}/`
  }

  // List all assets for a specific story
  static async listStoryAssets(storyId: string): Promise<StoryAsset[]> {
    try {
      const { blobs } = await list({
        prefix: this.getStoriesPrefix(storyId),
      })

      return blobs.map(blob => ({
        url: blob.url,
        pathname: blob.pathname,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
        storyId,
        assetType: this.detectAssetType(blob.pathname),
      }))
    } catch (error) {
      console.error('Error listing story assets:', error)
      return []
    }
  }

  // Upload a story asset with proper organization
  static async uploadStoryAsset(
    file: File, 
    storyId: string, 
    assetType: 'cover' | 'story-image' | 'gallery' | 'misc'
  ): Promise<PutBlobResult | null> {
    try {
      const timestamp = Date.now()
      const fileExtension = file.name.split('.').pop()
      let fileName: string

      switch (assetType) {
        case 'cover':
          fileName = `${this.getStoriesPrefix(storyId)}cover-art.${fileExtension}`
          break
        case 'story-image':
          fileName = `${this.getStoriesPrefix(storyId)}story-${storyId}-image-${timestamp}.${fileExtension}`
          break
        case 'gallery':
          fileName = `${this.getStoriesPrefix(storyId)}gallery/gallery-${timestamp}.${fileExtension}`
          break
        default:
          fileName = `${this.getStoriesPrefix(storyId)}misc/${timestamp}-${file.name}`
      }

      const blob = await put(fileName, file, {
        access: 'public',
        addRandomSuffix: false,
      })

      return blob
    } catch (error) {
      console.error('Error uploading story asset:', error)
      return null
    }
  }

  // Delete a story asset
  static async deleteStoryAsset(pathname: string): Promise<boolean> {
    try {
      await del(pathname)
      return true
    } catch (error) {
      console.error('Error deleting story asset:', error)
      return false
    }
  }

  // Get optimized asset URLs for different use cases
  static getOptimizedAssetUrl(
    storyId: string, 
    assetType: 'cover' | 'story-image' | 'gallery',
    index?: number
  ): string {
    const baseUrl = `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${storyId}`
    
    switch (assetType) {
      case 'cover':
        return `${baseUrl}/cover-art.webp`
      case 'story-image':
        return `${baseUrl}/story-${storyId}-image-${index || 1}.webp`
      case 'gallery':
        return `${baseUrl}/gallery/gallery-${index || 1}.webp`
      default:
        return `${baseUrl}/cover-art.webp`
    }
  }

  // Preload critical assets for a story
  static async preloadStoryAssets(storyId: string): Promise<string[]> {
    const assetsToPreload = [
      this.getOptimizedAssetUrl(storyId, 'cover'),
      this.getOptimizedAssetUrl(storyId, 'story-image', 1),
      this.getOptimizedAssetUrl(storyId, 'story-image', 2),
    ]

    return assetsToPreload
  }

  private static detectAssetType(pathname: string): 'cover' | 'story-image' | 'gallery' | 'misc' {
    if (pathname.includes('cover-art')) return 'cover'
    if (pathname.includes('story-') && pathname.includes('-image-')) return 'story-image'
    if (pathname.includes('gallery/')) return 'gallery'
    return 'misc'
  }
}

// CDN helpers for existing assets
export function getCDNAssetUrl(path: string): string {
  return `https://cdn.adventureswiththebull.com/${path}`
}

export function getBlobAssetUrl(storyId: string, filename: string): string {
  return `https://nt1soyyin4fgyivx.public.blob.vercel-storage.com/assets/stories/${storyId}/${filename}`
}