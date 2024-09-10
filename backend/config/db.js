import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB server connected :: ${conn.connection.host} `);
  } catch (error) {
    console.log(`Error message: ${error.message}`);
    process.exit(1);
    // process.exit() will force the process to exit as quickly as possible even if there are still asynchronous operations pending that have not yet completed fully. To exit with a 'failure' code: The shell that executed Node.js should see the exit code as 1.
  }
};
