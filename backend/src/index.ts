import express from 'express';
import { connectDB } from "./config/connectDB";

process.loadEnvFile()

const PORT = process.env.PORT || 2000

const app = express()

app.use(express.json())



app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
  connectDB()
})
