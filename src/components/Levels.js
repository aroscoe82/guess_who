import React from 'react';

export default class Levels extends React.Component{
  handleSelect = (evt) => {
    evt.preventDefault();
    this.props.setLevel(evt.target.value);
  }

  render(){
    const levels = this.props.gameLevels;
    const items = Object.keys(levels).map((item) =>
      <button className="btn-default level-option" key={'level-' + levels[item].code} value={item} onClick={this.handleSelect}>{levels[item].label}</button>
    );

    return (
      <div className="level-options">
        {items}
      </div>
    )
  }
}