import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestClientService {
  constructor(private http: HttpClient) {
  }

  getToken() {
    const url_token = 'https://aip.baidubce.com/oauth/2.0/token'
    const API_KEY = '2YQSSYa41mSYbKl5eSQWuNU9';
    const SECRET_KEY = 'ZwCarB7ERSehFP7Kr6CM3erYD54NX3gR'
    const params = {'grant_type': 'client_credentials',
      'client_id': API_KEY,
      'client_secret': SECRET_KEY};
    this.http.post(url_token, params).toPromise().then((response) => {console.log(response)})
      .catch((error) => {console.log(error)});
  }
}
