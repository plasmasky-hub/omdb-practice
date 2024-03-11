import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

export const useFetch = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<AxiosError<T> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<T> = await axios.get(url);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
