import { React, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import Card from './Card';
import works from '../../data';

import './index.scss';

const Projects = () => {
	const [search, setSearch] = useState('');
	const [projects, setProjects] = useState(works);

	const handleChange = (e) => {
		const searchVal = e.target.value;

		const temp = [...works].filter(
			(project) =>
				project.name.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
		);

		setSearch(searchVal);
		setProjects(temp);
	};

	const mapped = projects.map((p) => <Card project={p} />);

	return (
		<section>
			<div className={'project_lists'}>
				<div className={'search'}>
					<input
						className={'search__bar'}
						placeholder={'Search Project'}
						type="text"
						value={search}
						onChange={handleChange}
					/>
					<BiSearchAlt className={'search__icon'} />
				</div>
				<div className={'project_container'}>{ mapped }</div>
			</div>
		</section>
	);
};

export default Projects;
