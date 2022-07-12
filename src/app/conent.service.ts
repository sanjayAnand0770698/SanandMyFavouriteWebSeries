import { Injectable } from '@angular/core';
import { Content } from './models/content';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  private contentUrl = 'api/webseries';  // URL to web api

  getFavouriteWebSeriesList(): Observable<Content[]> {
    return this.http.get<Content[]>(this.contentUrl)
      .pipe(
        catchError(this.handleError<Content[]>('getFavouriteWebSeriesList', []))
      );
  }

  getFavouriteWebSeriesContent(id: number): Observable<Content> {
    const url = `${this.contentUrl}/${id}`;
    return this.http.get<Content>(url).pipe(
      catchError(this.handleError<Content>(`Content id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
