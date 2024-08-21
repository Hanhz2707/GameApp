import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";



interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string) => {
// Telling TS this is an array of Game
// Using generic type T to make the hook reusable
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const controller = new AbortController();

    // Provide a generic type argument to get method <> so we know what shape the response will have
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
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
  }, []);

  return { data, error, isLoading };
};

export default useData;