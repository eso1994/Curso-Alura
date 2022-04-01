import mongoose from "mongoose"

mongoose.connect("mongodb+srv://eso1994:winter23@cluster0.c4hwn.mongodb.net/alura-node")

let db = mongoose.connection

export default db