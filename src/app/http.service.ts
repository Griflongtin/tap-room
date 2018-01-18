import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var firebase: any;

@Injectable()
export class HttpService {
  // kegs = [];

  constructor(private http: HttpClient) { }

  fetchData(){
    return this.http.get("https://epi-tap-room.firebaseio.com/.json")
  }

  fbGetData(){
    firebase.database().ref('/').on('child_added',
    (snapshot) => console.log(snapshot.val())
  )
  }

  fbPostData(name, brewer, price, abv, img, quantity){
    firebase.database().ref('/').push({name: name, brewer: brewer, price: price, abv: abv, img: img, quantity: quantity })
  }
}
