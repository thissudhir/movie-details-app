import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({ id, poster_path, title, vote_average, vote_count, release_date, rank }: MovieProps) => {

    return (
        <Link href={`/movies/${id}`} asChild>
            
            <TouchableOpacity className="w-32 relative pl-5">
                <Image
                    source={{
                        uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : `https://placehold.co/600x400/1a1a1a/ffffff.png`
                    }}
                    className="w-32 h-48 rounded-lg"
                    resizeMode="cover"
                />
                <View className="absolute bottom-9 -left-3. px-2 py-1 rounded-full">
                    <MaskedView
                        maskElement={
                            <Text className="font-bold text-white text-6xl">{rank}</Text>
                        }
                    >
                        <Image
                            source={images.rankingGradient}
                            className="size-14"
                            resizeMode="cover"
                        />
                    </MaskedView>
                </View>
                <Text className='text-white font-semibold mt-2 text-sm' numberOfLines={1}>{title}</Text>
                <Text className='text-gray-400 text-sm'>{release_date}</Text>
                <View className='flex-row items-center mt-1'>
                    <Ionicons name="star" size={14} color={"#facc15"} />
                    <Text className='text-yellow-400 text-sm ml-1'>{vote_average} ({vote_count})</Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
};

export default TrendingCard;
