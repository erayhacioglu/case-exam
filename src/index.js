import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './styles/main.scss';

//context
import { TimerProvider } from './context/TimerContext';
import { QuestionProvider } from './context/QuestionContext';
import { CustomerProvider } from './context/CustomerContext';
import { AnswerProvider } from './context/AnswerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<TimerProvider>
		<QuestionProvider>
			<CustomerProvider>
				<AnswerProvider>
					<App />
				</AnswerProvider>
			</CustomerProvider>
		</QuestionProvider>
	</TimerProvider>
);
