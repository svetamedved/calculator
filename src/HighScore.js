import React, {Component} from 'react';

class HighScore extends Component {

  render(){
    if(this.props.overTen){
      return (
        <h3>Beat high score of 10!

        <button onClick={this.props.onRecet}>Recet</button>

        </h3>
      )
    }else{
        return null;
    }
  }
}

export default HighScore;
