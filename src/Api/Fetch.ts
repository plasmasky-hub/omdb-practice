import { useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  fetch: (url: string) => void;
}

export const useFetch = <T>(): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError<T> | null>(null);

  const fetch = async (url: string) => {
    setLoading(true);
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      setData(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetch };
};
