import { SubmissionApi } from "../api/submissionApi";

export const SubmissionService = {
  getAll: SubmissionApi.getAll,

  getById: SubmissionApi.getById,

  upload: SubmissionApi.upload,

  updateTeacherReview:
    SubmissionApi.updateTeacherReview,
};