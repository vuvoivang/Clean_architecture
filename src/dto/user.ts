import User from "~/domain/user";

export interface UserDTO {
  uid: string;
  user_full_name: string;
  email: string;
  gender?: string;
  avatar: string;
}

export const userFromDTO = (userDTO: UserDTO): User => {
  return {
    uid: userDTO.uid,
    fullName: userDTO.user_full_name,
    email: userDTO.email,
    gender: userDTO.gender,
    avatar: userDTO.avatar,
  };
};
