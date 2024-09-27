import { Text, View } from "react-native"
import { FullMovie } from "../../../core/entities/movie.entity"
import { Formatter } from "../../../config/helpers/formatter";
import { Cast } from "../../../core/entities/cast.entity";
import { FlatList } from "react-native-gesture-handler";
import { CastActor } from "../cast/CastActor";

interface Props {
    movie: FullMovie;
    cast: Cast[];
}

export const MovieDetails = ({ movie, cast}: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text
                        style={{ color: 'black' }}
                    >
                        {movie.rating}
                    </Text>

                    <Text
                        style={{ color: 'black', marginLeft: 5 }}
                    >
                        - {movie.genres.join(',')}
                    </Text>
                </View>

                <Text
                    style={{ color: 'black', fontSize: 23, marginTop: 10, fontWeight: 'bold' }}
                >
                    Historia
                </Text>
                <Text style={{ color: 'black', fontSize: 16 }}>{movie.description}</Text>

                <Text
                    style={{ color: 'black', fontSize: 23, marginTop: 10, fontWeight: 'bold' }}
                >
                    Presupuesto
                </Text>
                <Text style={{ color: 'black', fontSize: 16 }}>{Formatter.currency(movie.budget)}</Text>

                {/* Casting */}
                <View>
                    <Text
                        style={{ color: 'black', fontSize: 23,marginVertical:10, fontWeight: 'bold'}}
                    >
                        Actores
                    </Text>

                    <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={ ({item}) => 
                        <CastActor actor={item}/>
                    }
                    />
                </View>
            </View>
        </>
    )
}
