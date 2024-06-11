import imprimir from "./imprimir.js";

const editarTareas = async ( id ) => {

    $('#editarModal').modal('toggle');

    await axios.get(`/tarea/?id=${id}`)
        .then( respuesta => {
            const { id,titulo,descripcion} = respuesta.data.tarea[0]
            document.querySelector('#titulo').value = titulo
            document.querySelector('#descripcion').value = descripcion
            document.querySelector('.actualizarTarea').setAttribute('id', id )
            const actualizarTarea = document.querySelector('.actualizarTarea')

            actualizarTarea.addEventListener('click', async(e)=> {
                e.preventDefault();
                const titulo = document.querySelector('#titulo').value
                const descripcion = document.querySelector('#descripcion').value
                const taskUpdate = {
                    id,
                    titulo,
                    descripcion 
                }
                await axios.put(`/tarea`, taskUpdate )
                .then((response)=>{
                    console.log('Salida de response-->', response)
                    $('#editarModal').modal('toggle');
                    imprimir()
                })
                .catch( err => {
                    console.error('Salida del error',err)
                })
            })
         
        })
        .catch(err => {
            console.error('Error:',err)
        })

}
export default editarTareas;