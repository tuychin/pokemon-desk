import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import Header from './components/Header';
import Layout from './components/Layout';
import NotFoundPage from './pages/NotFound';

import style from './App.module.scss';

const App = () => {
  const match = useRoutes(routes);

  return (
    <div className={style.root}>
      <Header />
      <Layout>{match || <NotFoundPage />}</Layout>
    </div>
  );
};

export default App;
