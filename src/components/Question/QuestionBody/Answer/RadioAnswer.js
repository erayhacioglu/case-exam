import { useState, useEffect } from 'react';
import { useAnswer } from '../../../../context/AnswerContext';

const RadioAnswer = ({ options, cid }) => {
	const [radioData, setRadioData] = useState('');
	const [optioncid, setOptioncid] = useState('');

	const { answers, setAnswers } = useAnswer();

	useEffect(() => {
		if (radioData.length > 0 && optioncid.length > 0) {
			const findAnswer = answers.find((element) => element.question === cid);
			if (findAnswer) {
				const filteredAnswer = answers.filter(
					(element) => element.question !== cid
				);
				setAnswers([
					...filteredAnswer,
					{ question: cid, option: optioncid, answer: radioData },
				]);
			} else {
				setAnswers([
					...answers,
					{ question: cid, option: optioncid, answer: radioData },
				]);
			}
		}
	}, [radioData, optioncid, answers, cid, setAnswers]);

	const handleChange = (item) => {
		setRadioData(item.option);
		setOptioncid(item.cid);
	};

	return (
		<>
			{options?.map((item, key) => (
				<label
					htmlFor={item.option}
					className={`answer-label ${
						answers.find((element) => element.option === item.cid)
							? 'selected'
							: ''
					}`}
					key={key}
				>
					<input
						type='radio'
						id={item.option}
						className='answer-input'
						name={item.option}
						value={item.option}
						onChange={(e) => handleChange(item)}
					/>
					<span className='circle'></span>
					<span>{item.option}</span>
				</label>
			))}
		</>
	);
};

export default RadioAnswer;
