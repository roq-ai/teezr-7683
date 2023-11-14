import * as yup from 'yup';

export const marketingCampaignValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  business_id: yup.string().nullable().required(),
});
