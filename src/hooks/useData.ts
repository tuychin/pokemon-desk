import { useState, useEffect } from 'react';
import req from '../utils/request';

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      const result = await req(endpoint, query);

      setData(result);
    } catch (error) {
      setIsError(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
