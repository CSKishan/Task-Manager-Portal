import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
