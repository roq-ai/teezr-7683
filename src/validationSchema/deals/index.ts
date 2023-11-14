import * as yup from 'yup';

export const dealValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  business_id: yup.string().nullable().required(),
});
