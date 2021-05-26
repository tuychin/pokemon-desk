import React from 'react';
import useData from '../../hooks/useData';

import { IPokemons } from '../../interface/pokemons';

interface IPokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<IPokemonProps> = ({ id }) => {
  const { data } = useData<IPokemons>('getPokemonById', {}, [], id);
  console.log(data);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}>
      <h1>Page id: {id}</h1>
    </div>
  );
};

export default PokemonPage;
