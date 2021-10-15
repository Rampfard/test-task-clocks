import React from 'react';
import classes from './Loading.module.css';

const Loading: React.FC = () => {
	return (
		<div className={classes.loading}>
			<span className={classes.spinner}></span>
			<p>Loading...</p>
		</div>
	);
};

export default Loading;
