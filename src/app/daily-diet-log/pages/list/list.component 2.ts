import { Component, OnInit } from '@angular/core';
import { DailyDietLogService } from '../../services/daily-diet-log.service';
import { DailyDietLog } from '../../models/daily-diet-log';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{

  logs: DailyDietLog[] = [];

  userId = '2bc8332f-50b1-4f1b-a3ed-0dcae3976a16';

  constructor(private dailyDietLogService: DailyDietLogService) {}

  ngOnInit(): void {
    this.fetchLogs(0, 10);
  }

  fetchLogs(page: number, size: number): void {
    this.dailyDietLogService.getLogs(this.userId, page, size)
      .subscribe((logs: DailyDietLog[]) => {
        this.logs = logs;
      });
  }

}
