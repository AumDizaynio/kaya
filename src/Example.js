import React, { useState, useEffect } from 'react'

const Example = () => {

    // const [first, setFirst] = useState(1)

    // const [arr, setArr] = useState([1])

    const [obj, setObj] = useState({
        name: 'aum'
    })

    console.log("render")

    const hanleClick = () => {
        obj.name = 'kajal';
        // setObj({
        //     ...obj
        // })
        setObj(obj)
    }

    return (
        <div>
            <button onClick={() => {
                // setFirst(1)
                // setArr([1])
                hanleClick()
            }}>click me</button>
        </div>
    )
}

export default Example
