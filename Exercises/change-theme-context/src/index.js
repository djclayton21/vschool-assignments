import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import ThemeProvider from './context/ThemeProvider'
import './layout.css'
import './Themes/light.css'
import './Themes/dark.css'
import './Themes/neon.css'

ReactDOM.render (
    <ThemeProvider>
        <App />
    </ThemeProvider>
    , document.getElementById('root')
)

