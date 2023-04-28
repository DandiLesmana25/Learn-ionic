// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiserverService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http : HttpClient
  ) { }

  public getUser(){
    return this.http.get<any>(environment.ApiURL  + 'api/users?page=2', {});
  }

}