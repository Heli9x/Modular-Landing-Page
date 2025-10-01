import React, { useState } from 'react'
import './styles/navbar.css'

function Navbar(props) {
	const [data, setData] = useState(props.data)

	if(!props.data || !props.data.links) return null;

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

	return(
		<nav>
			<div className="links">
				{
					data["links"].map((link, index)=>(
						<div className={"link "} key={index}>
							<li>
								<a href="#" className={link[1]=="Home"?"active":" "}>
									<i className="material-symbols-outlined">{link[0]}</i>
									<div className="text">{link[1]}</div>
								</a>
							</li>
						</div>
					))
				}
			</div>
			<div className="logo">
				<h3>{data["title"]}</h3>
				<div className="about-us">
					<div className="title">
						<h3>{data["about"][0]}</h3>
					</div>
					<div className="descript">
						{data["about"][1]}
					</div>
					<div className="btn-group">
						{
							data["about"][2].map((button, index)=>(
								<Button
									button={button}
									index={index}
									key={index}
								/>
							))
						}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar