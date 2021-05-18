import React from 'react';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import style from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={style.root}>
      <div className={style.contentText}>
        <Heading type="h1">Find all your favorite Pokemon</Heading>
        <Heading type="p">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
        <Button onClick={() => console.log('Click button!')}>See Pokemons</Button>
      </div>
      <div className={style.contentParallax}>
        <Parallax />
      </div>
    </div>
  );
};

export default HomePage;
