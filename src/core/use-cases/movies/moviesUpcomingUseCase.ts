import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { UpComingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movies.mapper";
import { Movie } from "../../entities/movie.entity";

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> =>{
    try {
        const upcoming = await fetcher.get<UpComingResponse>('/upcoming');

        return upcoming.results.map(result => MovieMapper.fromMovieDBResulToentity(result))

    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - upcomingUseCase')
    }
}