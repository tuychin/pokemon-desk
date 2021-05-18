import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import { ROUTES } from '../../routes';

import style from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

const Header = () => {
  const path = usePath();
  console.log('path:', path);

  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.pokemonLogo}>
          <PokemonLogoSvg />
        </div>

        <div className={style.menuWrap}>
          {ROUTES.map(({ title, link }) => (
            <A
              className={cn(style.menuLink, {
                [style.activeLink]: link === path,
              })}
              href={link}
              key={title}>
              {title}
            </A>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
