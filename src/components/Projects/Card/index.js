import { RiLinksFill, RiGithubLine } from 'react-icons/ri';

import './index.scss';

const Card = ({ project }) => {
	return (
		<div className={'card'}>
			<div className={'card__name'}>{project.name}</div>
			<div className={'card__description'}>{project.description}</div>
			<div className={'card__links'}>
				<a href={project.link}>
					<RiLinksFill />
				</a>
				{project.github !== '' && (
					<a href={project.link}>
						<RiGithubLine />
					</a>
				)}
			</div>
		</div>
	);
};

export default Card;
