import React from 'react'
import "./Checkbox.scss"

const Checkbox = () => {
    return (
        <div>
            <div className='container'>
                <input type="checkbox" id='check' />
                <label htmlFor="check" className='button'></label>
            </div>
        </div>
    )
}

export default Checkbox