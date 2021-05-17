import React from 'react';

import style from './Header.module.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenuItem {
  label: string;
  link: string;
}

const MENU_ITEMS: IMenuItem[] = [
  { label: 'Home', link: '#' },
  { label: 'Pokédex', link: '#' },
  { label: 'Legendaries', link: '#' },
  { label: 'Documentation', link: '#' },
];

const Header = () => {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={style.menuWrap}>
          {MENU_ITEMS.map(({ label, link }) => (
            <a className={style.menuLink} href={link} key={label}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
