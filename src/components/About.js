import React from "react";
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <links linkedin={props.links.linkedin} github={props.links.github}/>
    </div>
  );
}

export default About;
