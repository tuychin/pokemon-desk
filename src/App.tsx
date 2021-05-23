import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import Header from './components/Header';
import NotFoundPage from './pages/NotFound';

import style from './App.module.scss';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <div className={style.root}>
      <Header />
      {match}
    </div>
  ) : (
    <NotFoundPage />
  );
};

export default App;
