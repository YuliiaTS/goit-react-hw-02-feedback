import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics';
import React, { Component } from 'react';
import style from '../components/App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelIncrement = (keyName) => {
    this.setState(prevState => ({
      [keyName]: prevState[keyName] + 1,
    }));
  };

  // handelIncrement2 = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handelIncrement3 = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    if (!good) {
      return 0;
    }
    const total = good + neutral + bad;
    const feedback = (good * 100) / total;
    return Math.round(feedback);
  };

  render() {
    // console.log(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.main}>
        <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handelIncrement}/>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
