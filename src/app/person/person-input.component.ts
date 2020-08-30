import { Component } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent{


  // tslint:disable-next-line: typedef
  onCreate(personName: string){
    console.log('Create person:' + personName);
  }
}
