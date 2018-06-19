'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComposedComponent = require('./ComposedComponent');

var _ComposedComponent2 = _interopRequireDefault(_ComposedComponent);

var _attachFile = require('material-ui/svg-icons/editor/attach-file');

var _attachFile2 = _interopRequireDefault(_attachFile);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by XaviTorello on 30/05/18
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var styles = {
  dropzone: {
    borderStyle: "dashed",
    borderRadius: "10px",
    padding: "10px",
    borderWidth: "2px"
  }
};

var Binary = function (_React$Component) {
  _inherits(Binary, _React$Component);

  function Binary() {
    _classCallCheck(this, Binary);

    var _this = _possibleConstructorReturn(this, (Binary.__proto__ || Object.getPrototypeOf(Binary)).call(this));

    _this.handleUpdate = function () {
      return _this.__handleUpdate__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.files = [];
    return _this;
  }

  _createClass(Binary, [{
    key: '__handleUpdate__REACT_HOT_LOADER__',
    value: function __handleUpdate__REACT_HOT_LOADER__() {
      return this.__handleUpdate__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__handleUpdate__REACT_HOT_LOADER__',
    value: function __handleUpdate__REACT_HOT_LOADER__(selectorFiles) {
      this.files = Object.assign([], this.files, selectorFiles);

      var _props$form = this.props.form,
          key = _props$form.key,
          type = _props$form.type;

      var file_attachment = selectorFiles;

      return this.props.onChange(key, file_attachment, type, this.props.form);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // console.log('Binary', this.props);
      var description = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(_attachFile2.default, null)
        ),
        _react2.default.createElement(
          'p',
          null,
          'Drag some files here, or click to select files to upload.'
        )
      );

      // default all mime types
      var mime_types = [];

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'div',
          { className: 'dropzone' },
          _react2.default.createElement(
            'h4',
            null,
            this.props.form.title || "Upload a file"
          ),
          _react2.default.createElement(
            _reactDropzone2.default,
            {
              disabled: this.props.form.readonly,
              accept: this.props.form.mime_types || mime_types,
              style: _extends({}, styles.dropzone, this.props.form.style),
              onDrop: function onDrop(accepted, rejected) {
                _this2.handleUpdate(accepted);
              }
            },
            function (_ref) {
              var isDragActive = _ref.isDragActive,
                  isDragReject = _ref.isDragReject,
                  acceptedFiles = _ref.acceptedFiles,
                  rejectedFiles = _ref.rejectedFiles;

              if (isDragActive) {
                return _this2.props.form.authorized_file_message || "This file is authorized";
              }
              if (isDragReject) {
                return _this2.props.form.unauthorized_file_message || "Unauthorized file type";
              }

              return acceptedFiles.length ? acceptedFiles.map(function (f) {
                return _react2.default.createElement(
                  'li',
                  null,
                  f.name
                );
              }) : _this2.props.form.description || description;
            }
          )
        )
      );
    }
  }]);

  return Binary;
}(_react2.default.Component);

var _default = (0, _ComposedComponent2.default)(Binary);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(styles, 'styles', 'src/Binary.js');

  __REACT_HOT_LOADER__.register(Binary, 'Binary', 'src/Binary.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Binary.js');
}();

;