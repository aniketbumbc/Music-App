import { useState, useEffect } from 'react';
import { Music } from '../Models/Model';
import axios from 'axios';

export const useFetch = (baseUrl: string) => {
  const [data, setData] = useState<Music>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    let mounted = true;
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      mounted = false;
    };
  }, [baseUrl]);

  return { data, error, loading };
};
