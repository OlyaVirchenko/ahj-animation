"use strict";

var _widget = _interopRequireDefault(require("./widget"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var test = new _widget["default"](document.querySelector('.container'));
test.createModule();
var button = document.querySelector('.btn-open');
var contentContainer = document.querySelector('.content-container');
button.addEventListener('click', function (ev) {
  ev.preventDefault();
  contentContainer.classList.toggle('expansion-hide');
});