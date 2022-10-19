import axios, { AxiosError } from "axios";
import axiosRetry from "axios-retry";

import { Api } from "~/adapters/api.helper";

import requestConfig from "./requestConfig";

axiosRetry(axios, {
  retries: 3, // number of retries
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 2000; // time interval between retries
  },
  retryCondition: (error: AxiosError) => {
    // if retry condition is not specified, by default idempotent requests are retried
    return error?.response?.status === 403;
  },
});

function setAccessTokenHeader(config) {
  // const token =
  //   store.state.accessToken;
  // if (token) {
  //   const headers = { "Authorization": "Bearer" + token };
  //   config.headers = {...config.headers, ...headers};
  //   config.withCredentials = true;
  // }
}

async function getRequestConfig(apiConfig?) {
  let config = { ...requestConfig };
  if (apiConfig) {
    config = { ...requestConfig, ...apiConfig };
  }
  setAccessTokenHeader(config);
  return config;
}

async function get(url: string, params?, config?): Promise<any> {
  const apiConfig = await getRequestConfig(config);
  apiConfig.params = params;
  const request = axios.get(url, apiConfig);
  return request;
}

async function post(url: string, body, config?): Promise<any> {
  const apiConfig = await getRequestConfig(config);
  let postData = {};
  if (
    config &&
    config.headers &&
    config.headers["Content-Type"] &&
    config.headers["Content-Type"] !== "application/json"
  ) {
    postData = body;
    axios.defaults.headers.post["Content-Type"] =
      config.headers["Content-Type"];
  } else {
    postData = JSON.stringify(body);
    axios.defaults.headers.post["Content-Type"] = "application/json";
  }
  const request = axios.post(url, postData, apiConfig);
  return request;
}

async function put(url: string, body, config?): Promise<any> {
  const apiConfig = await getRequestConfig(config);
  apiConfig.headers["Content-Type"] = "application/json";
  const request = axios.put(url, JSON.stringify(body), apiConfig);
  return request;
}

async function patch(url: string, body, config?): Promise<any> {
  const apiConfig = await getRequestConfig(config);
  apiConfig.headers["Content-Type"] = "application/json";
  const request = axios.patch(url, JSON.stringify(body), apiConfig);
  return request;
}

async function deleteResource(url: string, config?): Promise<any> {
  const apiConfig = await getRequestConfig(config);
  const request = axios.delete(url, apiConfig);
  return request;
}

const axiosClient: Api = {
  get,
  post,
  put,
  patch,
  deleteResource,
};

export default axiosClient;
