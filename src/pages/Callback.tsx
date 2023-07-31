import { useState, useCallback } from 'react';
import Todos from '@src/components/Todos';

export default function Callback() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState<string[]>([]);

	const increment = () => {
		setCount((c) => c + 1);
	};
	const addTodo = useCallback(() => {
		setTodos((t) => [...t, 'New Todo']);
	}, []);

	return (
		<>
			<Todos todos={todos} addTodo={addTodo} />
			<hr />
			<h1 className="mb-4 text-3xl font-bold underline">
				Count: {count}
				<button onClick={increment}>+</button>
			</h1>
		</>
	);
}
