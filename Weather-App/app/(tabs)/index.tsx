import { View, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherHeaderDetails from '@/components/WeatherHeaderDetails';
import WeatherIcon from '@/components/WeatherIcon';
import SearchBar from '@/components/SearchBar';
import HourlyForecast from '@/components/HourlyForecast';
import { useWeatherByLocation } from '@/hooks/useWeatherByLocation';
import {getHourIndex} from "@/utils/time";
import WeatherTempAndCondition from "@/components/WeatherTempAndCondition";
import HumidityDisplay from "@/components/HumidityDisplay";
import WindSpeedDisplay from "@/components/WindSpeedDisplay";

const Index = () => {
    const { weather, location, loading } = useWeatherByLocation();
    const hourIndex = getHourIndex();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <View>
                    <SearchBar
                        onChangeText={text => console.log(text)}
                        onSearchPress={() => console.log('Image pressed')}
                    />
                    <WeatherHeaderDetails location={location} loading={loading} />
                    <View style={styles.icon_and_temp}>
                        <WeatherIcon code={weather?.forecast?.forecastday[0]?.hour[hourIndex]?.condition?.code} />
                        <WeatherTempAndCondition temp_c={weather?.forecast?.forecastday[0]?.hour[hourIndex]?.temp_c} conditionalText={weather?.forecast?.forecastday[0]?.hour[hourIndex]?.condition.text}/>
                    </View>
                    <View style={styles.humidity_and_wind}>
                        <HumidityDisplay humidity={weather?.forecast?.forecastday[0]?.hour[hourIndex]?.humidity}/>
                        <WindSpeedDisplay windMph={weather?.forecast?.forecastday[0]?.hour[hourIndex]?.wind_mph}/>
                    </View>
                    <HourlyForecast hours={weather?.forecast?.forecastday[0]?.hour || []} />
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
        paddingTop: 50,
        width: 390,
        height: 844,
        flex: 1,
    },
    icon_and_temp: {
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    humidity_and_wind: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});