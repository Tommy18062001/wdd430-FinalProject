import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.taskListChanged.subscribe(
      (taskList: Task[]) => {
        this.tasks = taskList;
      }
    )
    this.tasks = this.taskService.getTasks()
  }

  onSubmit(form: NgForm) {
    console.log(form.value.userInput);
    const content = form.value.userInput;
    const id = "2";
    const date = new Date().toDateString();
    const newTask = new Task(id, content, date.toString());
    this.taskService.addTask(newTask);
  }

}
