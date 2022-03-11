import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'

const InputFieldComponent = ({ name, styles, value, className, inputType, onChange }) => {
    return (
        <InputGroup className={"mb-3 input"}>

            <FormControl
                className={className}
                onChange={onChange}
                value={value}
                name={name}
                style={styles}
                as={inputType}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />

        </InputGroup>
    )
}

export default InputFieldComponent
