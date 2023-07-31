import { useState, useCallback, useMemo } from 'react';
import Todos from '@src/components/Todos';

function expensiveCalculation(num: number) {
	console.log('Calculating...');
	for (let i = 0; i < 1000000000; i++) {
		num += 1;
	}
	return num;
}

export default function Callback() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState<string[]>([]);
	const calculation = useMemo(() => expensiveCalculation(count), [count]);

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
			<hr />
			<h1 className="mb-4 text-3xl font-bold underline">
				Expensive Calculation: {calculation}
			</h1>
		</>
	);
}
