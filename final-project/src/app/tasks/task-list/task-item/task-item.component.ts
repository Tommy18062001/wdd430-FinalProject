import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onDelete(id: string) {
    const taskSelected = this.taskService.getTask(id);
    this.taskService.deleteTask(taskSelected)
  }

  onEdit() {
    // console.log("i am editing")
  }
}
