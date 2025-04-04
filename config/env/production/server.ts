module.exports = ({ env }) => ({
    url: env('RAILWAY_STATIC_URL', 'http://localhost:1337'),
    host: '0.0.0.0',
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS'),
    },
});