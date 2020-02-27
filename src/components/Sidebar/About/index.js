import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  experience(year) {
    return new Date().getFullYear() - year;
  }

  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          Front-end, UI/UX developer and multidisciplinary technologist. {this.experience(2013)} years' experience contributing to deliverables for Fortune 1000 companies with {this.experience(2016)} years developing for the web firsthand.
          <div className="emoji">
            💻  &nbsp;🎧 &nbsp;🎮️
          </div>
        </div>
      </div>
    )
  }
}

export default About