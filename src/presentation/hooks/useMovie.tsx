import { useState, useEffect } from 'react';
import { movieDbfetcher } from '../../config/adapters/movieDB.adapters';
import * as UseCases from '../../core/use-cases'
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>()
    const [cast, setCast] = useState<Cast[]>()

    useEffect(() => {
        loadMovie();
    }, [movieId])

    const loadMovie = async () => {
        setIsLoading(true)

        const fullMoviePromise = await UseCases.getMovieIdUseCase(movieDbfetcher, movieId)
        const castPromise = await UseCases.getMovieCastUseCase(movieDbfetcher,movieId );
        

        const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise]);

        setMovie(fullMovie);
        setCast(cast);

        setIsLoading(false)

    }
    return {
        isLoading,
        movie,
        cast
    }
    
}

