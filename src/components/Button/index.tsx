import React from 'react';

import style from './Button.module.scss';

interface IButtonProps {
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button className={style.root} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
