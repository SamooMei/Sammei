import React, { useState } from 'react';
import {
	RiBriefcase3Line,
	RiHomeHeartLine,
	RiGithubLine,
	RiLinkedinLine,
	RiArrowUpSLine,
	RiArrowDownSLine,
} from 'react-icons/ri';
import './index.scss';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className={'navbar'}>
			<div className={'navbar__switch'}>
				{nav ? (
					<RiArrowUpSLine className={'icons'} onClick={() => setNav(!nav)} />
				) : (
					<RiArrowDownSLine className={'icons'} onClick={() => setNav(!nav)} />
				)}
			</div>
			<div className={`navbar__content ${nav ? 'active' : ''}`}>
				<div className={'navbar__content__ref'}>
					<div className={'names'}>Home</div>
					<a href={'/'}>
						<RiHomeHeartLine className={'icons'} />
					</a>
				</div>

				<div className={'navbar__content__ref'}>
					<div className={'names'}>Projects</div>
					<a href={'/Projects'}>
						<RiBriefcase3Line className={'icons'} />
					</a>
				</div>

				<div className={'navbar__content__ref'}>
					<div className={'names'}>Github</div>
					<a href={'https://github.com/SamooMei'}>
						<RiGithubLine className={'icons'} />
					</a>
				</div>

				<div className={'navbar__content__ref'}>
					<div className={'names'}>LinkedIn</div>
					<a href={'https://linkedin.com/in/samuelmei/'}>
						<RiLinkedinLine className={'icons'} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
