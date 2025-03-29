import * as yup from 'yup';

// Define the validation schema for the Blog model
export const blogValidationSchema = yup.object().shape({
    topic: yup.string().required('Topic is required'),
    image: yup.string().required('Image is required'),
    desc: yup.string().required('Description is required'),
    content: yup.string().required('Content is required'),
});
