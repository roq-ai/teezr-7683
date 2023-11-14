interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Marketing Manager'],
  tenantName: 'Business',
  applicationName: 'Teezr',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read business information',
    'Read offer information',
    'Read deal information',
    'Read marketing campaign information',
  ],
  ownerAbilities: ['Manage the business information', 'Manage offers', 'Manage deals', 'Manage marketing campaigns'],
  getQuoteUrl: 'https://app.roq.ai/proposal/2d1ce7c8-4222-4eb1-a3a4-8fd434d287ec',
};
