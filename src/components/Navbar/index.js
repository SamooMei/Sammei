import React, { useState } from 'react';
import {
	RiFilePaper2Line,
	RiBriefcase3Line,
	RiHomeHeartLine,
	RiGithubLine,
	RiLinkedinLine,
	RiArrowUpSLine,
	RiArrowDownSLine,
} from 'react-icons/ri';

import pdf from '../../data/Resume.pdf';
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
					<a href={'/'} className={'home'}>
						<RiHomeHeartLine className={'icons'} />
					</a>
					<div className={'names home_'}>Home</div>
				</div>

				<div className={'navbar__content__ref'}>
					<a href={'/#/projects'} className={'projects'}>
						<RiBriefcase3Line className={'icons'} />
					</a>
					<div className={'names projects_'}>Projects</div>
				</div>

				<div className={'navbar__content__ref'}>
					<a
						href={'https://github.com/SamooMei'}
						target={'_blank'}
						rel={'noreferrer'}
						className={'github'}
					>
						<RiGithubLine className={'icons'} />
					</a>
					<div className={'names github_'}>Github</div>
				</div>

				<div className={'navbar__content__ref'}>
					<a
						href={'https://linkedin.com/in/samuelmei/'}
						target={'_blank'}
						rel={'noreferrer'}
						className={'linkedin'}
					>
						<RiLinkedinLine className={'icons'} />
					</a>
					<div className={'names  linkedin_'}>LinkedIn</div>
				</div>

				<div className={'navbar__content__ref'}>
					<a
						href={pdf}
						target={'_blank'}
						rel={'noreferrer'}
						className={'resume'}
					>
						<RiFilePaper2Line className={'icons'} />
					</a>
					<div className={'names  resume_'}>Resume</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
