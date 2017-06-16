import React from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Page } from '../components/Page'

const Home = ({ match }) => {
	return( 
		<div>
			<Header/>
			<Hero/>
			<Page/>			
		</div>
)
}

export default Home