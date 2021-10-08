import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './Task';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  readonly TaskUrl = "https://localhost:5001/api/task";

  constructor(private http: HttpClient) { }

  addTask(task: Task): Observable<any> {
    return this.http.post(this.TaskUrl, task);
  }

  getTask(id: number): Observable<any> {
    return this.http.get(this.TaskUrl + `/${id}`);
  }

  getTaskList(): Observable<any> {
    return this.http.get(this.TaskUrl);
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(this.TaskUrl + `/${task.TaskID}`, task);
  }

  deleteTask(taskID: any): Observable<any> {
    return this.http.delete(this.TaskUrl + `/${taskID}`, taskID);
  }

  getToDoTaskList(): Observable<any> {
    return this.http.get(this.TaskUrl + `/todotasklist`);
  }

  getInProgressTaskList(): Observable<any> {
    return this.http.get(this.TaskUrl + `/inprogresstasklist`);
  }

  getCompletedTaskList(): Observable<any> {
    return this.http.get(this.TaskUrl + `/completedtasklist`);
  }

}
