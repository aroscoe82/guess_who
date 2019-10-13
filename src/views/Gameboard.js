import React from 'react';
import {Link} from 'react-router-dom';

import CountdownTimer from '../components/CountdownTimer';
import Clues from '../components/Clues';

export default class Gameboard extends React.Component{
  state = {
    loading: true,
    gameInfo: undefined,
    guess: undefined,
    gameOver: false
  };

  guessHandler = (evt) => {
    let entry = evt.target.value;

    if(entry.toLowerCase() === this.state.gameInfo.guessWho.name.toLowerCase()){
      this.setState({ gameOver: 'You Won!'});
    }
  }

  gameOver = (statusMsg) => {
    this.setState({gameOver: statusMsg});
  }

  componentDidMount(){
    this.setState({gameInfo: this.props.location.state.level});
  }

  render(){
    if(this.state.gameInfo && !this.state.gameOver){
      let gameInfo = this.state.gameInfo; 

      return (
        <div className="gameboard">
          <div className="header p-3">
            <Link className="back-btn" to={'/'}>Quit</Link>
            <span className="timer text-right"><CountdownTimer gameOver={this.gameOver} time={gameInfo.time}/></span>
          </div>
          <div className="game p-3 text-center">
            <Clues time={gameInfo.time} clues={gameInfo.clues} who={gameInfo.guessWho} /> 
          </div>
          <div className="entry p-3 text-center">
            <input className="guessAnswer" type="text" name="guessAnswer" placeholder="Guess" onChange={this.guessHandler}/>
          </div>
        </div>
      )
    }

    if(this.state.gameInfo && this.state.gameOver){
      return(
        <div className="gameboard">
          <div className="header p-3">
            <Link className="back-btn" to={'/'}>Back</Link>
          </div>
          <div className="game p-3 text-center">
            <h1 className="mb-5 color-white">{this.state.gameOver}</h1>
            <Link className="btn-default btn-lg" to={'/'}>Play Again</Link>
          </div>
        </div>
      )
    }

    return (
      <div className="gameboard"><h1 class="text-center color-white py-5">Loading...</h1></div>
    )
  }
} 