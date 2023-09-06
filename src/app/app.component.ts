import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'concept';
  dataFromChild = 'Data Send To Child From Parent';

  changeData() {
    this.dataFromChild = 'Child data change';
  }
}
