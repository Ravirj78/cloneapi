const config = {
    port: process.env.PORT || 3300,
    baseUrl: process.env.BASE_URL || 'http://localhost:3300',
    mongoUrl: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/cloneApi',
    mongoBaseUrl: process.env.MONGODB_BASE_URL || 'mongodb://127.0.0.1:27017/',
    redisUrl: process.env.REDIS_URL || "redis://localhost:6379"
};


module.exports = config;