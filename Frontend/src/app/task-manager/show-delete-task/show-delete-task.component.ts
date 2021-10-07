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

  TaskList: Task[] = [];
  ShowTask?: Task;
  ActivateAddEdit?: boolean;
  ModalTitle?: string;

  ngOnInit(): void {
  }

  addTask() {

  }

  closeTask() {

  }

  deleteTask(task: Task) {

  }

  editTask(task: Task) {

  }

  refreshAllTaskList() {

  }

  refreshToDoTaskList() {

  }

  refreshInProgressTaskList() {

  }

  refreshCompletedTaskList() {

  }



}
