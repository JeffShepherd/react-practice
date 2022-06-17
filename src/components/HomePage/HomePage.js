import React from 'react'
import {Link} from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {

  return (
    <div className='link-container'>
      <h1>My Apps</h1>
      <Link to={'cryptoprices'} className='home-page-link'>Crypto Prices</Link>
      <Link to={'ideabox'} className='home-page-link'>My Ideas</Link>
      <Link to={'readinglist'} className='home-page-link'>My Reading List</Link>
    </div>
  )
}

export default HomePage