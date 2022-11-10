import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Tag() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(
        'https://api.acharyaprashant.org/v2/legacy/courses/tags'
      );
      setData(res.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
}
