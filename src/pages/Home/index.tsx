import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

import Layout from '../../components/Layout';
import Button from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';

import style from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={style.root}>
      <Layout className={style.contentWrap}>
        <div>
          <Heading className={style.title} type="h1">
            Find all your favorite Pokemon
          </Heading>
          <Heading className={style.description} type="h3">
            You can know the type of Pokemon, its strengths, disadvantages and abilities
          </Heading>
          <Button onClick={() => navigate(LinkEnum.POKEDEX)}>See Pokemons</Button>
        </div>
        <div>
          <Parallax />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
