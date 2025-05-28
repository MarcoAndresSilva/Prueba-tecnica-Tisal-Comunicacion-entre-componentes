import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CountService } from "../../core/services/count.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  standalone: true,
  imports: [MatButtonModule, AsyncPipe],
})
export class Page2Component {

    constructor(public countService: CountService) {}
  
  add() {
    this.countService.add();
  }
  sub() {
    this.countService.sub();
  }

}
