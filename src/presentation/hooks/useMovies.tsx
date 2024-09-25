import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"

import * as UseCases from '../../core/use-cases'
import { movieDbfetcher } from "../../config/adapters/movieDB.adapters";

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, [])
    


    const initialLoad = async() =>{
        

        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDbfetcher)
        const popularPromise = UseCases.moviesUpcomingUseCase(movieDbfetcher)
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDbfetcher)
        const upcomingPromise = UseCases.moviesPopularUseCase(movieDbfetcher)


        const [ 
            nowPlayingMovies, 
            popularMovies, 
            topRatedMovies, 
            upcomingMovies] = await Promise.all([
                nowPlayingPromise, 
                popularPromise, 
                topRatedPromise, 
                upcomingPromise
            ]);
            
        setNowPlaying(nowPlayingMovies);
        setPopular(popularMovies);
        setTopRated(topRatedMovies);
        setUpcoming(upcomingMovies);

        setisLoading(false);

        console.log({
            nowPlayingMovies, 
            popularMovies, 
            topRatedMovies, 
            upcomingMovies
        })
    }

    return {
        isLoading,
        nowPlaying,
        popular,
        topRated,
        upcoming,
    }
}