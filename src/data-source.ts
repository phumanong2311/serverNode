import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User.js"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db.alhuidufnnzmxazdoirb.supabase.co",
    port: 5432,
    username: "postgres",
    password: "xx1QeOvQEXeiLFKk",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
