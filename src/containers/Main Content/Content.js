import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './contentstyle.css';

export default function Content() {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(
        'https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3'
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
      <div>
        <div>{data && <div className='title'></div>}</div>
      </div>
      <div></div>
    </div>
  );
}
