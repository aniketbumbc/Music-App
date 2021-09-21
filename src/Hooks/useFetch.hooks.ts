import { useState, useEffect } from 'react';
import { Music } from '../Models/Model';
import axios from 'axios';

export const useFetch = (baseUrl: string) => {
  const [data, setData] = useState<Music>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(baseUrl)
      .then((responese) => {
        if (responese.status === 200) {
          setLoading(false);
          setData(responese.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        console.log(error);
      });
    return () => {
      source.cancel();
    };
  }, [baseUrl]);

  return { data, error, loading };
};
