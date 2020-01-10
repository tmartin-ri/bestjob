import React from 'react'
import Square from './Square'

class Board extends React.Component {
  renderSquare (i) {
    return <Square
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />
  }

  drawBoard () {
    const mainSquare = document.createElement('div')
    mainSquare.className('board')
    for (var i = 1; i < 4; i++) {
      const row = document.createElement('div')
      row.className('board-row')
      for (var j = 1; j < 4; j++) {
        // const col = <div>{this.renderSquare(i * j - 1)}</div>
        row.appendChild(<div>{this.renderSquare(i * j - 1)}</div>)
      }
      mainSquare.appendChild(row)
    }
    return mainSquare
  }

  render () {
    return (
      <div>
        {this.drawBoard}
      </div>
      <div>
        <div className = "board-row">
          {document.getElementsByClassName('board')}
        </div>
        <div className = "board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className = "board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}
export default Board
