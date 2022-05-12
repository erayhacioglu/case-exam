import RadioAnswer from './RadioAnswer';
import CheckboxAnswer from './CheckboxAnswer';
import TextAnswer from './TextAnswer';
import { useQuestion } from '../../../../context/QuestionContext';

const Answer = () => {
	const { question } = useQuestion();

	const generateAnswerType = (answerType) => {
		if (answerType === 1) {
			return <RadioAnswer options={question.options} cid={question.cid} />;
		} else if (answerType === 2) {
			return <TextAnswer options={question.options} />;
		} else if (answerType === 3) {
			return <CheckboxAnswer options={question.options} />;
		} else {
			return 'Bulunamadı...';
		}
	};

	return <div className='answer-box'>{generateAnswerType(question.type)}</div>;
};

export default Answer;
