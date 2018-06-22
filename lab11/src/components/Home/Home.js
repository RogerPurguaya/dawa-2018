import React from 'react';
import yeah from '../../assets/yeah.JPG'

const home = () => (
<div>
	<h1>Pagina de inicio de nuestro Blog</h1>
	<img src={yeah} alt="yeah" style={{
		maxHeight: '250px'
	}}/>
</div>);

export default home;