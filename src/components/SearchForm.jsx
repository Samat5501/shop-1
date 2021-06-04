import React from 'react'
import { useGlobalContext } from '../context'
import '../App.css'

function SearchForm() {

    const {setSearch} = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    const searchPhone = () => {
        setSearch(searchValue.current.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <section className='section search'>
                <form className='search-form'
                    onSubmit={handleSubmit}
                >
                    <div className="form-control">
                        <label htmlFor="name">Search your favorite Phone</label>
                        <input type="text" id='name'
                            onChange={searchPhone}
                            ref={searchValue}
                        />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default SearchForm