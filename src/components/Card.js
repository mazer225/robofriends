import React from 'react';

const Card = (props) => {
	const {id,name,email} = props;
	return (
		<div className="bg-light-green dib pa3 ma3 grow br4 bw2 shadow-5">
			<img alt='robot' src={`https://robohash.org/${id}?`}/>
			<div className="tc">
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;