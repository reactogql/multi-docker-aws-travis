const keys = require("./keys");
const redis = require("redis");

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000 // in ms
});

const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

sub.on("message", (channel, msg) => {
  console.log("WORKER      &&&&&&&&&&&&&");
  console.log(msg);
  console.log("WORKER      &&&&&&&&&&&&&");
  redisClient.hset("values", msg, fib(parseInt(msg)));
});
