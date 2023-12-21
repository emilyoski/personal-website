"use strict";

require("dotenv/config");
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"]["static"]("public"));
app.listen(3000, function () {
  return console.log("Example app listening on port 3000!");
});