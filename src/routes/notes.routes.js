import { Router } from "express";
import * as NoteCtrl from "../controllers/note.controller";
import { check } from "express-validator";

const router = Router();

//crear nota
router.post(
    "/",
    [
        check("title", "El titulo es obligatorio").not().isEmpty(),
        check("description", "La descripción es obligatoria").not().isEmpty(),
        check("color", "El color es obligatorio").not().isEmpty(),
    ],
    NoteCtrl.createNote
);
//Editar notas
router.put(
    "/:id",
    NoteCtrl.updateNote
);
//Eliminar nota
router.delete("/:id", NoteCtrl.deleteNote);
//Obtener notas
router.get("/", NoteCtrl.getNotes);
export default router;
