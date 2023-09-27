import React from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ListIcon from '@mui/icons-material/List';

function TodoList({ todos, saveTodos }) {
	const toggleComplete = (createdAt) => {
		const updatedTodos = todos.map((todo) => (todo.createdAt === createdAt ? { ...todo, completed: !todo.completed } : todo));
		saveTodos(updatedTodos);
	};
	const checkboxStyle = {
		width: '20px', // Set the desired width
		height: '20px', // Set the desired height
	};
	const smallScreenStyle = {
		margin: '0px -2px -4px -7px',
	};

	const defaultStyle = {
		margin: '0px 0px -4px 0px',
	};

	const isSmallScreen = window.innerWidth <= 768;

	const activeTodos = todos.filter((todo) => !todo.completed);
	const completedTodos = todos.filter((todo) => todo.completed);

	return (
		<div className='todo-list'>
			<div className='active'>
				<h2>
					<ListIcon className='iconl' style={isSmallScreen ? smallScreenStyle : defaultStyle} /> Active Todos ➡️{' '}
					{activeTodos && <span style={{ color: 'red' }}>{activeTodos.length}</span>}
				</h2>
				<div>
					{activeTodos.length === 0 ? (
						<p style={{ marginLeft: '20px', marginTop: '10px' }}>no active todos!! 😁</p>
					) : (
						activeTodos.map((todo) => (
							<div key={todo.createdAt} className='todo-card ac'>
								<input
									type='checkbox'
									style={checkboxStyle}
									checked={todo.completed}
									onChange={() => toggleComplete(todo.createdAt)}
								/>{' '}
								&nbsp;
								<span>{todo.text}</span>
							</div>
						))
					)}
				</div>
			</div>
			<div className='completed'>
				<h2>
					<TaskAltIcon style={{ margin: '0px 5px -4px 0px' }} />
					Completed Todos ➡️ {completedTodos && <span style={{ color: 'greenyellow' }}>{completedTodos.length}</span>}
				</h2>
				<div>
					{completedTodos.length === 0 ? (
						<p style={{ marginLeft: '20px', marginTop: '10px' }}>no completed todos!! 😓</p>
					) : (
						completedTodos.map((todo) => (
							<div key={todo.createdAt} className='todo-card completed cp'>
								<input
									type='checkbox'
									style={checkboxStyle}
									checked={todo.completed}
									onChange={() => toggleComplete(todo.createdAt)}
								/>{' '}
								&nbsp;
								<span style={{ textDecoration: 'line-through' }}>{todo.text}</span>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default TodoList;
