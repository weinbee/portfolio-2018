import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import doxo from '../../assets/images/projects/doxo.png'
import cloudinary from '../../assets/images/projects/cloudinary.svg'
import cloudbees from '../../assets/images/projects/cloudbees.svg'
import irandeal from '../../assets/images/projects/nti-logo.png'
import populace from '../../assets/images/projects/populace.svg'
import gates from '../../assets/images/projects/gates.png'
// import issaquah from '../../assets/images/projects/issaquah.jpg'
import nea from '../../assets/images/projects/nea.png'
import glasses from '../../assets/images/projects/frames.svg'
import helmets from '../../assets/images/projects/sec-helmets.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={helmets}
            colour="#7fac30"
            title="Football Rivalry"
            link="https://rhavaulzflra.netlify.com"
            timeperiod="2019"
            subtitle="Vue microapp tracking the history of the biggest rivalry in SEC football."
          />
          <ExperienceUnit
            logo={doxo}
            colour="#ffffff"
            title="Bill Comparison"
            link="https://doxoinsights.netlify.com"
            timeperiod="2019"
            subtitle="Vue microapp exploring the comparative cost of common bills across selected U.S. metro areas."
          />
          <ExperienceUnit
            logo={cloudbees}
            colour="#1081bf"
            title="Community Report"
            link="https://cloudbees-report.netlify.com"
            timeperiod="2018"
            subtitle='A lightly animated responsive "ebook" with substantial charting.'
          />
          <ExperienceUnit
            logo={cloudinary}
            colour="#0091ff"
            title="Annual Report"
            link="https://brave-swartz-9e573f.netlify.com/"
            timeperiod="2018"
            subtitle='A lightly animated responsive "ebook" with substantial charting.'
          />
          <ExperienceUnit
            logo={irandeal}
            colour="#373637"
            title="Policy Project"
            link="https://irandeal.nti.org/"
            timeperiod="2018"
            subtitle="A long scrolling explainer for the Nuclear Threat Initiative explaining the benefits of the international Iran sanctions."
          />
          <ExperienceUnit
            logo={populace}
            colour="#febc11"
            title="Survey Results"
            link="https://kig-populace-survey.surge.sh/"
            timeperiod="2018"
            subtitle="Highlights of survey data demonstrating differing ideas of success"
          />
          <ExperienceUnit
            logo={glasses}
            colour="#FFFFFF"
            title="Glasses Selection"
            link="https://killerinfographics.com/interactive/zenni/frames-faceshape-redux/v06-20180816/index.html"
            timeperiod="2018"
            subtitle="Interactive infographic leading users to choose appropriate frames"
          />
          <ExperienceUnit
            logo={gates}
            colour="#221E20"
            title="Gates Foundation"
            link="https://killerinfographics.com/project/gates-foundation-postsecondary-education"
            timeperiod="2017"
            subtitle="A pair of animation-focused web widgets for the Gates Foundation."
          />
          <ExperienceUnit
            logo={nea}
            colour="#EEE"
            title="HRS"
            link="https://killerinfographics.com/interactive/nea/hrs/09-06-17-1813/"
            timeperiod="2017"
            subtitle="Interactive widget showing association of positive health impacts from arts participation"
          />
          {/* <ExperienceUnit
            logo={nea}
            colour="#EEE"
            title="Quiz"
            link="https://killerinfographics.com/interactive/nea/how-well-do-you-know-quiz/v5-20170501/index.html"
            timeperiod="2017"
            subtitle="Interactive quiz about the NEA's activities"
          /> */}
          {/* <ExperienceUnit
            logo={nea}
            colour="#EEE"
            title="Artists in Labor Force"
            link="https://killerinfographics.com/interactive/nea/adp-viz/item-3/v3-20161031/index.html"
            timeperiod="2016"
            subtitle="Interactive widget comparing earnings of arts workers"
          /> */}
          <ExperienceUnit
            logo={nea}
            colour="#EEE"
            title="Arts Participation"
            link="https://killerinfographics.com/interactive/nea/adp-viz/item-2/v3-20160825/index.html"
            timeperiod="2016"
            subtitle="Interactive widget comparing arts participation across the US"
          />
          {/* <ExperienceUnit
            logo={issaquah}
            colour="#FFFFFF"
            title="Report Card"
            link="https://killerinfographics.com/interactive/issaquah-school-district/report-card/v7-20161118/index.html"
            timeperiod="2016"
            subtitle="Report card of student performance for local school district"
          /> */}
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
