import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import FontIcons from "../Common/FontIcons";
import { ic_react, ic_ux, ic_server, ic_backend } from '../Services/Images'
import { WebAnalytics } from "../Services/WebAnalytics";


const SKILL_DATA = [{
  "name": "Frontend",
  "img": ic_ux,
  skills: [{ name: "Reactjs", width: 80 }, { name: "React-Native", width: 80 },
  { name: "Javascript/ES6", width: 70, }, { name: "html/css", width: 60, }, { name: "Java", width: 40, }]
}, {
  "name": "Backend", "img": ic_backend, skills: [{ name: "Nodejs", width: 60 }]
}, {
  "name": "Database", "img": ic_server, skills: [{ name: "SQL/mysql", width: 40 }, { name: "Nosql/MongoDB", width: 60 }]
}]

const SkillsScreen = () => {
  const [slideCurrentIndex, setSlideCurrentIndex] = React.useState(0)
  const [isSlideChanged, setIsSlideChanged] = React.useState(false)

  useEffect(() => {

    WebAnalytics('visitor_skill_event', { screen_name: "Skill Page" });

  }, [])
  const changeSlide = (e) => {
    setSlideCurrentIndex(e)
  }
  return (
    <div className="w-100 d-flex justify-content-end">
      <div className=" contact-screen  " style={{ width: '90%', alignSelf: 'flex-end' }}>
        <div className="d-flex flex-row contact-parent" style={{ height: '60%', width: '70%', alignItems: 'flex-start' }}>

          <div className="d-flex align-items-center" style={{ height: '100%', width: '40%', }}>
            <Carousel style={{ margin: 20 }} onSelect={e => changeSlide(e)} indicators={false}
              prevIcon={<FontIcons type={"CgChevronLeftO"} color={"#343333"} size={30} />}
              nextIcon={<FontIcons type={"CgChevronRightO"} color={"#343333"} size={30} />} >
              {SKILL_DATA.map((skill, index) => <Carousel.Item key={index}  >
                <div className="d-flex flex-column align-items-center">
                  <p className="text-center" style={{ fontSize: 24, fontWeight: 'bold' }}>{skill.name}</p>
                  <img
                    className="d-flex align-self-center w-75 h-75vh"
                    src={skill.img}
                    alt="First slide"
                  />
                </div>



                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>)}

            </Carousel>
          </div>

          <div className="d-flex align-items-center" style={{ height: '100%', width: '60%', backgroundColor: '#8443df' }}>
            <div className="d-flex w-100 flex-column align-items-center " style={{ height: '100%' }}>
              <h5 className="p-3" style={{ color: '#fff' }}>{SKILL_DATA[slideCurrentIndex]?.['name'] + " Skills"}</h5>
              {
                SKILL_DATA[slideCurrentIndex]?.['skills'].map((i, k) => (
                  <div key={k} className="d-flex flex-column w-100 px-4" >
                    <h6 style={{ color: '#fff' }}>{i.name}</h6>
                    <div className=" progressBar" style={{ width: `${i.width}%` }}></div>
                    <h6 className="align-self-end mt-2" style={{ color: '#fff' }}>{i.width}%</h6>
                  </div>
                ))

              }

            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SkillsScreen;
