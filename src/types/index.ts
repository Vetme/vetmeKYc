export interface UserI {
  is_verified: boolean;
  account_verified: boolean;
  email: string;
  id?: string;
  name: string;
  role: string;
  kyc_enabled: boolean;
}
