import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "interactive spotify",
    description: "an interactive audio-visualization of your most liked spotify songs, or any playlist in your library. "
     + "uses the <a href='https://developer.spotify.com/documentation/web-api/'>spotify api</a>. "
     + "a spotify account is required for access. "
     + "final project for interactive data visualization (mit spring 2020).",
    image: "/spotify.png",
    link: "http://interactive-spotify.herokuapp.com",
    github: "https://github.com/joon-ko/interactive-spotify"
  },
  {
    title: "interval",
    description: "a collaborative long-distance music-making sandbox in python. "
     + "by deploying combinations of different musical modules, create unique audio-visual "
     + "experiences from anywhere in the world, especially in these times when making music "
     + "collaboratively while physically in the same space is difficult to do. "
     + "final project for interactive music systems (mit spring 2020).",
    image: "/interval.png",
    github: "https://github.com/joon-ko/interval"
  },
  {
    title: "soundspace",
    description: "exploring collaborative music generation in space. "
      + "communicate with strangers in the language of stars, or make constellations with friends. "
      + "built with <a href='https://mfarejowicz.github.io/'>matt f.</a> "
      + "for <a href='https://weblab.mit.edu/'>web.lab 2019</a>.",
    image: "/soundspace.png",
    link: "http://sound-space.herokuapp.com",
    github: "https://github.com/joon-ko/soundspace"
  }
];

function makeDescription(description) {
  return {__html: description};
}

class Project extends React.Component {
  render() {
    return (
      <div className="project-container">
        <div className="project-left">
          <div className="project-title">{this.props.title}</div>
          <div className="project-desc" dangerouslySetInnerHTML={makeDescription(this.props.description)}></div>
          <div className="project-links">
          {
            (this.props.link !== undefined) &&
            <div className="project-link"><a href={this.props.link}>link</a></div>
          }
            <div className="project-link"><a href={this.props.github}>github</a></div>
          </div>
        </div>
        <img className="project-img" src={this.props.image} alt=""></img>
      </div>
    );
  }
}

class Projects extends React.Component {
  render() {
    return (
      <div className="projects-container">
        {
          projects.map((p, i) => {
            return <Project
              key={i}
              title={p.title}
              description={p.description}
              image={p.image}
              link={p.link}
              github={p.github}
            />
          })
        }
      </div>
    );
  }
}

export default Projects;