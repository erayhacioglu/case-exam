import { useEffect } from 'react';
import { useFormik } from 'formik';
import validationSchema from '../utils/customerFormValidation';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { useCustomer } from '../context/CustomerContext';

const CustomerForm = () => {
	const navigate = useNavigate();
	const { setCustomerData } = useCustomer();

	useEffect(() => {
		const exist = localStorage.getItem('quiz');
		if (exist) navigate('/questions/1');
	}, [navigate]);

	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		touched,
		resetForm,
	} = useFormik({
		initialValues: {
			customer_name: '',
			customer_email: '',
			customer_phone: '',
			customer_position: '',
			customer_sector: '',
		},
		onSubmit: (values) => {
			handleSubmitForm(values);
			resetForm();
		},
		validationSchema,
	});

	const handleSubmitForm = (values) => {
		setCustomerData(values);
		localStorage.setItem('quiz', true);
		navigate('/questions/1');
	};

	return (
		<div className='customer-form'>
			<form onSubmit={handleSubmit}>
				<div className='customer-form-header'>
					<h2 className='customer-form-header-heading'>Sınav Uygulaması</h2>
					<p className='customer-form-header-infoText'>
						Teste başlamak için lütfen aşağıda yer alan alanları eksiksiz bir
						şekilde doldurunuz.
					</p>
				</div>
				<div className='customer-form-body'>
					<div className='customer-form-fields'>
						<label htmlFor='customer_name' className='customer-form-label'>
							Ad Soyad<span>*</span>
						</label>
						<input
							type='text'
							name='customer_name'
							className={`customer-form-input ${
								errors.customer_name && touched.customer_name && 'error'
							}`}
							value={values.customer_name}
							onChange={handleChange}
							onBlur={handleBlur}
							id='customer_name'
						/>
					</div>
					{errors.customer_name && touched.customer_name && (
						<span className='alert'>{errors.customer_name}</span>
					)}
					<div className='customer-form-fields'>
						<label htmlFor='customer_email' className='customer-form-label'>
							E-mail<span>*</span>
						</label>
						<input
							type='text'
							name='customer_email'
							className={`customer-form-input ${
								errors.customer_email && touched.customer_email && 'error'
							}`}
							value={values.customer_email}
							onChange={handleChange}
							onBlur={handleBlur}
							id='customer_email'
						/>
					</div>
					{errors.customer_email && touched.customer_email && (
						<span className='alert'>{errors.customer_email}</span>
					)}
					<div className='customer-form-fields'>
						<label htmlFor='customer_phone' className='customer-form-label'>
							Telefon<span>*</span>
						</label>
						<InputMask
							mask='0-999-999-99-99'
							value={values.customer_phone}
							onChange={handleChange}
							onBlur={handleBlur}
						>
							{(inputProps) => (
								<input
									{...inputProps}
									type='tel'
									disableUnderline
									name='customer_phone'
									className={`customer-form-input ${
										errors.customer_phone && touched.customer_phone && 'error'
									}`}
									id='customer_phone'
								/>
							)}
						</InputMask>
					</div>
					{errors.customer_phone && touched.customer_phone && (
						<span className='alert'>{errors.customer_phone}</span>
					)}
					<div className='customer-form-fields'>
						<label htmlFor='customer_position' className='customer-form-label'>
							Çalıştığınız Pozisyon
						</label>
						<select
							name='customer_position'
							className={`customer-form-select ${
								errors.customer_position && touched.customer_position && 'error'
							}`}
							onChange={handleChange}
							onBlur={handleBlur}
							id='customer_position'
						>
							<option selected>Seçiniz...</option>
							{positions?.map((position, key) => (
								<option value={position} key={key}>
									{position}
								</option>
							))}
						</select>
					</div>
					{values.customer_position === 'Çalışmıyor' ? null : (
						<div className='customer-form-fields'>
							<label htmlFor='customer_sector' className='customer-form-label'>
								Çalıştığınız Sektör
							</label>
							<select
								name='customer_sector'
								className='customer-form-select'
								onChange={handleChange}
								onBlur={handleBlur}
								id='customer_sector'
							>
								<option selected>Seçiniz...</option>
								{sectors?.map((sector, key) => (
									<option value={sector} key={key}>
										{sector}
									</option>
								))}
							</select>
						</div>
					)}
				</div>
				<div className='customer-form-footer'>
					<button className='customer-form-button'>Sınava Başlayın</button>
				</div>
			</form>
		</div>
	);
};

export default CustomerForm;

const positions = [
	'Çalışmıyor',
	'Öğrenci',
	'Öğretmen',
	'İşçi',
	'Mühendis',
	'Müdür',
	'Müdür Yrd.',
	'Bölge Müdürü',
	'Üst Düzey Yönetici',
	'Genel Müdür',
	'Genel Müdür Yrd.',
	'Uzman',
	'Uzman Yrd.',
	'Firma Sahibi(Serbest Meslek)',
];

const sectors = [
	'Satış/TeleSatış',
	'Muhasebe/Finans',
	'Bilişim/Telekom',
	'Sağlık',
	'Yapı/Mimar/İnşaat',
	'Turizm/Gıda/Hizmet',
	'Tekstil',
	'Üretim/Endüstriyel Ürünler/Otomotiv',
	'Banka/Sigorta',
	'Sekreter/Yönetici Asistanı',
	'Lojistik/Taşımacılık/Depo',
	'İnsan Kaynakları/Yönetim',
	'Mağaza/Perakende',
	'Eğitim/Öğretim',
	'Staj/Yeni Mezun/Part-Time',
	'Pazarlama/Reklam/Tanıtım/Tasarım',
	'Hukuk',
	'Güvenlik',
	'Diğer',
];
