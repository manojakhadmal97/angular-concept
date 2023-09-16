import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public data : string = '';

  setData(data:string) {
    console.log('Setting Data : ', data);
    this.data = data;
  }

  getData() {
    console.log('Return Data : ', this.data);
    return this.data;
  }
}
