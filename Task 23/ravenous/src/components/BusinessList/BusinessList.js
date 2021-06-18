import React from 'react';
import './BusinessList.css';
import Business from './../Business/Business';

class BusinessList extends React.Component {
	render() {
		const businessesList = this.props.businesses;
		return (
			<div className='BusinessList'>
				{businessesList.map((business) => {
					return <Business business={business} />;
				})}
			</div>
		);
	}
}

export default BusinessList;
