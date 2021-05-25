import React, { useState } from 'react';

import useData from '../../hooks/useData';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard, { IPokemonCardProps } from '../../components/PokemonCard';

import style from './Pokedex.module.scss';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState(null);

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setQuery((state) => ({
      ...state,
      name: evt.target.value,
    }));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return !isLoading ? (
    <div>
      <Layout className={style.contentWrap}>
        <Heading className={style.title} type="h1">
          {data.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={onSearchChange} />
        </div>
        {data.pokemons.map((pokemon: IPokemonCardProps) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </Layout>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default PokedexPage;
