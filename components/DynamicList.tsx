import * as React from 'react'
import Image from 'next/image'
import { User as user } from '../constant/_data'

export type DynamicList = {}

const DynamicList: React.FC<DynamicList> = props => {
  const [data, setData] = React.useState([])
  const [columns, setColumns] = React.useState(2)
  const [details, setDetails] = React.useState(null)
  const [onModal, setOnModal] = React.useState(false)

  React.useEffect(() => setData(user.feeds), [])

  const handleColumns = (value: any) => setColumns(value)

  const handleModal = (idx: number) => {
    setOnModal(true)
    const feed = data.filter((obj, id) => idx === id)

    if (feed.length > 0) {
      setDetails(feed[0])
    }
  }

  const closeHandleModal = () => {
    setOnModal(false)
    setDetails(null)
  }

  return (
    <section id="projects">
      <div className="md:mx-40">
        <div className="mb-4 invisible md:visible">
          <button
            className="text-slate-500 rounded hover:bg-gray-400 hover:text-slate-100 py-1 px-2 bg-gray-100 mr-1"
            value={1}
            onClick={(e: any) => handleColumns(e.target.value)}
          >
            1
          </button>
          <button
            className="text-slate-500 rounded hover:bg-gray-400 hover:text-slate-100 py-1 px-2 bg-gray-100 mr-1"
            value={2}
            onClick={(e: any) => handleColumns(e.target.value)}
          >
            2
          </button>
        </div>
        <div
          className={`grid gap-4 transiton-all duration-500 ease-in-out
            ${data.length === 0 && 'grid-cols-1'}
            ${data.length > 0 && `grid-cols-1 md:grid-cols-${columns}`}`}
        >
          {data.length === 0 && (
            <div className="text-slate-400 text-center">No data</div>
          )}
          {data.length > 0 &&
            data.map((curr, idx) => (
              <div
                className="bg-gray-100 md:rounded-lg hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:bg-gray-200 transition duration-500 ease-in-out shadow hover:shadow-indigo-500/50 hover:shadow-lg"
                key={idx}
                onClick={() => handleModal(idx)}
              >
                <div className="grid grid-cols-1">
                  <div className="bg-slate-500 md:rounded-t-lg">
                    <Image
                      src={curr.image}
                      className="md:rounded-t-lg h-40 object-cover"
                      alt={curr.name}
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-slate-700 tracking-wide leading-relaxed font-bold text-lg flex justify-between mb-1">
                      <div className="flex">
                        {curr.name}
                        <span className="ml-2 p-0 text-xs content-center text-amber-500 capitalize">
                          {curr.type}
                        </span>
                      </div>
                      {curr.type === 'project' && (
                        <div className="">
                          <a href={curr.url} target="_blank">
                            <svg
                              className="-mr-1 h-5 w-5"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M11,16H10C8.39,16 6,14.94 6,12C6,9.07 8.39,8 10,8H11V10H10C9.54,10 8,10.17 8,12C8,13.9 9.67,14 10,14H11V16M15,11V13H9V11H15M14,16H13V14H14C14.46,14 16,13.83 16,12C16,10.1 14.33,10 14,10H13V8H14C15.61,8 18,9.07 18,12C18,14.94 15.61,16 14,16Z"
                              />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                    {curr.type === 'project' && curr.tools.length > 0 && (
                      <div className="leading-relaxed flex flex-wrap gap-2">
                        {curr.tools.map((stack, i) => (
                          <PillHandler stack={stack} key={i} />
                        ))}
                      </div>
                    )}
                    {curr.type === 'info' && curr.professions.length > 0 && (
                      <div className="leading-relaxed flex flex-wrap gap-2">
                        {curr.professions.map((prof, i) => (
                          <span
                            className="py-1 px-2 rounded text-xs tracking-wide text-slate-200 bg-blue-500"
                            key={i}
                          >
                            {prof}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="text-sm text-slate-400 line-clamp-3 leading-relaxed mt-5">
                      {curr.details}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {onModal && (
          <div
            className={
              'transition duration-500 ease-in-out fixed inset-0 overflow-y-auto'
            }
            aria-labelledby="modal-headline"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        {details.name}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {details.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={closeHandleModal}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default DynamicList

const FnModal = (data: object) => {
  return <div className="">Modal</div>
}

const PillHandler = ({ stack }) => {
  return (
    <span
      className={`py-1 px-2 rounded text-xs tracking-wide text-slate-200 
        ${pillBgColor(stack)}`}
    >
      {stack}
    </span>
  )
}

const pillBgColor = stack => {
  const type = stack.toLowerCase()
  let data, temp

  // framework
  if (['laravel', 'vue', 'next', 'nuxt', 'angular'].includes(type)) {
    data = 'sky'
    temp = 600
  } // tools
  else if (
    [
      'react',
      'redux',
      'xstate',
      'node',
      'express',
      'vuex',
      'typescript',
      'javascript',
      'tailwind',
      'css',
      'php',
      'wordpress',
    ].includes(type)
  ) {
    data = 'blue'
    temp = 500
  } else if (['mongodb', 'firebase', 'homestead', 'docker'].includes(type)) {
    data = 'pink'
    temp = 600
  } else {
    data = 'gray'
    temp = 500
  }

  return data ? `bg-${data}-${temp}` : ''
}
