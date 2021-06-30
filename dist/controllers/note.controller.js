"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNote = exports.getNotes = exports.deleteNote = exports.updateNote = exports.createNote = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _expressValidator = require("express-validator");

var _Note = _interopRequireDefault(require("../models/Note"));

//Crear nota
var createNote = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var errores, body, newNote;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //Verificar errores con el modulo de express-validator
            errores = (0, _expressValidator.validationResult)(req);

            if (errores.isEmpty()) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              errores: errores.array()
            }));

          case 3:
            _context.prev = 3;
            body = req.body; //Crear objeto de la nota

            newNote = new _Note["default"](body); //Guardar la nota en la base de datos

            _context.next = 8;
            return newNote.save();

          case 8:
            //Enviar mensaje de confirmación
            res.status(201).json({
              msg: "Nota creada"
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            res.status(500).json({
              message: _context.t0.message || "Algo ocurrio mal"
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 11]]);
  }));

  return function createNote(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //Editar nota


exports.createNote = createNote;

var updateNote = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var body, params, id, noteSearch;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            body = req.body, params = req.params;
            id = params.id; //Buscar si el id de la nota existe

            _context2.next = 5;
            return _Note["default"].findById(id);

          case 5:
            noteSearch = _context2.sent;

            if (noteSearch) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              msg: "No existe la nota"
            }));

          case 8:
            _context2.next = 10;
            return _Note["default"].findByIdAndUpdate(id, body);

          case 10:
            //Enviar mensaje de confirmación
            res.status(200).json({
              msg: "Nota actualizada"
            });
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0.message || "Algo ocurrio mal"
            });

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function updateNote(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //Eliminar nota


exports.updateNote = updateNote;

var deleteNote = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var params, id, noteSearch;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            params = req.params;
            id = params.id; //Buscar si el id de la nota existe

            _context3.next = 5;
            return _Note["default"].findById(id);

          case 5:
            noteSearch = _context3.sent;

            if (noteSearch) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              msg: "No existe la nota"
            }));

          case 8:
            _context3.next = 10;
            return _Note["default"].findByIdAndDelete(id);

          case 10:
            //Enviar mensaje de confirmación
            res.status(200).json({
              msg: "Nota eliminada"
            });
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              message: _context3.t0.message || "Algo ocurrio mal"
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13]]);
  }));

  return function deleteNote(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //Obtener notas


exports.deleteNote = deleteNote;

var getNotes = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var notes;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _Note["default"].find();

          case 3:
            notes = _context4.sent;
            //Enviar notas
            res.status(200).json(notes);
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0.message || "Algo ocurrio mal"
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function getNotes(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //Obtener nota


exports.getNotes = getNotes;

var getNote = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var params, id, noteSearch;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            params = req.params;
            id = params.id; //Buscar si el id de la nota existe

            _context5.next = 5;
            return _Note["default"].findById(id);

          case 5:
            noteSearch = _context5.sent;

            if (noteSearch) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.status(404).json({
              msg: "No existe la nota"
            }));

          case 8:
            //Enviar notas
            res.status(200).json(noteSearch);
            _context5.next = 14;
            break;

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            res.status(500).json({
              message: _context5.t0.message || "Algo ocurrio mal"
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function getNote(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getNote = getNote;