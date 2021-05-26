import React, { useState } from 'react';

import useData from '../../hooks/useData';
import useDebounce from '../../hooks/useDebounce';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import style from './Pokedex.module.scss';

import { TypePokemon, IPokemons } from '../../interface/pokemons';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery | null>(null);
  const debounceValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debounceValue]);

  const onSearchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
    setQuery((state: IQuery) => ({
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
          {data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div>
          <input type="text" value={searchValue} onChange={onSearchChange} />
        </div>
        {data?.pokemons.map((pokemon: TypePokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon} />
        ))}
      </Layout>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default PokedexPage;
