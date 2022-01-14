import React, { useRef, useState } from "react";
import { ic_react, ic_android, ic_web } from "../Services/Images";

const PROJECT_DATA = [{ title: 'Native Android', img: ic_android, num: "1 projects", description: "Native Android apps developed using frontend Java" },
{ title: 'React-Native', img: ic_react, num: "3 projects", description: "React-native cross-patform mobile apps developed using Typescript/ES6" },
{ title: 'Web Apps', img: ic_web, num: "3 projects", description: "Reactjs web apps developed using Typescript/ES6" }]
const ProjectScreen = () => {
  const SkillBoxRef = useRef(null)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  const skillBoxFun = (e, id) => {
    console.log(e)

    setHoveredIndex(id)
  }
  return (
    <div className="w-100 d-flex justify-content-end">
      <div className=" contact-screen  " style={{ width: '90%', alignSelf: 'flex-end' }}>
        <div className="d-flex flex-column contact-parent" style={{ height: '60%', width: '70%', alignItems: 'flex-start' }}>

          <div className="parent-first"><p className="p-4" style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>{`
            Over the years i've done remote work for agencies, consulted for startups and colloborated with talented peoples to create amazing digital products for both business and consumer use.
            `}</p></div>
          <div className="skills-container" style={{ borderTopRightRadius: 5 }}>

            <div className="d-flex w-100 flex-row justify-content-evenly">
              {PROJECT_DATA.map((i, unique) => <div key={unique} className="projectbox-parent  justify-content-evenly"
                style={{ height: 200, width: 200, borderRadius: 5, backgroundColor: '#fff' }} ref={SkillBoxRef}
                onMouseOver={e => skillBoxFun(e, unique)} onMouseLeave={() => setHoveredIndex(-1)}>
                <div>
                  <div className="d-flex flex-row align-items-center justify-content-center">
                    <img src={i.img} alt="new"
                      style={{
                        width: 20,
                        height: 20,


                      }} />
                    <p className="ml-2 " style={{ color: '#000', fontSize: 14, padding: 10, fontWeight: 'bold' }}>{i.title}</p>
                  </div>

                  <p className="ml-2" style={{ textAlign: 'center', color: '#000', fontSize: 12, padding: 10, }}>{i.description}</p>
                  <p className="ml-2 project-text" >{hoveredIndex === unique ? "< " + i.num + " />" : i.num}</p>
                </div>


              </div>)}

            </div>

          </div>
        </div>
      </div>
    </div>

  );
};

export default ProjectScreen;
