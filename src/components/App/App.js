import React from 'react'
import {Routes,Route} from 'react-router-dom'
import IdeaBox from '../IdeaBoxApp/IdeaBox/IdeaBox'
import ReadingList from '../ReadingListApp/ReadingList/ReadingList'
import CryptoPrices from '../CryptoPricesApp/CryptoPrices/CryptoPrices'
import HomePage from '../HomePage/HomePage'
import './App.css'

const App = () => {

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cryptoprices' element={<CryptoPrices />}/>
        <Route path='/readinglist' element={<ReadingList />}/>
        <Route path='/ideabox' element={<IdeaBox />}/>
      </Routes>
    </main>

  )
}

export default App