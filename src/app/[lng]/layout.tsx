import './global.css'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { Suspense } from 'react'
import { Niramit } from 'next/font/google';
import Navbar from '../componects/Navbar';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

// If loading a variable font, you don't need to specify the font weight
const inter = Niramit({
  subsets: ['latin'],
  display: 'swap',
  weight: '200'
})


export default function RootLayout({ children, params: { lng }}: any) {
  return (
    <html lang={lng} dir={dir(lng)} className={inter.className}>
      <head />
      <body>
      <Navbar/>
      <Suspense fallback={`Loading...`}>
        {children}
      </Suspense>
      </body>
    </html>
  )
}
