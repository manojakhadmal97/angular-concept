import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concept';
  data : string = 'Default Data';

  updateData(data:string) {
    this.data = data;
    console.log('Data From Child : ', data);
  }
}
