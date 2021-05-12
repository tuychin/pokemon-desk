import React from 'react';
import cn from 'classnames';

import style from './App.module.scss';

const App = () => {
  console.log('###: logs');

  return <div className={cn(style.header, 'color')}>App component is run!</div>;
};

export default App;
