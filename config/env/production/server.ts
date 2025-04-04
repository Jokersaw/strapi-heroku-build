// Path: ./config/env/production/server.ts`
export default ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'), // Sets the public URL of the application.
    app: {
        keys: env.array('APP_KEYS')
    },
});