import type { PokeResponse } from '~/lib/getPokemonFetch'

import s from './welcome.module.css'

export const Welcome = ({ data }: { data: PokeResponse }) => {
  return (
    <div className={s.welcome}>
      <div className={s.container}>
        <div className={s.box}>
          <p>
            👋 Hi there. You are on the basement <code>next-typescript</code>{' '}
            example.
          </p>
        </div>

        <h3>Response</h3>
        <div className={s.box}>
          <ul>
            {data.results.map((pokemon) => (
              <li key={pokemon.name} style={{ textTransform: 'uppercase' }}>
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
