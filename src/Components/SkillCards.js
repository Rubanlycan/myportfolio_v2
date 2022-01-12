import React, { useRef } from "react";

const SKILLS = [
  {
    skill_name: "React-Native",
    skill_rate: "70%",
  },
  {
    skill_name: "Reactjs",
    skill_rate: "70%",
  },
  {
    skill_name: "Javascript/Es6",
    skill_rate: "60%",
  },
  {
    skill_name: "Nodejs",
    skill_rate: "60%",
  },
  {
    skill_name: "Native Android ",
    skill_rate: "40%",
  },
  {
    skill_name: "Java",
    skill_rate: "40%",
  },
];
const SkillCards = () => {
  const progressAnimate = useRef(null);
  React.useEffect(() => {
    console.log(progressAnimate);
  }, []);

  const getCurrentProgress = (data) => {
    let progress = data;
    let counter = 0;
    setTimeout(() => {
      if (counter != progress) {
        counter++;
      }
    }, 50);
    return counter.toString();
  };

  return (
    <div className="w-100 d-flex ">
      <div
        className="card-style"
        style={{
          height: 420,
          width: 380,
        }}
      >
        {SKILLS.map((i, index) => (
          <div key={i + index} className="progress-parent mt-2 mb-2">
            <p>{i.skill_name}</p>
            <div style={{ width: "100%", backgroundColor: "#b39fcf" }}>
              <div className="bgProgress">
                {" "}
                <div
                  className="progress "
                  style={{ width: `${i.skill_rate}` }}
                  ref={progressAnimate}
                ></div>
              </div>
            </div>
            <p className="text-end">{i.skill_rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCards;
