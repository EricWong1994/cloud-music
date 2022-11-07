import React from 'react';
import { renderRoutes } from 'react-router-config';

function Singer(props) {
	return (
		<div>
			Singer
			{renderRoutes(props.route.routes)}
		</div>
	);
}

export default Singer;
