import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router';
import { GreetingsThunk } from './reducers/greetingReducer';
import Greeting from './components/greeting';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GreetingsThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/greetings" element={<Greeting />} />
        <Route path="/" element={<Navigate replace to="/greetings" />} />
      </Routes>
    </>
  );
};

export default App;