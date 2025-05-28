import { Component, inject } from "@angular/core";
import Child1 from "../child-1.component";
import Child2 from "../child-2.component";
import { MatButtonModule } from "@angular/material/button";
import { CountService } from "../../core/services/count.service";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  standalone: true,
  imports: [Child1, Child2, MatButtonModule, AsyncPipe],
})
export default class CountComponent {
  constructor(public countService: CountService) {}

  add() {
    this.countService.add();
  }
  sub() {
    this.countService.sub();
  }
}
