import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchData = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setData(response.data.items);
  };

    fetchData();
  }, [url]);

  return data;
};