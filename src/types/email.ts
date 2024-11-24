export interface IEmail {
  email: string;
  isArtinals: boolean;
  createdAt: Date;
}

export interface APIResponse {
  message?: string;
  error?: string;
  data?: IEmail;
}