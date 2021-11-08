import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService {
    constructor(
        private httpClient: HttpClient
    ) { }

    index() {
        let headers = {
            'accessKey': '394772d23dfb455a9fc5ee31ce8ee53a'
        };

        return new Promise(resolve => {
            this.httpClient.get('https://heroes.globalthings.net/api/Category', { headers }).subscribe(response => {
                resolve(response);
            })
        });
    }

    create(params) {
        let headers = {
            'accessKey': '394772d23dfb455a9fc5ee31ce8ee53a'
        };

        return new Promise(resolve => {
            this.httpClient.post('https://heroes.globalthings.net/api/Category', params, { headers }).subscribe(response => {
                resolve(response);
            })
        });
    }

}