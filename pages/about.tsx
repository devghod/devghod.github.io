import Link from 'next/link'
import Layout from '../components/DefaultPageWrapper'

const AboutPage = () => (
  <Layout title="Devghod | About">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export default AboutPage
