import Question from './Question';
import Answer from './Answer';

const QuestionBody = () => {
	return (
		<div className='question-body'>
			<p className='question-heading'>
				Choose the best answer which completes the sentence.
			</p>
			<Question />
			<Answer />
		</div>
	);
};

export default QuestionBody;
