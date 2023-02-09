import { FetchMyTeam } from '../utils/fetchFromLocalStorage';
import { useEffect } from 'react';

const Team = () => {
	useEffect(() => {
		let mount = true;
		if (mount) {
			const data = FetchMyTeam();
			console.log(data);
		}
		return () => {
			mount = false;
		};
	}, []);

	return <div>Team</div>;
};

export default Team;
