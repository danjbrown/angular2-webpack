import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { HttpService } from '../services/http.service'
import { ActivatedRoute } from '@angular/router';

describe('SidebarComponent', () => {
  let dashboard: DashboardComponent;
  let activatedRoute: ActivatedRoute;
  let httpService: HttpService;

  beforeEach(() => {
    dashboard = new DashboardComponent(activatedRoute, httpService);
  });
});
