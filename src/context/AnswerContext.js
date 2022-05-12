import { createContext, useContext, useState } from 'react';

const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
	const [answers, setAnswers] = useState([]);

	const values = {
		answers,
		setAnswers,
	};

	return (
		<AnswerContext.Provider value={values}>{children}</AnswerContext.Provider>
	);
};

export const useAnswer = () => useContext(AnswerContext);
