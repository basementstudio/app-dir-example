import Link from 'next/link'
import React from 'react'

import { getPokemonFetch } from '~/lib/getPokemonFetch'

import s from './welcome.module.css'

const HomePage = async () => {
  const pokemon = await getPokemonFetch()

  return (
    <>
      <Link
        href="/example"
        style={{
          margin: '0 auto',
          display: 'block',
          width: 'fit-content',
          fontSize: 24,
          color: 'orangered'
        }}
      >
        Go to static page
      </Link>

      <div className={s.welcome}>
        <div className={s.container}>
          <div className={s.box}>
            The list below is updated on revalidation and can fail!
          </div>
          <h3>Response</h3>
          <div className={s.box}>
            <pre>{JSON.stringify(pokemon, null, 2)}</pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
