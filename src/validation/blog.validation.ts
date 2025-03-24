import * as yup from 'yup';

// Define the validation schema for the Blog model
const blogValidationSchema = yup.object().shape({
    topic: yup.string().required('Topic is required'),
    desc: yup.string().default('Image'),
});

export default blogValidationSchema;