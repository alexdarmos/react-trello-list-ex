import React from 'react';
import PropTypes from 'prop-types';

function CardItem({ title }) {
	return (
		<div className="card-item">
			<p>{title}</p>
		</div>
	);
}

CardItem.propTypes = {
	title: PropTypes.string
};

export default CardItem;
