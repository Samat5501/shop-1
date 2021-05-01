import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import PhoneList from '../PhoneList'
import Products from '../Products'
import SearchForm from '../SearchForm'

function Home() {
    return (
        <div>
            <SearchForm/>
             <PhoneList/>
        </div>
    )
}

export default Home
