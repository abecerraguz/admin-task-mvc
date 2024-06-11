// import imprimir from "./imprimir.js"

// const actualizarTarea = () => {

//     let titulo  = document.querySelector('#titulo').value
//     let descripcion = document.querySelector('#descripcion').value
//     let num = document.querySelector('form button').getAttribute('id')

//     axios.put(`/tareas/?id=${num}`,{
//        titulo,
//        descripcion
//     })
//     .then(()=>{
//         $('#editarModal').modal('toggle');
//         imprimir()
//     })
//     .catch( err =>{
//         console.log(err)
//     })
// }

// export default actualizarTarea;