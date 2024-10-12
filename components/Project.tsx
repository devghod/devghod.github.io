import Image from 'next/image'

import artemis from '../public/web-app/artemis.png'
import pbris from '../public/web-app/pbris.png'
import dentalfast from '../public/web-app/dentalfast.png'
import qrthis from '../public/web-app/qrthis.png'
import nxtform from '../public/web-app/nxtform.png'
import ched10 from '../public/web-app/ched10-website.png'

const Project = () => {
  return (
    <>
      <section id="projects" className="my-24">
        <div className="text-center md:text-left mx-0 md:mx-5 border-l-0 md:border-l-4 pl-0 md:pl-2">
          Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mx-10">
          <div className="border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto">
            <a
              href="https://regulations.gov.ph/pbris/login?initial=true"
              target={'_blank'}
            >
              <Image
                src={pbris}
                className="rounded-t-lg"
                height={500}
                width={500}
                alt="PBRIS"
              />
              <div className="py-3 px-3">
                <div className="text-sm text-slate-800 font-semibold">
                  Philippine Business Regulations Information System (PBRIS)
                </div>
                <div className="text-xs text-slate-500">
                  Angular, Firebase, Typescript
                </div>
              </div>
            </a>
          </div>
          <div className="border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto">
            <a
              href="https://regulations.gov.ph/artemis/contact-us"
              target={'_blank'}
            >
              <Image
                src={artemis}
                className="rounded-t-lg"
                height={500}
                width={500}
                alt="ARTEMIS"
                priority
              />
              <div className="py-3 px-3">
                <div className="text-sm text-slate-800 font-semibold">
                  Anti-Red Tape E-Management Information System (ARTEMIS)
                </div>
                <div className="text-xs text-slate-500">
                  Angular, Firebase, Typescript
                </div>
              </div>
            </a>
          </div>
          <div className="border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto">
            <a href="https://nxtform.com/" target={'_blank'}>
              <Image
                src={nxtform}
                className="rounded-t-lg"
                height={500}
                width={500}
                alt="Nxtform"
                priority
              />
              <div className="py-3 px-3">
                <div className="text-sm text-slate-800 font-semibold">
                  Nxtform
                </div>
                <div className="text-xs text-slate-500">
                  VueJS, NuxtJS, Laravel
                </div>
              </div>
            </a>
          </div>
          <div className="border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto">
            <a href="https://dentalfast.com.au/" target={'_blank'}>
              <Image
                src={dentalfast}
                className="rounded-t-lg"
                height={500}
                width={500}
                alt="Dentalfast"
                priority
              />
              <div className="py-3 px-3">
                <div className="text-sm text-slate-800 font-semibold">
                  Dentalfast
                </div>
                <div className="text-xs text-slate-500">ReactJS, Laravel</div>
              </div>
            </a>
          </div>
          <div className="border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto">
            <a href="https://qrthis.io/" target={'_blank'}>
              <Image
                src={qrthis}
                className="rounded-t-lg"
                height={500}
                width={500}
                alt="QRThis"
                priority
              />
              <div className="py-3 px-3">
                <div className="text-sm text-slate-800 font-semibold">
                  QRThis
                </div>
                <div className="text-xs text-slate-500">ReactJS, Laravel</div>
              </div>
            </a>
          </div>
          <div className="border shadow hover:shadow-lg rounded-lg w-96 justify-self-center md:justify-self-auto">
            <a href="https://ro10.ched.gov.ph/" target={'_blank'}>
              <Image
                src={ched10}
                className="rounded-t-lg"
                height={500}
                width={500}
                alt="CHED 10 Website"
                priority
              />
              <div className="py-3 px-3">
                <div className="text-sm text-slate-800 font-semibold">
                  Commission on Higher Educaton Region 10 (CHED RO 10) - Website
                </div>
                <div className="text-xs text-slate-500">Wordpress</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project
