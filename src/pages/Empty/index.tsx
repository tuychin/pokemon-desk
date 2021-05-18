import React from 'react';

interface IEmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<IEmptyPageProps> = ({ title }) => {
  return <div>This is {title} page!</div>;
};

export default EmptyPage;
