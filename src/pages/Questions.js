import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuestionHeader from '../components/Question/QuestionHeader';
import QuestionBody from '../components/Question/QuestionBody';
import QuestionFooter from '../components/Question/QuestionFooter';
import { useCustomer } from '../context/CustomerContext';
import { useQuestion } from '../context/QuestionContext';
import { useTimer } from '../context/TimerContext';
import Loading from '../components/Loading';

const Questions = () => {
	const params = useParams();

	const { loading, examInfo } = useCustomer();
	const { generateQuestion } = useQuestion();
	const { setTime } = useTimer();

	useEffect(() => {
		generateQuestion(params.id);
	}, [generateQuestion, params.id]);

	useEffect(() => {
		setTime(examInfo.time);
	}, [setTime, examInfo.time]);

	return (
		<div className='questions-wrapper'>
			<div className='container'>
				{loading ? (
					<Loading />
				) : (
					<div className='questions'>
						<QuestionHeader id={params.id} />
						<QuestionBody />
						<QuestionFooter id={params.id} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Questions;
