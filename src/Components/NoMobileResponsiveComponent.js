import React from 'react'
import './index.css'
const NoMobileResponsiveComponent = () => {
    return (
        <div className='under_dev'>
            <img src={require('../assets/web_development_construction.gif')} style={{ width: '100%', height: 200 }} alt="under_construction" />
            <h2 className='text-center m-5' style={{ color: '#fff' }}>
                Please view on Desktop/Laptop   </h2>
            <span className='text-center' style={{ color: '#fff', fontSize: 18 }}> Mobile Responsive under development...</span></div>
    )
}

export default NoMobileResponsiveComponent