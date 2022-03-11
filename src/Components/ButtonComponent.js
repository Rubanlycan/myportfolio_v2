import React from 'react'
import { Button } from 'react-bootstrap'

const ButtonComponent = ({ btnStyle, button_text, onPress }) => {
    return (

        <Button type='submit' onClick={onPress} style={btnStyle}>{button_text}</Button>

    )
}

export default ButtonComponent
