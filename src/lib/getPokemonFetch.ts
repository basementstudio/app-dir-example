export const getPokemonFetch = async () => {
  // If this number is above ~1500 the request will fail on revalidation
  const randomizer = Math.random() * 3200

  if (randomizer > 1500) {
    throw new Error('intentionally throw an error.')
  }

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=20`,
    {
      next: { revalidate: 1 },
      method: 'GET'
    }
  )

  if (response.status !== 200) {
    throw new Error(
      'Unexpected response on the API: in this case the application should show the last successful data and avoid leaking this error to the client.'
    )
  }

  return await response.json()
}
