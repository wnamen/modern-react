import rp from 'request-promise';

import config from '../config';

export default class ApiManager {
  public store: any | null;

  constructor() {}

  private getUrl = (url: string) => {
    if (url.indexOf('://') !== -1) {
      return url;
    }

    return config.BASE_URL + url;
  };

  public request = ({
    data,
    method,
    url,
  }: {
    data?: object | null;
    method: string;
    url: string;
  }) => {
    const options = {
      json: true,
      method,
      timeout: 60000,
      url: this.getUrl(url),
    };

    if (method === 'POST' && data) {
      options['body'] = data;
    }

    return rp(options);
  };

  public setStore = (store: any) => (this.store = store);
}
