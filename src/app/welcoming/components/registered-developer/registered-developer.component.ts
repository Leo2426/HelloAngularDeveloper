import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registered-developer',
  templateUrl: './registered-developer.component.html',
  styleUrls: ['./registered-developer.component.css']
})
export class RegisteredDeveloperComponent {
  developerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl('')
    }
  );

  @Output() developerRegistered = new EventEmitter<{firstname: string, lastname: string}>();

  ondeveloperRegistered(firstname: string, lastname: string): void {
    this.developerRegistered.emit({firstname,  lastname});
  }

  onSubmit(): void {
    console.log(this.developerForm.value);
    let firstname: string = this.developerForm.value.firstname != null ? this.developerForm.value.firstname : '';
    let lastname: string = this.developerForm.value.lastname != null ? this.developerForm.value.lastname : '';
    this.ondeveloperRegistered(firstname, lastname);
  }
}
