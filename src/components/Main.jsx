import React from 'react';

const Main = ({baseUrl}) => {
  return (
    <>
      <div className="main-logo">
        <img src={baseUrl + '/react.png'} alt="react"/>
      </div>
    </>
  );
};

export default Main;