import React from 'react';

export const Page = props => {
	document.title = props.title + ' - FlatHub';
	//do pageview tracking and other things

	return <>{props.children}</>;
};
