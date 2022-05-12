import { createContext, useContext, useState, useEffect } from 'react';
import { useCustomer } from './CustomerContext';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
	const [currentMinutes, setCurrentMinutes] = useState(null);
	const [currentSeconds, setCurrentSeconds] = useState(null);
	const [time, setTime] = useState(null);
	const [finished, setFinished] = useState(false);

	var timer;

	useEffect(() => {
		let minutes = time * 0.016667;
		let seconds = 60 * `0.${minutes.toString().split('.')[1]}`;
		setCurrentMinutes(minutes.toString().split('.')[0]);
		setCurrentSeconds(seconds.toFixed());
	}, [time]);

	useEffect(() => {
		timer = setInterval(() => {
			setCurrentSeconds(currentSeconds - 1);

			if (currentSeconds === 0) {
				if (currentMinutes > 0) {
					setCurrentMinutes(currentMinutes - 1);
					setCurrentSeconds(59);
				}
			}

			if (currentMinutes === 0 && currentSeconds === 0) {
				setCurrentSeconds(0);
				setFinished(true);
			}
		}, 1000);

		return () => clearInterval(timer);
	});

	const timerFinished = () => {
		clearInterval(timer);
		setFinished(true);
		setCurrentMinutes(0);
		setCurrentSeconds(0);
	};

	const values = {
		currentMinutes,
		currentSeconds,
		finished,
		timerFinished,
		setTime,
	};

	return (
		<TimerContext.Provider value={values}>{children}</TimerContext.Provider>
	);
};

export const useTimer = () => useContext(TimerContext);
