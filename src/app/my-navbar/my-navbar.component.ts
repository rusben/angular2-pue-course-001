import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-navbar',
	templateUrl: './my-navbar.component.html'
})




export class MyNavbarComponent {

	// Creates an attribute in the tag my-navbar
	@Input()
	pName:string;
	// Define the type to string -> :string
	

	//getProjectName() {
//		return this.projectName;		
	//}

}

// The projectName shouldn't be part of the component, let's add variable setted from outside.

// export class MyNavbarComponent {

	// Define the type to string -> :string
//	projectName:string = "My Angular2 App";

//	getProjectName() {
//		return this.projectName;		
//	}

//}

