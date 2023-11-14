import * as yup from 'yup';

export const offerValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  business_id: yup.string().nullable().required(),
});
