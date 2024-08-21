import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genres {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genres[];
}

const useGenres = () => {
// Telling TS this is an array of Game
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const controller = new AbortController();

    // Provide a generic type argument to get method <> so we know what shape the response will have
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
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

  return { genres, error, isLoading };
};

export default useGenres;