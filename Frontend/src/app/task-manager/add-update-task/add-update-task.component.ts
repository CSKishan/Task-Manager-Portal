import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.css']
})
export class AddUpdateTaskComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() AddTask?: Task;

  ngOnInit(): void {
    this.getTask();

  }

  getTask(): void {
    
  }

}
