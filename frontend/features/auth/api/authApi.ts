import http from "@/lib/api/interceptors";
import { ENDPOINTS } from "@/lib/api/endpoints";

import {
  LoginRequest,
  LoginResponse,
  CurrentUser,
} from "../types/auth.types";

export const AuthApi = {
  async login(
    payload: LoginRequest
  ): Promise<LoginResponse> {
    const { data } = await http.post<LoginResponse>(
      ENDPOINTS.AUTH.LOGIN,
      payload
    );

    return data;
  },

  async me(): Promise<CurrentUser> {
    const { data } = await http.get<CurrentUser>(
      ENDPOINTS.AUTH.ME
    );

    return data;
  },
};