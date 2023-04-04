import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'

export default async function Head({ params: { lng } }: any) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <>
      <title>{t('title')}</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
    </>
  )
}


// Dynamic metadata
export async function generateMetadata({ params: { lng } }: {
  params: {
    lng: string;
  }
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng)

 return { title: t('title') }
  
 
}