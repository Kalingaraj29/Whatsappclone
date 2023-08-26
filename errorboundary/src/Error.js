import React from 'react'

function Error({error,resetErrorBoundary}) {
  return (
    <>
    <h1>{error.message}</h1>
     <h1>something went wrong</h1>
     <button onClick={resetErrorBoundary}>Try again</button>
     </>
  )
}

export default Error
