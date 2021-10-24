import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import Clock from '../Clock/Clock';
import classes from './ClockWithTimezone.module.css';

const ClockWithTimezone: React.FC = () => {
  const {
    time: { timezones },
  } = useSelector((state: RootState) => state);

  const [timezone, setTimezone] = useState<number>(() =>
    timezones.length ? +timezones[0].timezone : 0
  );

  const zones = timezones.map((zone) => {
    return (
      <option key={zone.name} value={zone.timezone}>
        {zone.name}
      </option>
    );
  });

  const changeTimezoneHandler = (value: string) => {
    setTimezone(+value);
  };

  return (
    <div className={classes.container}>
      <Clock timezone={timezone} />
      {!!timezones.length && (
        <select
          className={classes.select}
          onChange={(e: FormEvent<HTMLSelectElement>) =>
            changeTimezoneHandler(e.currentTarget.value)
          }
        >
          {zones}
        </select>
      )}
    </div>
  );
};

export default ClockWithTimezone;
