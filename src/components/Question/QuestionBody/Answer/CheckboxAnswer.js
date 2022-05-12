import { useState } from 'react';

const CheckboxAnswer = ({ options }) => {
	const [choise, setChoise] = useState([]);

	const handleChange = (item) => {
		const findItem = choise.find((element) => element === item);
		if (findItem) {
			const filteredItem = choise.filter((element) => element !== item);
			setChoise(filteredItem);
		} else {
			setChoise([...choise, item]);
		}
	};
	return (
		<>
			{options?.map((item, index) => (
				<label
					htmlFor={item.option}
					className={`answer-label ${
						choise.find((element) => element === item.option) ? 'selected' : ''
					}`}
					key={index}
				>
					<input
						type='checkbox'
						id={item.option}
						className='answer-input'
						name={item.option}
						value={item.option}
						onChange={() => handleChange(item.option)}
					/>
					<span className='circle'></span>
					<span>{item.option}</span>
				</label>
			))}
		</>
	);
};

export default CheckboxAnswer;
