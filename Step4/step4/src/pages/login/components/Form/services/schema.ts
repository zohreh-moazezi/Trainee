import { object, string } from 'yup';

export const loginSchema = object().shape({
  username: string()
    .min(5, 'Too Short! ')
    .max(32, 'Too Long!')
    .required('Enter Username'),
  password: string()
    .min(8, 'Too Short! ')
    .max(32, 'Too Long!')
    .required('Enter Password'),
});
