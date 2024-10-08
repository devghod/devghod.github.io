import { User as user } from '../utils/_data'

const Footer = () => {
  
  return (
    <>
    <footer className='mx-auto text-center shadow-2xl'>
      <p className='text-slate-400 text-xs my-5'>
        Created with ❤️ by { }
        <span className='font-semibold'>
          {user.devName} 
          {/* { }
          <Image 
            src={ nextjsLogo } 
            className='inline-block' 
            height={30} 
            width={30} 
            alt='NextJS Logo'
          /> */}
        </span>
      </p>
    </footer>
    </>
  )
}

export default Footer