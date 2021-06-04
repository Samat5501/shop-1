import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

function Home() {
    return (
        <div className='home'><div>
            <h1 className='home-title'>We have the best <br/> smartphones</h1>
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Debitis aperiam quia saepe sed nesciunt, maxime esse provident
            exercitationem molestias perferendis eum quaerat distinctio,
                eligendi, officiis officia unde repellat non. Ab.</p>
            <Link to='/product'>
                <button className='add-btn shop-btn'>Shop now</button>
            </Link>
        </div>
            <img className='home-img' src="https://www.thespruce.com/thmb/iiD9bg-WfQKYRl3HwoMHT2Wv2KQ=/fit-in/1500x1205/filters:no_upscale():max_bytes(150000):strip_icc()/ExtraLoudAlarmClockwithBedShaker-051082d297da4cabb1f7791d9824ba84.jpg" alt="" />
            <img className='home2-img' src="https://files.gsmchoice.com/phones/apple-iphone-12-pro-max/apple-iphone-12-pro-max-big.jpg" alt="" />
            <img className='home3-img' src="https://www.ixbt.com/img/n1/news/2020/10/4/iphone-12-pro-family-hero.jpg" alt="" />
        </div>
    )
}

export default Home
