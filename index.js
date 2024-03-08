// Importar Express y las rutas de los clientes
import express from "express";
import clienteRoutes from "./src/routes/clienteRoutes.js"; 

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto en el que la aplicación escuchará las solicitudes
const PORT = process.env.PORT || 3000;

// Configurar Express para analizar las solicitudes entrantes con formato JSON
app.use(express.json());

// Utilizar las rutas definidas en clienteRoutes.js
// Las rutas estarán precedidas por /api
app.use('/api', clienteRoutes);

// Iniciar el servidor Express y escuchar en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
