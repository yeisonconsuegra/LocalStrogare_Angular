import { Component, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() tasky: Task;

  constructor(private taskService : TaskService){}

  deleteTask(task:Task){
    if(confirm("¿Estas seguro que deseas eleminarlo?")){
      this.taskService.deleteTask(task);
    }
  }
}
