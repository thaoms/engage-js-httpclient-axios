'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * HttpClientAxios Class
 * @author Thomas Van Kerckvoorde <thomas.vankerckvoorde@clarabridge.com>
 * @namespace
 */

var HttpClientAxios =
/**
 * @type {object}
 * @inner
 * @memberOf HttpClientAxios
 */

/**
 * @type {function}
 * @inner
 * @memberOf HttpClientAxios
 */

/**
 * HttpClient Axios
 * @constructor
 * @param {object} [props=null]
 * @returns AxiosInstance
 */
function HttpClientAxios(props) {
  var _this = this;

  _classCallCheck(this, HttpClientAxios);

  _defineProperty(this, "defaultHeaders", {});

  _defineProperty(this, "httpClientInstance", {});

  _defineProperty(this, "request",
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(url) {
      var method,
          headers,
          body,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              method = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'get';
              headers = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
              body = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;

              if (url) {
                _context.next = 5;
                break;
              }

              throw 'Please define the url for your request.';

            case 5:
              return _context.abrupt("return", _this.httpClientInstance({
                method: method,
                url: url,
                headers: headers ? headers : null,
                data: body ? JSON.stringify(body) : null
              }).then(function (response) {
                var cleanResponse = {};
                cleanResponse.data = response.data;
                cleanResponse.status = response.status;
                cleanResponse.statusText = response.statusText;
                cleanResponse.headers = response.headers;
                return cleanResponse;
              })["catch"](function (error) {
                console.error(error);
              }));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  this.httpClientInstance = axios.create({
    baseURL: props.baseUrl,
    headers: props.headers ? props.headers : this.defaultHeaders
  });
}
/**
 * This request method will be inherited in the EngageApi Class, so it's used for every request.
 * @function request
 * @memberOf HttpClientAxios
 * @param {string} url
 * @param {string} method
 * @param {object} [headers=null]
 * @param {object} [body=null]
 * @returns {Promise<void>}
 */
;

module.exports = HttpClientAxios;
