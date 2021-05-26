import React from 'react';

interface IPokemonProps {
  id: string | number;
}

const PokemonPage: React.FC<IPokemonProps> = ({ id }) => {
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
