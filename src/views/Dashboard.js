import React from 'react';
import axios from 'axios';
import { game } from '../utils/game';

import Levels from '../components/Levels';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.game = new game();

    this.state = {
      loading: true
    };
  }

  setGameLevel = (level) => {
    const levelDetail = this.game.getLevelDetail(level);
    const gameCharacter =  levelDetail.randomCharacter();

    const gameLevel = {
      label: levelDetail.label,
      time: levelDetail.time,
      clues: levelDetail.clues,
      guessWho: gameCharacter
    }

    this.props.history.push({
      pathname: '/level/' + levelDetail.code,
      state: { level: gameLevel}
    });
  }

  componentDidMount(){
    axios.get('https://www.potterapi.com/v1/characters/')
      .then((response) => {
        this.game.setCharacters(response.data);
        this.setState({loading: false})
      })
      .catch((error) => {
        // need to handle error
      });
  }

  render(){
    if(!this.state.loading){  
      const levels = this.game.getLevels();

      return (
        <div className="dashboard">
          <h1 className="text-center color-white py-5">Select A Level</h1>
          <Levels setLevel={this.setGameLevel} gameLevels={levels} />
        </div>
      )  
    }else{
      return (
        <div className="dashboard">
          <h1 className="text-center py-5 color-white">Loading...</h1>
        </div>
      )
    }
  }
} 