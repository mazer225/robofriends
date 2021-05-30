import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
	const cardArray = robots.map((item,index) => {
		return <Card key={index} id={item.id} name={item.name} email={item.email}/>
	});

	return(
		<div>
			{cardArray}
		</div>);
}

export default CardList;