import { AuthApi } from "../api/authApi";
import {
  LoginRequest,
  LoginResponse,
  CurrentUser,
} from "../types/auth.types";

export const AuthService = {
  async login(
    payload: LoginRequest
  ): Promise<LoginResponse> {
    return await AuthApi.login(payload);
  },

  async currentUser(): Promise<CurrentUser> {
    return await AuthApi.me();
  },
};