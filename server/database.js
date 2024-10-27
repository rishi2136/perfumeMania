import mongoose from "mongoose";



export default async function connectDB (db_url) {
    await mongoose.connect(db_url);
}
