import { Component, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';
import '../../../../public/css/styles.css';
import { Store } from '@ngrx/store';
import { SET, RESET  } from '../reducers/search';
import {Observable} from 'rxjs/Rx';

interface AppState {
  searchTerm: string;
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public sharedService: any;
  public storedSearchTerm: any;
  searchTerm: Observable<string>;

  constructor(private store: Store<AppState>, service: SharedService){
    // read the search term from the ngrx/store
    this.store.select('searchTerm').subscribe(storedTerm => {
      this.storedSearchTerm = storedTerm;
    });
    this.sharedService = service;
  }

  setSearchTerm(event: any){
    // write the search term to the ngrx/store
    this.store.dispatch({ type: SET, payload: event.target.value });

    this.sharedService.searchTermChange(event.target.value);
  }

  resetSearchTerm(){
    this.store.dispatch({ type: RESET });
  }
}
