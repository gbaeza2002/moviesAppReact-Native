import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";


export const movieDbfetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        //api_key:'c0c22e608c7a76f055f6e5eb6166ed16',
        api_key: THE_MOVIE_DB_KEY ?? 'NO-KEY',
        language:'es'
    }
})