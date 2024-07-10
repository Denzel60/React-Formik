import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
// import { AuthProvider } from 'react-auth-kit'
// import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <AuthProvider authType="cookie" cookieDomain={window.location.hostname} authName="token" cookieSecure={false}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider> */}

    <App />
  </React.StrictMode>
)

