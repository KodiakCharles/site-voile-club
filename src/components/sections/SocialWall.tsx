'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { InstagramPost } from '@/types'

type Props = {
  instagramHandle?: string
  facebookPageUrl?: string
  twitterHandle?: string
}

export default function SocialWall({ instagramHandle, facebookPageUrl, twitterHandle }: Props) {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!instagramHandle) return
    fetch(`/api/social/instagram?handle=${instagramHandle}`)
      .then((r) => r.json())
      .then((data) => { setPosts(data.posts ?? []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [instagramHandle])

  return (
    <section className="social-wall" aria-label="Nos réseaux sociaux">
      <div className="container">
        <h2 className="section-title">Suivez-nous</h2>

        {/* Instagram grid */}
        {instagramHandle && (
          <div className="instagram-grid">
            {loading && <div className="skeleton-grid" />}
            {posts.slice(0, 9).map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-post"
                aria-label={post.caption?.slice(0, 80)}
              >
                <Image
                  src={post.mediaType === 'VIDEO' ? (post.thumbnailUrl ?? post.mediaUrl) : post.mediaUrl}
                  alt={post.caption?.slice(0, 100) ?? 'Post Instagram'}
                  fill
                  className="instagram-post-image"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
                {post.mediaType === 'VIDEO' && <div className="video-badge">▶</div>}
              </a>
            ))}
          </div>
        )}

        <div className="social-links">
          {instagramHandle && (
            <a href={`https://instagram.com/${instagramHandle.replace('@', '')}`} target="_blank" rel="noopener" className="social-link instagram">
              Instagram @{instagramHandle.replace('@', '')}
            </a>
          )}
          {facebookPageUrl && (
            <a href={facebookPageUrl} target="_blank" rel="noopener" className="social-link facebook">
              Notre page Facebook
            </a>
          )}
          {twitterHandle && (
            <a href={`https://x.com/${twitterHandle.replace('@', '')}`} target="_blank" rel="noopener" className="social-link twitter">
              Suivre sur X
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
