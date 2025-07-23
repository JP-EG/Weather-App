import 'dotenv/config';

export default {
    expo: {
        extra: {
            WEATHER_API_KEY: process.env.WEATHER_API_KEY,
            BASE_URL: process.env.BASE_URL,
        },
    },
};