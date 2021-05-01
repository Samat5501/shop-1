import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
import Products from './Products'
import '../App.css'


function PhoneList() {
    const { phones, loading } = useGlobalContext();
    if (loading) {
        return (
            <Loading/>
        )
    }
    if (phones.length < 1){
        return <h1>Sorry this phone Not here</h1>
    }
    return (
        <><h1 className='title'>Phones</h1>
        <main>
            
            {
                phones.map((item) => {
                    return <Products key={item.id} {...item}/>
                })
            }
            </main>
            </>
    )
}

export default PhoneList
