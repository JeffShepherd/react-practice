import React from 'react'
import {Routes,Route} from 'react-router-dom'
import IdeaBox from '../IdeaBox/IdeaBox'
import './App.css'



const App = () => {


  return (
    <main>
      <Routes>
        <Route path='/' element={<IdeaBox />}/>
      </Routes>
    </main>

  )
}



export default App