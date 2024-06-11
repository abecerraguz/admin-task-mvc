import pool from "../db/conexion.js";

export const DeleteIdTareas = async (id) => {
 
    let client
    const consulta = {
        name:"delete-Idtask", 
        text:`DELETE FROM tareas WHERE id = ${id} returning *`
    }
    try {
        client = await pool.connect(); // Intenta obtener una conexión pool
        const resultado = await client.query(consulta)
        return resultado
    } catch ( error ) {
        return console.error('Error durante la conexión o la consulta:', error.stack );
    }finally{
        if(client){
            client.release() // Nos aseguramos que el cliente se libere siempre
        }
    }
}