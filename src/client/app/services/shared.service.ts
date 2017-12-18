import { Injectable, EventEmitter } from '@angular/core';
@Injectable()

export class SharedService {
    public searchTerm: string;

    stateChange: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this.searchTerm = '';
    }

    searchTermChange(term: any) {
        this.searchTerm = term;
        this.stateChange.emit(this.searchTerm);
    }
}