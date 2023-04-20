import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class customerdata
{
  phnnum?: string;
  name?: string;
  email?: string;
  password?: string;
}
@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {
  endpoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  saveLogin(data: any): Observable < customerdata >{
    console.log("Service");
    console.log(data);
     return this.httpClient.post <customerdata> (this.endpoint + '/customer', JSON.stringify(data), this.httpHeader);

  }

  getLogin( ): Observable <customerdata >{
   return this.httpClient.get < customerdata > (this.endpoint + '/customer', this.httpHeader);
   
  }

  
}
