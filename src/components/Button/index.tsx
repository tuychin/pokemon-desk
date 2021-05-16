import React from 'react';
import cn from 'classnames';

import style from './Button.module.scss';

interface IButtonProps {
  color?: 'primary' | 'secondary';
  size?: 'default' | 'small';
  isFullWidth?: boolean;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = ({
  color = 'primary',
  size = 'default',
  isFullWidth = false,
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(style.root, style[color], style[size], isFullWidth && style.fullWidth)}
      type="button"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
