import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDbMovie } from '../../../infraestructure/interfaces/movie-db.responses';
import { MovieMapper } from "../../../infraestructure/mappers/movies.mapper";
import { FullMovie } from '../../entities/movie.entity';

interface Options{
    movieId: number;
}

export const getMovieIdUseCase = async (
    fetcher: HttpAdapter,
    movieId: number
): Promise<FullMovie> => {
    try {
        
        //fetcher
        const movie = await fetcher.get<MovieDbMovie>(`/${movieId}`)

        //Mapeo
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);

        //return fullMovie
        return fullMovie; 

    } catch (error) {
        throw new Error(`Cannot get movie by id: ${ movieId }`)
    }
};
