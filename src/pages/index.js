import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h3>
          Hi, I'm <span className="bold">Eric Weinberger</span>
        </h3>

        <h5>
          Excited to better lives and businesses with web technologies.  Self-directed learner with a voracious information appetite for emerging technologies, improving user experience, and keeping up with the world of JavaScript.
        </h5>

        <ExperienceSection />
        <ProjectsSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
