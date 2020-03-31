import React from 'react';
import MoreOptions from './MoreOptions';

const Title = ({ title }) => {
	return (
		<div className="title-row">
			<h3>{title}</h3>
			<span>
				<MoreOptions />
			</span>
		</div>
	);
};

export default Title;
