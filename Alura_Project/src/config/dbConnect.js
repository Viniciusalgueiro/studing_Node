import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:adminadmin@cluster0.aknwqzw.mongodb.net/alura-node");

let db = mongoose.connection
export default db