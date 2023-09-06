import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Output() updateDataEvent = new EventEmitter<string>();

  sendData() {
    this.updateDataEvent.emit("This Data came from child");
  }
}
