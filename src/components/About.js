import React from "react";
import user from "../data/user";
import Links from "./Links";

function About(bio) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{user.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <h3>Links</h3>
      <Links 
      github={user.github} 
      linkedin={user.linkedin} 
      />
    </div>
  );
}

export default About;
