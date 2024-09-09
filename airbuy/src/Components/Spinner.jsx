import React from 'react'
import spinner from '../assets/images/loading.gif'

const Spinner = () => {
    return (
        <>
            <div className="spinner">
                <img style={{ width: "80px", marginTop: "50px" }} src={spinner} />
            </div>
        </>
    )
}

export default Spinner