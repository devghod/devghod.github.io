import Image from 'next/image'
import moment from 'moment'

const AboutMe = () => {
  const loader = ({ src, width, quality }) => {
    return `https://picsum.photos/id/${src}/${width}/520`
  }

  return (
    <section id="aboutme" className="my-24">
      <div className="text-slate-200 text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2">
        About Me
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mx-10">
        <div className="justify-self-center md:mb-4 md:mb-0 shadow">
          <Image
            loader={loader}
            src="239"
            className="rounded-lg"
            height={400}
            width={400}
            alt="Coding"
          />
        </div>
        <div className="bg-gray-100 md:rounded-lg p-4 md:w-96 text-sm justify-self-center md:justify-self-auto shadow">
          I’m a full stack developer with over {yearsOfExperience()} years of
          experience building efficient and scalable applications, with a strong
          focus on frontend development. I’m passionate about optimizing
          performance and ensuring smooth user experiences, and I frequently use
          unit testing to maintain code quality and reliability. In my free
          time, I explore new tech tools to enhance my skills and improve the
          scalability of the systems I build. Being a developer can be
          challenging, so I take breaks by walking, snacking, or playing video
          games to recharge.
        </div>
      </div>
    </section>
  )
}

export default AboutMe

const yearsOfExperience = () => {
  const dateExperience = moment('2019-11-02')
  const now = moment(new Date())
  return now.diff(dateExperience, 'years')
}
