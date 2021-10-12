import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { AddUpdateTaskComponent } from './task-manager/add-update-task/add-update-task.component';
import { ShowDeleteTaskComponent } from './task-manager/show-delete-task/show-delete-task.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipDirective, TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponent,
    AddUpdateTaskComponent,
    ShowDeleteTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    TooltipModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
