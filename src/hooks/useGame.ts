import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    // It is an array of object where each object has a platform property of type Platform
    parent_platforms: { platform: Platform }[];
    metacritic: number;
  }
  // Define shape of the response from the API
  // interface FetchGamesResponse {
  //   count: number;
  //   results: Game[];
  // }

const useGame = () => useData<Game>("/games");

//   {
//   // Telling TS this is an array of Game
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {

//     const controller = new AbortController();

//     // Provide a generic type argument to get method <> so we know what shape the response will have
//     setIsLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if(err instanceof CanceledError) return;
//         setError(err.message)
//         setIsLoading(false);});

//     // return a cleanup function 
//     // This will bring error since we did not check for canceled request (resolved)
//     return () => controller.abort();
//   }, []);

//   return { games, error, isLoading };
// };

export default useGame;