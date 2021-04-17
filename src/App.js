import React from 'react'
//import Setup from './tutorial/1-useState/setup/2-useState-basics'
//import Setup2 from './tutorial/1-useState/setup/3-useState-array'
//import Setup2 from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'
import Setup2 from './tutorial/3-conditional-rendering/setup/1-multiple-returns'
import Setup from './tutorial/4-forms/setup/1-controlled-inputs'
function App() {
  return (
    <div className='container'>
      <h2>UseState Example</h2>
      <Setup2 />
      <h2>Controlled-input-from</h2>
      <Setup />
    </div>
  )
}

export default App
