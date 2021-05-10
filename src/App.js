import React from 'react';
import cn from 'classnames';

import style from './App.modules.scss';
import './custom.css';

const App = () => {
  return (
    <div className={cn(style.header, 'color')}>
      App component is run!
    </div>
  );
};

export default App;
