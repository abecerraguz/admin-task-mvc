import imprimir from "./imprimir.js";

const eliminarTarea = async ( id) => {
    $('#modalEliminar').modal('toggle');
    const deleteTask = document.querySelector('#deleteTask')
    deleteTask.setAttribute('data-id-tarea', id)
    deleteTask.addEventListener('click', async(e) => {
        e.preventDefault();
        const id = e.target.getAttribute('data-id-tarea')
        console.log('Salida de eliminar Final', id )
        try {
            const eliminar = await axios.delete(`/tareas/?id=${id}`)
            if( eliminar.status == 200 )
            $('#modalEliminar').modal('toggle');
            imprimir();
        } catch (err) {
            console.error('Salida del error', err);
        }
    } )
  
}
export default eliminarTarea;