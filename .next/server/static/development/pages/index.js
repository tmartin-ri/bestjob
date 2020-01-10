module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Board.js":
/*!*****************************!*\
  !*** ./components/Board.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Square */ "./components/Square.js");
var _jsxFileName = "C:\\Users\\tmart\\Documents\\hello-next\\components\\Board.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Board extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  renderSquare(i) {
    return __jsx(_Square__WEBPACK_IMPORTED_MODULE_1__["default"], {
      value: this.props.squares[i],
      onClick: () => this.props.onClick(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    });
  }

  drawBoard() {
    const mainSquare = document.createElement('div');
    mainSquare.className('board');

    for (var i = 1; i < 4; i++) {
      const row = document.createElement('div');
      row.className('board-row');

      for (var j = 1; j < 4; j++) {
        // const col = <div>{this.renderSquare(i * j - 1)}</div>
        row.appendChild(__jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, this.renderSquare(i * j - 1)));
      }

      mainSquare.appendChild(row);
    }

    return mainSquare;
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, this.drawBoard)
    /* <div>
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
    </div> */
    ;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./components/Game.js":
/*!****************************!*\
  !*** ./components/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ "./components/Board.js");
var _jsxFileName = "C:\\Users\\tmart\\Documents\\hello-next\\components\\Game.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Game extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepnumber: 0,
      gridColNumber: [0],
      gridRowNumber: [0]
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepnumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepnumber: history.length,
      gridColNumber: this.state.gridColNumber.concat(i % 3 + 1),
      gridRowNumber: this.state.gridRowNumber.concat(Math.floor(i / 3 + 1))
    });
  }

  jumpTo(step) {
    this.setState({
      stepnumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepnumber];
    const winner = calculateWinner(current.squares);
    const column = this.state.gridColNumber;
    const row = this.state.gridRowNumber;
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move + 'Col:' + column[move] + ' Row:' + row[move] : 'Go to game start';
      return __jsx("li", {
        key: move,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("button", {
        onClick: () => this.jumpTo(move),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, desc));
    });
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return __jsx("div", {
      className: "game",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-474003458" + " " + "game-board",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
      squares: current.squares,
      onClick: i => this.handleClick(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "474003458",
      __self: this
    }, "body{font:14px \"Century Gothic\",Futura,sans-serif;margin:20px;}ol,ul{padding-left:30px;}.board-row:after{clear:both;content:\"\";display:table;}.status{margin-bottom:10px;}.square{background:#fff;border:1px solid #999;float:left;font-size:24px;font-weight:bold;line-height:34px;height:34px;margin-right:-1px;margin-top:-1px;padding:0;text-align:center;width:34px;}.square:focus{outline:none;}.kbd-navigation .square:focus{background:#ddd;}.game{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.game-info{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdG1hcnRcXERvY3VtZW50c1xcaGVsbG8tbmV4dFxcY29tcG9uZW50c1xcR2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RTZCLEFBR2tFLEFBSzdCLEFBSVAsQUFNUSxBQUlILEFBZUgsQUFJRyxBQUlILEFBS0ksV0FyQ04sRUF5QmIsR0Fmd0IsQUFtQnhCLENBU0EsQ0ExQ0EsQ0FVQSxHQUxnQixjQUNoQixFQVNhLE9BcEJDLElBcUJHLFFBcEJqQixPQXFCbUIsVUFvQkUsT0FuQkYsaUJBQ0wsWUFDTSxrQkFDRixlQWlCbEIsQ0FoQlksVUFDUSxrQkFDUCxXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcdG1hcnRcXERvY3VtZW50c1xcaGVsbG8tbmV4dFxcY29tcG9uZW50c1xcR2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4vQm9hcmQnXHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaGlzdG9yeTogW3tcclxuICAgICAgICBzcXVhcmVzOiBBcnJheSg5KS5maWxsKG51bGwpXHJcbiAgICAgIH1dLFxyXG4gICAgICB4SXNOZXh0OiB0cnVlLFxyXG4gICAgICBzdGVwbnVtYmVyOiAwLFxyXG4gICAgICBncmlkQ29sTnVtYmVyOiBbMF0sXHJcbiAgICAgIGdyaWRSb3dOdW1iZXI6IFswXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2sgKGkpIHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgdGhpcy5zdGF0ZS5zdGVwbnVtYmVyICsgMSlcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMV1cclxuICAgIGNvbnN0IHNxdWFyZXMgPSBjdXJyZW50LnNxdWFyZXMuc2xpY2UoKVxyXG4gICAgaWYgKGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKSB8fCBzcXVhcmVzW2ldKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3F1YXJlc1tpXSA9IHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJ1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGhpc3Rvcnk6IGhpc3RvcnkuY29uY2F0KFt7XHJcbiAgICAgICAgc3F1YXJlczogc3F1YXJlc1xyXG4gICAgICB9XSksXHJcbiAgICAgIHhJc05leHQ6ICF0aGlzLnN0YXRlLnhJc05leHQsXHJcbiAgICAgIHN0ZXBudW1iZXI6IGhpc3RvcnkubGVuZ3RoLFxyXG4gICAgICBncmlkQ29sTnVtYmVyOiB0aGlzLnN0YXRlLmdyaWRDb2xOdW1iZXIuY29uY2F0KGkgJSAzICsgMSksXHJcbiAgICAgIGdyaWRSb3dOdW1iZXI6IHRoaXMuc3RhdGUuZ3JpZFJvd051bWJlci5jb25jYXQoTWF0aC5mbG9vcihpIC8gMyArIDEpKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGp1bXBUbyAoc3RlcCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN0ZXBudW1iZXI6IHN0ZXAsXHJcbiAgICAgIHhJc05leHQ6IChzdGVwICUgMikgPT09IDBcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuc3RhdGUuaGlzdG9yeVxyXG4gICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbdGhpcy5zdGF0ZS5zdGVwbnVtYmVyXVxyXG4gICAgY29uc3Qgd2lubmVyID0gY2FsY3VsYXRlV2lubmVyKGN1cnJlbnQuc3F1YXJlcylcclxuICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuc3RhdGUuZ3JpZENvbE51bWJlclxyXG4gICAgY29uc3Qgcm93ID0gdGhpcy5zdGF0ZS5ncmlkUm93TnVtYmVyXHJcblxyXG4gICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lm1hcCgoc3RlcCwgbW92ZSkgPT4ge1xyXG4gICAgICBjb25zdCBkZXNjID0gbW92ZVxyXG4gICAgICAgID8gJ0dvIHRvIG1vdmUgIycgKyBtb3ZlICsgJ0NvbDonICsgY29sdW1uW21vdmVdICsgJyBSb3c6JyArIHJvd1ttb3ZlXVxyXG4gICAgICAgIDogJ0dvIHRvIGdhbWUgc3RhcnQnXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGtleSA9IHttb3ZlfT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5qdW1wVG8obW92ZSl9PntkZXNjfTwvYnV0dG9uPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgICBsZXQgc3RhdHVzXHJcbiAgICBpZiAod2lubmVyKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdXaW5uZXI6ICcgKyB3aW5uZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXR1cyA9ICdOZXh0IHBsYXllciAnICsgKHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJylcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJnYW1lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImdhbWUtYm9hcmRcIj5cclxuICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICBzcXVhcmVzID0ge2N1cnJlbnQuc3F1YXJlc31cclxuICAgICAgICAgICAgb25DbGljayA9IHsoaSkgPT4gdGhpcy5oYW5kbGVDbGljayhpKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggXCJDZW50dXJ5IEdvdGhpY1wiLCBGdXR1cmEsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb2wsIHVsIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYm9hcmQtcm93OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnNxdWFyZSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5zcXVhcmU6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAua2JkLW5hdmlnYXRpb24gLnNxdWFyZTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5nYW1lIHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmdhbWUtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJnYW1lLWluZm9cIj5cclxuICAgICAgICAgIDxkaXY+e3N0YXR1c308L2Rpdj5cclxuICAgICAgICAgIDxvbD57bW92ZXN9PC9vbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB3aGV0aGVyIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBnYW1lIGhhcyBhIHdpbm5lclxyXG4gKiBAcGFyYW0ge0FycmF5fSBzcXVhcmVzIC0gQW4gYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGdhbWUgYm9hcmRcclxuICovXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVdpbm5lciAoc3F1YXJlcykge1xyXG4gIGNvbnN0IGxpbmVzID0gW1xyXG4gICAgWzAsIDEsIDJdLFxyXG4gICAgWzMsIDQsIDVdLFxyXG4gICAgWzYsIDcuOF0sXHJcbiAgICBbMCwgMywgNl0sXHJcbiAgICBbMSwgNCwgN10sXHJcbiAgICBbMiwgNSwgOF0sXHJcbiAgICBbMCwgNCwgOF0sXHJcbiAgICBbMiwgNCwgNl1cclxuICBdXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV1cclxuICAgIGlmIChzcXVhcmVzW2FdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbYl0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tjXSkge1xyXG4gICAgICByZXR1cm4gc3F1YXJlc1thXVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\tmart\\\\Documents\\\\hello-next\\\\components\\\\Game.js */")), __jsx("div", {
      className: "game-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, status), __jsx("ol", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, moves)));
  }

}
/**
 * Calculates whether the current state of the game has a winner
 * @param {Array} squares - An array representing the current game board
 */


function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7.8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./components/Square.js":
/*!******************************!*\
  !*** ./components/Square.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Square; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\tmart\\Documents\\hello-next\\components\\Square.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Square(props) {
  return __jsx("button", {
    className: "square",
    onClick: props.onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.value);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Game */ "./components/Game.js");
var _jsxFileName = "C:\\Users\\tmart\\Documents\\hello-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => __jsx(_components_Game__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tmart\Documents\hello-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map