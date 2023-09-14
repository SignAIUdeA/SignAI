export interface Credentials {
  user: string;
  password: string;
}

export interface AuthResponse {
  token_type: string;
  access_token: string;
}
