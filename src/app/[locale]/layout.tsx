import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { resolveClub } from '@/lib/utils/tenant'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages()
  const clubId = await resolveClub()

  if (!clubId) notFound()

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Header clubId={clubId} locale={locale} />
      <main>{children}</main>
      <Footer clubId={clubId} locale={locale} />
    </NextIntlClientProvider>
  )
}
