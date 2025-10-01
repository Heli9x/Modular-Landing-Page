import React, { useState } from 'react'
import './styles/cta.css'

function CallToAction(props) {
	const [data, setData] = useState(props.data)
	if(!props.data || !props.data.buttons) return null;


	const Button = (props)=>{
		return(
			<>
				<button className='action' key={props.index}>
					<a href={props.button[2]}>{props.button[0]}</a>
					<i className="material-symbols-outlined">
						{props.button[1]}
					</i>
				</button>
			</>
		)
	}

	return (
		<div>
			<div className="cta">
				<div className="title">
					<h3>{data["title"]}</h3>
					<p>{data["Subtitle"]}</p>
				</div>
				<div className="actions">
					{
						data["buttons"].map((button, index)=>(
							<Button 
								index={index}
								key={index}
								button = {button}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default CallToAction