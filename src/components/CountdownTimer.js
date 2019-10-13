import React from 'react';

export default class CountdownTimer extends React.Component{
  state = {
    secondsRemaining: 0
  }

  tick = () => {
    if (this.state.secondsRemaining) {
      this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    }else{
      clearInterval(this.timer);
      this.props.gameOver("Out of Time")
    }
  };

  componentDidMount(){
    this.setState({ secondsRemaining: this.props.time }, () => {
      this.timer = setInterval(this.tick, 1000); // 1000 = 1 second, 60000 = 1 minute
    });
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render(){
    return <span>Time Remaining: {this.state.secondsRemaining}</span>
  }
}