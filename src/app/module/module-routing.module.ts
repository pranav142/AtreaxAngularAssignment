import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { TaskComponent } from './task/task.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  {path:"tools", component:ToolsComponent},
  {path:"news", component:NewsComponent},
  {path:"task", component:TaskComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
