import React from 'react'
import Board from './Board'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepnumber: 0,
      gridColNumber: [0],
      gridRowNumber: [0]
    }
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepnumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepnumber: history.length,
      gridColNumber: this.state.gridColNumber.concat(i % 3 + 1),
      gridRowNumber: this.state.gridRowNumber.concat(Math.floor(i / 3 + 1))
    })
  }

  jumpTo (step) {
    this.setState({
      stepnumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  render () {
    const history = this.state.history
    const current = history[this.state.stepnumber]
    const winner = calculateWinner(current.squares)
    const column = this.state.gridColNumber
    const row = this.state.gridRowNumber

    const moves = history.map((step, move) => {
      const desc = move
        ? 'Go to move #' + move + 'Col:' + column[move] + ' Row:' + row[move]
        : 'Go to game start'
      return (
        <li key = {move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })
    let status
    if (winner) {
      status = 'Winner: ' + winner
    } else {
      status = 'Next player ' + (this.state.xIsNext ? 'X' : 'O')
    }
    return (
      <div className = "game">
        <div className = "game-board">
          <Board
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
          />
          <style jsx global>{`
                body {
                  font: 14px "Century Gothic", Futura, sans-serif;
                  margin: 20px;
                }
                
                ol, ul {
                  padding-left: 30px;
                }
                
                .board-row:after {
                  clear: both;
                  content: "";
                  display: table;
                }
                
                .status {
                  margin-bottom: 10px;
                }
                
                .square {
                  background: #fff;
                  border: 1px solid #999;
                  float: left;
                  font-size: 24px;
                  font-weight: bold;
                  line-height: 34px;
                  height: 34px;
                  margin-right: -1px;
                  margin-top: -1px;
                  padding: 0;
                  text-align: center;
                  width: 34px;
                }
                
                .square:focus {
                  outline: none;
                }
                
                .kbd-navigation .square:focus {
                  background: #ddd;
                }
                
                .game {
                  display: flex;
                  flex-direction: row;
                }
                
                .game-info {
                  margin-left: 20px;
                }
    `}</style>
        </div>
        <div className = "game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

/**
 * Calculates whether the current state of the game has a winner
 * @param {Array} squares - An array representing the current game board
 */
function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7.8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
export default Game
