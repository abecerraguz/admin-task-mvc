// models/DeleteIdTareas.js
import pool from "../db/conexion.js";

export const DeleteIdTareas = async (id) => {
  let client;

  // Aseguramos que el id sea numérico
  const numericId = Number(id);
  if (!Number.isInteger(numericId) || numericId <= 0) {
    throw new Error("ID inválido");
  }

  const consulta = {
    // OJO: sin `name`, dejamos que pg maneje el prepared statement
    text: "DELETE FROM tareas WHERE id = $1 RETURNING *",
    values: [numericId],
  };

  try {
    client = await pool.connect(); // obtenemos una conexión del pool
    const resultado = await client.query(consulta);
    return resultado; // resultado.rows y resultado.rowCount
  } catch (error) {
    console.error("Error durante la conexión o la consulta:", error);
    // Importante: relanzar el error para que lo capture el handler
    throw error;
  } finally {
    if (client) {
      client.release(); // liberamos siempre el cliente
    }
  }
};
