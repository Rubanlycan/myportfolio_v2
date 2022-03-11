import React from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { WEB_PROJECTS, ANDROID_PROJECTS, REACT_NATIVE_PROJECTS } from '../Services/constant'
import { useLocation } from 'react-router-dom'


export const ProjectViewScreen = () => {

    const PROJECT_DATA = WEB_PROJECTS
    const [isShow, setIsShow] = React.useState(false)
    const [pindex, setPindex] = React.useState(0)

    return (
        <div className="project-parent-container">
            <div className=" contact-screen " style={{ width: '90%' }}>
                <div className="d-flex flex-column contact-parent align-items-start" style={{ height: '95%', width: '80%', }}>
                    <div className='project-first' >
                        <img src={PROJECT_DATA[pindex].img} style={{ width: '100%', height: '100%' }} />
                        <Button className='info-button' onClick={() => setIsShow(true)}>Info</Button>
                        <Offcanvas show={isShow} onHide={() => setIsShow(false)} placement={'bottom'} style={{ height: '50%', backgroundColor: '#8443df' }}>
                            <Offcanvas.Header closeButton closeVariant='white'>
                                <Offcanvas.Title style={{ color: '#fff' }}>{PROJECT_DATA[pindex].projectName}</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body style={{ whiteSpace: 'pre-wrap' }}>
                                <p style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>Desc:</p>
                                <p style={{ color: '#fff', marginTop: 10 }}>{PROJECT_DATA[pindex].description}</p>
                                <p style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline', marginTop: 10 }}>Role:</p>
                                <p style={{ color: '#fff', marginTop: 10 }}>{PROJECT_DATA[pindex].role}</p>
                                {PROJECT_DATA[pindex].extra && <p style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline', marginTop: 10 }}>In Development:</p>}
                                {PROJECT_DATA[pindex].extra && <p style={{ color: '#fff', marginTop: 10 }}>{PROJECT_DATA[pindex].extra}</p>}
                                <p style={{ color: '#fff', marginTop: 10, textDecorationLine: 'underline', fontWeight: 'bold', }}>Availability</p>
                                <p style={{ color: '#fff', marginTop: 10, }}>{PROJECT_DATA[pindex].availability}</p>
                                <a style={{ color: '#fff', marginTop: 20, textDecorationLine: 'underline', }} href="https://www.apcoddigital.com" target={"_blank"}>{PROJECT_DATA[pindex].link}</a>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                    <div className='d-flex flex-row' style={{ height: "30%", }}>
                        {PROJECT_DATA.map((i, index) => (
                            <div onClick={() => setPindex(index)} className=' project-list' >
                                <img src={i.img} style={{ width: '90%', height: '90%' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
var i = 0
export const ProjectViewScreenMobile = () => {
    const { state } = useLocation();

    const PROJECT_DATA = state.type == "Native Android" ? ANDROID_PROJECTS : REACT_NATIVE_PROJECTS

    const [currentImage, setCurrentImage] = React.useState(PROJECT_DATA[0])
    const [pindex, setPindex] = React.useState(0)


    return (
        <div className="project-parent-container">
            <div className=" contact-screen " style={{ width: '90%' }}>
                <div className="d-flex flex-column contact-parent align-items-start" style={{ height: '95%', width: '80%', }}>
                    <div className={`project-first`} style={{ height: ` ${PROJECT_DATA.length > 1 ? '80%' : '100%'}` }} >
                        <div className='w-50 h-100' >
                            <h4 className="p-2" style={{ color: '#fff' }}><span className="p-2" style={{ color: '#fff', textDecorationLine: 'underline' }}> Title:</span>{` ${PROJECT_DATA[pindex].projectName}`}</h4>
                            <h5 className="p-2" style={{ color: '#fff' }}><span className="p-2" style={{ color: '#fff', textDecorationLine: 'underline' }}> Description:</span>{` ${PROJECT_DATA[pindex].description}`}</h5>
                            <h5 className="p-2" style={{ color: '#fff', }}> <span className="p-2" style={{ color: '#fff', textDecorationLine: 'underline' }}> Role:</span>  <span className="p-2" style={{ color: '#fff' }}>{`${PROJECT_DATA[pindex].role}`}</span></h5>
                            <h6 className="p-2" style={{ color: '#fff' }}>{`Available in`}</h6>
                            <div className='d-flex flex-row'>
                                <a href={PROJECT_DATA[pindex].link} target="_blank" className="p-2" style={{ color: '#fff' }}>
                                    <img src={require('../assets/google-play.png')} /></a>
                                <a href={PROJECT_DATA[pindex]?.iosLink} target="_blank" className="p-2" style={{ color: '#fff' }}>
                                    <img src={require('../assets/apple-logo.png')} /></a>
                            </div>


                        </div>
                        <div className='d-flex flex-row justify-content-end align-items-center p-3'>
                            <img src={require('../assets/android-mockup.png')} style={{ position: 'absolute', top: 35, width: 220, height: 450, zIndex: 200 }} />
                            <img src={PROJECT_DATA[pindex].img[2]} style={{ position: 'absolute', width: 200, height: 430, right: 170, top: 40 }} />
                            <img src={require('../assets/iphone-mockup.png')} style={{ position: 'absolute', top: 35, width: 430, zIndex: 250, height: 450, right: 240, }} />
                            <img src={PROJECT_DATA[pindex].img[2]} style={{ position: 'absolute', width: 200, zIndex: 200, height: 420, right: 350, top: 50, }} />
                        </div>

                    </div>
                    {PROJECT_DATA.length > 1 ? <div className='d-flex flex-row' style={{ height: "30%", }}>
                        {PROJECT_DATA.map((i, index) => (
                            <div onClick={() => setPindex(index)} className=' project-list' >
                                <img src={i.img[0]} style={{ width: 130, height: 130, }} />
                            </div>
                        ))}
                    </div> : null}
                </div>
            </div>
        </div>
    )
}



