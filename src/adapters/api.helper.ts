import { ReverseMap } from "~/utils/convert.util";

export interface Api {
  get(url: string, params?, config?): Promise<any>;
  post(url: string, body?, config?): Promise<any>;
  put(url: string, body?, config?): Promise<any>;
  patch(url: string, body?, config?): Promise<any>;
  deleteResource(url: string, config?): Promise<any>;
}

export enum ApiCode {
  Success = 0,
  InvalidToken = -102,
  TokenExpired = -103,
  UserNotFound = -104,
  InsufficientData = -105,
  AuthenticationFailed = -106,
}
export enum ApiStatus {
  Success = 200,
  NotFound = 404,
}
export type ApiResponse = {
  code?: ReverseMap<typeof ApiCode>;
  status?: ReverseMap<typeof ApiStatus>;
  msg?: string;
  data: any;
};

export function formatResponse<T>(response: ApiResponse): T {
  const { status, data } = response;
  if (status !== ApiStatus.Success) {
    throw new Error(JSON.stringify(response));
  }
  return data;
}
