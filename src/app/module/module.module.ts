import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { TaslComponent } from './tasl/tasl.component';
import { NewsComponent } from './news/news.component';
import { ToolsComponent } from './tools/tools.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    TaslComponent,
    NewsComponent,
    ToolsComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }
