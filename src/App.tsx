import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Loading, ClockWithTimezone } from './components';

import { getTimezones } from './store/actions/time';
import { RootState } from './store/reducers';

import classes from './App.module.css';

function App() {
  const dispatch = useDispatch();

  const {
    ui: {
      requestStatus: { status, error },
    },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getTimezones());
  }, [dispatch]);

  if (status === 'error') {
    return (
      <Container>
        <div className={classes.error}>{error}</div>;
      </Container>
    );
  }

  if (status === 'pending') {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <ClockWithTimezone />
      <ClockWithTimezone />
    </Container>
  );
}

export default App;
