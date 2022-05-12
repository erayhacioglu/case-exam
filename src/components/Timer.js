import { useTimer } from '../context/TimerContext';

const Timer = () => {
	const { currentMinutes, currentSeconds } = useTimer();

	return (
		<div className='timer'>
			<div className='timer-item'>
				{currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}
			</div>
			&nbsp;:&nbsp;
			<div className='timer-item'>
				{currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
			</div>
		</div>
	);
};

export default Timer;
