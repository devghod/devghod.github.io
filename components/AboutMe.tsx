import Image from 'next/image';
import moment from 'moment';

const AboutMe = () => {

  const loader = ({ src, width, quality }) => {
    // return `https://s3.amazonaws.com/demo/image/${src}?w=${width}&q=${quality || 75}`
    return `https://picsum.photos/id/${src}/${width}/520`
  }
  yearsOfExperience()

  return (
    <>
    <section id='aboutme' className='my-24'>
      <div className='text-slate-200 text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2'>About Me</div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-8 md:mx-10'>
        <div className='justify-self-center md:mb-4 md:mb-0 shadow'>
          <Image
            loader={loader}
            src="239"
            className='rounded-lg' 
            height={400} 
            width={400} 
            alt='Coding'
          />
        </div>
        <div className='bg-gray-100 md:rounded-lg p-4 md:w-96 text-sm justify-self-center md:justify-self-auto shadow'>
          I am a full stack developer with over {yearsOfExperience()} years of experience of building scalable applications. { } <br /><br />
          I used my spare time exploring some new tech tools to improve my skills and I enjoy solving problems. Being a developer is very challenging, so the best way to cope up with this is to take a break and do some stuff like walk, take a snack and play video games.
          I love to read manga in my past time and like to create one, but I don't have the proper tools and skills. 😂
        </div>
      </div>
    </section>
    </>
  )
};

export default AboutMe;

const yearsOfExperience = () => {
  const dateExperience = moment('2019-11-02');
  const now = moment(new Date());
  return now.diff(dateExperience, 'years');
};