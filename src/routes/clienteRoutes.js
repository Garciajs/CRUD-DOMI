// routes/clienteRoutes.js

import express from "express";
import * as clienteController from "../controllers/clienteControllers.js";

const router = express.Router();

// Ruta para obtener todos los clientes
router.get("/clientes", clienteController.getAllClientes);

// Ruta para obtener un cliente por su ID
router.get("/clientes/:id", clienteController.getClienteById);

// Ruta para crear un nuevo cliente
router.post("/clientes", clienteController.createNewCliente);

// Ruta para actualizar un cliente existente
router.put("/clientes/:id", clienteController.updateCliente);

// Ruta para borrar un cliente
router.delete("/clientes/:id", clienteController.deleteCliente);

export default router;
