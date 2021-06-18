import React from 'react';
import './Business.css';

class Business extends React.Component {
	render() {
		const businessInfo = this.props.business;
		return (
			<div className='Business'>
				<div className='image-container'>
					<img src={businessInfo.imageSrc} alt={businessInfo.name} />
				</div>
				<h2>{businessInfo.name}</h2>
				<div className='Business-information'>
					<div className='Business-address'>
						<p>{businessInfo.adress}</p>
						<p>{businessInfo.city}</p>
						<p>
							{businessInfo.city} {businessInfo.zipCode}
						</p>
					</div>
					<div className='Business-reviews'>
						<h3>{businessInfo.category}</h3>
						<h3 className='rating'>{businessInfo.rating} stars</h3>
						<p>{businessInfo.reviewCount} reviews</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Business;
