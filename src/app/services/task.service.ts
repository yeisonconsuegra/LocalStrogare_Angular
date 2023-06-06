import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task: Task[]=[];

  constructor() {
    this.task=[
    //   {title:"Leer", descripcion:"Estoy escribiendo", oculto: true},
    //   {title:"Crear pagina", descripcion:"Estoy creando un sitio web", oculto: true}
    ];
   }

getTasks(){
  if(localStorage.getItem('tasks') === null){
    return this.task;
  }else{
    let tasksNull = localStorage.getItem('tasks');
    if(tasksNull != null)
    return this.task = JSON.parse(tasksNull);
  }
}


//Guarda un registro en un array de objetos y almacena el array en localstorage.

addTasks(task:Task){
  this.task.push(task);
  let tareas: Task[]=[];
  if(localStorage.getItem("tasks") === null){
    tareas.push(task);
    //para usar setItem se necesita guardar la informacion en texto y se usa
    //JSON.stringify
    localStorage.setItem('tasks',JSON.stringify(tareas));
  }else{
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks !== null) {
      //JSON.parse() se usa para cuando se quiera obtener los valores del localstorage
      //es decir getItem trae los valores en texto(String) y al usar el JSON.parse() los convierte
      //en el objeto actual.
      tareas = JSON.parse(storedTasks);
      tareas.push(task);
      localStorage.setItem('tasks',JSON.stringify(tareas));
    }
  }
}


//Eliminar un registro especifico en localstorage, es decir lo borra del
//array y nuevamente guarda el array actualizado en el localstorage.

deleteTask(task: Task){
    for(let i = 0; i < this.task.length; i++ ){
      if(task == this.task[i]){
        this.task.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.task));
      }
    }
}

}
