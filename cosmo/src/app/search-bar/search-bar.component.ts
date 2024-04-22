import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {

  @Output() searchChange = new EventEmitter<string>();

  constructor() {}

  onSearch(event: CustomEvent) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.searchChange.emit(searchTerm);
  }
}
