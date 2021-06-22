import React from 'react';

const Location = ( {temperatures }) => {


  return (
    <div className="city-box">
        {( temperatures.cod === 200 ? (
          <h2>The weather in: {temperatures.name}</h2>
        ) : (
          <h2>{temperatures.message}</h2>
        )
        )}
    </div>
  );
}

export default Location;
