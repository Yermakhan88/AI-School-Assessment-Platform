import { MaterialApi } from "../api/materialApi";

export const MaterialService = {
  getAll: () =>
    MaterialApi.getAll(),

  upload: MaterialApi.upload,
};