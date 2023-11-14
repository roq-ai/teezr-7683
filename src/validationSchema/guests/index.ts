import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required(),
  contact_number: yup.string().required(),
});
