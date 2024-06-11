import {  PostTarea  } from "../models/PostTarea.js";
import { GetTareas } from "../models/GetTareas.js";
import { PutTarea } from "../models/PutTarea.js";
import { GetIdTarea } from "../models/GetIdTarea.js";
import { DeleteIdTareas } from "../models/DeleteIdTareas.js";

export const postTareasHandler = async( req, res ) => {
    try {
        const tarea = req.body
        const insertData = await PostTarea(tarea) 
        res.status(200).json( { estado:'OK', insert:insertData.rows, num: insertData.rowCount } )
    } catch (error) {
        res.status(500).send({ message: 'Error al insertar la tarea'});
    }
}

export const getTareasHandler = async (req, res) => {
    try {
        const getTareas = await GetTareas();
        res.status(200).json( { tareas : getTareas.rows, estado:'OK', num : getTareas.rowCount  });
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener las tareas'});
    }
}

export const getTareaIdHandler = async (req, res) => {
    try {
        const { id } = req.query
        const getTareas = await GetIdTarea(id);
        res.status(200).json( { tarea : getTareas.rows, estado:'OK', num : getTareas.rowCount  });
    } catch (error) {
        res.status(500).send({ message: 'Error al obtener las tarea'});
    }
}

export const updateTareasHandler = async ( req, res ) => {
    try {
        console.log('Salida de req.body', req.body)
        const getTareas = await PutTarea(req.body);
        res.status(200).json( { estado:'OK', tarea : getTareas.rows, num : getTareas.rowCount  });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteTareasHandler = async(req, res) => {
    try {
        const { id } = req.query 
        if ( id  ) {
            const deleteTask = await DeleteIdTareas( id ) 
            res.status(200).send({ status:200, eliminado: deleteTask  })
        }else{
            throw new Error('ID inválido');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

