import _ from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import fontAwesome from 'font-awesome/css/font-awesome.css'

require("./style/style.less")

const app = document.getElementById("app")

ReactDOM.render(
	<App/>,
	app
)