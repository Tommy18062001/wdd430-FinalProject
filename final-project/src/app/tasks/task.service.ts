import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      id:"1",
      content: "Go to bed",
      date: "Sat Jul 09 2022"
    },
    {
      id:"2",
      content: "Finish homework",
      date: "Sun Jun 18 2022"
    }
    ,{
      id:"3",
      content: "Keep my room clean",
      date: "Mon Jul 01 2022"
    },
    {
      id:"4",
      content: "Dummy data",
      date: "Tue Jan 09 2022"
    }
  ]

  taskListChanged = new Subject<Task[]>()
  constructor() {
    this.taskListChanged.next([...this.tasks])
  }

  getTask(id: string) {
    for (const task of this.tasks) {
      if (task.id == id) {
        return task
      }
    }
    return
  }

  getTasks() {
    return this.tasks
  }

  addTask(task: Task) {
    this.tasks.push(task)
    this.taskListChanged.next([...this.tasks])
  }

  deleteTask(task: Task) {
    if (!document) {
      return;
    }
    const pos = this.tasks.indexOf(task);

    if (pos < 0) {
      return;
    }

    this.tasks.splice(pos, 1);
    this.tasks.sort();
    this.taskListChanged.next([...this.tasks])
  }

  editTask(task: Task) {
    this.tasks.push(task)
    this.taskListChanged.next([...this.tasks])
  }
}
