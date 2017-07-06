import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductList {

	// Event send when send button clicked: sendButtonClicked
	@Output()
	sendButtonClicked:EventEmitter<string> = new EventEmitter<string>();

	// Skiping error TS7006: Parameter 'event' implicitly has an 'any' type.
	message(event:any) {
		// Skip sending the form
		// Use of getPreventDefault() is deprecated.  Use defaultPrevented instead.
		event.preventDefault();
		//if (event.originalEvent.defaultPrevented) return;
		console.log("Hello world!");
		
		// Broadcast the event sendButtonClicked
		this.sendButtonClicked.emit("Send button clicked!");
	}


}

	// Event binding
	// Property binding
	// Event binding
	// Bidirectional