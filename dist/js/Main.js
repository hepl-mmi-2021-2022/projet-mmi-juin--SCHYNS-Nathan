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

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Animation = function () {\n  function Animation(canvasElement) {\n    this.canvas = canvasElement;\n    this.animate();\n  }\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    requestAnimationFrame(function () {\n      return _this.animate();\n    });\n    this.canvas.draw();\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBR0E7QUFHSSxxQkFBWUEsYUFBWixFQUFpQztBQUM3QixTQUFLQyxNQUFMLEdBQWNELGFBQWQ7QUFDQSxTQUFLRSxPQUFMO0FBQ0g7O0FBRURDO0FBQUE7O0FBQ0lDLHlCQUFxQixDQUFDO0FBQU0sa0JBQUksQ0FBQ0YsT0FBTDtBQUFjLEtBQXJCLENBQXJCO0FBRUEsU0FBS0QsTUFBTCxDQUFZSSxJQUFaO0FBQ0gsR0FKRDs7QUFLSjtBQUFDLENBYkQ7O0FBQWFDLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvQW5pbWF0aW9uLnRzPzkxYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYW52YXN9IGZyb20gXCIuL0RyYXdhYmxlL0NhbnZhc1wiO1xyXG5pbXBvcnQge0dyb3VuZH0gZnJvbSBcIi4vRHJhd2FibGUvR3JvdW5kXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uIHtcclxuICAgIGNhbnZhczogQ2FudmFzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsZW1lbnQ6IENhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmFuaW1hdGUoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXcoKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY2FudmFzIiwiYW5pbWF0ZSIsIkFuaW1hdGlvbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Animation.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/Canvas.ts":
/*!***********************************!*\
  !*** ./src/ts/Drawable/Canvas.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar Ground_1 = __webpack_require__(/*! ./Ground */ \"./src/ts/Drawable/Ground.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    var _this = this;\n\n    this.canvasElement = document.getElementById('my-canvas');\n    this.ctx = this.canvasElement.getContext('2d');\n    this.ground = new Ground_1.Ground(this.canvasElement, this.ctx);\n    this.sprite = new Image();\n    this.sprite.src = \"../../img/spritesheet.png\";\n\n    this.sprite.onload = function () {\n      _this.draw();\n    };\n  }\n\n  Canvas.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.ground.frame.sx, settings_1.settings.ground.frame.sy, settings_1.settings.ground.frame.sw, settings_1.settings.ground.frame.sh, settings_1.settings.ground.frame.dx, settings_1.settings.ground.frame.dy, settings_1.settings.ground.frame.dw, settings_1.settings.ground.frame.dh);\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFNSTtBQUFBOztBQUNJLFNBQUtBLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxhQUFMLENBQW1CSSxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLGVBQUosQ0FBVyxLQUFLTixhQUFoQixFQUErQixLQUFLRyxHQUFwQyxDQUFkO0FBQ0EsU0FBS0ksTUFBTCxHQUFjLElBQUlDLEtBQUosRUFBZDtBQUNBLFNBQUtELE1BQUwsQ0FBWUUsR0FBWixHQUFrQiwyQkFBbEI7O0FBQ0EsU0FBS0YsTUFBTCxDQUFZRyxNQUFaLEdBQXFCO0FBQ2pCQyxXQUFJLENBQUNDLElBQUw7QUFDSCxLQUZEO0FBR0g7O0FBRURDO0FBQ0ksU0FBS1YsR0FBTCxDQUFTVyxTQUFULENBQ0ksS0FBS1AsTUFEVCxFQUVJUSxvQkFBU1YsTUFBVCxDQUFnQlcsS0FBaEIsQ0FBc0JDLEVBRjFCLEVBR0lGLG9CQUFTVixNQUFULENBQWdCVyxLQUFoQixDQUFzQkUsRUFIMUIsRUFJSUgsb0JBQVNWLE1BQVQsQ0FBZ0JXLEtBQWhCLENBQXNCRyxFQUoxQixFQUtJSixvQkFBU1YsTUFBVCxDQUFnQlcsS0FBaEIsQ0FBc0JJLEVBTDFCLEVBTUlMLG9CQUFTVixNQUFULENBQWdCVyxLQUFoQixDQUFzQkssRUFOMUIsRUFPSU4sb0JBQVNWLE1BQVQsQ0FBZ0JXLEtBQWhCLENBQXNCTSxFQVAxQixFQVFJUCxvQkFBU1YsTUFBVCxDQUFnQlcsS0FBaEIsQ0FBc0JPLEVBUjFCLEVBU0lSLG9CQUFTVixNQUFULENBQWdCVyxLQUFoQixDQUFzQlEsRUFUMUI7QUFXSCxHQVpEOztBQWFKO0FBQUMsQ0E5QkQ7O0FBQWFDLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EcmF3YWJsZS9DYW52YXMudHM/MWY0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyb3VuZH0gZnJvbSBcIi4vR3JvdW5kXCI7XHJcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBwcml2YXRlIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBncm91bmQ6IEdyb3VuZDtcclxuICAgIHB1YmxpYyBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215LWNhbnZhcycpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJykgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kID0gbmV3IEdyb3VuZCh0aGlzLmNhbnZhc0VsZW1lbnQsIHRoaXMuY3R4KTtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IFwiLi4vLi4vaW1nL3Nwcml0ZXNoZWV0LnBuZ1wiO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLnN4LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuc3ksXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5zdyxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLnNoLFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuZHgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5keSxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmR3LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuZGhcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ3JvdW5kIiwiR3JvdW5kXzEiLCJzcHJpdGUiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsIl90aGlzIiwiZHJhdyIsIkNhbnZhcyIsImRyYXdJbWFnZSIsInNldHRpbmdzXzEiLCJmcmFtZSIsInN4Iiwic3kiLCJzdyIsInNoIiwiZHgiLCJkeSIsImR3IiwiZGgiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/Ground.ts":
/*!***********************************!*\
  !*** ./src/ts/Drawable/Ground.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Ground = void 0;\n\nvar Ground = function () {\n  function Ground(canvasElement, ctx) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n  }\n\n  Ground.prototype.draw = function () {};\n\n  return Ground;\n}();\n\nexports.Ground = Ground;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvR3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7QUFNSSxrQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBMkU7QUFDdkUsU0FBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7QUFFREMsdUNBRUMsQ0FGRDs7QUFHSjtBQUFDLENBZEQ7O0FBQWFDLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EcmF3YWJsZS9Hcm91bmQudHM/ZDYwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NldHRpbmdzfSBmcm9tIFwiLi4vc2V0dGluZ3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91bmQge1xyXG4gICAgcHJpdmF0ZSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwdWJsaWMgc3ByaXRlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBjYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcblxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJjdHgiLCJHcm91bmQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Ground.ts\n");

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

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  ground: {\n    sprite: '../img/spritesheet.png',\n    frame: {\n      sx: 10,\n      sy: 10,\n      sw: 400,\n      sh: 133,\n      dx: 0,\n      dy: 200,\n      dw: 400,\n      dh: 133\n    },\n    scrollingSpeed: 2\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsUUFBTSxFQUFFO0FBQ0pDLFVBQU0sRUFBRSx3QkFESjtBQUVKQyxTQUFLLEVBQUU7QUFDSEMsUUFBRSxFQUFFLEVBREQ7QUFFSEMsUUFBRSxFQUFFLEVBRkQ7QUFHSEMsUUFBRSxFQUFFLEdBSEQ7QUFJSEMsUUFBRSxFQUFFLEdBSkQ7QUFLSEMsUUFBRSxFQUFFLENBTEQ7QUFNSEMsUUFBRSxFQUFFLEdBTkQ7QUFPSEMsUUFBRSxFQUFFLEdBUEQ7QUFRSEMsUUFBRSxFQUFFO0FBUkQsS0FGSDtBQVlKQyxrQkFBYyxFQUFFO0FBWlo7QUFEWSxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9zZXR0aW5ncy50cz83NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGdyb3VuZDoge1xyXG4gICAgICAgIHNwcml0ZTogJy4uL2ltZy9zcHJpdGVzaGVldC5wbmcnLFxyXG4gICAgICAgIGZyYW1lOiB7XHJcbiAgICAgICAgICAgIHN4OiAxMCxcclxuICAgICAgICAgICAgc3k6IDEwLFxyXG4gICAgICAgICAgICBzdzogNDAwLFxyXG4gICAgICAgICAgICBzaDogMTMzLFxyXG4gICAgICAgICAgICBkeDogMCxcclxuICAgICAgICAgICAgZHk6IDIwMCxcclxuICAgICAgICAgICAgZHc6IDQwMCxcclxuICAgICAgICAgICAgZGg6IDEzM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsaW5nU3BlZWQ6IDIsXHJcbiAgICB9LFxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsiZXhwb3J0cyIsImdyb3VuZCIsInNwcml0ZSIsImZyYW1lIiwic3giLCJzeSIsInN3Iiwic2giLCJkeCIsImR5IiwiZHciLCJkaCIsInNjcm9sbGluZ1NwZWVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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