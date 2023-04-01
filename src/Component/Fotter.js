import React from "react";

function Fotter() {
  return (
    <div>
      <hr className="hr" />
      <div className="mainfotter">
        <div className="dot"></div>
        <span>
          <b>
            <h2 className="Tirth">Tirth</h2>
          </b>
        </span>
        <b>
          <h2 className="Malli">Malli</h2>
        </b>
        <br />
        <div className="atags">
          <a
            className="Dribbble"
            href="https://dribbble.com/Tirth_333"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
          <a
            className="Linkedin"
            href="https://www.linkedin.com/in/tirth-malli-143144211"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="Github"
            href="https://github.com/tirth7677"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
