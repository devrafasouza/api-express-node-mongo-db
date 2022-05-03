import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:admin@cluster0.2rxep.mongodb.net/alura-node");


let db = mongoose.connection;

export default db;