import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }

    get(uri: string) {
        return this.http.get(process.env.API_URL + uri)
        .map(data => {
            return data.json();
        });
    }

    post(uri: string, body: any) {
        return this.http.post(process.env.API_URL + uri, body).map(data => {
            return data.json();
        });
    }
}