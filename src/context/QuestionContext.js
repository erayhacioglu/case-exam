import { createContext, useContext, useState } from 'react';

const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
	const [questions, setQuestions] = useState([]);
	const [question, setQuestion] = useState({});

	const generateQuestion = (id) => {
		const findQuestion = questions.find((item) => item.id === Number(id));
		if (findQuestion) {
			setQuestion(findQuestion);
		}
	};

	const values = {
		questions,
		setQuestions,
		question,
		generateQuestion,
	};

	return (
		<QuestionContext.Provider value={values}>
			{children}
		</QuestionContext.Provider>
	);
};

export const useQuestion = () => useContext(QuestionContext);
