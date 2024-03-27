import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello! My Name is Christian</h2>
        <div className="prompt">
          <p>A programmer with a passion of learning and expanding my knowledge</p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, BootStrap, Javascript, Frameworks</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, Express</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;