import React from 'react'
import {Link} from 'react-router-dom'

function OtherPage() {
    return (
        <div>
            In the other page!
            <Link to="/">Home</Link>
        </div>
    )
}

export default OtherPage
