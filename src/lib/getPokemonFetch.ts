import { z } from 'zod'

const ZodParser = z.object({
  results: z
    .array(
      z.object({
        name: z.string(),
        url: z.string()
      })
    )
    .nonempty({
      message:
        "This error is triggered randomly on purpose. When thrown, it should cause the build to fail, but in case the site is revalidating, it shouldn't affect the client experience."
    })
})

export type PokeResponse = z.infer<typeof ZodParser>

type GetPokemonFetch = () => Promise<PokeResponse>

export const getPokemonFetch: GetPokemonFetch = async () => {
  // If this number is above ~1500 the request will fail on revalidation
  const randomizer = Math.random() * 3200

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${randomizer}&limit=20`,
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

  // If this parsing fails the revalidation should stop too.
  const data = ZodParser.parse(await response.json())

  return data
}
