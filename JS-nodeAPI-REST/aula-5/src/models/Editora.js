import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
    },
    {
        versionKey: false
    }
)

const editora = mongoose.model("editora", autorSchema)

export default editora;