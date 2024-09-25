import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularMoviesResponse } from '../../../infraestructure/interfaces/movie-db.responses';
import { MovieMapper } from "../../../infraestructure/mappers/movies.mapper";
import type { Movie } from "../../entities/movie.entity";


export const moviesPopularUseCase = async (fetcher: HttpAdapter):Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<PopularMoviesResponse>('/popular')

        return popular.results.map( result => MovieMapper.fromMovieDBResulToentity(result))

    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - PopularUseCase')
    }
}