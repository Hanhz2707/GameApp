import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";



interface FetchResponse<Type> {
    count: number;
    results: Type[];
}

const useData = <Type>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
// Telling TS this is an array of Game
// Using generic type T to make the hook reusable
  const [data, setData] = useState<Type[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const controller = new AbortController();

    // Provide a generic type argument to get method <> so we know what shape the response will have
    setIsLoading(true);
    apiClient
      .get<FetchResponse<Type>>(endpoint, { signal: controller.signal , ...requestConfig})
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false);});

    // return a cleanup function 
    // This will bring error since we did not check for canceled request (resolved)
    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};

export default useData;