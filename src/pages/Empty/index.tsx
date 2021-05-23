import React from 'react';

interface IEmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<IEmptyPageProps> = ({ title }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}>
      <h1>This is {title} page!</h1>
    </div>
  );
};

export default EmptyPage;
