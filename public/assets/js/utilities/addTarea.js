import imprimir from "./imprimir.js"
const addTarea = async () => {

    let titulo  = document.querySelector('#tituloAdd').value
    let descripcion  = document.querySelector('#descripcionAdd').value

    console.log( titulo, descripcion )

    await axios.post('/tareas',{
        titulo,
        descripcion
    })
    .then( ( ) => {
        // console.log('Salida de la respuesta -->', respuesta )
        $('#modalAddTarea').modal('toggle');
        imprimir()
        titulo  = document.querySelector('#tituloAdd').value = ''
        descripcion  = document.querySelector('#descripcionAdd').value = ''
    })
    .catch((err)=>{
        console.log('Salida del error',err)
    })

}

export default addTarea;