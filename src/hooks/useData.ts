import { useState, useEffect } from 'react';
import req from '../utils/request';

const useData = <T>(endpoint: string, query: object, deps: any[] = [], endpointId?: string | number) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const getData = async (): Promise<void> => {
    try {
      const result = await req<T>(endpoint, query, endpointId);

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
