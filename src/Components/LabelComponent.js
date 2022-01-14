import React from 'react'

const LabelComponent = ({ title, className, styles }) => {
    return (
        <label className={className} style={styles}>{title}</label>
    )
}

export default LabelComponent
