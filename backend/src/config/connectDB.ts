import { connect } from "mongoose"
process.loadEnvFile()

const URI_DB = process.env.URI_DB || "mongodb://localhost:27017/api-auth"

const connectDB = async () => {
  try {
    await connect(URI_DB)
    console.log(`Servidor de Mongo DB conectado correctamente}`)
  } catch (error) {
    console.log(`Error al conectarse al servidor de Mongo DB | ${(error as Error).message}`)
  }
}

export { connectDB }