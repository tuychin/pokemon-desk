import React from 'react';
import pokemons from './mockData';

import Layout from '../../components/Layout';
import PokemonCard, { IPokemonCardProps } from '../../components/PokemonCard';

import style from './Pokedex.module.scss';

const PokedexPage = () => {
  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        {pokemons.map((pokemon: IPokemonCardProps) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </Layout>
    </div>
  );
};

export default PokedexPage;
