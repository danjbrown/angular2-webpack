import { Component, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';
import '../../../public/css/styles.css';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public sharedService: any;

  constructor(service: SharedService) {
    this.sharedService = service;
  }

  public onChangeSearchTerm(event: any): void {
    this.sharedService.searchTermChange(event.target.value);
  }
}
