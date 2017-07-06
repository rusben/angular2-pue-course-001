import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}} {{surname}}!</h1>`,
  // template: `<h1>Hello {{getNameSurname()}}!</h1>`,
  //templateUrl: 'app/app.component.html',
  templateUrl: './app.component.html',
})

export class AppComponent  { 
	name = 'Rubén'; 
	surname = 'Arroyo';
	projectName:string = 'Angular2 First App';

	getNameSurname() {
		return this.name + ' ' + this.surname;
	}

	sendButtonAction(message:string):void {
		alert(message);
	}
}

/*

Root module --> (Has different components, including de root component)
A module
B module
...
*/