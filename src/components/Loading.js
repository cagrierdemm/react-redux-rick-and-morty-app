import React from 'react'

function Loading() {
    return (
        <div className="text-center m-5 p-5">
            <div className="spinner-border text-light" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}

export default Loading