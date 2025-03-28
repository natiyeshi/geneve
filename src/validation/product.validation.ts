import * as yup from 'yup';

const productValidationSchema = yup.object().shape({
  image: yup.string().required('Image is required'),
  tag: yup.string().required('Tag is required'),
  group: yup.string().default('group is Required'),
});

export default productValidationSchema;