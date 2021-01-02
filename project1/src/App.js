import React, {Fragment} from 'react';
import './App.css';
import Say from './components/Say';
import EventPractice from './components/EventPractice';
import MyComponents from './components/MyComponents';
import Counter from './components/Counter';

function App() {
  return (
    <Fragment>
      <EventPractice />
      <Say/>
      <MyComponents />
      <Counter />
    </Fragment>);
}

export default App;
