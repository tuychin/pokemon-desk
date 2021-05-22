import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFoundPage from './pages/NotFound';

import style from './App.module.scss';

const App = () => {
  const match = useRoutes(routes);

  return <div className={style.root}>{match || <NotFoundPage />}</div>;
};

export default App;
