import React from 'react';

const Weather = ( {cur,min,max} ) => {

  return (

    <div>
      <div>Cur: {cur}</div>
      <div>Min: {min}</div>
      <div>Max: {max}</div>
    </div>
  );
}

export default Weather;
