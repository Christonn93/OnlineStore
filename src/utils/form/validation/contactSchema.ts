import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(10, 'Message too short').required('Message is required'),
});
