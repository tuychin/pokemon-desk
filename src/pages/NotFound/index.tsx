import React from 'react';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

import Image404 from './assets/Image404.png';
import TeamRocket from './assets/TeamRocket.png';
import Button from '../../components/Button';

import style from './NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <div className={style.root}>
      <div className={style.imageContainer}>
        <img className={style.image} src={Image404} alt="404" />
        <img className={style.image} src={TeamRocket} alt="Team Rocket" />
      </div>

      <div className={style.contentContainer}>
        <div className={style.text}>
          <span className={style.whiteText}>The rocket team</span>{' '}
          <span className={style.blackText}>has won this time.</span>
        </div>

        <Button color="secondary" onClick={() => navigate(LinkEnum.HOME)}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
