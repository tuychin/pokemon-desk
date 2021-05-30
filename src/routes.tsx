import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import EmptyPage from './pages/Empty';
import PokemonPage, { IPokemonProps } from './pages/Pokemon';

interface IRoute {
  title: string;
  link: LinkEnum;
  component: (props: React.PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id',
}

export const ROUTES: IRoute[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage title="Documentation" />,
  },
];

const DEEP_ROUTES: IRoute[] = [
  {
    title: 'Pokemon',
    link: LinkEnum.POKEMON,
    component: ({ id }: IPokemonProps) => <PokemonPage id={id} />,
  },
];

interface IAccumRoutes {
  [n: string]: (props: React.PropsWithChildren<any>) => JSX.Element;
}

const routes = [...ROUTES, ...DEEP_ROUTES].reduce((acc: IAccumRoutes, item: IRoute) => {
  acc[item.link] = item.component;

  return acc;
}, {});

export default routes;
