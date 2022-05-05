/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Animation.ts":
/*!*****************************!*\
  !*** ./src/ts/Animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Animation = function () {\n  function Animation(canvasElement) {\n    this.canvas = canvasElement;\n    this.animate();\n  }\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    this.canvas.animate();\n    requestAnimationFrame(function () {\n      return _this.animate();\n    });\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7QUFJSSxxQkFBWUEsYUFBWixFQUFpQztBQUM3QixTQUFLQyxNQUFMLEdBQWNELGFBQWQ7QUFDQSxTQUFLRSxPQUFMO0FBQ0g7O0FBRURDO0FBQUE7O0FBQ0ksU0FBS0YsTUFBTCxDQUFZQyxPQUFaO0FBQ0FFLHlCQUFxQixDQUFDO0FBQU0sa0JBQUksQ0FBQ0YsT0FBTDtBQUFjLEtBQXJCLENBQXJCO0FBQ0gsR0FIRDs7QUFJSjtBQUFDLENBYkQ7O0FBQWFHLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQW5pbWF0aW9uLnRzPzkxYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL0RyYXdhYmxlL0NhbnZhc1wiO1xyXG5pbXBvcnQge0dyb3VuZH0gZnJvbSBcIi4vRHJhd2FibGUvR3JvdW5kXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcclxuICAgIGNhbnZhczogQ2FudmFzO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50OiBDYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZSgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hbmltYXRlKCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuYW5pbWF0ZSgpKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY2FudmFzIiwiYW5pbWF0ZSIsIkFuaW1hdGlvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Animation.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/Canvas.ts":
/*!***********************************!*\
  !*** ./src/ts/Drawable/Canvas.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar Ground_1 = __webpack_require__(/*! ./Ground */ \"./src/ts/Drawable/Ground.ts\");\n\nvar Grass_1 = __webpack_require__(/*! ./Grass */ \"./src/ts/Drawable/Grass.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    this.canvasElement = document.getElementById('my-canvas');\n    this.ctx = this.canvasElement.getContext('2d');\n    this.ground = new Ground_1.Ground(this.canvasElement, this.ctx);\n    this.grass = new Grass_1.Grass(this.canvasElement, this.ctx);\n  }\n\n  Canvas.prototype.draw = function () {\n    this.grass.draw();\n    this.ground.draw();\n  };\n\n  Canvas.prototype.animate = function () {\n    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);\n    this.grass.animate();\n    this.ground.animate();\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFPSTtBQUNJLFNBQUtBLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxhQUFMLENBQW1CSSxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLGVBQUosQ0FBVyxLQUFLTixhQUFoQixFQUErQixLQUFLRyxHQUFwQyxDQUFkO0FBQ0EsU0FBS0ksS0FBTCxHQUFhLElBQUlDLGFBQUosQ0FBVSxLQUFLUixhQUFmLEVBQThCLEtBQUtHLEdBQW5DLENBQWI7QUFFSDs7QUFFRE07QUFDSSxTQUFLRixLQUFMLENBQVdHLElBQVg7QUFDQSxTQUFLTCxNQUFMLENBQVlLLElBQVo7QUFDSCxHQUhEOztBQUtBRDtBQUNJLFNBQUtOLEdBQUwsQ0FBU1EsU0FBVCxDQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF3QixLQUFLWCxhQUFMLENBQW1CWSxLQUEzQyxFQUFrRCxLQUFLWixhQUFMLENBQW1CYSxNQUFyRTtBQUNBLFNBQUtOLEtBQUwsQ0FBV08sT0FBWDtBQUNBLFNBQUtULE1BQUwsQ0FBWVMsT0FBWjtBQUVILEdBTEQ7O0FBTUo7QUFBQyxDQTFCRDs7QUFBYUMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0RyYXdhYmxlL0NhbnZhcy50cz8xZjRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R3JvdW5kfSBmcm9tIFwiLi9Hcm91bmRcIjtcclxuaW1wb3J0IHtHcmFzc30gZnJvbSBcIi4vR3Jhc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW52YXMge1xyXG4gICAgcHJpdmF0ZSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgZ3JvdW5kOiBHcm91bmQ7XHJcbiAgICBwdWJsaWMgZ3Jhc3M6IEdyYXNzO1xyXG4gICAgcHVibGljIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICAgICAgdGhpcy5ncm91bmQgPSBuZXcgR3JvdW5kKHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3MgPSBuZXcgR3Jhc3ModGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLmN0eCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFzcy5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5ncm91bmQuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsMCwgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoLCB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmdyYXNzLmFuaW1hdGUoKTtcclxuICAgICAgICB0aGlzLmdyb3VuZC5hbmltYXRlKCk7XHJcblxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdyb3VuZCIsIkdyb3VuZF8xIiwiZ3Jhc3MiLCJHcmFzc18xIiwiQ2FudmFzIiwiZHJhdyIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/Grass.ts":
/*!**********************************!*\
  !*** ./src/ts/Drawable/Grass.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Grass = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Grass = function () {\n  function Grass(canvasElement, ctx) {\n    var _this = this;\n\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = settings_1.settings.sprite;\n    this.sprite.addEventListener(\"load\", function () {\n      _this.draw();\n    });\n  }\n\n  Grass.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.grass.frame.sx, settings_1.settings.grass.frame.sy, settings_1.settings.grass.frame.sw, settings_1.settings.grass.frame.sh, settings_1.settings.grass.frame.dx, settings_1.settings.grass.frame.dy, settings_1.settings.grass.frame.dw, settings_1.settings.grass.frame.dh);\n    this.ctx.drawImage(this.sprite, settings_1.settings.grass.frame.sx, settings_1.settings.grass.frame.sy, settings_1.settings.grass.frame.sw, settings_1.settings.grass.frame.sh, settings_1.settings.grass.frame.dx + settings_1.settings.grass.frame.dw, settings_1.settings.grass.frame.dy, settings_1.settings.grass.frame.dw, settings_1.settings.grass.frame.dh);\n  };\n\n  Grass.prototype.animate = function () {\n    this.draw();\n    settings_1.settings.grass.frame.dx -= settings_1.settings.grass.scrollingSpeed;\n    console.log(settings_1.settings.grass.frame.dx);\n\n    if (settings_1.settings.grass.frame.dx <= -settings_1.settings.grass.frame.dw) {\n      settings_1.settings.grass.frame.dx = 0;\n    }\n  };\n\n  return Grass;\n}();\n\nexports.Grass = Grass;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvR3Jhc3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQU1JLGlCQUFZQSxhQUFaLEVBQThDQyxHQUE5QyxFQUEyRTtBQUEzRTs7QUFDSSxTQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxLQUFKLEVBQWQ7QUFDQSxTQUFLRCxNQUFMLENBQVlFLEdBQVosR0FBa0JDLG9CQUFTSCxNQUEzQjtBQUVBLFNBQUtBLE1BQUwsQ0FBWUksZ0JBQVosQ0FBNkIsTUFBN0IsRUFBcUM7QUFDakNDLFdBQUksQ0FBQ0MsSUFBTDtBQUNILEtBRkQ7QUFHSDs7QUFFREM7QUFDSSxTQUFLUixHQUFMLENBQVNTLFNBQVQsQ0FDSSxLQUFLUixNQURULEVBRUlHLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJDLEVBRnpCLEVBR0lSLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJFLEVBSHpCLEVBSUlULG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJHLEVBSnpCLEVBS0lWLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJJLEVBTHpCLEVBTUlYLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJLLEVBTnpCLEVBT0laLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJNLEVBUHpCLEVBUUliLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJPLEVBUnpCLEVBU0lkLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJRLEVBVHpCO0FBV0EsU0FBS25CLEdBQUwsQ0FBU1MsU0FBVCxDQUNJLEtBQUtSLE1BRFQsRUFFSUcsb0JBQVNNLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkMsRUFGekIsRUFHSVIsb0JBQVNNLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkUsRUFIekIsRUFJSVQsb0JBQVNNLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkcsRUFKekIsRUFLSVYsb0JBQVNNLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkksRUFMekIsRUFNSVgsb0JBQVNNLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkssRUFBckIsR0FBMEJaLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJPLEVBTm5ELEVBT0lkLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJNLEVBUHpCLEVBUUliLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJPLEVBUnpCLEVBU0lkLG9CQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJRLEVBVHpCO0FBV0gsR0F2QkQ7O0FBeUJBWDtBQUNJLFNBQUtELElBQUw7QUFDQUgsd0JBQVNNLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkssRUFBckIsSUFBMkJaLG9CQUFTTSxLQUFULENBQWVVLGNBQTFDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbEIsb0JBQVNNLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkssRUFBakM7O0FBQ0EsUUFBR1osb0JBQVNNLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkssRUFBckIsSUFBMkIsQ0FBQ1osb0JBQVNNLEtBQVQsQ0FBZUMsS0FBZixDQUFxQk8sRUFBcEQsRUFBd0Q7QUFDcERkLDBCQUFTTSxLQUFULENBQWVDLEtBQWYsQ0FBcUJLLEVBQXJCLEdBQTBCLENBQTFCO0FBQ0g7QUFDSixHQVBEOztBQVFKO0FBQUMsQ0FsREQ7O0FBQWFPLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EcmF3YWJsZS9HcmFzcy50cz8zZWUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzIHtcclxuICAgIHByaXZhdGUgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IHNldHRpbmdzLnNwcml0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuc3gsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLnN5LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5zdyxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuc2gsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLmR4LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5keSxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZHcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLmRoXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5zeCxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuc3ksXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLnN3LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5zaCxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZHggKyBzZXR0aW5ncy5ncmFzcy5mcmFtZS5kdyxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZHksXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLmR3LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5kaFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZSgpIHtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5keCAtPSBzZXR0aW5ncy5ncmFzcy5zY3JvbGxpbmdTcGVlZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZXR0aW5ncy5ncmFzcy5mcmFtZS5keClcclxuICAgICAgICBpZihzZXR0aW5ncy5ncmFzcy5mcmFtZS5keCA8PSAtc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZHcpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZHggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY3R4Iiwic3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJzZXR0aW5nc18xIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwiZHJhdyIsIkdyYXNzIiwiZHJhd0ltYWdlIiwiZ3Jhc3MiLCJmcmFtZSIsInN4Iiwic3kiLCJzdyIsInNoIiwiZHgiLCJkeSIsImR3IiwiZGgiLCJzY3JvbGxpbmdTcGVlZCIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Grass.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/Ground.ts":
/*!***********************************!*\
  !*** ./src/ts/Drawable/Ground.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Ground = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Ground = function () {\n  function Ground(canvasElement, ctx) {\n    var _this = this;\n\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = settings_1.settings.sprite;\n    this.sprite.addEventListener(\"load\", function () {\n      _this.draw();\n    });\n  }\n\n  Ground.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.ground.frame.sx, settings_1.settings.ground.frame.sy, settings_1.settings.ground.frame.sw, settings_1.settings.ground.frame.sh, settings_1.settings.ground.frame.dx, settings_1.settings.ground.frame.dy, settings_1.settings.ground.frame.dw, settings_1.settings.ground.frame.dh);\n    this.ctx.drawImage(this.sprite, settings_1.settings.ground.frame.sx, settings_1.settings.ground.frame.sy, settings_1.settings.ground.frame.sw, settings_1.settings.ground.frame.sh, settings_1.settings.ground.frame.dx + settings_1.settings.ground.frame.dw, settings_1.settings.ground.frame.dy, settings_1.settings.ground.frame.dw, settings_1.settings.ground.frame.dh);\n  };\n\n  Ground.prototype.animate = function () {\n    this.draw();\n    settings_1.settings.ground.frame.dx -= settings_1.settings.ground.scrollingSpeed;\n    console.log(settings_1.settings.ground.frame.dx);\n\n    if (settings_1.settings.ground.frame.dx <= -settings_1.settings.ground.frame.dw) {\n      settings_1.settings.ground.frame.dx = 0;\n    }\n  };\n\n  return Ground;\n}();\n\nexports.Ground = Ground;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvR3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFNSSxrQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBMkU7QUFBM0U7O0FBQ0ksU0FBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsS0FBSixFQUFkO0FBQ0EsU0FBS0QsTUFBTCxDQUFZRSxHQUFaLEdBQWtCQyxvQkFBU0gsTUFBM0I7QUFFQSxTQUFLQSxNQUFMLENBQVlJLGdCQUFaLENBQTZCLE1BQTdCLEVBQXFDO0FBQ2pDQyxXQUFJLENBQUNDLElBQUw7QUFDSCxLQUZEO0FBR0g7O0FBRURDO0FBQ0ksU0FBS1IsR0FBTCxDQUFTUyxTQUFULENBQ0ksS0FBS1IsTUFEVCxFQUVJRyxvQkFBU00sTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JDLEVBRjFCLEVBR0lSLG9CQUFTTSxNQUFULENBQWdCQyxLQUFoQixDQUFzQkUsRUFIMUIsRUFJSVQsb0JBQVNNLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCRyxFQUoxQixFQUtJVixvQkFBU00sTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JJLEVBTDFCLEVBTUlYLG9CQUFTTSxNQUFULENBQWdCQyxLQUFoQixDQUFzQkssRUFOMUIsRUFPSVosb0JBQVNNLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCTSxFQVAxQixFQVFJYixvQkFBU00sTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JPLEVBUjFCLEVBU0lkLG9CQUFTTSxNQUFULENBQWdCQyxLQUFoQixDQUFzQlEsRUFUMUI7QUFXQSxTQUFLbkIsR0FBTCxDQUFTUyxTQUFULENBQ0ksS0FBS1IsTUFEVCxFQUVJRyxvQkFBU00sTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JDLEVBRjFCLEVBR0lSLG9CQUFTTSxNQUFULENBQWdCQyxLQUFoQixDQUFzQkUsRUFIMUIsRUFJSVQsb0JBQVNNLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCRyxFQUoxQixFQUtJVixvQkFBU00sTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JJLEVBTDFCLEVBTUlYLG9CQUFTTSxNQUFULENBQWdCQyxLQUFoQixDQUFzQkssRUFBdEIsR0FBMkJaLG9CQUFTTSxNQUFULENBQWdCQyxLQUFoQixDQUFzQk8sRUFOckQsRUFPSWQsb0JBQVNNLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCTSxFQVAxQixFQVFJYixvQkFBU00sTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JPLEVBUjFCLEVBU0lkLG9CQUFTTSxNQUFULENBQWdCQyxLQUFoQixDQUFzQlEsRUFUMUI7QUFXSCxHQXZCRDs7QUF5QkFYO0FBQ0ksU0FBS0QsSUFBTDtBQUNBSCx3QkFBU00sTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JLLEVBQXRCLElBQTRCWixvQkFBU00sTUFBVCxDQUFnQlUsY0FBNUM7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlsQixvQkFBU00sTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JLLEVBQWxDOztBQUNBLFFBQUdaLG9CQUFTTSxNQUFULENBQWdCQyxLQUFoQixDQUFzQkssRUFBdEIsSUFBNEIsQ0FBQ1osb0JBQVNNLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCTyxFQUF0RCxFQUEwRDtBQUN0RGQsMEJBQVNNLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCSyxFQUF0QixHQUEyQixDQUEzQjtBQUNIO0FBQ0osR0FQRDs7QUFRSjtBQUFDLENBbEREOztBQUFhTyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvRHJhd2FibGUvR3JvdW5kLnRzP2Q2MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL3NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JvdW5kIHtcclxuICAgIHByaXZhdGUgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IHNldHRpbmdzLnNwcml0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLnN4LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuc3ksXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5zdyxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLnNoLFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuZHgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5keSxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmR3LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuZGhcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5zeCxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLnN5LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuc3csXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5zaCxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmR4ICsgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmR3LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuZHksXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5kdyxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmRoXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCkge1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5keCAtPSBzZXR0aW5ncy5ncm91bmQuc2Nyb2xsaW5nU3BlZWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmR4KVxyXG4gICAgICAgIGlmKHNldHRpbmdzLmdyb3VuZC5mcmFtZS5keCA8PSAtc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmR3KSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5keCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJjdHgiLCJzcHJpdGUiLCJJbWFnZSIsInNyYyIsInNldHRpbmdzXzEiLCJhZGRFdmVudExpc3RlbmVyIiwiX3RoaXMiLCJkcmF3IiwiR3JvdW5kIiwiZHJhd0ltYWdlIiwiZ3JvdW5kIiwiZnJhbWUiLCJzeCIsInN5Iiwic3ciLCJzaCIsImR4IiwiZHkiLCJkdyIsImRoIiwic2Nyb2xsaW5nU3BlZWQiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Ground.ts\n");

/***/ }),

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Canvas_1 = __webpack_require__(/*! ./Drawable/Canvas */ \"./src/ts/Drawable/Canvas.ts\");\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/ts/Animation.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.canvas = new Canvas_1.Canvas();\n    this.animation = new Animation_1.Animation(this.canvas);\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFJSTtBQUNJLFNBQUtBLE1BQUwsR0FBYyxJQUFJQyxlQUFKLEVBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLHFCQUFKLENBQWMsS0FBS0gsTUFBbkIsQ0FBakI7QUFDSDs7QUFDTDtBQUFDLENBUkQ7O0FBU0EsSUFBSUksSUFBSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTWFpbi50cz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2FudmFzfSBmcm9tIFwiLi9EcmF3YWJsZS9DYW52YXNcIjtcclxuaW1wb3J0IHtBbmltYXRpb259IGZyb20gXCIuL0FuaW1hdGlvblwiO1xyXG5cclxuY2xhc3MgTWFpbiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhczogQ2FudmFzO1xyXG4gICAgcHJpdmF0ZSBhbmltYXRpb246IEFuaW1hdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGhpcy5jYW52YXMpO1xyXG4gICAgfVxyXG59XHJcbm5ldyBNYWluKCk7XHJcbiJdLCJuYW1lcyI6WyJjYW52YXMiLCJDYW52YXNfMSIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbl8xIiwiTWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sprite: './src/img/sheet.png',\n  ground: {\n    frame: {\n      sx: 10,\n      sy: 10,\n      sw: 400,\n      sh: 133,\n      dx: 0,\n      dy: 290,\n      dw: 400,\n      dh: 110\n    },\n    scrollingSpeed: 2\n  },\n  grass: {\n    frame: {\n      sx: 10,\n      sy: 150,\n      sw: 400,\n      sh: 50,\n      dx: 0,\n      dy: 265,\n      dw: 400,\n      dh: 50\n    },\n    scrollingSpeed: 1\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsUUFBTSxFQUFFLHFCQURZO0FBRXBCQyxRQUFNLEVBQUU7QUFDSkMsU0FBSyxFQUFFO0FBQ0hDLFFBQUUsRUFBRSxFQUREO0FBRUhDLFFBQUUsRUFBRSxFQUZEO0FBR0hDLFFBQUUsRUFBRSxHQUhEO0FBSUhDLFFBQUUsRUFBRSxHQUpEO0FBS0hDLFFBQUUsRUFBRSxDQUxEO0FBTUhDLFFBQUUsRUFBRSxHQU5EO0FBT0hDLFFBQUUsRUFBRSxHQVBEO0FBUUhDLFFBQUUsRUFBRTtBQVJELEtBREg7QUFXSkMsa0JBQWMsRUFBRTtBQVhaLEdBRlk7QUFlcEJDLE9BQUssRUFBRTtBQUNIVixTQUFLLEVBQUU7QUFDSEMsUUFBRSxFQUFFLEVBREQ7QUFFSEMsUUFBRSxFQUFFLEdBRkQ7QUFHSEMsUUFBRSxFQUFFLEdBSEQ7QUFJSEMsUUFBRSxFQUFFLEVBSkQ7QUFLSEMsUUFBRSxFQUFFLENBTEQ7QUFNSEMsUUFBRSxFQUFFLEdBTkQ7QUFPSEMsUUFBRSxFQUFFLEdBUEQ7QUFRSEMsUUFBRSxFQUFFO0FBUkQsS0FESjtBQVdIQyxrQkFBYyxFQUFFO0FBWGI7QUFmYSxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9zZXR0aW5ncy50cz83NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIHNwcml0ZTogJy4vc3JjL2ltZy9zaGVldC5wbmcnLFxyXG4gICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgZnJhbWU6IHtcclxuICAgICAgICAgICAgc3g6IDEwLFxyXG4gICAgICAgICAgICBzeTogMTAsXHJcbiAgICAgICAgICAgIHN3OiA0MDAsXHJcbiAgICAgICAgICAgIHNoOiAxMzMsXHJcbiAgICAgICAgICAgIGR4OiAwLFxyXG4gICAgICAgICAgICBkeTogMjkwLFxyXG4gICAgICAgICAgICBkdzogNDAwLFxyXG4gICAgICAgICAgICBkaDogMTEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbGxpbmdTcGVlZDogMixcclxuICAgIH0sXHJcbiAgICBncmFzczoge1xyXG4gICAgICAgIGZyYW1lOiB7XHJcbiAgICAgICAgICAgIHN4OiAxMCxcclxuICAgICAgICAgICAgc3k6IDE1MCxcclxuICAgICAgICAgICAgc3c6IDQwMCxcclxuICAgICAgICAgICAgc2g6IDUwLFxyXG4gICAgICAgICAgICBkeDogMCxcclxuICAgICAgICAgICAgZHk6IDI2NSxcclxuICAgICAgICAgICAgZHc6IDQwMCxcclxuICAgICAgICAgICAgZGg6IDUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbGxpbmdTcGVlZDogMSxcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsInNwcml0ZSIsImdyb3VuZCIsImZyYW1lIiwic3giLCJzeSIsInN3Iiwic2giLCJkeCIsImR5IiwiZHciLCJkaCIsInNjcm9sbGluZ1NwZWVkIiwiZ3Jhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;