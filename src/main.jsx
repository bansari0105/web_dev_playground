import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Eventdemo'
import Hooksdemo from './Hooksdemo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hooksdemo/>
  </StrictMode>,
)


