import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Must provide a Name for the order')
        .min(2,'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Please select a pizza size'),
    sauce: yup
        .string()
        .oneOf(['marinara', 'vodka', 'pesto', 'alfredo'], 'Please select a pizza sauce'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    peppers: yup.boolean(),
    olives: yup.boolean(),
    shrooms: yup.boolean(),
    instructions: yup
        .string()
        .trim()
})

export default formSchema