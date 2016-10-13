'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showLoading = showLoading;
exports.hideLoading = hideLoading;
exports.loadingBarReducer = loadingBarReducer;
var SHOW = exports.SHOW = 'loading-bar/SHOW';
var HIDE = exports.HIDE = 'loading-bar/HIDE';

function showLoading() {
  return {
    type: SHOW
  };
}

function hideLoading() {
  return {
    type: HIDE
  };
}

function loadingBarReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var newState = void 0;

  switch (action.type) {
    case SHOW:
      newState = 1;
      break;
    case HIDE:
      newState = 0;
      break;
    default:
      return state;
  }

  return newState;
}