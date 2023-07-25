import { z } from 'zod'

const ZodParser = z.object({
  results: z
    .array(
      z.object({
        name: z.string(),
        url: z.string()
      })
    )
    .nonempty()
})

export type PokeResponse = z.infer<typeof ZodParser>

type GetPokemonFetch = () => Promise<PokeResponse>

export const getPokemonFetch: GetPokemonFetch = async () => {
  // If this number is above ~1500 the request will fail on revalidation
  const randomizer = Math.random() * 2500

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${randomizer}&limit=20`,
    {
      next: { revalidate: 10 },
      method: 'GET'
    }
  )

  if (response.status !== 200) {
    throw new Error("Unexpected response on the API, we shouldn't revalidate")
  }

  // If this parsing fails the revalidation should stop too.
  const data = ZodParser.parse(await response.json())

  return data
}
