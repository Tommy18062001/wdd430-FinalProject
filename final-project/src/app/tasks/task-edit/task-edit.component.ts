import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task!: Task;
  editMode!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    // check the response we get for the isChecked
    if (value.isChecked == "yes") {value.isChecked = true} 
    else {value.isChecked = false}
    // create a new instance of the task
    const newTask = new Task(value.id, value.content, "date", value.isChecked);
    //   Assign the values in the form fields to the
    //  corresponding properties in the newDocument
    console.log(newTask);

    // if (this.editMode == true) {
    //   this.contactService.updateContact(this.originalContact, newContact)
    // } 
    // else {
    //   this.contactService.addContact(newContact)
    // }

    
    // //  route back to the '/documents' URL
    // this.router.navigate(['./contacts']) 
  }

  onCancel() {
    
  }
}
