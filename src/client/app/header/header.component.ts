import { Component, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';
import '../../../../public/css/styles.css';
import { Store } from '@ngrx/store';
import { SET, RESET  } from '../reducers/search';
import { Observable } from 'rxjs/Rx';
import { SearchState } from '../interfaces/search';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public sharedService: any;
  public storedSearch: any;
  search: Observable<string>;

  constructor(private store: Store<SearchState>, service: SharedService) {
    // read the search term from the ngrx/store
    this.store.select('search').subscribe(term => {
      this.storedSearch = term;
    });
    this.sharedService = service;
  }

  setSearch(event: any) {
    // write the search term to the ngrx/store
    this.store.dispatch({ type: SET, payload: event.target.value });

    this.sharedService.searchTermChange(event.target.value);
  }

  resetSearch() {
    this.store.dispatch({ type: RESET });
  }
}
