import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, timeout } from "rxjs/operators";
import { BehaviorSubject, Observable, throwError } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
}

export enum jsonPlaceHolder {
    album="albums",
    post="posts",
    todo="todos",
    user="users"
}

@Injectable()
export class JSONPlaceHolderAPI<T> {

    protected data: Array<T> = [];
    protected data$: BehaviorSubject<Array<T>> = new BehaviorSubject<Array<T>>(this.data);

    constructor(private http: HttpClient) {

    }

    apiGet<T>(resource: string): Observable<string | T> {
        const jsonPlaceHolderURL: string = `https://jsonplaceholder.typicode.com/${resource}`;
        return this.http.get<T>(jsonPlaceHolderURL, httpOptions)
            .pipe(
                timeout(15000),
                catchError(this.handlerError(`Falha na conexão do Recurso ${jsonPlaceHolderURL}`))
            );
    }

    fetchData(resource: string, userId: number) {
        const jsonPlaceHolderURL: string = `https://jsonplaceholder.typicode.com/users/${userId}/${resource}`
        return this.http.get<Array<T>>(jsonPlaceHolderURL, httpOptions)            
            .pipe(
                timeout(15000),
                catchError(this.handlerError(`Falha na conexão do Recurso ${jsonPlaceHolderURL}`)),
            )
            .subscribe((data: Array<T>) => this.data$.next(data));
    }

    clearData() {
        this.data$.next(this.data);
    }

    getData(): Observable<Array<T>> {
        return this.data$.asObservable();
    }

    private handlerError<T> (result?: T) {
        return(error: any): Observable<T> => {
            return throwError(result as T);
        }
    }
}