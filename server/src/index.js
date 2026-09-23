import { app } from './app.js'
import dotenv from 'dotenv'
import connectDB from './db/index.js'

// env config
dotenv.config({
  path: "./.env"
})

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  })
}
).catch((err) => {
  console.log("MongoDB connection error", err);
})