import { DealInterface } from 'interfaces/deal';
import { MarketingCampaignInterface } from 'interfaces/marketing-campaign';
import { OfferInterface } from 'interfaces/offer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  deal?: DealInterface[];
  marketing_campaign?: MarketingCampaignInterface[];
  offer?: OfferInterface[];
  user?: UserInterface[];

  _count?: {
    deal?: number;
    marketing_campaign?: number;
    offer?: number;
    user?: number;
  };
}

export interface BusinessGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  contact_number?: string;
  website?: string;
  name?: string;
}
