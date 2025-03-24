import * as yup from 'yup';

const productValidationSchema = yup.object().shape({
  image: yup.string().required('Image is required'),
  name: yup.string().required('Name is required'),
  desc: yup.string().default('Our Product'),
});

export default productValidationSchema;