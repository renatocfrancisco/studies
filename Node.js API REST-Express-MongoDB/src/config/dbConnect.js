import mongoose from "mongoose"

mongoose.connect("mongodb+srv://[user]:[password]@[cluster].dcpd0.mongodb.net/[database]");

let db = mongoose.connection;

export default db;