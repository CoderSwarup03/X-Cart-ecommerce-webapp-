import React from 'react'
import './newsLetter.css'


const NewsLetter = () => {
    return (
        <div className='newsletters'>
            <h1>Get Exclusive Offers On Your E-mail</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="text" placeholder='Enter Your Email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter