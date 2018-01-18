import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  // kegs = [];

  constructor(private http: HttpClient) { }

  fetchData(){
    return this.http.get("https://epi-tap-room.firebaseio.com/.json")
  }
}
