import { Component } from '@angular/core';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductList {

	message(e) {
		// Skip sending the form
		e.preventDefault();
		console.log("Hello world!");
		return false;		
	}

}
