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
        .oneOf(['marinara', 'vodka', 'pesto', 'alfredo'], 'Please select a pizza sauce')
        .required('Please select a pizza sauce'),   // can't figure out how to get the error message to show when a radio button is not selected?
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    peppers: yup.boolean(),
    olives: yup.boolean(),
    mushrooms: yup.boolean(),
    instructions: yup
        .string()
        .trim()
})

export default formSchema