import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }

    get(url: string) {
        return this.http.get(url)
        .map(data => {
            return data.json();
        });
    }

    post(url: string, body: any) {
        return this.http.post(url, body).map(data => {
            return data.json();
        });
    }
}