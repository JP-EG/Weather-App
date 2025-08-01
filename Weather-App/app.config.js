module.exports = {
    expo: {
        // ... other expo config
        extra: {
            WEATHER_API_KEY: process.env.WEATHER_API_KEY,
            BASE_URL: process.env.BASE_URL,
        },
    },
};
