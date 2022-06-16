import React from 'react'
import {Routes,Route} from 'react-router-dom'
import IdeaBox from '../IdeaBoxApp/IdeaBox/IdeaBox'
import ReadingList from '../ReadingListApp/ReadingList/ReadingList'
import './App.css'



const App = () => {


  return (
    <main>
      <Routes>
        <Route path='/' element={<ReadingList />}/>
        <Route path='/IdeaBox' element={<IdeaBox />}/>
      </Routes>
    </main>

  )
}



export default App