import '~/css/global.scss'

import type { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import { Inconsolata, Inter, Poppins } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as React from 'react'

import { isDev } from '~/lib/constants'

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
  useOverflowDebuggerInDev()
  useUserIsTabbing()
  useMobileVh()
  useRemoveAnimationOnRouteChangeComplete()

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

/* APP HOOKS */

const useOverflowDebuggerInDev = () => {
  React.useEffect(() => {
    if (!isDev) return
    let mousetrapRef: Mousetrap.MousetrapInstance | undefined = undefined
    import('mousetrap').then(({ default: mousetrap }) => {
      mousetrapRef = mousetrap.bind(['command+i', 'ctrl+i', 'alt+i'], () => {
        document.body.classList.toggle('inspect')
      })
    })

    return () => {
      mousetrapRef?.unbind(['command+i', 'ctrl+i', 'alt+i'])
    }
  }, [])
}

const useUserIsTabbing = () => {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === `Tab`) {
        document.body.classList.add('user-is-tabbing')
      }
    }

    function handleMouseDown() {
      document.body.classList.remove('user-is-tabbing')
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleMouseDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])
}

const useRemoveAnimationOnRouteChangeComplete = () => {
  const router = useRouter()
  const visitedUrls = React.useRef(new Set())

  // Checks if the page has been visted previously
  // if so then it removes the [data-show-animation] attr set to false
  React.useEffect(() => {
    router.events.on('routeChangeComplete', (url) => {
      if (visitedUrls.current.has(url)) {
        const showAnimationElements = document.querySelectorAll(
          '[data-show-animation="true"]'
        )

        if (showAnimationElements.length > 0) {
          showAnimationElements.forEach((element) => {
            element.setAttribute('data-show-animation', 'false')
          })
        }
      }

      visitedUrls.current.add(url)
    })

    // Save initial route
    visitedUrls.current.add(router.route)
    // eslint-disable-next-line
  }, [router.events])
}

const setMobileVh = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const useMobileVh = () => {
  React.useEffect(() => {
    setMobileVh()
    window.addEventListener('resize', setMobileVh)

    return () => {
      window.removeEventListener('resize', setMobileVh)
    }
  }, [])
}

/* TYPES */

export type Page<P = Record<string, unknown>> = NextComponentType<
  NextPageContext,
  Record<string, unknown>,
  P
> & { getLayout?: GetLayoutFn<P> }

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & { pageProps: P }
) => React.ReactNode

/* EXPORT */

export default App
