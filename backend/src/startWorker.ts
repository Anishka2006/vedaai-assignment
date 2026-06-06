require("dotenv").config();

const {
  connectDB,
} = require("./config/db");

async function start() {
  await connectDB();

  require(
    "./workers/generation.worker"
  );

  console.log(
    "Worker MongoDB Connected"
  );
}

start();