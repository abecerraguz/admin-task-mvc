import pool from "../db/conexion.js"

// Nueva tarea asociada a un POST
export const PostTarea = async ( tarea ) => {
    let client
    const values = Object.values(tarea)

    const consulta = {

        name:"insert-task", 
        text:"INSERT INTO tareas ( titulo, descripcion) VALUES( $1, $2) RETURNING *;",
        values 
    }
    
    try {
        client = await pool.connect();
        const result  = await client.query(consulta)
        return result
    } catch (error) {
        return console.error('Error durante la conexión o la consulta:', error.code , error.stack, error.message );
    }finally{
        if(client){
            client.release() 
        }
    }
}