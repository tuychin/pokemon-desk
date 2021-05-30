export const apiConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      getPokemonById: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/:id',
        },
      },
    },
  },
};

export default apiConfig;
