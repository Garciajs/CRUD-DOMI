//models/clientModel.js
//creacion modelo cliente

import { dbConfig } from '../config/dbconfig.js';
import mysql from 'mysql2/promise';

const pool = mysql.createPool(dbConfig); //abrimos conexion

//obtener todos los clientes
export const getClientes = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM clientes');
        return rows;
    } catch (error) {
        throw new Error('Error al obtener clientes: ' + error.message);
    }
};

//obtener cliente por id
export const getClienteById = async (ID_Cliente) => {
    try {
        const [rows] = await pool.query('SELECT * FROM clientes WHERE ID_Cliente = ?', [ID_Cliente]);
        return rows[0];
    } catch (error) {
        throw new Error('Error al obtener cliente por ID: ' + error.message);
    }
};

//crear cliente
export const createCliente = async (clienteData) => {
    try {
        await pool.query('INSERT INTO clientes (Nombre, cc_nit, Contacto, Direccion) VALUES (?, ?, ?, ?)', [clienteData.Nombre,  clienteData.cc_nit, clienteData.Contacto,  clienteData.Direccion]);
    } catch (error) {
        throw new Error('Error al crear cliente: ' + error.message);
    }
};


//actualizar client
export const updateCliente = async (ID_Cliente,clienteData) => {
    await pool.query('UPDATE clientes SET nombre = ?, cc_nit = ?, contacto = ?, Direccion = ? WHERE ID_cliente = ?',[clienteData.Nombre,clienteData.cc_nit, clienteData.Contacto,clienteData.Direccion, ID_Cliente])
}

//eliminar cliente existente
export const deleteCliente = async (ID_Cliente) => {
    try {
        await pool.query('DELETE FROM clientes WHERE ID_Cliente = ?', [ID_Cliente]);
    } catch (error) {
        throw new Error('Error al eliminar cliente: ' + error.message);
    }
};
