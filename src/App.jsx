import React from 'react'
import Usestate from './Hooks/Usestate'
// import Usetatehtml from './Hooks/Usetatehtml'
import Form from './Hooks/Form'
import Useref from './Hooks/Useref'
import Animation from './Hooks/Animation'


import Stopwatch from './Hooks/Stopwatch'
import FR4 from './Hooks/FR4'

export default function App() {
  return (
    <div>
      <Usestate/>
            <Form/>
            <FR4/>
            <Useref/>
            <Stopwatch/>
            <Animation/>

    </div>
  )
}
