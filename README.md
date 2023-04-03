# Next.js 13 app directory feature in combination with i18next

This example shows a basic way to use [i18next](https://www.i18next.com) (and [react-i18next](https://react.i18next.com)) in a [Next.js 13](https://beta.nextjs.org/) app with the new app directory features.
[next-i18next](https://next.i18next.com) is not needed anymore for this setup.

It shows i18next integration on some server side pages and some client side pages.

There is also an example middleware with language detection and persistence via cookie.

*This example has been created out of [this discussion](https://github.com/i18next/next-i18next/discussions/1993).*

## There's also a [blog post](https://locize.com/blog/next-13-app-dir-i18n) describing this with more detail information.

[![](https://locize.com/blog/next-13-app-dir-i18n/next-13-app-dir-i18n.jpg)](https://locize.com/blog/next-13-app-dir-i18n)

 "dependencies": {
    "accept-language": "3.0.18",
    "i18next": "22.4.9",
    "i18next-browser-languagedetector": "7.0.1",
    "i18next-resources-to-backend": "1.1.1",
    "next": "13.1.4",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-i18next": "12.1.4"
  },
  "devDependencies": {
    "@types/node": "18.11.18",
    "@types/react": "18.0.27",
    "eslint": "8.32.0",
    "eslint-config-next": "13.1.4",
    "locize-cli": "7.13.1",
    "typescript": "4.9.4"
  }