import React from 'react'

const LoadingPage = () => {
  return (
    <div className='loading-page'>
      <div className='loading-spinner'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
