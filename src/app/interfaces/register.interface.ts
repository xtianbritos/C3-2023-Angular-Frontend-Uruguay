export interface RegisterModel {
  accountTypeId: string;
  documentTypeId: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  avatarUrl?: string;
  daletedAt?: Date | number;
}

