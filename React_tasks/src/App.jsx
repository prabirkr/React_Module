import { useState } from 'react'
import './App.css'
import Form from './assets/component/Form'
import MyForm from './assets/component/Form'
import Axios from './assets/component/Axios'
import Fetch from './assets/component/Fetch'
import formSchema from './assets/validation'


function App() {
  return (
    <>
      {/* <MyForm schema={formSchema}/> */}
      {/* <Axios/> */}
      <Fetch/>
    </>
  )
}

export default App
