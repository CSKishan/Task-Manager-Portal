import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-show-delete-task',
  templateUrl: './show-delete-task.component.html',
  styleUrls: ['./show-delete-task.component.css']
})
export class ShowDeleteTaskComponent implements OnInit {

  constructor(private service: SharedService) { }

  ToDoTaskList: any[] = [];
  InProgressTaskList: any[] = [];
  CompletedTaskList: any[] = [];
  ShowTask: any;
  InfoTask: any;
  ActivateAddEdit?: boolean = false;
  ModalTitle?: string;
  

  ngOnInit(): void {
    this.refreshAllTaskList();
  }


  addTask() {
    this.ShowTask = {
      TaskID: 0,
      Subject: "",
      Priority: "",
      Status: "",
      StartDate: Date().toString(),
      DueDate: "",
      TaskType: "",
      AssignedTo: "",
      EstimatedTime: "",
      DonePercent: "",
      Description: ""
    }
    this.ModalTitle = "Add New Task";
    this.ActivateAddEdit = true;

  }

  closeTask() {
    this.ActivateAddEdit = false;
    this.refreshAllTaskList();
  }

  deleteTask(task: any) {
    if(confirm("Are you sure?")) {
      this.service.deleteTask(task.TaskID).subscribe(_ => {
        alert("Deleted Successfully!");
        this.refreshAllTaskList();
      });
    }
  }

  editTask(task: any) {
    this.ShowTask = task;
    this.ModalTitle = "Edit Task";
    this.ActivateAddEdit = true;
  }

  infoTask(task: any) {
    this.InfoTask = task;
  }

  refreshAllTaskList() {
    this.refreshToDoTaskList();
    this.refreshInProgressTaskList();
    this.refreshCompletedTaskList();
  }

  refreshToDoTaskList() {
    this.service.getToDoTaskList().subscribe( list => {
      this.ToDoTaskList = list;
    });
  }

  refreshInProgressTaskList() {
    this.service.getInProgressTaskList().subscribe( list => {
      this.InProgressTaskList = list;
    });
  }

  refreshCompletedTaskList() {
    this.service.getCompletedTaskList().subscribe( list => {
      this.CompletedTaskList = list;
    });
  }



}
