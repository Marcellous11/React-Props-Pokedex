import React from 'react';
import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = (props) => {
	let imgSrc = `${POKE_API}${props.id}.png`;
	console.log(props);
	return (
		<div className="Pokecard">
			<div className="Pokecard-title">{props.name}</div>
			<img className="Pokecard-image" src={imgSrc} alt="" />
			<div className="Pokecard-data">Type: {props.type}</div>
			<div className="Pokecard-data">Exp: {props.base_experience}</div>
		</div>
	);
};

export default Pokecard;
