import { api } from "./api";

export interface SignInRequest {
  email: string;
  password: string;
}
export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserModel {
  id: number;
  name: string;
  email: string;
}

export interface SignInResponse {
  user: UserModel;
  access_token: string;
}

export interface SignUpResponse {
  id: number;
  name: string;
  email: string;
  //roler : string[];
}

export const login = async (value: SignInRequest): Promise<SignInResponse> => {
  const response = await api.post("/auth", value);
  return response.data;
};

export const register = async (
  value: SignUpRequest
): Promise<SignUpResponse> => {
  //value.role = "COSTUMER";
  const response = await api.post("/users", value);
  return response.data;
};
