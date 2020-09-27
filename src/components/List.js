import React, { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const response = await axios.get(
        'http://localhost:3030/preferences/cities'
      , {
        params: {
          offset: 0,
          limit: 10
        }
      });
      console.log(response.data.data)
      setCityList(response.data.data);
    };

    setTimeout(() => {
      fetchList();
    }, 2000);
  }, []);

  const renderedList = cityList.map((city) => {
    if(!null) {
      return <div key={city.geonameid}>{city.name}</div>
    }
  })

  return (
    <div>
      {renderedList}
    </div>
  );
};

export default List;
