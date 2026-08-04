export interface Material {
  id: number;

  title: string;

  filename: string;

  filepath: string;

  file_type: string;

  grade: number;

  teacher_id: number;

  subject_id: number;

  is_processed: boolean;

  uploaded_at: string;
}

export interface UploadMaterialRequest {
  title: string;

  grade: number;

  teacher_id: number;

  subject_id: number;

  file: File;
}