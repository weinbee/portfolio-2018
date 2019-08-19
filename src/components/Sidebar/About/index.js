import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          Frontend developer and multidisciplinary technologist with a focus on data visualization and animation. 5 years' experience building deliverables for Fortune 1000 companies.
          <div className="emoji">
            💻  &nbsp;🎧 &nbsp;🎮️
          </div>
        </div>
      </div>
    )
  }
}

export default About