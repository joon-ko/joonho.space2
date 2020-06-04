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
            lately, i've been spending a quiet quarantine in my hometown of huntington, new york.
            i'm moving to cambridge, MA in july, where i'll start work as a full-stack engineer
            at <a href="https://tulip.co/">tulip</a>, working remote.
            i'm on page 300 of <i>infinite jest</i>, learning typescript, and trying to get out and hike more.
          </div>
        </div>
      </div>
    );
  }
}

export default About;