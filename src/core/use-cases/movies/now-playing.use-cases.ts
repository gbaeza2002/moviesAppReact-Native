import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infraestructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movies.mapper";
import type { Movie } from "../../entities/movie.entity";


export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter):Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing')

        return nowPlaying.results.map( result => MovieMapper.fromMovieDBResulToentity(result))

    } catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - NowPlaying')
    }
}