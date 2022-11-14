import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
	//retornamos parseado lo que haya en el local storage o si no hay nada devolvemos un array vacio
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handelNewTodo = (newTodo) => {
		const action = {
			type: "[TODO] Add Todo",
			payload: newTodo,
		};

		dispatch(action);
	};

	const handleDelete = (id) => {
		const action = {
			type: "[TODO] Delete Todo",
			payload: id,
		};

		dispatch(action);
	};

	const handleToggle = (id) => {
		const action = {
			type: "[TODO] Toggle Todo",
			payload: id,
		};

		dispatch(action);
	};

	const todosCount = todos.length;
	const pendingTodosCount = todos.filter((todo) => !todo.done).length;

	return {
		todos,
		todosCount,
		pendingTodosCount,
		handelNewTodo,
		handleDelete,
		handleToggle,
	};
};
