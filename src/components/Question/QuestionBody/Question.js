import { useQuestion } from '../../../context/QuestionContext';

const Question = () => {
	const { question } = useQuestion();

	return (
		<div className='question-box'>
			<p className='question'>{question.question}</p>
		</div>
	);
};

export default Question;
