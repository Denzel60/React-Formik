import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './form.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
