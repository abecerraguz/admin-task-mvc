import pool from "../db/conexion.js";

export const GetTareas = async () => {

    let client
    const consulta = {
        name:"get-Alltask", 
        text:"SELECT * FROM tareas ORDER BY id DESC;",
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