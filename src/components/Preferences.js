import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Preferences = () => {
  const [cityId, setCityId] = useState([]);

  useEffect(() => {
    const submit = async () => {
      const response = await axios.patch(
        'http://localhost:3030/preferences/cities',
        { 2643741: true, }
      );
      setCityId(response.data)
    };

    submit();
  }, []);

  return (
    <div>
      Preferences
    </div>
  );
};

export default Preferences;
