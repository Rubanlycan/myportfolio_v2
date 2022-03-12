import React from 'react'
import { Button, Spinner } from 'react-bootstrap'

const ButtonComponent = ({ btnStyle, button_text, onPress, isLoading }) => {
    return (

        <Button type='submit' onClick={onPress} style={btnStyle}>{isLoading ? <Spinner animation="border" variant="light" size="sm" /> : button_text}</Button>

    )
}

export default ButtonComponent
