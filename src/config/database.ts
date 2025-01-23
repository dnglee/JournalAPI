import  sqlite3 from "sqlite3";
import dotenv from "dotenv";
import { open , Database} from "sqlite";

dotenv.config();

export const connectDB = async (): Promise<Database> => {
  try{
    console.log(process.env.DATABASE_PATH);
    return open({
      filename: process.env.DATABASE_PATH || "db.sqlite",
      driver: sqlite3.Database,
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
    throw error;
  }
  };
