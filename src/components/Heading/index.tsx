import React from 'react';

interface IHeadingProps {
  className?: string | null | undefined;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Heading: React.FC<IHeadingProps> = ({ children, className, type = 'span' }) => {
  const Wrap = type;
  return <Wrap className={className}>{children}</Wrap>;
};

export default Heading;
