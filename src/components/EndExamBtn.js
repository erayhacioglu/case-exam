import { useTimer } from '../context/TimerContext';

const EndExamBtn = () => {
	const { timerFinished } = useTimer();

	return (
		<button className='end-exam-btn' onClick={timerFinished}>
			Sınavı Bitir
		</button>
	);
};

export default EndExamBtn;
