import http from "./http";

import { getToken } from "./token";

http.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

export default http;