import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {


constructor(private taskService:TaskService){

}

  addTask(newTitle:HTMLInputElement, newDescription:HTMLTextAreaElement){
    console.log("adding..."+newTitle+" "+newDescription);
    this.taskService.addTasks({
      title: newTitle.value,
      descripcion: newDescription.value,
      oculto: true
    });
    newTitle.value="";
    newDescription.value="";
    return false;
  }

}
