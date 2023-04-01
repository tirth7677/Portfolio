import React from "react";

function Mainaboutme() {
  return (
    <div>
      <h2 className="hello">Hello there!</h2>
      <div className="wrapper">
        <div>
          <p className="aboutmetitle">
            Hello, I'm Tirth Malli - As a passionate frontend developer with
            four months of experience, I am dedicated to creating exceptional
            websites that provide remarkable online experiences. I am constantly
            seeking opportunities to improve my skills and knowledge in this
            field, committed to staying up-to-date with the latest trends and
            techniques.
          </p>
          <p className="aboutmetitle">
            My enthusiasm for frontend development is evident in my work, as I
            strive to produce high-quality, visually appealing websites that
            provide seamless user experiences. I am eager to contribute my
            expertise to any project and am committed to continuously honing my
            craft to deliver exceptional results.
          </p>
        </div>
        <div>
          <div class="vl1"></div>
        </div>
        <div className="myimage">
          <img
            src="https://media.architecturaldigest.com/photos/62670cf1a841e371198e0b28/3:4/w_1500,h_2000,c_limit/GettyImages-1347979016.jpg"
            alt="myimage"
            height="250"
            width="250"
          />
        </div>
      </div>
      <br/>
      <br/>
      <div className="skill">
      <div class="grid-container">
        <div class="grid-item" style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}>
          <b><p className="mainss">Location</p></b>
          <p>Gujarat, India</p>
        </div>
        <div class="grid-item" style={{ borderRight: "1px solid black", borderBottom: "1px solid black" }}>
          <b><p className="mainss">Experience</p></b>
          <p>6 Months</p>
        </div>
        <div class="grid-item" style={{borderBottom: "1px solid black" }}>
          <b><p className="mainss">Superpower</p></b>
          <p>Frontend Development</p>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item" style={{ borderRight: "1px solid black"}}>
          <b><p className="mainss">Reading</p></b>
          <p>The Universe in a Nutshell, Cosmos</p>
        </div>
        <div class="grid-item" style={{ borderRight: "1px solid black"}} >
          <b><p className="mainss">Volunteering</p></b>
          <p>Innovision Event Management, SMIT</p>
        </div>
        <div class="grid-item">
          <b><p className="mainss">Spirit animal</p></b>
          <p>The beaver</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Mainaboutme;
