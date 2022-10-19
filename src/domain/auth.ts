import User from "./user";

export interface Auth {
  accessToken: string;
  userInfo: User;
  phone: string;
  sessionId: string;
}
