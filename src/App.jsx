import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import localforage from 'localforage';
import ChecklistIcon from '@mui/icons-material/Checklist';
import './App.css';

function App() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		// Load TODOs from localForage on initial load
		localforage.getItem('todos').then((savedTodos) => {
			if (savedTodos) {
				setTodos(savedTodos);
			}
		});
	}, []);

	useEffect(() => {
		// Save the TODOs to localForage whenever they change
		localforage.setItem('todos', todos);
	}, [todos]);

	const saveTodos = (newTodos) => {
		setTodos(newTodos);
	};

	const resetTodos = () => {
		saveTodos([]);
	};

	return (
		<div className='App'>
			<h1>
				<ChecklistIcon style={{ fontSize: '50px', margin: '-8px auto' }} /> TODO APP
			</h1>
			<TodoInput saveTodos={saveTodos} />
			<TodoList todos={todos} saveTodos={saveTodos} />
			<button className='reset-button' onClick={resetTodos}>
				Reset
			</button>
		</div>
	);
}

export default App;
