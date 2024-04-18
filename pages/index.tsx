import Layout from '../components/Layout'
import Image from 'next/image'

import Intro from '../components/Intro'
import Skill from '../components/Skill'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import ContactMe from '../components/ContactMe'

import linkiden from '../public/linkedin-48.png'
import artemis from '../public/web-app/artemis.png'
import pbris from '../public/web-app/pbris.png'
import dentalfast from '../public/web-app/dentalfast.png'
import qrthis from '../public/web-app/qrthis.png'
import nxtform from '../public/web-app/nxtform.png'
import ched10 from '../public/web-app/ched10-website.png'

const IndexPage = () => {

  const loader = ({ src, width, quality }) => {
    // return `https://s3.amazonaws.com/demo/image/${src}?w=${width}&q=${quality || 75}`
    return `https://picsum.photos/id/${src}/${width}/520`
  }

  return (
    <Layout title='Devghod </>'>
      <div className='container mx-auto'>
        <Intro />
        <Skill />
        <AboutMe />
        <Project />
        <ContactMe />
      </div>
    </Layout>
  )
}  

export default IndexPage
