import React from "react";
import "./home.css";

const HomeScreen = () => {
  return (
    <>
      <div className="home">
        <div className="w-50 d-flex justify-content-end align-items-center mx-5">
          <img
            src={require("../assets/cover.jpeg")}
            alt="new"
            style={{
              width: 300,
              height: 300,
              borderRadius: 150,
              borderRightWidth: 10,
              borderRightStyle: "solid",
              borderRightColor: "#d9c9f1",
            }}
          />
        </div>
        <div className="w-50 d-flex justify-content-start align-items-center mx-5">
          <div>
            <h5>Hi THERE! I'M</h5>
            <div className="d-flex flex-row">
              <h1>Ruban</h1> <h1>Nadar</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
