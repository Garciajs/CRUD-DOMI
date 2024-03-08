//controllers/colaboradorController

import *as colaboradorModel from '../models/colaboradorModels.js';

//Obtener colaborador

export const getAllColaboradores = async (req, res) => {
    try {
        const colaboradores = await colaboradorModel.getColaboradores();
        console.log(colaboradores);
        res.status(200).json(colaboradores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//obtener colaborador por id

export const getColaboradorById = async (req,res) => {
    try {
        const ID_Colaborador = await req.params.id;const colaborador = await colaboradorModel.getColaboradores(ID_Colaborador);
        if (colaborador) {
            res.status(200).json(colaborador);
        } else {
            res.status(404).json({ message: 'Colaborador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//crear colaborador
export const createNewColaborador =async (req, res) =>{
    try{
        const {cod,Nombre,cc,Contacto,ID_Vehiculo}= req.body;
        if (!cod ||!Nombre ||!cc ||!Contacto ||!ID_Vehiculo) {
            return res.status(400).json({message: "faltan datos"});
        }
        const ID_Colaborador = await colaboradorModel.createColaborador({cod,cc,Contacto,ID_Vehiculo});
        res.status (201).json ({id: ID_Colaborador,cod,Nombre,cc,Contacto,ID_Vehiculo})
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

//actualizar colaborador
export const updateColaborador = async (req,res) => {
    try{
        const ID_Colaborador = req.params.id;
        const {cod,Nombre,cc,Contacto,ID_Vehiculo}= req.body;
        await colaboradorModel.updateColaborador({cod,Nombre,cc,Contacto,ID_Vehiculo})
        res.status(200).json({message: "colaborador updated"})
    }catch(error){
        res.status(500).json({message: error.message});
    }
}


//eliminar colaborador
export const deleteColaborador =async (req, res) =>{
    try {
        const ID_Colaborador = await req.params.id;
        await colaboradorModel.deleteColaborador(ID_Colaborador);
        res.status(200).json({message: "Cliente Eliminado"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}