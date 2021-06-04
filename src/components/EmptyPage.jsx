import React from 'react'
import { Link } from 'react-router-dom'

function EmptyPage() {
    return (
        <div>
            Empty
            <Link to='/product'>
                <button>Fill It</button> </Link>
        </div>
    )
}

export default EmptyPage