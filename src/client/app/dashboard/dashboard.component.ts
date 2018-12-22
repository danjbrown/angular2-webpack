import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service'
import '../../../../public/css/styles.css';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public id: number;
  private sub: any;
  public users: any;
  public error: string = '';

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    // web service request to get the users
    this.httpService.get('/users')
    .subscribe(
      data => {
        this.users = data.data.users;
      },
      error => {
        if (error.error instanceof ErrorEvent) {
          this.error = error.error.message;
        } else {
          // backend error
          this.error = 'Unable to retrieve data: please ensure the server is running.';
        }
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
