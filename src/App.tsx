import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClockWithTimezone from './components/ClockWithTimezone/ClockWithTimezone';
import Loading from './components/Loading/Loading';

import { getTimezones } from './store/actions/time';
import { RootState } from './store/reducers';

import classes from './App.module.css';

function App() {
	const dispatch = useDispatch();

	const {
		time: { timezones },
		ui: {
			requestStatus: { status, error },
		},
	} = useSelector((state: RootState) => state);

	useEffect(() => {
		dispatch(getTimezones());
		return () => {};
	}, [dispatch]);

	if (status === 'error') {
		return (
			<div className={classes.container}>
				<div className={classes.error}>{error}</div>;
			</div>
		);
	}

	if (status === 'pending' || !timezones.length) {
		return (
			<div className={classes.container}>
				<Loading />
			</div>
		);
	}

	return (
		<div className={classes.container}>
			<ClockWithTimezone timezones={timezones} />
			<ClockWithTimezone timezones={timezones} />
		</div>
	);
}

export default App;
