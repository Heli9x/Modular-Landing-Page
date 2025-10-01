import React from 'react'
import { useState } from 'react'
import './styles/services.css'

function Services(props) {
    const [data, setData] = useState(props.data)
    return (
    <div className='component-services'>
        {
				Object.keys(data).map((key, index)=>(
					<div className="carousel" key={index}>
						<div className="text">
							<h3 className='title'>{key}</h3>
							<p>{data[key][0]}</p>
						</div>

						<div className="cards">
							{
								Object.keys(data[key]).map((profile, index)=>(
									<button type='button' className="card" key={index}>
										<div className="profile">
											<div className="image">
												<i className="material-symbols-outlined md-60" style={{fontSize:'40px'}}>
                                                    {data[key][profile][1]}
                                                </i>
											</div>
                                            <div className="name">{data[key][profile][0]}</div>
											<div className="profession">{profile}</div>
										</div>
                                        <div className="details">
                                            <div className="text">
                                                <div className="title-details">
                                                    <h4>Offers</h4>
                                                </div>
                                                <div className="list">
                                                    {
                                                       data[key][profile][3].map((item, index)=>(
                                                            <div className='item' key={index}>{item}</div>
                                                       )) 
                                                    }
                                                </div>
                                            </div>
                                            <div type='button' className='cta-btn'>
                                                Book a repair
                                            </div>
                                        </div>
									</button>
								))
							}
						</div>
					</div>
				))
			}
    </div>
  )
}

export default Services