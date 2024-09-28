import React, { useRef } from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { PosterCarousel } from '../../components/movies/PosterCarousel'
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel'
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader'

export const HomeScreen = () => {

    

    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} = useMovies();

    if (isLoading){
        return <FullScreenLoader/>
    }

    return (
        <ScrollView>
            <View style={{marginTop: top + 5, paddingBottom: 30,}}>

                {/* Carrusel Principal */}
                <PosterCarousel movies={nowPlaying}/>

                {/* Peliculas populares */}
                <HorizontalCarousel movies={popular} title='Populares' loadNextPage={popularNextPage}/>

                {/* Mejor calificadas*/}
                <HorizontalCarousel movies={topRated} title='Mejor calificadas'/>

                {/* Proximamente */}
                <HorizontalCarousel movies={upcoming} title='Proximamente'/>
            </View>
        </ScrollView>

    )
}
