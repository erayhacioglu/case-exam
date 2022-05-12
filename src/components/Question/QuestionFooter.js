import { Link } from 'react-router-dom';
import { useQuestion } from '../../context/QuestionContext';

const QuestionFooter = ({ id }) => {
	const { questions } = useQuestion();

	return (
		<div className='question-footer'>
			<Link
				to={`/questions/${id > 1 ? Number(id) - 1 : 1} `}
				className='question-footer-btn prev-btn'
			>
				Önceki
			</Link>
			<Link
				to={`/questions/${
					id === questions.length.toString() ? questions.length : Number(id) + 1
				}`}
				className='question-footer-btn next-btn'
			>
				Sonraki
			</Link>
		</div>
	);
};

export default QuestionFooter;
