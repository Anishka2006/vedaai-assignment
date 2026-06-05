const Redis = require("ioredis");

export const redisConnection = new Redis({
  host: "127.0.0.1",
  port: 6379,
  maxRetriesPerRequest: null,
});

redisConnection.on("connect", () => {
  console.log("Redis Connected");
});

module.exports = {
  redisConnection,
};