import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {

  readonly baseUrl = 'https://localhost:44333/api/';

  constructor(private http: HttpClient) { }

  public getAll<T>(){
    return this.http.get<T>(this.baseUrl);
  }

  public get<T>(id:number, API: string){
    return this.http.get(this.baseUrl+API+"/"+id);
  }

  public create<T>(
    requestModel: any
  ){
    return this.http.post<T>(this.baseUrl, requestModel);
  }

  public update<T>(
    id: number,
    requestModel: any
  ){    
    return this.http.put<T>(this.baseUrl, requestModel);
  }

  public delete(id: number){
    return this.http.delete(this.baseUrl);
  }
}
