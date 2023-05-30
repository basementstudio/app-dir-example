import Link from 'next/link'
import React from 'react'

import { Welcome } from '~/components/common/welcome'
import { getPokemonFetch } from '~/lib/getPokemonFetch'

const HomePage = async () => {
  const pokemon = await getPokemonFetch()

  return (
    <>
      <Welcome data={pokemon} />
      <Link href="/example#with-hash">Go to title in content</Link>
    </>
  )
}

export default HomePage
