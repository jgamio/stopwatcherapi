module.exports = {
    api: {
        port: process.env.PORT || 3000
    },
    postgresql: {
        host: process.env.POSTGRESQL_HOST || '',
        user: process.env.POSTGRESQL_USER  ||'',
        password: process.env.POSTGRESQL_PASSWORD || '',
        database: process.env.POSTGRESQL_DATABASE || ''
    }
};