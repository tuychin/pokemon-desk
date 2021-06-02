import getEndpointParams from '../getEndpointParams';

describe('getEndpointParams', () => {
  test('Должна принимать аргументы "getPokemons" и пустой объект, и возвращать объект с полями pathname, protocol, host и пустой query', () => {
    const url = getEndpointParams('getPokemons', {});

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });

  test('Должна принимать аргументы "getPokemons" и {name: Pikachu}, и возвращать объект с полями pathname, protocol, host и query с name равным Pikachu', () => {
    const url = getEndpointParams('getPokemons', { name: 'Pikachu' });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: { name: 'Pikachu' },
      },
      body: {},
    });
  });

  test('Должна принимать аргументы "getPokemons" и {id: 25}, и возвращать объект с полями pathname, protocol, host и пустой query', () => {
    const url = getEndpointParams('getPokemons', { id: 25 });

    expect(url).toEqual({
      method: 'GET',
      uri: {
        protocol: 'http',
        host: 'zar.hosthot.ru',
        pathname: '/api/v1/pokemons',
        query: {},
      },
      body: {},
    });
  });
});
