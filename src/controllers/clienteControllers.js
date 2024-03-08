//controllers/clienteControllers

//importar todos los modelos 

import * as clienteModel from '../models/clienteModels.js';

// Obtener clientes 
export const getAllClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.getClientes();
        console.log(clientes);
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// Obtener un cliente por su ID
export const getClienteById = async (req, res) => {
    try {
        const ID_Cliente = req.params.id;
        const cliente = await clienteModel.getClienteById(ID_Cliente);
        if (cliente) {
            res.status(200).json(cliente); 
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//crear un cliente nuevo
export const createNewCliente = async (req, res) =>{
    try{
        const {nombre,cc_nit,Contacto, Direccion} =req.body;
        if (!nombre || !cc_nit  || !Contacto || !Direccion) {
            return res.status(400).json({message: "faltan datos"});
        }
        const ID_Cliente = await clienteModel.createCliente({nombre,cc_nit,Contacto,Direccion});
        res.status(201).json({id: ID_Cliente,nombre,cc_nit,Contacto,Direccion })
    }catch(error){
        res.status(500).json({message: error.message});
    }
}


// Actualizar un cliente
export const updateCliente = async (req, res) => {
    try {
        const ID_Cliente = req.params.id;
        const { nombre, Contacto, cc_nit, Direccion } = req.body;
        await clienteModel.updateCliente(ID_Cliente, {nombre,cc_nit,Contacto,Direccion})
        res.status(200).json({message: "cliente actualizado"});
    }catch(error){
        res.status(500).json({message: error.message})
    }
}



// Eliminar un cliente
export const deleteCliente = async (req, res) => {
    try {
        const ID_Cliente = req.params.id;
        await clienteModel.deleteCliente(ID_Cliente);
        res.status(200).json({ message: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
