import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type Props = {
  title: string
  tagline: string
  heroImageUrl: string
  ctaUrl: string
  locale: string
}

export default function HeroSection({ title, tagline, heroImageUrl, ctaUrl, locale }: Props) {
  const t = useTranslations('home')

  return (
    <section className="hero" aria-label="Bannière principale">
      <div className="hero-media">
        <Image
          src={heroImageUrl}
          alt={`${title} — vue du club`}
          fill
          priority
          className="hero-image"
          sizes="100vw"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-tagline">{tagline}</p>
        <div className="hero-actions">
          <Link href={ctaUrl} className="btn btn-primary btn-lg">
            {t('cta_stages')}
          </Link>
          <Link href={`/${locale}/le-club`} className="btn btn-outline btn-lg">
            {t('cta_discover')}
          </Link>
        </div>
      </div>

      {/* Flèche de scroll */}
      <div className="hero-scroll-hint" aria-hidden>
        <span />
      </div>
    </section>
  )
}
