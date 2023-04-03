/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

import type translation from '../src/app/i18n/locales/th/translation.json'
import type secondPage from '../src/app/i18n/locales/th/second-page.json'
import type footer from '../src/app/i18n/locales/th/footer.json'
import type clientPage from '../src/app/i18n/locales/th/client-page.json'
import type secondClientPage from '../src/app/i18n/locales/th/second-client-page.json'

interface I18nNamespaces {
  translation: typeof translation
  'second-page': typeof secondPage
  footer: typeof footer
  'client-page': typeof clientPage
  'second-client-page': typeof secondClientPage
}

declare module 'i18next' {
  interface CustomTypeOptions {
    // returnNull: false
    // defaultNS: 'translation'
    resources: I18nNamespaces
  }
}