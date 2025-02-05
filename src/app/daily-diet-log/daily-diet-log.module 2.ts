import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { DailyDietLogRoutingModule } from './daily-diet-log-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DailyDietLogRoutingModule
  ]
})
export class DailyDietLogModule { }
