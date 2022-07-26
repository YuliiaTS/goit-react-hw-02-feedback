import Statistics from './Statistics/Statistics';
import React, { Component } from 'react';
import style from '../components/App.module.css';

class App extends Component {
  state = {
     good: 0,
     neutral: 0,
     bad: 0,
  };
  render () {
    console.log(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.main}>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }  
}

export default App;