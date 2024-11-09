import {Component, signal} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
	selector: 'app-pagination',
	standalone: true,
	imports: [NgClass],
	templateUrl: './pagination.component.html',
})
export class PaginationComponent {
	totalPages = 10;
	currentPage = 1;
	startPage = 1; // Tracks the starting page number in each set
	pages = Array.from({ length: 10 }, (_, i) => i + 1); // Generates an array of 10 pages
	
	setPage(page: number) {
		this.currentPage = page;
		
		if (page > this.totalPages) {
			// Load the next set of pages
			this.loadNextSet();
		} else if (page < this.startPage) {
			// Optionally load the previous set of pages if navigating backward
			this.loadPreviousSet();
		}
	}
	
	loadNextSet() {
		this.startPage += 10;
		this.totalPages += 10;
		this.pages = Array.from({ length: 10 }, (_, i) => this.startPage + i);
		this.currentPage = this.startPage;
	}
	
	loadPreviousSet() {
		if (this.startPage > 10) {
			this.startPage -= 10;
			this.totalPages -= 10;
			this.pages = Array.from({ length: 10 }, (_, i) => this.startPage + i);
			this.currentPage = this.startPage + 9; // Set to the last page in the previous set
		}
	}
}
