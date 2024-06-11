import pool from "../db/conexion.js";

export const PutTarea = async ( tarea ) => {
    console.log('Salida de tarea-->', tarea)
    let client
    const values = Object.values( tarea )

    const consulta = {
        name : "update-task",
        text :  "UPDATE tareas SET titulo = $2, descripcion = $3 WHERE id = $1 RETURNING *",
        values 
    }

    try {
        client = await pool.connect();
        const result  = await client.query(consulta)
        return result.rows
    } catch (error) {
        return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
    }finally{
        if(client){
            client.release()
        }
    }
}