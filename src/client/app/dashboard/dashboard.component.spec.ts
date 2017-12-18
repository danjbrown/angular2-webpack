import { TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { ActivatedRoute } from '@angular/router';

describe('SidebarComponent', () => {
  let dashboard: DashboardComponent;
  let activatedRoute: ActivatedRoute;

  beforeEach(() => {
    dashboard = new DashboardComponent(activatedRoute);
  });
});
