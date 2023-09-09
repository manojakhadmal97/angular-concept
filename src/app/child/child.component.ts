import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  
  @Output() dataFromChild = new EventEmitter<string>();

  SendDataToParent() {
    this.dataFromChild.emit('This is a Child Data');
  }
}
