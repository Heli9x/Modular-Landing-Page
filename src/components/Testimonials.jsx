import React, { useState } from 'react'
import './styles/testimonials.css'

function Testimonials(props) {
	const [data, setData] = useState(props.data)

	return (
		<div className='component-testimonies'>
					<div className="carousel">
						<div className="text">
							<h3 className='title'>Testimonials</h3>
							<p>{data["intro"]}</p>
						</div>

						<div className="cards">
							{
								Object.keys(data["people"]).map((profile, index)=>(
									<div className="card" key={index}>
										<div className="profile">
											<div className="image">
												<img src={data["people"][profile][1]} alt="" />
											</div>
											<div className="name">{profile}</div>
											<div className="profession">{data["people"][profile][0]}</div>
										</div>
										<div className="review">
											{data["people"][profile][2]}
										</div>
									</div>
								))
							}
						</div>
					</div>
		</div>
	)
}

export default Testimonials