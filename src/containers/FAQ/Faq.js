import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './faqstyle.css';

export default function Faq() {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const res = await axios.get(
        'https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english'
      );
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
