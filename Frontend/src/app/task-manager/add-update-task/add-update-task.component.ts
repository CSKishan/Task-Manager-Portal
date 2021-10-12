import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.css'],
})
export class AddUpdateTaskComponent implements OnInit {
  constructor(private service: SharedService) {}


  @Input() ShowTask: any;
  newTask: any;

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask(): void {
    this.newTask = this.ShowTask;
    // console.log(this.newTask);
    // console.log(this.ShowTask);
  }

  createTask(): any {
    var task = this.newTask;

    if(task.Status === "Completed" || task.DonePercent == "100 %") {
      task.DonePercent = "100 %";
      task.Status = "Completed";
    }
    
    else if(task.DonePercent !== "0 %") {
      task.Status = "In Progress";
    }

    else if(task.DonePercent === "0 %") {
      task.Status = "To-Do";
    }
    
    return task;
  }

  addTask(): void {
      var task = this.createTask();
      this.service.addTask(task).subscribe( _ => {
        let msg = document.getElementById('printMsg') as HTMLLabelElement;
        msg.textContent = "Task added successfully!";
        let closeBtn = document.getElementById('closebtn') as HTMLButtonElement;
        closeBtn.click();
      });
  }

  updateTask(): void {
      var task = this.createTask();
      this.service.updateTask(task).subscribe( _ => {
        let msg = document.getElementById('printMsg') as HTMLLabelElement;
        msg.textContent = "Task updated successfully!";
        let closeBtn = document.getElementById('closebtn') as HTMLButtonElement;
        closeBtn.click();
      });
  }

  formValidation(): boolean {
    if(this.ShowTask.TaskID === 0) {
      this.addTask();
    }
    else {
      this.updateTask();
    }
    return true;
  }

  SetMinDate(): void {
    let startdate = document.getElementById('startdate') as HTMLInputElement;
    let duedate = document.getElementById('duedate') as HTMLInputElement;
    if(duedate.value < startdate.value) {
      duedate.value = startdate.value;
    }
    duedate.min = startdate.value; 
  }

}
