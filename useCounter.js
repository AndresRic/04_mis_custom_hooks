import { useState } from "react";

export const useCounter = (inititalValue = 1) => {
	const [counter, setCounter] = useState(inititalValue);

	const increment = (value = 1) => {
		if (value === -1 && counter === 0) return;
		setCounter(counter + value);
	};

	const reset = () => {
		setCounter(0);
	};

	return { counter, increment, reset }; //se puede devolver cualquier tipo de datos
};

/*onClick={increment}
    esta instrucción pasa el evento como primer parametro
    a la función increment o lo que sería lo mismo que
    onClick = {(event)=> increment(event)}
    por eso si se quiere pasar pasar parametros a la función increment,
    se debe escribir la estructura completa de la funcion de flecha
    onClick = {(event)=> increment(valor)}
    se puede obviar el event
    onClick = {()=> increment(valor)}

    en el caso del reset no es necesario escribir toda la estructura
    debido a que en la función no se usa el evento ni ningún parametro
    */
