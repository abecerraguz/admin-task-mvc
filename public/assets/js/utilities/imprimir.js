import editarTareas from "./editarTareas.js";
import eliminarTarea from "./eliminarTarea.js";
import * as UI from './interfaz.js';

UI.loading.style.display = 'none';

const imprimir = async () => {
    try {
        UI.loading.style.display = 'inline-flex';
        const response = await fetch('/tareas/asignadas')
        const { tareas } = await response.json()
        let printTareas = document.querySelector('#printTareas')
        printTareas.innerHTML = ''
   
        UI.loading.style.display = 'none';
        tareas.forEach(element => {
            const { id, titulo , descripcion } = element 
            printTareas.innerHTML +=`
            <td class="whiteSpace">${element.titulo}</td>
            <td>${element.descripcion}</td>
            <td class="whiteSpace">
                <div class="containerButton">
                <button  data-editarTareas-number="${id}" type="button" class="btn btn-warning btn-sm d-block me-2 editarTarea"><i class="bi bi-pencil-square"></i> Editar</button>
                <button  data-eliminarTarea-number="${id}" type="button" class="btn btn-danger btn-sm d-block eliminarTarea"><i class="bi bi-trash"></i> Eliminar</button>
                </div>
            </td>
          </tr>`
        });

        // Seleccionamos los botones de editar tareas 
        let editarTareaAll = document.querySelectorAll('.editarTarea')
        let eliminarTareaAll = document.querySelectorAll('.eliminarTarea')

  
        editarTareaAll.forEach( element => {
            element.addEventListener('click',(e)=>{
                e.preventDefault();
                let thisButton = e.target,
                numeroTarea = thisButton.getAttribute('data-editarTareas-number');
                console.log('Salida de numeroTarea-->', numeroTarea)
                editarTareas(numeroTarea)
            })
        })

        eliminarTareaAll.forEach( element => {
            element.addEventListener('click',(e)=>{
                e.preventDefault();
                let thisButton = e.target,
                numeroTarea = thisButton.getAttribute('data-eliminarTarea-number');
                eliminarTarea(numeroTarea)
            })
        })



    } catch (error) {
        console.log(error)
    }
}

export default imprimir