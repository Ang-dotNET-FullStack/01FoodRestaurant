import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Category from '../Model/Category.model';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  req: Category = new Category(0,"f",54);
  readonly baseUrl = 'https://localhost:44308/api/';

  constructor(private http: HttpClient) { }

  public getAll<T>(
    url:string
  ){
    return this.http.get<T>(this.baseUrl + url);
  }

  public getOne<T>(
    id:number,
    url:string
    ): Observable<T>{
    return this.http.get<T>(this.baseUrl+url+"/"+id);
  }

  public create<T>(
    url: string,
    requestModel: any
  ): Observable<T> {
    return this.http.post<T>(this.baseUrl + url, requestModel);
  }

  public update<T>(
    id: number,
    url:string,
    requestModel: any
  ): Observable<T>{    
    return this.http.put<T>(this.baseUrl+url, requestModel);
  }

  public delete(
    url:string,
    id: number    
    ): Observable<any>{
      console.log(this.baseUrl+url+"/"+id);
    return this.http.delete(this.baseUrl+url+"/"+id);
  }
}
