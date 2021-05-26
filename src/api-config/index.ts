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
      getPokemonsById: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons/:id',
        },
      },
    },
  },
};

export default apiConfig;
