import React from 'react'
import { render }  from 'react-dom'
import { App } from './App.jsx'

render(
  <App apiUrl='/api_v1.0/' />, document.getElementById('app_root')
)
