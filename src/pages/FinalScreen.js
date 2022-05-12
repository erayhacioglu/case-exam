import { useState, useEffect } from 'react';
import { useAnswer } from '../context/AnswerContext';
import { useCustomer } from '../context/CustomerContext';
import axios from 'axios';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';

const FinalScreen = () => {
	const { answers } = useAnswer();
	const { cid } = useCustomer();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const putData = async () => {
			try {
				const res = await axios.put(
					`http://bootcamp.com.tr/public/api/examcustomer/${cid}`,
					{ answers }
				);
				console.log(res);
				if (res.status === 200) {
					setLoading(false);
				}
			} catch (err) {
				console.log(err);
			}
		};
		putData();
		localStorage.removeItem('quiz');
	}, [answers, cid]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className='final-screen'>
					<p className='final-screen-message'>Sınavı Tamamladınız.</p>
					<Link to='/' className='final-screen-link'>
						Yeni Sınav
					</Link>
				</div>
			)}
		</>
	);
};

export default FinalScreen;
