import React from 'react';
import PropTypes from 'prop-types';
import CardItem from './CardItem';

function Card({ cards }) {
	return (
		<>
			{cards.map(card => (
				<CardItem key={card.id} title={card.title} />
			))}
		</>
	);
}

Card.propTypes = {
	card: PropTypes.array
};

export default Card;
