import { Component, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'concept';
  dataFromChild : string = '';

  @ViewChild(ChildComponent) childComp !: ChildComponent;

  constructor() {

  }

  ngAfterViewInit(): void {
    console.log('Child Data : ', this.childComp.childData);
  }

}
