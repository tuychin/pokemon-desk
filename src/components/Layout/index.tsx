import React from 'react';
import cn from 'classnames';

import style from './Layout.module.scss';

interface ILayoutProps {
  className: string | null | undefined;
}

const Layout: React.FC<ILayoutProps> = ({ children, className = null }) => (
  <div className={cn(style.root, className)}>{children}</div>
);

export default Layout;
