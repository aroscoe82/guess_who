import React from 'react';

export default class Clues extends React.Component{
  state = {
    initialTime: 0,
    timerRemaining: 0,
    clues: [],
    count: 0,
    clueInterval: 0
  };

  getClues = (clueFields) => {
    return clueFields.map((field, index) => {
      return {'id': index, 'label': field, 'answer': this.props.who[field]};
    });
  };

  tick = () => {
    if (this.state.timerRemaining) {
      let local = Object.assign({}, this.state);
      local.timerRemaining = local.timerRemaining - 1;
      if(local.timerRemaining === local.initialTime - ((local.count+1) * local.clueInterval)){
        local.count+=1;
      }
      this.setState({timerRemaining: local.timerRemaining, count: local.count});
    }else{
      clearInterval(this.timer);
    }
  };

  componentDidMount(){
    let local = Object.assign({}, this.state);
    local.clueInterval = Math.ceil(this.props.time/this.props.clues.length);
    local.clues = this.getClues(this.props.clues);
    local.initialTime = this.props.time;
    local.timerRemaining = this.props.time

    this.setState(local, () => {
      this.timer = setInterval(this.tick, 1000); // 1000 = 1 second, 60000 = 1 minute
    })
  }
  render(){
    return (
      <ul className="clues">
        {
          this.state.clues.map((clue, index) => {
            if(clue.id <= this.state.count){
              return <p className="clue" key={clue.id}>{clue.label}: {clue.answer}</p>
            }
          })
        }
      </ul>
    )
  }
} 