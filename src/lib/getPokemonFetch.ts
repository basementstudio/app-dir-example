export const getPokemonFetch = async () => {
  // fail during runtime but not build time
  if (process.env.NEXT_PHASE !== 'phase-production-build') {
    throw new Error('intentionally throw an error.')
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`, {
    next: { revalidate: 1 },
    method: 'GET'
  })

  if (response.status !== 200) {
    throw new Error(
      'Unexpected response on the API: in this case the application should show the last successful data and avoid leaking this error to the client.'
    )
  }

  return await response.json()
}
