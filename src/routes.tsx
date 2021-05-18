import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/Empty';

interface IRoute {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const ROUTES: IRoute[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <EmptyPage title="Pokedex" />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
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
