import axiosClient from "~/libs/axios";
import { API_BASE_URL } from "~/configs/app";

import { Api } from "./api.helper";

export class BaseApiService {
  api;
  apiPath;
  constructor(api: Api = axiosClient) {
    this.api = api;
    this.apiPath = API_BASE_URL || "localhost:3000";
  }

  get(url, params = {}, config = {}) {
    return this.api.get(url, params, config);
  }

  post(url, body?, config = {}) {
    return this.api.post(url, body, config);
  }

  put(url, body?, config = {}) {
    return this.api.put(url, body, config);
  }

  patch(url, body?, config = {}) {
    return this.api.patch(url, body, config);
  }

  deleteResource(url, config = {}) {
    return this.api.deleteResource(url, config);
  }

  generateUrl(path, rootApiUrl = this.apiPath) {
    return path ? `${rootApiUrl}/${path}` : rootApiUrl;
  }
}

const instance = new BaseApiService();

export default instance;
