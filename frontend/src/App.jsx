import React from 'react'
import SideBar from './components/SideBar'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <div className='bg-blue-300 w-[100vw] h-[100vh] flex justify-center items-center'>
       <div className="box-container w-[90%] bg-blue-50 h-[90%] rounded-3xl flex justify-center">
        <SideBar/>
        <Portfolio/>
       </div>
    </div>
  )
}

export default App