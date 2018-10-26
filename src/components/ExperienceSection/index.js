import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import killerLogo from '../../assets/images/experience/killer.png'
import prokarmaLogo from '../../assets/images/experience/prokarma_logo.svg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={killerLogo}
            colour='#00b2e2'
            title='Killer Infographics'
            link='https://www.killerinfographics.com/'
            timeperiod='2016 - '
            subtitle='(Senior) Frontend developer producing responsive web content from Adobe Illustrator design files'
          />
          <ExperienceUnit
            logo={prokarmaLogo}
            colour='#FFFFFF'
            title='ProKarma (née Mantis)'
            link='https://www.prokarma.com/'
            timeperiod='2013-2016'
            subtitle='Agile team member for a social media monitoring & sentiment analysis software and various client projects.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
