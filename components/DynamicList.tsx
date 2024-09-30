import * as React from 'react';
import Image from 'next/image';
import { User as user } from '../utils/_data'

export type DynamicList = {}

const DynamicList: React.FC<DynamicList> = (props) => {

  const [ data, setData ] = React.useState([]);
  const [ columns, setColumns ] = React.useState(2);

  React.useEffect(() => setData(user.feeds), []);

  const handleColumns = (value: any) => setColumns(value)

  return (
    <>
      <div className="my-2 invisible md:visible">
        <button
          className='text-slate-700 rounded hover:bg-gray-400 py-1 px-2 bg-gray-200 mr-1'
          value={1}
          onClick={(e) => handleColumns(e.target.value)}
        >1</button>
        <button
          className='text-slate-700 rounded hover:bg-gray-400 py-1 px-2 bg-gray-200 mr-1'
          value={2}
          onClick={(e) => handleColumns(e.target.value)}
        >2</button>
        <button
          className='text-slate-700 rounded hover:bg-gray-400 py-1 px-2 bg-gray-200 mr-1'
          value={3}
          onClick={(e) => handleColumns(e.target.value)}
        >3</button>
      </div>
      <div 
        className={`grid gap-4 transition duration-500 ease-in-out
          ${data.length === 0 && ('grid-cols-1')}
          ${data.length > 0 && (`grid-cols-1 md:grid-cols-${columns}`)}`
        }
      >
        {data.length === 0 && (
          <div className="text-slate-400 text-center">No data</div>
        )}
        {data.length > 0 && (
          data.map((curr, idx) => (
            <div className="bg-sky-800 md:rounded-lg" key={idx}>
              <div className="grid grid-cols-1 md:gap-4 md:grid-cols-6">
                <div className="col-span-2 bg-slate-500 md:rounded-l-lg">
                  <Image
                    src={curr.image}
                    className='md:rounded-l-lg h-48 object-contain' 
                    height={300}  
                    alt={curr.name}
                  />
                </div>
                <div className="col-span-4 p-3 md:p-2">
                  <div className="text-slate-200 tracking-wide leading-loose font-bold text-lg">
                    {curr.name}
                  </div>
                  {(curr.type === 'project' && curr.tools.length > 0) && (
                    <div className="leading-relaxed">
                      {curr.tools.map((stack, i) => (
                          <PillHandler stack={stack} key={i} />
                        ))
                      }
                    </div>
                  )}
                  {(curr.type === 'info' && curr.professions.length > 0) && (
                    <div className="leading-relaxed mb-2">
                      {curr.professions.map((prof, i) => (
                        <span className='py-1 px-2 mx-1 rounded text-xs tracking-wide text-slate-200 bg-blue-500' key={i}>
                          {prof}
                        </span>
                        ))
                      }
                    </div>
                  )}
                  <div className="text-sm text-slate-400 tracking-wide line-clamp-4">
                    {curr.details}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DynamicList;

const PillHandler = ({stack}) => {

  return (
    <span 
      className={`py-1 px-2 mx-1 rounded text-xs tracking-wide text-slate-200 ${pillBgColor(stack)}`}
    >
      {stack}
    </span>
  )
}

const pillBgColor = (stack) => {

  const type = stack.toLowerCase()
  let data
  let temp

  switch (type) {

    case 'react':
      data = 'blue'
      temp = 800
      break

    case 'vue':
      data = 'sky'
      temp = 600
      break

    case 'nuxt':
      data = 'blue'
      temp = 500
      break

    case 'next':
      data = 'emerald'
      temp = 600
      break

    case 'mongodb':
      data = 'green'
      temp = 800
      break

    case 'express':
      data = 'green'
      temp = 800
      break

    case 'node':
      data = 'green'
      temp = 800
      break

    case 'vuex':
      data = 'sky'
      temp = 600
      break

    case 'laravel':
      data = 'pink'
      temp = 600
      break

    case 'xstate':
      data = 'blue'
      temp = 800
      break

    case 'redux':
      data = 'blue'
      temp = 800
      break

    case 'firebase':
      data = 'pink'
      temp = 600
      break

    case 'wordpress':
      data = 'slate'
      temp = 800
      break

    case 'typescript':
      data = 'slate'
      temp = 800
      break

    case 'javascript':
      data = 'fuchsia'
      temp = 300
      break

    case 'angular':
      data = 'slate'
      temp = 800
      break

    default:
      data = 'gray'

  }

  return data ? `bg-${data}-${temp}` : '';
}