import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task:Task[]=[];

  constructor(private taskservice:TaskService){}

  ngOnInit(): void {
    this.task = this.taskservice.getTasks();
  }
}
