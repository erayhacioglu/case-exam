import { createContext, useContext, useState, useEffect } from 'react';
import { useQuestion } from './QuestionContext';
import axios from 'axios';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
	const [customerData, setCustomerData] = useState({});
	const { setQuestions } = useQuestion();
	const [examInfo, setExamInfo] = useState({});
	const [loading, setLoading] = useState(true);
	const [cid, setCid] = useState('');

	useEffect(() => {
		const postData = async () => {
			try {
				const res = await axios.post(
					`http://bootcamp.com.tr/public/api/examcustomer?customer=&customer_name=${customerData.customer_name}&customer_email=${customerData.customer_email}&customer_phone=${customerData.customer_phone}&customer_position=${customerData.customer_position}&customer_sector=${customerData.customer_sector}&exam=eyJpdiI6ImM1UzJwOHZqUFJORW5ucEdGcHNjbWc9PSIsInZhbHVlIjoiK1ZWN2VYQmtXc0k1enlMZ21Pa0VQUT09IiwibWFjIjoiNDI0NGEwMmMwYWFhNjIyYWNiYmMxYjQ1NmNhYmQ0MjEyMWE1NzgzNWI4NmNjNjM1NGU5YWUwMDA4YzE3OTU0NyIsInRhZyI6IiJ9`
				);
				if (res.status === 200) {
					setCid(res.data.data.cid);
					const response = await axios.get(
						`http://bootcamp.com.tr/public/api/examcustomer/${res.data.data.cid}`
					);
					setExamInfo(response.data.data[0].exam);
					setQuestions(response.data.data[0].questions);
					setLoading(false);
				}
			} catch (err) {
				console.log(err);
			}
		};
		postData();
	}, [customerData, setQuestions]);

	const values = {
		setCustomerData,
		examInfo,
		loading,
		cid,
	};

	return (
		<CustomerContext.Provider value={values}>
			{children}
		</CustomerContext.Provider>
	);
};

export const useCustomer = () => useContext(CustomerContext);
