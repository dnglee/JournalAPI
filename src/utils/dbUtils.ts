import { connectDB } from "../config/database";
import { Database } from "sqlite";

export const withDatabase = async <T>(callback: (db: Database) => Promise<T>): Promise<T> => {
  const db = await connectDB();
  try {
    return await callback(db);
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  } finally {
    await db.close();
  }
};