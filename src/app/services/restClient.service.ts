import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable()
export class RestClientService {

  constructor() {
  }

  async getToken(): Promise<string> {
    const url_token = '/oauth/2.0/token'
    const API_KEY = '2YQSSYa41mSYbKl5eSQWuNU9';
    const SECRET_KEY = 'ZwCarB7ERSehFP7Kr6CM3erYD54NX3gR'
    const parameters = {'grant_type': 'client_credentials',
      'client_id': API_KEY,
      'client_secret': SECRET_KEY};

    const config = {params: parameters}

    const response = await axios.post(url_token, null, config)

    return response.data.access_token
  };

  getAudio(token: any, text: string) {
    const url = 'https://tsn.baidu.com/text2audio';
    const cuid = 1045157961199705067219
    text = encodeURI(text);
    const parameters = {tok: token, tex: text, ctp: 1, cuid: cuid, lan:'zh'}

    axios({url: url, method: 'get', params: parameters, responseType: 'blob'}).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      console.log(url);
      let audio = new Audio(url);
      audio.play().catch(err => console.log(err));
    }).catch(err => console.log(err));
  }
}
