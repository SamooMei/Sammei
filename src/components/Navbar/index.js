import React, { useState } from 'react';
import {
	RiGithubLine,
	RiLinkedinLine,
	RiArrowUpSLine,
	RiArrowDownSLine,
} from 'react-icons/ri';
import './index.scss';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className={'footer'}>
			<div className={'footer__switch'} onClick={() => setNav(!nav)}>
				{nav ? (
					<RiArrowUpSLine className={'icons'} />
				) : (
					<RiArrowDownSLine className={'icons'} />
				)}
			</div>
			<div className={`footer__content ${nav ? 'active' : ''}`}>
				<a href={'https://github.com/SamooMei'}>
					<RiGithubLine className={'icons'} />
				</a>
				<a href={'https://linkedin.com/in/samuelmei/'}>
					<RiLinkedinLine className={'icons'} />
				</a>
			</div>
		</div>
	);
};

export default Navbar;
