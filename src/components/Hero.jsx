import React, { use, useState } from 'react'
import './styles/hero.css'

function Hero(props) {
	const [data, setData] = useState(props.data)
	return(
		<div className='component-hero'>
			<div className="hero">
				<div className="title capsule">
					<div className="text">
						<small>Heli9 Labs</small> | <small className='light'>let's make it better</small>
					</div>
				</div>
				<div className="text">
					<h3 className="heading">
						{data["headline"]}
					</h3>
					<p className='small'>
						{data["subtext"]}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero