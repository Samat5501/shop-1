import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
import Products from './Products'
import '../App.css'


function PhoneList() {
    const { phones } = useGlobalContext();
    
    return (
        <>
            <h1 className='title'>Phones</h1>
        <main>
            {
                phones.map((item) => {
                    return <Products key={item.id} {...item} />
                })
            }
            </main>
            </>
    )
}

export default PhoneList
