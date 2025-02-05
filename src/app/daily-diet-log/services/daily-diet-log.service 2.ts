import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyDietLog } from '../models/daily-diet-log';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailyDietLogService {

  private readonly apiUrl = `${environment.apiUrl}/daily-diet-logs`;

  // The token is stored in the local storage
  private get token(): string {
    return localStorage.getItem('token') || '';
  }

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders(
      {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      }
    );
  }

  getLogs(userId: string, page: number =0, size: number = 10): Observable<DailyDietLog[]> {
    const headers = this.getAuthHeaders();

    // pagination
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    const url = `${this.apiUrl}/${userId}`;

    return this.http.get<DailyDietLog[]>(url, {headers, params});
  }
}