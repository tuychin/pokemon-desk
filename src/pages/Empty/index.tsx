import React from 'react';
import Header from '../../components/Header';

interface IEmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<IEmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is {title} page!</div>
    </div>
  );
};

export default EmptyPage;
