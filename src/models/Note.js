import { Schema, model } from "mongoose";

// Tabla de notas
const NoteSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        color:{
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("Note", NoteSchema);
