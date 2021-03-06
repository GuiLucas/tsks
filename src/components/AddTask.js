import React, { useState } from 'react';
import { PlusCircle } from 'react-feather';
import Input from './Input';
import Button from './Button';
import styles from '../styles/AddTask.module.css';

export default function FormContainer({ addTask }) {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (value) => {
		setInputValue(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		addTask(inputValue);
		setInputValue('');
	};

	return (
		<form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
			<Input
				type={'text'}
				placeholder={'Add a new task'}
				value={inputValue}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<Button
				type={'submit'}
				disabled={!inputValue}
				buttonStyle={'submitButton'}
			>
				<PlusCircle className={inputValue && styles.submitButton} />
			</Button>
		</form>
	);
}
