import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Task } from 'src/app/Task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.css'],
})
export class AddUpdateTaskComponent implements OnInit {
  constructor(private service: SharedService, private route: ActivatedRoute) {}

  @Input() ShowTask: any;
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
    this.TaskID = this.ShowTask.TaskID;
    this.Subject = this.ShowTask.Subject;
    this.Priority = this.ShowTask.Priority;
    this.Status = this.ShowTask.Status;
    this.StartDate = this.ShowTask.StartDate;
    this.DueDate = this.ShowTask.DueDate;
    this.TaskType = this.ShowTask.TaskType;
    this.AssignedTo = this.ShowTask.AssignedTo;
    this.EstimatedTime = this.ShowTask.EstimatedTime;
    this.DonePercent = this.ShowTask.DonePercent;
    this.Description = this.ShowTask.Description;
  }

  runTask() {
    if(this.ShowTask.TaskID === 0) {
      this.addTask();
    }
    else {
      this.updateTask();
    }
  }

  createTask(): any {
    var task = {
      TaskID: this.TaskID,
      Subject: this.Subject,
      Priority: this.Priority,
      Status: this.Status,
      StartDate: this.StartDate,
      DueDate: this.DueDate,
      TaskType: this.TaskType,
      AssignedTo: this.AssignedTo,
      EstimatedTime: this.EstimatedTime,
      DonePercent: this.DonePercent,
      Description: this.Description,
    };

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
        
      });
  }

  updateTask(): void {
      var task = this.createTask();
      this.service.updateTask(task).subscribe( _ => {
        let msg = document.getElementById('printMsg') as HTMLLabelElement;
        msg.textContent = "Task updated successfully!";
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
