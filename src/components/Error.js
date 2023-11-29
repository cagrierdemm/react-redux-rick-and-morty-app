import React from 'react'

function Error({message}) {
    return (
        <div className='container'>
            <div className="alert alert-danger mt-5 w-50 mx-auto" role="alert">
            <h4 className="alert-heading">Error!</h4>
            <p>{message}</p>
        </div>
        </div>
    )
}

export default Error