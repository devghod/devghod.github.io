import React from 'react'
import DefaultPageWrapper from '../components/DefaultPageWrapper'

import Intro from '../components/Intro'
import Skill from '../components/Skill'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import ContactMe from '../components/ContactMe'
import DynamicList from '../components/DynamicList'

const Index = () => {
  return (
    <>
      <Intro />
      <DynamicList />
      <ContactMe />
    </>
  )
}

export default Index
