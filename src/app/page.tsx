import Link from 'next/link'
import React from 'react'

import { Welcome } from '~/components/common/welcome'
import { getPokemonFetch } from '~/lib/getPokemonFetch'

const HomePage = async () => {
  const pokemon = await getPokemonFetch()

  return (
    <>
      <Link href="/example#with-hash" style={{
          margin: '0 auto',
          display: 'block',
          width: 'fit-content',
          fontSize: 24,
          color: 'orangered'}}>
        Go to title in content
      </Link>
      <Welcome data={pokemon} />
    </>
  )
}

export default HomePage
