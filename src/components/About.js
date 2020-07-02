import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <img className="profile-picture" src="/profile.jpg" alt="joon ko"/>
        <div className="about-me">
          <div class="paragraph">
            i'm joon ko and i'm a human being. i graduated this year from MIT with a B.S. in computer science.
            my current passion is to make things that intersect software, language, music, and games.
          </div>
          <div class="paragraph">
            lately, i just moved to cambridge, massachusetts, a return to a city i'm already familiar with,
            which feels reassuring. i'll start work as a full-stack engineer at <a href="https://tulip.co/">tulip</a>
            soon, working remote. i'm on page 300 of <i>infinite jest</i>, building ikea furniture,
            and trying to run more.
          </div>
        </div>
      </div>
    );
  }
}

export default About;