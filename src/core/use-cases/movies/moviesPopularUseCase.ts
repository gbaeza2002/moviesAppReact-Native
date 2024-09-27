import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularMoviesResponse } from '../../../infraestructure/interfaces/movie-db.responses';
import { MovieMapper } from "../../../infraestructure/mappers/movies.mapper";
import type { Movie } from "../../entities/movie.entity";

interface Options {
    page?: number;
    limit?: number;
}
export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?:Options):Promise<Movie[]> => {
    try {
        console.log({page : options?.page ?? 1})
        const popular = await fetcher.get<PopularMoviesResponse>('/popular',{
            params:{
                page: options?.page ?? 1
            }
        });

        return popular.results.map( result => MovieMapper.fromMovieDBResulToentity(result))

    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - PopularUseCase')
    }
}