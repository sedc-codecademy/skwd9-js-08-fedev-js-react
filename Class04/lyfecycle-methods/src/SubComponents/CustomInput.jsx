import React from 'react';

const CustomInput = props => {
    const { onNameChange, countryName } = props;

    // THIS IS NOT HOW REACT WORKS
    // PROPS AND THE STATE ARE IMMUTABLE
    // countryName = 'I WILL DECIDE';
    return (
        <input className='our-input' onChange={onNameChange} value={countryName} />
    )
}

export default CustomInput;