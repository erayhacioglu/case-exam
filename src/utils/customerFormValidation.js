import * as Yup from 'yup';

const customerFormValidation = Yup.object().shape({
	customer_name: Yup.string().required('Boş bırakamazsınız'),
	customer_email: Yup.string()
		.required('Boş bırakamazsınız')
		.email('Geçersiz email'),
	customer_phone: Yup.string().required('Boş bırakamazsınız'),
});

export default customerFormValidation;
