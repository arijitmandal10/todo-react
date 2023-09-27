import React, { useState } from 'react';

function TodoInput({ saveTodos }) {
	const [todoText, setTodoText] = useState('');

	const addTodo = () => {
		if (todoText.trim() === '') return;

		const newTodo = {
			text: todoText,
			completed: false,
			createdAt: new Date().getTime(),
		};

		saveTodos((prevTodos) => [newTodo, ...prevTodos]);
		setTodoText('');
	};

	return (
		<div className='todo-input'>
			<input
				type='text'
				placeholder='Add a new todo'
				value={todoText}
				onChange={(e) => setTodoText(e.target.value)}
				onKeyPress={(e) => {
					if (e.key === 'Enter') addTodo();
				}}
			/>
			<button onClick={addTodo}>➕</button>
		</div>
	);
}

export default TodoInput;
