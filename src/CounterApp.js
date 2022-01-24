import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( {value} ) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        // setCounter( counter + 1 )
        setCounter( (c) => c + 1 )
    }

    const handleReset = () => setCounter( (c) => c = value )
    
    const handleSubstract = () => setCounter( (c) => c - 1 )


    return (
        <>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}

/* Defines a prop type that makes obligatory that the component FirstApp get the prop sayHello of type string */

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;