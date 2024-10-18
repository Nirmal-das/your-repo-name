import { connect } from 'mongoose'
export const dbConnection = async () => {
    try {
        const DB_CONNECTION: string = 'mongodb://localhost:27017'
        await connect(DB_CONNECTION, { dbName: 'User-Database' });
        console.log("[INFO] DB connected successfully!!");
    } catch (error) {
        console.log("[ERROR] in DB Connection:", error)
    }
}