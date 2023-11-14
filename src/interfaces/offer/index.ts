import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface OfferInterface {
  id?: string;
  title: string;
  description: string;
  start_date: any;
  end_date: any;
  business_id: string;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface OfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  business_id?: string;
}
