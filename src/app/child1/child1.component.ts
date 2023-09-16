import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  constructor(private _shareService : CommonService ) {

  }

  sendData(data : string) {
    this._shareService.setData(data);
  }
}
