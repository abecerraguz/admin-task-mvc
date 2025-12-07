
import addTareaModal from './utilities/addTareaModal.js';
import addTarea from './utilities/addTarea.js';
import imprimir from './utilities/imprimir.js';
// import actualizarTarea from './utilities/actualizarTarea.js';
import * as UI from './utilities/interfaz.js';

if( typeof window === 'object' ){

    window.addEventListener('DOMContentLoaded', function(){

        // Levantamos la Modal para agregar la tarea
        UI.buttonAgregarTarea.addEventListener('click', (e)=>{
            e.preventDefault();
            addTareaModal()
        })

        // Guardamos la informacion ingresada y se envia con un POST
        UI.addTarea.addEventListener('click',async (e)=>{
            e.preventDefault();
            UI.loading.style.display = 'inline-flex';
            await addTarea();
            UI.loading.style.display = 'none';
        })

  
        imprimir();

         const footer = UI.footerDate
         if (!footer) return;
         const currentYear = new Date().getFullYear();
         footer.textContent = `Administrador de tareas ${currentYear}`;



    })

}