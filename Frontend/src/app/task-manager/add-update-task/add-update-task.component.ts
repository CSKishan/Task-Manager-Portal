import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowDeleteTaskComponent } from '../show-delete-task/show-delete-task.component';

@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.css'],
})
export class AddUpdateTaskComponent implements OnInit {
  constructor(private service: SharedService,
    private sdtc: ShowDeleteTaskComponent) {
    }


  @Input() ShowTask: any;
  newTask: any;
  TaskID?: number;
  Subject?: string;
  Priority?: string;
  Status?: string;
  StartDate?: string;
  DueDate?: string;
  TaskType?: string;
  AssignedTo?: string;
  EstimatedTime?: string;
  DonePercent?: string;
  Description?: string;

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask(): void {
    this.newTask = this.ShowTask;
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
    
    return task;
  }

  addTask(): void {
      var task = this.createTask();
      this.service.addTask(task).subscribe( _ => {
        let msg = document.getElementById('printMsg') as HTMLLabelElement;
        msg.textContent = "Task added successfully!";
        document.getElementById('closebtn')?.click();
        this.sdtc.closeTask();
      });
  }

  updateTask(): void {
      var task = this.createTask();
      this.service.updateTask(task).subscribe( _ => {
        let msg = document.getElementById('printMsg') as HTMLLabelElement;
        msg.textContent = "Task updated successfully!";
        document.getElementById('closebtn')?.click();
        this.sdtc.closeTask();
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
