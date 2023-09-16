import { Component, ViewChild, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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

  constructor(private cd : ChangeDetectorRef) {

  }

  ngAfterViewInit(): void {
    this.dataFromChild = this.childComp.childData;
    this.cd.detectChanges();
    console.log('Child Data : ', this.childComp.childData);
  }

}
