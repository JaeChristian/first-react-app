import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return(
    //this button calls the onClick prop when it is clicked
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  
  handleClick(i){
    //copies the states 'squares' array and sets squares at i as 'X'
    //this.setState then replaces the states squares array with this methods squares array.
    const squares = this.state.squares.slice();
    if(squares[i]!== 'O' && squares[i]!== 'X') {
      if(this.state.xIsNext){
        squares[i]='X';
      } else {
        squares[i]='O';
      }
      this.setState({
        squares: squares,
        //sets xIsNext to the opposite of its current value
        xIsNext: !this.state.xIsNext,
      });
    }
    
    //squares[i] = this.state.isNext ? 'X' : 'O';
    
  }

  //Since square is a component, this returns a Square component it and sets Squares value to i
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        //The onClick prop calls this.handleClick(i). i is different for each square on the board.
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <p>Tic Tac Toe</p>
        <div className="status">{status}</div>
        <div className="board-row">
          {/*This calls the renderSquare method with the n argument*/}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
