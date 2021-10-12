import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Tooltip } from 'bootstrap'; 

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
      Status: "To-Do",
      StartDate: "",
      DueDate: "",
      TaskType: "",
      AssignedTo: "",
      EstimatedTime: "",
      DonePercent: "0 %",
      Description: "",
    }
    this.ModalTitle = "Add New Task";
    this.ActivateAddEdit = true;
    console.log("Add task");
  }

  closeTask() {
    this.ActivateAddEdit = false;
    this.refreshAllTaskList();
    console.log("Close task");
  }

  deleteTask(task: any) {
    if(confirm("Are you sure?")) {
      let taskid = task.TaskID;
      this.service.deleteTask(task.TaskID).subscribe(_ => {
        let msg = document.getElementById('printMsg') as HTMLLabelElement;
        msg.textContent = `Task with TaskID: ${taskid} deleted successfully!`;
        this.refreshAllTaskList();
      });
    }
  }

  editTask(task: any) {
    this.ShowTask = task;
    this.ModalTitle = "Edit Task";
    this.ActivateAddEdit = true;
    console.log("Edit task");
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
