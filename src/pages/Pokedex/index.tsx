import React from 'react';
import pokemons from './mockData';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PokemonCard, { IPokemonCardProps } from '../../components/PokemonCard';

import style from './Pokedex.module.scss';

const PokedexPage = () => {
  return (
    <>
      <Header />
      <div className={style.root}>
        <Layout className={style.contentWrap}>
          {pokemons.map((pokemon: IPokemonCardProps) => (
            <PokemonCard key={pokemon.name} {...pokemon} />
          ))}
        </Layout>
      </div>
    </>
  );
};

export default PokedexPage;
