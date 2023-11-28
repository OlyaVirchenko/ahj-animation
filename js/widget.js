"use strict";

require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.number.constructor.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Widget = exports["default"] = /*#__PURE__*/function () {
  function Widget(element) {
    _classCallCheck(this, Widget);
    this.element = element;
  }
  _createClass(Widget, [{
    key: "createModule",
    value: function createModule() {
      var btnOpen = document.createElement('button');
      btnOpen.classList.add('btn-open');
      btnOpen.textContent = 'Collapse';
      var contentContainer = document.createElement('div');
      contentContainer.classList.add('content-container');
      var content = document.createElement('p');
      content.classList.add('paragraph');
      content.textContent = 'The transition property is used when we need to smoothly change CSS properties between two states of an element. For example, when hovering the mouse.';
      var btnCopyContainer = document.createElement('div');
      btnCopyContainer.classList.add('btn-copy-container');
      var btnCopy = document.createElement('button');
      btnCopy.classList.add('btn-copy');
      btnCopy.textContent = 'Copy';
      contentContainer.insertAdjacentElement('afterbegin', content);
      btnCopyContainer.insertAdjacentElement('afterbegin', btnCopy);
      this.element.insertAdjacentElement('afterbegin', btnCopyContainer);
      this.element.insertAdjacentElement('afterbegin', contentContainer);
      this.element.insertAdjacentElement('afterbegin', btnOpen);
    }
  }]);
  return Widget;
}();