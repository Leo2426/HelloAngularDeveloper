import {Component, Input} from '@angular/core';
import {Developer} from "../../model/developer.entity";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Input() firstname!: string;
  @Input() lastname!: string;
  get fullname():string{
    let developer = new Developer(this.firstname, this.lastname);
    return developer.fullname == '' ? 'Unknown' : developer.fullname;
  }
}
