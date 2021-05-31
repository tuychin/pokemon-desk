import React from 'react';
import useData from '../../hooks/useData';

import { IPokemons } from '../../interface/pokemons';

interface IPokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<IPokemonProps> = ({ id }) => {
  const { data } = useData<IPokemons>('getPokemonById', { id }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}>
      <h1>Page id: {id}</h1>
      <h2>Pokemon name: {data?.name_clean}</h2>
    </div>
  );
};

export default PokemonPage;
