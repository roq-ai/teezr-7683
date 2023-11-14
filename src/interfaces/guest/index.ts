import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  username: string;
  email: string;
  contact_number: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  username?: string;
  email?: string;
  contact_number?: string;
}
