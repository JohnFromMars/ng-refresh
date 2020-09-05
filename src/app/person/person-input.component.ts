import { Component } from '@angular/core';
import { PsersonService } from './person.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {

  enterPersonName: string;

  constructor(private personService: PsersonService) {

  }

  // tslint:disable-next-line: typedef
  onCreate() {
    console.log('Create person:' + this.enterPersonName);
    this.personService.save(this.enterPersonName);
    console.log(this.personService.person);
  }
}
