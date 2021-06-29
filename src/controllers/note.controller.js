import { validationResult } from "express-validator";
import Note from "../models/Note";

//Crear nota
export const createNote = async (req, res) => {
    //Verificar errores con el modulo de express-validator
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    try {
        const { body } = req;
        //Crear objeto de la nota
        const newNote = new Note(body);
        //Guardar la nota en la base de datos
        await newNote.save();
        //Enviar mensaje de confirmación
        res.status(201).json({ msg: "Nota creada" });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo ocurrio mal",
        });
    }
};
//Editar nota
export const updateNote = async (req, res) => {
    try {
        const { body, params } = req;
        const { id } = params;
        //Buscar si el id de la nota existe
        const noteSearch = await Note.findById(id);
        //Comprobar si la nota existe
        if (!noteSearch) {
            return res.status(404).json({ msg: "No existe la nota" });
        }
        //Actualizar la nota por medio del id
        await Note.findByIdAndUpdate(id, body);
        //Enviar mensaje de confirmación
        res.status(200).json({ msg: "Nota actualizada" });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo ocurrio mal",
        });
    }
};
//Eliminar nota
export const deleteNote = async (req, res) => {
    try {
        const { params } = req;
        const { id } = params;
        //Buscar si el id de la nota existe
        const noteSearch = await Note.findById(id);
        //Comprobar si la nota existe
        if (!noteSearch) {
            return res.status(404).json({ msg: "No existe la nota" });
        }
        //Busacar la nota y eliminarla
        await Note.findByIdAndDelete(id);
        //Enviar mensaje de confirmación
        res.status(200).json({ msg: "Nota eliminada" });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo ocurrio mal",
        });
    }
};
//Obtener notas
export const getNotes = async (req, res) => {
    try {
        //Obtener notas
        const notes = await Note.find();
        //Enviar notas
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Algo ocurrio mal",
        });
    }
};
