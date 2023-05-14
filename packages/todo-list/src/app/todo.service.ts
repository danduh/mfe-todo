import { Injectable } from '@angular/core';
import { BaseTodo, Todo } from './todo';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  readonly baseUrl = 'http://localhost:3000/todos';
  readonly filterOptions = ['ALL', 'ACTIVE', 'COMPLETED'];

  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  getTodoList(payload?: any): Observable<any> {
    const options = {
      params: new HttpParams()
    };

    switch (payload) {
      case 'ACTIVE':
        options.params = new HttpParams().set('completed', 'false');
        break;
      case 'COMPLETED':
        options.params = new HttpParams().set('completed', 'true');
        break;
      case 'ALL':
        break;
    }

    return this.http.get<any>(this.baseUrl, options)
      .pipe(
        map((resp: any) => {
          return {
            todos: resp.results,
            metadata: resp.metadata
          };
        }),
        catchError(this.handleError));
  }

  saveTodo(todo: BaseTodo): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteTodo(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.baseUrl}/${id}`, httpOptions).pipe(
      catchError(this.handleError)
    );
  };

  updateTodo(id: number, partialTodo: Todo): Observable<number> {
    return this.http.patch<{ id: number }>(`${this.baseUrl}/${id}`, partialTodo, httpOptions).pipe(
      map(data => {
        return data.id;
      }),
      catchError(this.handleError)
    );
  }


  removeAllCompleted(): Observable<Todo[]> {
    return this.http.delete<Todo[]>(this.baseUrl + '/deleteCompleted', httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
