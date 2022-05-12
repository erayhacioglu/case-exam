import { useState, useEffect } from 'react';
import EndExamBtn from '../EndExamBtn';
import Timer from '../Timer';
import { useNavigate } from 'react-router-dom';
import { useTimer } from '../../context/TimerContext';
//import { useCustomer } from '../../context/CustomerContext';
import { useQuestion } from '../../context/QuestionContext';

const QuestionHeader = ({ id }) => {
	const [percentage, setPercentage] = useState(0);

	const { finished } = useTimer();
	// const { exam } = useCustomer();
	const { questions } = useQuestion();

	useEffect(() => {
		const newPercentage = `${(Number(id) * 100) / Number(questions.length)}`;
		setPercentage(Number(newPercentage).toFixed());
	}, [id, questions]);

	let navigate = useNavigate();

	useEffect(() => {
		if (finished) {
			navigate('/final');
		}
	}, [finished, navigate]);

	return (
		<div className='question-header'>
			<div className='progress-bar'>
				<svg>
					<circle cx='25' cy='25' r='25'></circle>
					<circle
						cx='25'
						cy='25'
						r='25'
						style={{
							strokeDashoffset: `calc(156 - (156 * ${percentage}) / 100)`,
						}}
					></circle>
				</svg>
				<div className='number'>
					<span className='active-question'>{id}/</span>
					{questions.length}
				</div>
			</div>
			<p className='info'>
				Lütfen sağlıklı bir değerlendirme için bilmediğiniz soruları boş
				bırakınız
			</p>
			<div className='question-header-end'>
				<EndExamBtn />
				<Timer />
			</div>
		</div>
	);
};

export default QuestionHeader;
