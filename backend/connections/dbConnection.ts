import { connect } from 'mongoose';

export const dbConnection = async () => {
    try {
        const DB_CONNECTION: string = 'mongodb+srv://admin:Mounika%40321@registration-forms.etdzg.mongodb.net/?retryWrites=true&w=majority&appName=Registration-forms';
        await connect(DB_CONNECTION, { dbName: 'User-Database' });
        console.log("[INFO] DB connected successfully!!");
    } catch (error) {
        console.log("[ERROR] in DB Connection:", error);
    }
};
