import { AppDataSource } from "./data-source.js"
import { User } from "./entity/User.js"

AppDataSource.initialize().then(async () => {


    console.log("Here you can setup and run express / fastify / any other framework.")



}).catch(error => console.log(error))
