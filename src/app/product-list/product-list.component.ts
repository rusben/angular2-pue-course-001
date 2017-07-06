import { Component } from '@angular/core';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductList {

	// Skiping error TS7006: Parameter 'event' implicitly has an 'any' type.

	message(event:Event) {
		// Skip sending the form
		event.preventDefault();
		console.log("Hello world!");
		//return false;		
	}

}
