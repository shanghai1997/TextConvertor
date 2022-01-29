import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable()
export class RestClientService {

  constructor() {
  }

  async getToken() {
    const url_token = 'https://aip.baidubce.com/oauth/2.0/token'
    const API_KEY = '2YQSSYa41mSYbKl5eSQWuNU9';
    const SECRET_KEY = 'ZwCarB7ERSehFP7Kr6CM3erYD54NX3gR'
    const parameters = {'grant_type': 'client_credentials',
      'client_id': API_KEY,
      'client_secret': SECRET_KEY};

    const config = {params: parameters}

    await axios.post(url_token, null, config)
      .then(response => {
        console.log(response.data.access_token)
        return response.data.access_token;
      })
      .catch(err => console.log(err));
  };

  getAudio(token: any) {
    console.log(token)
  }
}
