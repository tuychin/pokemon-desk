import React, { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard, { IPokemonCardProps } from '../../components/PokemonCard';

import style from './Pokedex.module.scss';

const PokedexPage = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch('http://zar.hosthot.ru/api/v1/pokemons')
      .then((res) => res.json())
      .then((data) => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
      })
      .catch(() => {
        setIsError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
          {totalPokemons} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        {pokemons.map((pokemon: IPokemonCardProps) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </Layout>
    </div>
  );
};

export default PokedexPage;
