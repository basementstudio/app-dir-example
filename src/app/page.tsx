import React from 'react'

import { Welcome } from '~/components/common/welcome'
import { getPokemonFetch } from '~/lib/getPokemonFetch'

const HomePage = async () => {
  const pokemon = await getPokemonFetch()

  return (
    <>
      <Welcome data={pokemon} />
    </>
  )
}

export default HomePage
