import { useState } from "react";

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	/*  abajo se usa la desestructutracion anidada del event: { target: { name, value }}
        es igual a las siguientes 2 lineas de codigo
        const {target}=event
        const {username, email} = target
     */
	const onInputChange = ({ target: { name, value } }) => {
		setFormState({ ...formState, [name]: value });
	};

	const resetForm = () => {
		setFormState(initialForm);
	};

	//esta es otra manera de hacerlo (mas innecesariamente compleja jajaja)
	// const resetForm = () => {
	// 	const newFormState = { ...formState };
	// 	for (const field in newFormState) {
	// 		if (newFormState.hasOwnProperty(field)) {
	// 			newFormState[field] = "";
	// 		}
	// 	}
	// 	setFormState(newFormState);
	// };

	return { formState, ...formState, onInputChange, resetForm };
};
