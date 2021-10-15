import React, { useEffect, useState } from 'react';
import { getNumberRange } from '../../utils/getNumberRange';
import { getTime } from '../../utils/getTime';
import classes from './Clock.module.css';

interface ClockProps {
	timezone?: number;
}

const Clock: React.FC<ClockProps> = ({ timezone = 0 }) => {
	const [{ hours, minutes, seconds }, setTime] = useState(getTime(!!timezone));

	useEffect(() => {
		let interval = setInterval(
			() => setTime((state) => ({ ...state, ...getTime(!!timezone) })),
			1000
		);

		return () => clearInterval(interval);
	}, []);

	const getHours = (hours: number, timezone: number) => {
		const timezoneHours = hours + timezone;

		return timezoneHours >= 24 ? timezoneHours - 24 : timezoneHours;
	};

	const getZero = (time: number) => {
		return time > 9 ? time : '0' + time;
	};

	const getDegreesByTime = (time: number, isHours: boolean = false) => {
		return getNumberRange(time, 0, isHours ? 24 : 60, 0, 360);
	};

	const lines = [...Array(6)].map((_, i) => (
		<span
			key={i}
			className={classes.line}
			style={{ transform: `rotate(${i * 30}deg)` }}
		></span>
	));

	return (
		<div className={classes['clock-container']}>
			<div className={classes.clock}>
				<div className={classes.lines}>{lines}</div>
				<div
					className={classes['hour-hand']}
					style={{
						transform: `translate(-50%, -100%) rotate(${getDegreesByTime(
							getHours(hours, timezone),
							true
						)}deg)`,
					}}
				></div>
				<div
					className={classes['minute-hand']}
					style={{
						transform: `translate(-50%, -100%) rotate(${getDegreesByTime(
							minutes
						)}deg)`,
					}}
				></div>
				<div
					className={classes['second-hand']}
					style={{
						transform: `translate(-50%, -80%) rotate(${getDegreesByTime(
							seconds
						)}deg)`,
					}}
				></div>
				<div className={classes['center-point']}></div>
			</div>
			<div className={classes.time}>
				{getZero(getHours(hours, timezone))}:{getZero(minutes)}:
				{getZero(seconds)}
			</div>
		</div>
	);
};

export default Clock;