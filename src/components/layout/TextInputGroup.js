import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const TextInputGroup = ({
    label,
    name,
    value, 
    placeholder,
    type,
    onChange,
    error
}) => {
    return (
        <div className="form-group">
            <label htmlFor="name">{label}</label>
            <input 
            value={value}
            onChange={onChange}
            name={name}
            type={type}
            className={classnames('form-control form-control-lg',{
                'is-invalid': error
            })}
            placeholder={placeholder} />
            {error && <div className='invalid-feedback'>{error}</div>}
        </div>
    );
}

TextInputGroup.defaultProps = {
    type: 'text'
}

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChnage: PropTypes.func.isRequired,
    error:PropTypes.string.isRequired,
}

export default TextInputGroup;
