import * as yup from 'yup';

const schema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, 'Name has to be two characters!'),
    email: yup
        .string()
        .email('Got to have a valid email address!')
        .required('You forgot to enter your email!'),
    password: yup
        .string()
        .required('Password is required!'),
    tos: yup.boolean()
    .oneOf([true], ('Must accept terms of service')),
})

export default schema