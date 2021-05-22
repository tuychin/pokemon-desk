import React from 'react';
import HomePage from './pages/Home';
import Pokedex from './pages/Pokedex';
import EmptyPage from './pages/Empty';

interface IRoute {
  title: string;
  link: LinkEnum;
  component: () => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
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

interface IAccumRoutes {
  [n: string]: () => JSX.Element;
}

const routes = ROUTES.reduce((acc: IAccumRoutes, item: IRoute) => {
  acc[item.link] = item.component;

  return acc;
}, {});

export default routes;
