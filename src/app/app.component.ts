import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataFromChild : string = 'Waiting for data......';

  accpetChildData(data:string) {
    this.dataFromChild = data;
  }
}
