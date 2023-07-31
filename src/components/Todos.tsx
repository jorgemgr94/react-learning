import { memo } from 'react';

function Todos({ todos, addTodo }: { todos: string[]; addTodo: () => void }) {
	console.log('child render');
	return (
		<>
			<h1 className="mb-4 text-3xl font-bold underline">My Todos</h1>
			{todos.map((todo, index) => {
				return <p key={index}>- {todo}</p>;
			})}
			<button
				onClick={addTodo}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Add TODO
			</button>
		</>
	);
}

export default memo(Todos);
