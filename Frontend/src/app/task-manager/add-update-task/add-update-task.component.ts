import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Task } from 'src/app/Task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.css']
})
export class AddUpdateTaskComponent implements OnInit {

  constructor(private service: SharedService, private route: ActivatedRoute) { }

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

  addTask(): void {
    var 
    // this.service.addTask().subscribe();
  }

}
