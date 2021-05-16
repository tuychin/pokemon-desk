import React from 'react';

interface IHeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Heading: React.FC<IHeadingProps> = ({ children, type = 'p' }) => {
  const Wrap = type;
  return <Wrap>{children}</Wrap>;
};

export default Heading;
