import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ sayHello, subtitle }) => {

    console.log( sayHello );

    return (
        <>
            <h1> { sayHello } </h1>
            <p> { subtitle } </p>
        </>
    );
}

{/* Defines a prop type that makes obligatory that the component FirstApp get the prop sayHello of type string */}
FirstApp.propTypes = {
    sayHello: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'This is the subtitle' 
}

export default FirstApp;