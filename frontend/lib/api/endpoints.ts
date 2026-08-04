export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    ME: "/auth/me",
    REFRESH: "/auth/refresh",
  },

  DASHBOARD: {
    STATS: "/dashboard/stats",
  },

  ASSIGNMENTS: {
    LIST: "/assignments/",
    CREATE: "/assignments/",
    DETAILS: (id: number) => `/assignments/${id}`,
    UPDATE: (id: number) => `/assignments/${id}`,
    DELETE: (id: number) => `/assignments/${id}`,
  },

  REVIEW: {
    LIST: "/review/",
    DETAILS: (id: number) => `/review/${id}`,
    PUBLISH: (id: number) => `/review/${id}/publish`,
  },

  SUBMISSIONS: {
    LIST: "/submissions/",
    DETAILS: (id: number) => `/submissions/${id}`,
    UPLOAD: "/submissions/upload",
    TEACHER_REVIEW: (id: number) =>
      `/submissions/${id}/teacher-review`,
  },

  MATERIALS: {
    LIST: "/materials/",
    UPLOAD: "/materials/upload",
    ANALYZE: (id: number) =>
    `/materials/${id}/analyze`,
  },
  
};