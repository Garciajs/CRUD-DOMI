//routes/colaboradorRoutes.js

import express from "express";
import * as colaboradorController from "../controllers/colaboradorControllers.js";

const router = express.Router();

// Ruta para obtener todos los colaboradores

router.get("/colaboradores", colaboradorController.getAllColaboradores);

// Ruta para obtener un colaborador por su ID

router.get("/colaboradores/:id", colaboradorController.getColaboradorById);

// Ruta para crear un nuevo colaborador

router.post("/colaboradores", colaboradorController.createNewColaborador);

// Actualizar un colaborador

router.put("/colaboradores/:id", colaboradorController.updateColaborador);


// Borrar un colaborador

router.delete("/colaboradores/:id", colaboradorController.deleteColaborador);


export default router;