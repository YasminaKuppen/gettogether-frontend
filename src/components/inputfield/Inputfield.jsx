import React from 'react';


function InputField({name, inputType, label, value, changeHandler}) {
    return (
        <>
            <div className="input-field-container">
                <label htmlFor={`${name}-field`} className="input-label">{label}</label>
                <input
                    name={`${name}-field`}
                    id={`${name}-field`}
                    type={inputType}
                    value={value}
                    onChange={(e) => changeHandler(e.target.value)}
                    className="input-field"
                />
            </div>
        </>
    );
}

export default InputField;
