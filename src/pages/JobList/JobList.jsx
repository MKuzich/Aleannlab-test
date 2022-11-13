import { getData } from 'services/getData';
import { useState, useEffect } from 'react';
import React from 'react';
import { ReactComponent as Location } from '../../images/location.svg';

const JobList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(data => setData(data));
  }, []);

  return (
    <>
      <h1>Its job list</h1>
      <ul>
        {data.map(({ id, name, pictures, title, address, city }) => (
          <li key={id}>
            <img src={pictures[0]} alt={title} />
            <div>
              <h2>{title}</h2>
              <p>
                {name} {address}
              </p>
              <p>
                <Location /> {city}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default JobList;
