import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default async function Page({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
      <main className='custom-img from-primary mb-12 flex h-screen items-center justify-center bg-cover bg-fixed bg-center'>
      <div className="absolute inset-0 z-[2] bg-black/30" />
      <div className="z-[2] mt-[-20rem] p-5 text-white">
        <Header heading={t('h1')} />
        <h2 className="text-5xl font-bold">
          <Trans t={t} i18nKey="welcome" className="text-5xl font-bold">
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        </div>
        <div style={{ width: '100%' }}>
          <p>
            <Trans t={t} i18nKey="blog.text">
              Check out the corresponding <a href={t('blog.link')}>blog post</a> describing this example.
            </Trans>
          </p>
          <a href={t('blog.link')}>
            <img
              style={{ width: '50%' }}
              alt="next 13 blog post"
              src="https://locize.com/blog/next-13-app-dir-i18n/next-13-app-dir-i18n.jpg"
            />
          </a>
        </div>
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>
          <Link href={`/${lng}/second-page`}>
            <button type="button">{t('to-second-page')}</button>
          </Link>
          <Link href={`/${lng}/client-page`}>
            <button type="button">{t('to-client-page')}</button>
          </Link>
        </div>
      </main>
      {/* @ts-expect-error Server Component */}
      <Footer lng={lng}/>
    </>
  )
}
