import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {  BlogProvider } from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BlogProvider>
    <App />
    </BlogProvider>
  </BrowserRouter>
)
