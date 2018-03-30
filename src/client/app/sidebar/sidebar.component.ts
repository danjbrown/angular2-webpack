import { Component, EventEmitter } from '@angular/core';
import { SharedService } from '../services/shared.service';
import '../../../../public/css/styles.css';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public sharedService: any;
  public subscription: any;
  public searchData: any;

  public dashboards: any = [
    { id: 1, name: 'Dashboard 1' },
    { id: 2, name: 'Dashboard 2' },
    { id: 3, name: 'Dashboard 3' }
  ];

  private searchTerm: string = '';

  constructor(private service: SharedService) {
    this.service = service;
    this.searchTerm = service.searchTerm;
    this.service.stateChange.subscribe((data: any) => { this.searchTerm = data; });
  }
}