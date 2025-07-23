import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

const startDate = new Date();
const endDate = new Date();

const formatDate = (date: Date) => date.toISOString().split('T')[0];
const start = formatDate(startDate);
const end = formatDate(endDate);

export const useWeatherByLocation = () => {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLocationAndWeather = async () => {
            const { WEATHER_API_KEY, BASE_URL } = Constants.expoConfig?.extra ?? {};
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') return;

                const loc = await Location.getCurrentPositionAsync({});
                const { latitude, longitude } = loc.coords;

                const response = await fetch(`${BASE_URL}/history.json?key=${WEATHER_API_KEY}&q=${latitude},${longitude}&dt=${start}&end_dt=${end}`);

                const data = await response.json();
                setWeather(data);
                setLocation(data?.location ?? null);
            } catch (err) {
                console.error('Error fetching weather:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchLocationAndWeather();
    }, []);

    return { weather, location, loading };
};