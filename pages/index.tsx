import React from 'react'
import DefaultPageWrapper from '../components/DefaultPageWrapper'

import Intro from '../components/Introduction'
import Skill from '../components/Skill'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import ContactMe from '../components/ContactMe'
import DynamicList from '../components/DynamicList'
import Education from '../components/Education'

const Index = () => {
  return (
    <>
      <Intro />
      <Education />
      {/* <DynamicList /> */}
      <ContactMe />
    </>
  )
}

export default Index
