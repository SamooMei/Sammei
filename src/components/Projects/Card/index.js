import { RiLinksFill, RiGithubLine } from 'react-icons/ri';

import './index.scss';

const Card = ({ project }) => {
	return (
		<div className={'card'}>
			<div className={'card__name'}>{project.name}</div>
			<div className={'card__description'}>{project.description}</div>
			<div className={'card__links'}>
				<a href={project.link}>
					<RiLinksFill className={'card__links__icons'} />
				</a>
				{project.github !== '' && (
					<a href={project.github}>
						<RiGithubLine className={'card__links__icons'}/>
					</a>
				)}
			</div>
		</div>
	);
};

export default Card;
