import React from 'react';
import cn from 'classnames';

import style from './Layout.module.scss';

const Layout = ({ children, className = null }) => <div className={cn(style.root, className)}>{children}</div>;

export default Layout;
