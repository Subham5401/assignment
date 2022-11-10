import React, { useEffect, useState } from 'react';
import './contentstyle.css';
import axios from 'axios';

export default function Content() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(
        'https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3'
      );
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getData();
    console.log('Ok');
  }, []);

  return (
    <div>
      <div className='title'>{data.details.title}</div>
    </div>
  );
}
