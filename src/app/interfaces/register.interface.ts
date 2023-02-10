export interface RegisterModel {
  accountType: string;
  documentType: string;
  document: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  avatarUrl?: string;
  daletedAt?: Date | number;
}

