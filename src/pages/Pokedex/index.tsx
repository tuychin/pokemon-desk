import React, { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard, { IPokemonCardProps } from '../../components/PokemonCard';

import req from '../../utils/request';

import style from './Pokedex.module.scss';

const usePokemons = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getPokemons = async () => {
    try {
      const result = await req('getPokemons');

      setData(result);
    } catch (error) {
      setIsError(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div>
      <Layout className={style.contentWrap}>
        <Heading className={style.title} type="h1">
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        {data.pokemons.map((pokemon: IPokemonCardProps) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </Layout>
    </div>
  );
};

export default PokedexPage;
