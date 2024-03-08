//models/colaboradorModles
//creacion modelo colaborador

import { dbConfig } from '../config/dbconfig.js';
import mysql from'mysql2/promise';

const pool = mysql.createPool(dbConfig); //abrimos conexion

//obtener todos los colaboradores

export const getColaboradores = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM colaboradores');
        return rows;
    } catch (error) {
        throw new Error('Error al obtener colaboradores:'+ error.message);
    }
};

//obtener colaborador por id
export const getColaboradorById = async (ID_Colaborador) => {
    try {
        const [rows] = await pool.query('SELECT * FROM colaboradores WHERE ID_Colaborador =?', [ID_Colaborador]);
        return rows[0];
    }catch(error){
        throw new Error('Error al obtener colaborador por ID:'+ error.message);
    }
}

//crear colaborador
export const createColaborador = async (colaboradorData) =>{
    try{
        await pool.query('INSERT INTO colaboradores (cod,Nombre,cc,Contacto,ID_Vehiculo) VALUES (?,?,?,?,?)', [colaboradorData.cod, colaboradorData.Nombre, colaboradorData.cc, colaboradorData.Contacto, colaboradorData.ID_Vehiculo]);
    }catch(error){
        throw new Error('Error al crear colaborador:'+ error.message);
    }
};

//actualizar colaborador
export const updateColaborador = async (ID_Colaborador,ColaboradorData) => {
    await pool.query ('UPDATE colaboradores SET cod =?, Nombre =?, cc =?, Contacto=?, ID_Vehiculo=? WHERE  ID_Colaborador =?',[ColaboradorData.cod,ColaboradorData.Nombre,ColaboradorData.cc,ColaboradorData.Contacto, ColaboradorData.ID_Vehiculo,ID_Colaborador])
}

//eliminar colaborador exitente
export const deleteColaborador = async (ID_Colaborador) =>{
    try {
        await pool.query('DELETE FROM colaboradores WHERE ID_Colaborador =?', [ID_Colaborador]);
    }catch(error){
        throw new Error('Error al eliminar colaborador:'+ error.message);
    }
}