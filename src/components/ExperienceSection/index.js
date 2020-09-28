import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import killerLogo from '../../assets/images/experience/Killer-logo.png'
import prokarmaLogo from '../../assets/images/experience/prokarma_logo.svg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={killerLogo}
            colour='#00b2e2'
            title='Killer Visual Strategies (formerly Killer Infographics)'
            link='https://www.killervisualstrategies.com/'
            timeperiod='2016-2020'
            subtitle='(Senior) Frontend developer producing responsive web content from Adobe Illustrator design files'
          />
          <ExperienceUnit
            logo={prokarmaLogo}
            colour='#FFFFFF'
            title='ProKarma (formerly Mantis Technology Group)'
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
