// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ Database connected");
//   } catch (err) {
//     console.error("❌ DB error:", err.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// const mongoose = require("mongoose");

// let isConnected = false;

// const connectDB = async () => {
//   if (isConnected) return;

//   const db = await mongoose.connect(process.env.MONGO_URI);
//   isConnected = db.connections[0].readyState;
//   console.log("✅ Database connected");
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("✅ MongoDB connected");
  return cached.conn;
}

module.exports = connectDB;
