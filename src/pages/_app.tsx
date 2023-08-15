import '~/css/global.scss'

import type { AppProps } from 'next/app'
import { Inconsolata, Inter, Poppins } from 'next/font/google'
import Head from 'next/head'
import * as React from 'react'

/* CUSTOM APP */

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap'
})

const App = ({ Component, pageProps, ...rest }: AppProps) => {
  const getLayout: GetLayoutFn =
    (Component as any).getLayout ||
    (({ Component, pageProps }) => <Component {...pageProps} />)

  return (
    <>
      <Head>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
        :root {
          --font-heading: ${poppins.style.fontFamily}, var(--font-system), sans-serif;
          --font-body: ${inter.style.fontFamily}, var(--font-system), sans-serif;
          --font-mono: ${inconsolata.style.fontFamily}, var(--font-system), monospace;
        }
        `
          }}
        />
      </Head>
      {/* <Provider> */}
      {getLayout({ Component, pageProps, ...rest })}
      {/* </Provider> */}
    </>
  )
}

/* TYPES */

type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & { pageProps: P }
) => React.ReactNode

/* EXPORT */

export default App
