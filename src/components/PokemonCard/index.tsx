import React from 'react';
import cn from 'classnames';

import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
import Heading from '../Heading';

import style from './PokemonCard.module.scss';

import { TypePokemon } from '../../interface/pokemons';

export interface IPokemonCardProps extends TypePokemon {
  className?: string | null | undefined;
  onClick: () => void;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({
  className = null,
  name,
  stats: { attack, defense },
  types,
  img,
  id,
  onClick,
}) => {
  return (
    <div className={cn(style.root, className)} role="button" tabIndex={id} onClick={onClick} onKeyDown={onClick}>
      <div className={style.infoWrap}>
        <Heading size="xs" className={style.titleName}>
          {toCapitalizeFirstLetter(name)}
        </Heading>
        <div className={style.statWrap}>
          <div className={style.statItem}>
            <div className={style.statValue}>{attack}</div>
            Attack
          </div>
          <div className={style.statItem}>
            <div className={style.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={style.labelWrap}>
          {types.map((type: string) => (
            <span className={style.label} key={type}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={style.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
