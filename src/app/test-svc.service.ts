import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from './model/pet.model';

@Injectable({
  providedIn: 'root'
})
export class TestSvcService {

  private baseUrl="http://localhost:8080/"
  private headerDict = {
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
  private requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict)
  };

  constructor(private http: HttpClient) { }

  post(api: string, pet: Pet, cb: (pet: Pet) => any): void {
    console.log(this.baseUrl + api);
    this.http.post(this.baseUrl + api , {
      "name": pet.name,
      "lost": pet.lost
    }, this.requestOptions)
    .subscribe((response: any) => cb(response))
  }

  put(api: string, pet: Pet): void {
    console.log(this.baseUrl + api);
    let obs = this.http.put(this.baseUrl + api , {
      "id": pet.id,
      "name": pet.name,
      "lost": pet.lost
    }, this.requestOptions)
    obs.subscribe((response) => console.log(response))
  }

  get(api: string, cb: (pet: Pet) => any ): any {
    console.log(this.baseUrl + api);
    let obs = this.http.get(this.baseUrl + api , this.requestOptions)
    obs.subscribe((response: any) => cb(response));

  }

  delete(api: string, cb: (pet: Pet) => any): any {
    console.log(this.baseUrl + api);
    this.http.delete(this.baseUrl + api, this.requestOptions)
      .subscribe((response: any) => cb(response));
  }
}
