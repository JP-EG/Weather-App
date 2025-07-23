import { View, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherHeaderDetails from "@/components/WeatherHeaderDetails";
import SearchBar from "@/components/SearchBar";
import { useWeatherByLocation } from '@/hooks/useWeatherByLocation';

const Index = () => {
    const { weather, location, loading } = useWeatherByLocation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <View>
                    <SearchBar
                        onChangeText={text => console.log(text)}
                        onSearchPress={() => console.log('Image pressed')}
                    />
                    <WeatherHeaderDetails location={location} loading={loading} />
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

export default Index;

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderRadius: 12,
        backdropFilter: 'blur(10px)',
        paddingTop: 50,
        width: 390,
        height: 844,
        flex: 1,
    },
});