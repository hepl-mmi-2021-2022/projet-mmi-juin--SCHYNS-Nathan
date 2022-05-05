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

eval("\n\nexports.__esModule = true;\nexports.Canvas = void 0;\n\nvar Ground_1 = __webpack_require__(/*! ./Ground */ \"./src/ts/Drawable/Ground.ts\");\n\nvar Grass_1 = __webpack_require__(/*! ./Grass */ \"./src/ts/Drawable/Grass.ts\");\n\nvar Tree_1 = __webpack_require__(/*! ./Tree */ \"./src/ts/Drawable/Tree.ts\");\n\nvar SmallTree_1 = __webpack_require__(/*! ./SmallTree */ \"./src/ts/Drawable/SmallTree.ts\");\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Canvas = function () {\n  function Canvas() {\n    var _this = this;\n\n    this.canvasElement = document.getElementById('my-canvas');\n    this.ctx = this.canvasElement.getContext('2d');\n    this.ground = new Ground_1.Ground(this.canvasElement, this.ctx);\n    this.grass = new Grass_1.Grass(this.canvasElement, this.ctx);\n    this.tree = new Tree_1.Tree(this.canvasElement, this.ctx);\n    this.smallTrees = [new SmallTree_1.SmallTree(this.canvasElement, this.ctx, this.smallTrees), new SmallTree_1.SmallTree(this.canvasElement, this.ctx, this.smallTrees)];\n    this.sprite = new Image();\n    this.sprite.src = settings_1.settings.sprite;\n    this.sprite.addEventListener(\"load\", function () {\n      _this.tree.init();\n\n      _this.smallTrees.forEach(function (smallTree) {\n        smallTree.init();\n      });\n\n      _this.draw();\n    });\n  }\n\n  Canvas.prototype.draw = function () {\n    this.grass.draw();\n    this.ground.draw();\n    this.tree.draw();\n    this.smallTrees.forEach(function (smallTree) {\n      smallTree.draw();\n    });\n  };\n\n  Canvas.prototype.animate = function () {\n    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);\n    this.grass.animate();\n    console.log(this.smallTrees);\n    this.smallTrees.forEach(function (smallTree) {\n      smallTree.animate();\n    });\n    this.tree.animate();\n    this.ground.animate();\n  };\n\n  return Canvas;\n}();\n\nexports.Canvas = Canvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvQ2FudmFzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFTSTtBQUFBOztBQUNJLFNBQUtBLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxhQUFMLENBQW1CSSxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBRUEsU0FBS0MsTUFBTCxHQUFjLElBQUlDLGVBQUosQ0FBVyxLQUFLTixhQUFoQixFQUErQixLQUFLRyxHQUFwQyxDQUFkO0FBQ0EsU0FBS0ksS0FBTCxHQUFhLElBQUlDLGFBQUosQ0FBVSxLQUFLUixhQUFmLEVBQThCLEtBQUtHLEdBQW5DLENBQWI7QUFDQSxTQUFLTSxJQUFMLEdBQVksSUFBSUMsV0FBSixDQUFTLEtBQUtWLGFBQWQsRUFBNkIsS0FBS0csR0FBbEMsQ0FBWjtBQUNBLFNBQUtRLFVBQUwsR0FBa0IsQ0FBQyxJQUFJQyxxQkFBSixDQUFjLEtBQUtaLGFBQW5CLEVBQWtDLEtBQUtHLEdBQXZDLEVBQTRDLEtBQUtRLFVBQWpELENBQUQsRUFBK0QsSUFBSUMscUJBQUosQ0FBYyxLQUFLWixhQUFuQixFQUFrQyxLQUFLRyxHQUF2QyxFQUE0QyxLQUFLUSxVQUFqRCxDQUEvRCxDQUFsQjtBQUVBLFNBQUtFLE1BQUwsR0FBYyxJQUFJQyxLQUFKLEVBQWQ7QUFDQSxTQUFLRCxNQUFMLENBQVlFLEdBQVosR0FBa0JDLG9CQUFTSCxNQUEzQjtBQUNBLFNBQUtBLE1BQUwsQ0FBWUksZ0JBQVosQ0FBNkIsTUFBN0IsRUFBcUM7QUFDakNDLFdBQUksQ0FBQ1QsSUFBTCxDQUFVVSxJQUFWOztBQUNBRCxXQUFJLENBQUNQLFVBQUwsQ0FBZ0JTLE9BQWhCLENBQXdCLFVBQUNDLFNBQUQsRUFBcUI7QUFDekNBLGlCQUFTLENBQUNGLElBQVY7QUFDSCxPQUZEOztBQUdBRCxXQUFJLENBQUNJLElBQUw7QUFDSCxLQU5EO0FBT0g7O0FBRURDO0FBQ0ksU0FBS2hCLEtBQUwsQ0FBV2UsSUFBWDtBQUNBLFNBQUtqQixNQUFMLENBQVlpQixJQUFaO0FBQ0EsU0FBS2IsSUFBTCxDQUFVYSxJQUFWO0FBQ0EsU0FBS1gsVUFBTCxDQUFnQlMsT0FBaEIsQ0FBd0IsVUFBQ0MsU0FBRCxFQUFxQjtBQUN6Q0EsZUFBUyxDQUFDQyxJQUFWO0FBQ0gsS0FGRDtBQUdILEdBUEQ7O0FBU0FDO0FBQ0ksU0FBS3BCLEdBQUwsQ0FBU3FCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBd0IsS0FBS3hCLGFBQUwsQ0FBbUJ5QixLQUEzQyxFQUFrRCxLQUFLekIsYUFBTCxDQUFtQjBCLE1BQXJFO0FBQ0EsU0FBS25CLEtBQUwsQ0FBV29CLE9BQVg7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS2xCLFVBQWpCO0FBQ0EsU0FBS0EsVUFBTCxDQUFnQlMsT0FBaEIsQ0FBd0IsVUFBQ0MsU0FBRCxFQUFxQjtBQUN6Q0EsZUFBUyxDQUFDTSxPQUFWO0FBQ0gsS0FGRDtBQUdBLFNBQUtsQixJQUFMLENBQVVrQixPQUFWO0FBQ0EsU0FBS3RCLE1BQUwsQ0FBWXNCLE9BQVo7QUFFSCxHQVZEOztBQVdKO0FBQUMsQ0FqREQ7O0FBQWFHLGNBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EcmF3YWJsZS9DYW52YXMudHM/MWY0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyb3VuZH0gZnJvbSBcIi4vR3JvdW5kXCI7XHJcbmltcG9ydCB7R3Jhc3N9IGZyb20gXCIuL0dyYXNzXCI7XHJcbmltcG9ydCB7VHJlZX0gZnJvbSBcIi4vVHJlZVwiO1xyXG5pbXBvcnQge1NtYWxsVHJlZX0gZnJvbSBcIi4vU21hbGxUcmVlXCI7XHJcbmltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbnZhcyB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBncm91bmQ6IEdyb3VuZDtcclxuICAgIHB1YmxpYyBncmFzczogR3Jhc3M7XHJcbiAgICBwdWJsaWMgc3ByaXRlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0cmVlOiBUcmVlO1xyXG4gICAgcHJpdmF0ZSBzbWFsbFRyZWVzOiBTbWFsbFRyZWVbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdW5kID0gbmV3IEdyb3VuZCh0aGlzLmNhbnZhc0VsZW1lbnQsIHRoaXMuY3R4KTtcclxuICAgICAgICB0aGlzLmdyYXNzID0gbmV3IEdyYXNzKHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgpO1xyXG4gICAgICAgIHRoaXMudHJlZSA9IG5ldyBUcmVlKHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgpO1xyXG4gICAgICAgIHRoaXMuc21hbGxUcmVlcyA9IFtuZXcgU21hbGxUcmVlKHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgsIHRoaXMuc21hbGxUcmVlcyksIG5ldyBTbWFsbFRyZWUodGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLmN0eCwgdGhpcy5zbWFsbFRyZWVzKV07XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuc3JjID0gc2V0dGluZ3Muc3ByaXRlO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmVlLmluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5zbWFsbFRyZWVzLmZvckVhY2goKHNtYWxsVHJlZTogU21hbGxUcmVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzbWFsbFRyZWUuaW5pdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFzcy5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5ncm91bmQuZHJhdygpO1xyXG4gICAgICAgIHRoaXMudHJlZS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5zbWFsbFRyZWVzLmZvckVhY2goKHNtYWxsVHJlZTogU21hbGxUcmVlKSA9PiB7XHJcbiAgICAgICAgICAgIHNtYWxsVHJlZS5kcmF3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZSgpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwwLCB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGgsIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZ3Jhc3MuYW5pbWF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc21hbGxUcmVlcylcclxuICAgICAgICB0aGlzLnNtYWxsVHJlZXMuZm9yRWFjaCgoc21hbGxUcmVlOiBTbWFsbFRyZWUpID0+IHtcclxuICAgICAgICAgICAgc21hbGxUcmVlLmFuaW1hdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRyZWUuYW5pbWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuZ3JvdW5kLmFuaW1hdGUoKTtcclxuXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ3JvdW5kIiwiR3JvdW5kXzEiLCJncmFzcyIsIkdyYXNzXzEiLCJ0cmVlIiwiVHJlZV8xIiwic21hbGxUcmVlcyIsIlNtYWxsVHJlZV8xIiwic3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJzZXR0aW5nc18xIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl90aGlzIiwiaW5pdCIsImZvckVhY2giLCJzbWFsbFRyZWUiLCJkcmF3IiwiQ2FudmFzIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbmltYXRlIiwiY29uc29sZSIsImxvZyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Canvas.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/Grass.ts":
/*!**********************************!*\
  !*** ./src/ts/Drawable/Grass.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Grass = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Grass = function () {\n  function Grass(canvasElement, ctx) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = settings_1.settings.sprite;\n  }\n\n  Grass.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.grass.frame.sx, settings_1.settings.grass.frame.sy, settings_1.settings.grass.frame.sw, settings_1.settings.grass.frame.sh, settings_1.settings.grass.frame.dx, settings_1.settings.grass.frame.dy, settings_1.settings.grass.frame.dw, settings_1.settings.grass.frame.dh);\n    this.ctx.drawImage(this.sprite, settings_1.settings.grass.frame.sx, settings_1.settings.grass.frame.sy, settings_1.settings.grass.frame.sw, settings_1.settings.grass.frame.sh, settings_1.settings.grass.frame.dx + settings_1.settings.grass.frame.dw, settings_1.settings.grass.frame.dy, settings_1.settings.grass.frame.dw, settings_1.settings.grass.frame.dh);\n  };\n\n  Grass.prototype.animate = function () {\n    this.draw();\n    settings_1.settings.grass.frame.dx -= settings_1.settings.grass.scrollingSpeed;\n\n    if (settings_1.settings.grass.frame.dx <= -settings_1.settings.grass.frame.dw) {\n      settings_1.settings.grass.frame.dx = 0;\n    }\n  };\n\n  return Grass;\n}();\n\nexports.Grass = Grass;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvR3Jhc3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQU1JLGlCQUFZQSxhQUFaLEVBQThDQyxHQUE5QyxFQUEyRTtBQUN2RSxTQUFLRCxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxJQUFJQyxLQUFKLEVBQWQ7QUFDQSxTQUFLRCxNQUFMLENBQVlFLEdBQVosR0FBa0JDLG9CQUFTSCxNQUEzQjtBQUNIOztBQUVESTtBQUNJLFNBQUtMLEdBQUwsQ0FBU00sU0FBVCxDQUNJLEtBQUtMLE1BRFQsRUFFSUcsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkMsRUFGekIsRUFHSUwsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkUsRUFIekIsRUFJSU4sb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkcsRUFKekIsRUFLSVAsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkksRUFMekIsRUFNSVIsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkssRUFOekIsRUFPSVQsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQk0sRUFQekIsRUFRSVYsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQk8sRUFSekIsRUFTSVgsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQlEsRUFUekI7QUFXQSxTQUFLaEIsR0FBTCxDQUFTTSxTQUFULENBQ0ksS0FBS0wsTUFEVCxFQUVJRyxvQkFBU0csS0FBVCxDQUFlQyxLQUFmLENBQXFCQyxFQUZ6QixFQUdJTCxvQkFBU0csS0FBVCxDQUFlQyxLQUFmLENBQXFCRSxFQUh6QixFQUlJTixvQkFBU0csS0FBVCxDQUFlQyxLQUFmLENBQXFCRyxFQUp6QixFQUtJUCxvQkFBU0csS0FBVCxDQUFlQyxLQUFmLENBQXFCSSxFQUx6QixFQU1JUixvQkFBU0csS0FBVCxDQUFlQyxLQUFmLENBQXFCSyxFQUFyQixHQUEwQlQsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQk8sRUFObkQsRUFPSVgsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQk0sRUFQekIsRUFRSVYsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQk8sRUFSekIsRUFTSVgsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQlEsRUFUekI7QUFXSCxHQXZCRDs7QUF5QkFYO0FBQ0ksU0FBS1ksSUFBTDtBQUNBYix3QkFBU0csS0FBVCxDQUFlQyxLQUFmLENBQXFCSyxFQUFyQixJQUEyQlQsb0JBQVNHLEtBQVQsQ0FBZVcsY0FBMUM7O0FBQ0EsUUFBR2Qsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQkssRUFBckIsSUFBMkIsQ0FBQ1Qsb0JBQVNHLEtBQVQsQ0FBZUMsS0FBZixDQUFxQk8sRUFBcEQsRUFBd0Q7QUFDcERYLDBCQUFTRyxLQUFULENBQWVDLEtBQWYsQ0FBcUJLLEVBQXJCLEdBQTBCLENBQTFCO0FBQ0g7QUFDSixHQU5EOztBQU9KO0FBQUMsQ0E3Q0Q7O0FBQWFNLGFBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9EcmF3YWJsZS9HcmFzcy50cz8zZWUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXNzIHtcclxuICAgIHByaXZhdGUgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IHNldHRpbmdzLnNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLnN4LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5zeSxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuc3csXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLnNoLFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5keCxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZHksXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLmR3LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5kaFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuc3gsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLnN5LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5zdyxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuc2gsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLmR4ICsgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZHcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLmR5LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncmFzcy5mcmFtZS5kdyxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZGhcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZHggLT0gc2V0dGluZ3MuZ3Jhc3Muc2Nyb2xsaW5nU3BlZWQ7XHJcbiAgICAgICAgaWYoc2V0dGluZ3MuZ3Jhc3MuZnJhbWUuZHggPD0gLXNldHRpbmdzLmdyYXNzLmZyYW1lLmR3KSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyYXNzLmZyYW1lLmR4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImN0eCIsInNwcml0ZSIsIkltYWdlIiwic3JjIiwic2V0dGluZ3NfMSIsIkdyYXNzIiwiZHJhd0ltYWdlIiwiZ3Jhc3MiLCJmcmFtZSIsInN4Iiwic3kiLCJzdyIsInNoIiwiZHgiLCJkeSIsImR3IiwiZGgiLCJkcmF3Iiwic2Nyb2xsaW5nU3BlZWQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Grass.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/Ground.ts":
/*!***********************************!*\
  !*** ./src/ts/Drawable/Ground.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Ground = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Ground = function () {\n  function Ground(canvasElement, ctx) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = settings_1.settings.sprite;\n  }\n\n  Ground.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.ground.frame.sx, settings_1.settings.ground.frame.sy, settings_1.settings.ground.frame.sw, settings_1.settings.ground.frame.sh, settings_1.settings.ground.frame.dx, settings_1.settings.ground.frame.dy, settings_1.settings.ground.frame.dw, settings_1.settings.ground.frame.dh);\n    this.ctx.drawImage(this.sprite, settings_1.settings.ground.frame.sx, settings_1.settings.ground.frame.sy, settings_1.settings.ground.frame.sw, settings_1.settings.ground.frame.sh, settings_1.settings.ground.frame.dx + settings_1.settings.ground.frame.dw, settings_1.settings.ground.frame.dy, settings_1.settings.ground.frame.dw, settings_1.settings.ground.frame.dh);\n  };\n\n  Ground.prototype.animate = function () {\n    this.draw();\n    settings_1.settings.ground.frame.dx -= settings_1.settings.ground.scrollingSpeed;\n\n    if (settings_1.settings.ground.frame.dx <= -settings_1.settings.ground.frame.dw) {\n      settings_1.settings.ground.frame.dx = 0;\n    }\n  };\n\n  return Ground;\n}();\n\nexports.Ground = Ground;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvR3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFNSSxrQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBMkU7QUFDdkUsU0FBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsS0FBSixFQUFkO0FBQ0EsU0FBS0QsTUFBTCxDQUFZRSxHQUFaLEdBQWtCQyxvQkFBU0gsTUFBM0I7QUFDSDs7QUFFREk7QUFDSSxTQUFLTCxHQUFMLENBQVNNLFNBQVQsQ0FDSSxLQUFLTCxNQURULEVBRUlHLG9CQUFTRyxNQUFULENBQWdCQyxLQUFoQixDQUFzQkMsRUFGMUIsRUFHSUwsb0JBQVNHLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCRSxFQUgxQixFQUlJTixvQkFBU0csTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JHLEVBSjFCLEVBS0lQLG9CQUFTRyxNQUFULENBQWdCQyxLQUFoQixDQUFzQkksRUFMMUIsRUFNSVIsb0JBQVNHLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCSyxFQU4xQixFQU9JVCxvQkFBU0csTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JNLEVBUDFCLEVBUUlWLG9CQUFTRyxNQUFULENBQWdCQyxLQUFoQixDQUFzQk8sRUFSMUIsRUFTSVgsb0JBQVNHLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCUSxFQVQxQjtBQVdBLFNBQUtoQixHQUFMLENBQVNNLFNBQVQsQ0FDSSxLQUFLTCxNQURULEVBRUlHLG9CQUFTRyxNQUFULENBQWdCQyxLQUFoQixDQUFzQkMsRUFGMUIsRUFHSUwsb0JBQVNHLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCRSxFQUgxQixFQUlJTixvQkFBU0csTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JHLEVBSjFCLEVBS0lQLG9CQUFTRyxNQUFULENBQWdCQyxLQUFoQixDQUFzQkksRUFMMUIsRUFNSVIsb0JBQVNHLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCSyxFQUF0QixHQUEyQlQsb0JBQVNHLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCTyxFQU5yRCxFQU9JWCxvQkFBU0csTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JNLEVBUDFCLEVBUUlWLG9CQUFTRyxNQUFULENBQWdCQyxLQUFoQixDQUFzQk8sRUFSMUIsRUFTSVgsb0JBQVNHLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCUSxFQVQxQjtBQVdILEdBdkJEOztBQXlCQVg7QUFDSSxTQUFLWSxJQUFMO0FBQ0FiLHdCQUFTRyxNQUFULENBQWdCQyxLQUFoQixDQUFzQkssRUFBdEIsSUFBNEJULG9CQUFTRyxNQUFULENBQWdCVyxjQUE1Qzs7QUFDQSxRQUFHZCxvQkFBU0csTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0JLLEVBQXRCLElBQTRCLENBQUNULG9CQUFTRyxNQUFULENBQWdCQyxLQUFoQixDQUFzQk8sRUFBdEQsRUFBMEQ7QUFDdERYLDBCQUFTRyxNQUFULENBQWdCQyxLQUFoQixDQUFzQkssRUFBdEIsR0FBMkIsQ0FBM0I7QUFDSDtBQUNKLEdBTkQ7O0FBT0o7QUFBQyxDQTdDRDs7QUFBYU0sY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL0RyYXdhYmxlL0dyb3VuZC50cz9kNjBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyb3VuZCB7XHJcbiAgICBwcml2YXRlIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgLy8gVXRpbGlzZXIgZGUgbCdow6lyaXRhZ2UgcG91ciBvcHRpbWlzZXIgY2V0dGUgcGFydGllLlxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IHNldHRpbmdzLnNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGUsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5zeCxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLnN5LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuc3csXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5zaCxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmR4LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuZHksXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5kdyxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmRoXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuc3gsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5zeSxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLnN3LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuc2gsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5keCArIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5kdyxcclxuICAgICAgICAgICAgc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmR5LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuZHcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5kaFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZSgpIHtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICBzZXR0aW5ncy5ncm91bmQuZnJhbWUuZHggLT0gc2V0dGluZ3MuZ3JvdW5kLnNjcm9sbGluZ1NwZWVkO1xyXG4gICAgICAgIGlmKHNldHRpbmdzLmdyb3VuZC5mcmFtZS5keCA8PSAtc2V0dGluZ3MuZ3JvdW5kLmZyYW1lLmR3KSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzLmdyb3VuZC5mcmFtZS5keCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJjdHgiLCJzcHJpdGUiLCJJbWFnZSIsInNyYyIsInNldHRpbmdzXzEiLCJHcm91bmQiLCJkcmF3SW1hZ2UiLCJncm91bmQiLCJmcmFtZSIsInN4Iiwic3kiLCJzdyIsInNoIiwiZHgiLCJkeSIsImR3IiwiZGgiLCJkcmF3Iiwic2Nyb2xsaW5nU3BlZWQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Ground.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/SmallTree.ts":
/*!**************************************!*\
  !*** ./src/ts/Drawable/SmallTree.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.SmallTree = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar helpers_1 = __webpack_require__(/*! ../Helpers/helpers */ \"./src/ts/Helpers/helpers.ts\");\n\nvar SmallTree = function () {\n  function SmallTree(canvasElement, ctx, smallTrees) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.smallTrees = smallTrees;\n    this.sprite = new Image();\n    this.sprite.src = settings_1.settings.sprite;\n  }\n\n  SmallTree.prototype.init = function () {\n    this.speed = settings_1.settings.smallTree.speed;\n    this.gapDistance = (0, helpers_1.random2)(settings_1.settings.smallTree.gap);\n    this.position = this.gapDistance;\n  };\n\n  SmallTree.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.smallTree.frame.sx, settings_1.settings.smallTree.frame.sy, settings_1.settings.smallTree.frame.sw, settings_1.settings.smallTree.frame.sh, this.position, settings_1.settings.smallTree.frame.dy, settings_1.settings.smallTree.frame.dw, settings_1.settings.smallTree.frame.dh);\n  };\n\n  SmallTree.prototype.animate = function () {\n    if (this.position + settings_1.settings.smallTree.frame.dw + this.gapDistance < this.gapDistance) {\n      this.init();\n    }\n\n    this.position -= this.speed;\n    this.draw();\n  };\n\n  return SmallTree;\n}();\n\nexports.SmallTree = SmallTree;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvU21hbGxUcmVlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFTSSxxQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBNkVDLFVBQTdFLEVBQW9HO0FBQ2hHLFNBQUtGLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFFQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsS0FBSixFQUFkO0FBQ0EsU0FBS0QsTUFBTCxDQUFZRSxHQUFaLEdBQWtCQyxvQkFBU0gsTUFBM0I7QUFDSDs7QUFFREk7QUFDSSxTQUFLQyxLQUFMLEdBQWFGLG9CQUFTRyxTQUFULENBQW1CRCxLQUFoQztBQUNBLFNBQUtFLFdBQUwsR0FBbUIsdUJBQVFKLG9CQUFTRyxTQUFULENBQW1CRSxHQUEzQixDQUFuQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0YsV0FBckI7QUFDSCxHQUpEOztBQU1BSDtBQUNJLFNBQUtOLEdBQUwsQ0FBU1ksU0FBVCxDQUNJLEtBQUtWLE1BRFQsRUFFSUcsb0JBQVNHLFNBQVQsQ0FBbUJLLEtBQW5CLENBQXlCQyxFQUY3QixFQUdJVCxvQkFBU0csU0FBVCxDQUFtQkssS0FBbkIsQ0FBeUJFLEVBSDdCLEVBSUlWLG9CQUFTRyxTQUFULENBQW1CSyxLQUFuQixDQUF5QkcsRUFKN0IsRUFLSVgsb0JBQVNHLFNBQVQsQ0FBbUJLLEtBQW5CLENBQXlCSSxFQUw3QixFQU1JLEtBQUtOLFFBTlQsRUFPSU4sb0JBQVNHLFNBQVQsQ0FBbUJLLEtBQW5CLENBQXlCSyxFQVA3QixFQVFJYixvQkFBU0csU0FBVCxDQUFtQkssS0FBbkIsQ0FBeUJNLEVBUjdCLEVBU0lkLG9CQUFTRyxTQUFULENBQW1CSyxLQUFuQixDQUF5Qk8sRUFUN0I7QUFXSCxHQVpEOztBQWNBZDtBQUNJLFFBQUksS0FBS0ssUUFBTCxHQUFnQk4sb0JBQVNHLFNBQVQsQ0FBbUJLLEtBQW5CLENBQXlCTSxFQUF6QyxHQUE4QyxLQUFLVixXQUFuRCxHQUFpRSxLQUFLQSxXQUExRSxFQUF1RjtBQUNuRixXQUFLWSxJQUFMO0FBQ0g7O0FBQ0QsU0FBS1YsUUFBTCxJQUFpQixLQUFLSixLQUF0QjtBQUVBLFNBQUtlLElBQUw7QUFDSCxHQVBEOztBQVFKO0FBQUMsQ0E5Q0Q7O0FBQWFDLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvRHJhd2FibGUvU21hbGxUcmVlLnRzPzIyOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7cmFuZG9tMn0gZnJvbSBcIi4uL0hlbHBlcnMvaGVscGVyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNtYWxsVHJlZSB7XHJcbiAgICBwcml2YXRlIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHB1YmxpYyBzcHJpdGU6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwdWJsaWMgcG9zaXRpb246IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ2FwRGlzdGFuY2U6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc21hbGxUcmVlczogU21hbGxUcmVlW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzbWFsbFRyZWVzOiBTbWFsbFRyZWVbXSkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5zbWFsbFRyZWVzID0gc21hbGxUcmVlcztcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcmMgPSBzZXR0aW5ncy5zcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc2V0dGluZ3Muc21hbGxUcmVlLnNwZWVkO1xyXG4gICAgICAgIHRoaXMuZ2FwRGlzdGFuY2UgPSByYW5kb20yKHNldHRpbmdzLnNtYWxsVHJlZS5nYXApO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmdhcERpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZSxcclxuICAgICAgICAgICAgc2V0dGluZ3Muc21hbGxUcmVlLmZyYW1lLnN4LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5zbWFsbFRyZWUuZnJhbWUuc3ksXHJcbiAgICAgICAgICAgIHNldHRpbmdzLnNtYWxsVHJlZS5mcmFtZS5zdyxcclxuICAgICAgICAgICAgc2V0dGluZ3Muc21hbGxUcmVlLmZyYW1lLnNoLFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBzZXR0aW5ncy5zbWFsbFRyZWUuZnJhbWUuZHksXHJcbiAgICAgICAgICAgIHNldHRpbmdzLnNtYWxsVHJlZS5mcmFtZS5kdyxcclxuICAgICAgICAgICAgc2V0dGluZ3Muc21hbGxUcmVlLmZyYW1lLmRoXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICsgc2V0dGluZ3Muc21hbGxUcmVlLmZyYW1lLmR3ICsgdGhpcy5nYXBEaXN0YW5jZSA8IHRoaXMuZ2FwRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24gLT0gdGhpcy5zcGVlZDtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImN0eCIsInNtYWxsVHJlZXMiLCJzcHJpdGUiLCJJbWFnZSIsInNyYyIsInNldHRpbmdzXzEiLCJTbWFsbFRyZWUiLCJzcGVlZCIsInNtYWxsVHJlZSIsImdhcERpc3RhbmNlIiwiZ2FwIiwicG9zaXRpb24iLCJkcmF3SW1hZ2UiLCJmcmFtZSIsInN4Iiwic3kiLCJzdyIsInNoIiwiZHkiLCJkdyIsImRoIiwiaW5pdCIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Drawable/SmallTree.ts\n");

/***/ }),

/***/ "./src/ts/Drawable/Tree.ts":
/*!*********************************!*\
  !*** ./src/ts/Drawable/Tree.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Tree = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar helpers_1 = __webpack_require__(/*! ../Helpers/helpers */ \"./src/ts/Helpers/helpers.ts\");\n\nvar Tree = function () {\n  function Tree(canvasElement, ctx) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.sprite = new Image();\n    this.sprite.src = settings_1.settings.sprite;\n  }\n\n  Tree.prototype.init = function () {\n    this.speed = settings_1.settings.tree.speed;\n    this.gapDistance = (0, helpers_1.random2)(settings_1.settings.tree.gap);\n    this.position = this.gapDistance;\n  };\n\n  Tree.prototype.draw = function () {\n    this.ctx.drawImage(this.sprite, settings_1.settings.tree.frame.sx, settings_1.settings.tree.frame.sy, settings_1.settings.tree.frame.sw, settings_1.settings.tree.frame.sh, this.position, settings_1.settings.tree.frame.dy, settings_1.settings.tree.frame.dw, settings_1.settings.tree.frame.dh);\n  };\n\n  Tree.prototype.animate = function () {\n    if (this.position + settings_1.settings.tree.frame.dw + this.gapDistance < this.gapDistance) {\n      this.init();\n    }\n\n    this.position -= this.speed;\n    this.draw();\n  };\n\n  return Tree;\n}();\n\nexports.Tree = Tree;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvRHJhd2FibGUvVHJlZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUNBOztBQUVBO0FBUUksZ0JBQVlBLGFBQVosRUFBOENDLEdBQTlDLEVBQTJFO0FBQ3ZFLFNBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLElBQUlDLEtBQUosRUFBZDtBQUNBLFNBQUtELE1BQUwsQ0FBWUUsR0FBWixHQUFrQkMsb0JBQVNILE1BQTNCO0FBQ0g7O0FBRURJO0FBQ0ksU0FBS0MsS0FBTCxHQUFhRixvQkFBU0csSUFBVCxDQUFjRCxLQUEzQjtBQUNBLFNBQUtFLFdBQUwsR0FBbUIsdUJBQVFKLG9CQUFTRyxJQUFULENBQWNFLEdBQXRCLENBQW5CO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLRixXQUFyQjtBQUNILEdBSkQ7O0FBTUFIO0FBQ0ksU0FBS0wsR0FBTCxDQUFTVyxTQUFULENBQ0ksS0FBS1YsTUFEVCxFQUVJRyxvQkFBU0csSUFBVCxDQUFjSyxLQUFkLENBQW9CQyxFQUZ4QixFQUdJVCxvQkFBU0csSUFBVCxDQUFjSyxLQUFkLENBQW9CRSxFQUh4QixFQUlJVixvQkFBU0csSUFBVCxDQUFjSyxLQUFkLENBQW9CRyxFQUp4QixFQUtJWCxvQkFBU0csSUFBVCxDQUFjSyxLQUFkLENBQW9CSSxFQUx4QixFQU1JLEtBQUtOLFFBTlQsRUFPSU4sb0JBQVNHLElBQVQsQ0FBY0ssS0FBZCxDQUFvQkssRUFQeEIsRUFRSWIsb0JBQVNHLElBQVQsQ0FBY0ssS0FBZCxDQUFvQk0sRUFSeEIsRUFTSWQsb0JBQVNHLElBQVQsQ0FBY0ssS0FBZCxDQUFvQk8sRUFUeEI7QUFXSCxHQVpEOztBQWNBZDtBQUNJLFFBQUksS0FBS0ssUUFBTCxHQUFnQk4sb0JBQVNHLElBQVQsQ0FBY0ssS0FBZCxDQUFvQk0sRUFBcEMsR0FBeUMsS0FBS1YsV0FBOUMsR0FBNEQsS0FBS0EsV0FBckUsRUFBa0Y7QUFDOUUsV0FBS1ksSUFBTDtBQUNIOztBQUNELFNBQUtWLFFBQUwsSUFBaUIsS0FBS0osS0FBdEI7QUFDQSxTQUFLZSxJQUFMO0FBQ0gsR0FORDs7QUFPSjtBQUFDLENBMUNEOztBQUFhQyxZQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvRHJhd2FibGUvVHJlZS50cz8wZDhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuLi9zZXR0aW5nc1wiO1xyXG5pbXBvcnQge3JhbmRvbTJ9IGZyb20gXCIuLi9IZWxwZXJzL2hlbHBlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVlIHtcclxuICAgIHByaXZhdGUgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHVibGljIHNwcml0ZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHB1YmxpYyBwb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBnYXBEaXN0YW5jZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGNhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcmMgPSBzZXR0aW5ncy5zcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc2V0dGluZ3MudHJlZS5zcGVlZDtcclxuICAgICAgICB0aGlzLmdhcERpc3RhbmNlID0gcmFuZG9tMihzZXR0aW5ncy50cmVlLmdhcCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuZ2FwRGlzdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlLFxyXG4gICAgICAgICAgICBzZXR0aW5ncy50cmVlLmZyYW1lLnN4LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy50cmVlLmZyYW1lLnN5LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy50cmVlLmZyYW1lLnN3LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy50cmVlLmZyYW1lLnNoLFxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICBzZXR0aW5ncy50cmVlLmZyYW1lLmR5LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy50cmVlLmZyYW1lLmR3LFxyXG4gICAgICAgICAgICBzZXR0aW5ncy50cmVlLmZyYW1lLmRoXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uICsgc2V0dGluZ3MudHJlZS5mcmFtZS5kdyArIHRoaXMuZ2FwRGlzdGFuY2UgPCB0aGlzLmdhcERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvc2l0aW9uIC09IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY2FudmFzRWxlbWVudCIsImN0eCIsInNwcml0ZSIsIkltYWdlIiwic3JjIiwic2V0dGluZ3NfMSIsIlRyZWUiLCJzcGVlZCIsInRyZWUiLCJnYXBEaXN0YW5jZSIsImdhcCIsInBvc2l0aW9uIiwiZHJhd0ltYWdlIiwiZnJhbWUiLCJzeCIsInN5Iiwic3ciLCJzaCIsImR5IiwiZHciLCJkaCIsImluaXQiLCJkcmF3IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/Drawable/Tree.ts\n");

/***/ }),

/***/ "./src/ts/Helpers/helpers.ts":
/*!***********************************!*\
  !*** ./src/ts/Helpers/helpers.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random2 = exports.random = void 0;\n\nfunction random(min, max) {\n  return random2({\n    min: min,\n    max: max\n  });\n}\n\nexports.random = random;\n\nfunction random2(param) {\n  return param.min + Math.random() * (param.max - param.min) | 0;\n}\n\nexports.random2 = random2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvSGVscGVycy9oZWxwZXJzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBZ0JBLE1BQWhCLENBQXVCQyxHQUF2QixFQUFvQ0MsR0FBcEMsRUFBK0M7QUFDM0MsU0FBT0MsT0FBTyxDQUFDO0FBQUNGLE9BQUcsRUFBRUEsR0FBTjtBQUFXQyxPQUFHLEVBQUVBO0FBQWhCLEdBQUQsQ0FBZDtBQUNIOztBQUZERSxjQUFBQTs7QUFJQSxTQUFnQkQsT0FBaEIsQ0FBd0JFLEtBQXhCLEVBQXlEO0FBQ3JELFNBQU9BLEtBQUssQ0FBQ0osR0FBTixHQUFZSyxJQUFJLENBQUNOLE1BQUwsTUFBZUssS0FBSyxDQUFDSCxHQUFOLEdBQVVHLEtBQUssQ0FBQ0osR0FBL0IsQ0FBWixHQUFrRCxDQUF6RDtBQUNIOztBQUZERyxlQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvSGVscGVycy9oZWxwZXJzLnRzPzNlZGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgIHJldHVybiByYW5kb20yKHttaW46IG1pbiwgbWF4OiBtYXh9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbTIocGFyYW06IHttaW46IG51bWJlciwgbWF4OiBudW1iZXJ9KSB7XHJcbiAgICByZXR1cm4gcGFyYW0ubWluICsgTWF0aC5yYW5kb20oKSoocGFyYW0ubWF4LXBhcmFtLm1pbikgfCAwO1xyXG59Il0sIm5hbWVzIjpbInJhbmRvbSIsIm1pbiIsIm1heCIsInJhbmRvbTIiLCJleHBvcnRzIiwicGFyYW0iLCJNYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Helpers/helpers.ts\n");

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

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sprite: './src/img/sheet.png',\n  ground: {\n    frame: {\n      sx: 10,\n      sy: 10,\n      sw: 400,\n      sh: 133,\n      dx: 0,\n      dy: 290,\n      dw: 400,\n      dh: 110\n    },\n    scrollingSpeed: 3\n  },\n  grass: {\n    frame: {\n      sx: 10,\n      sy: 150,\n      sw: 400,\n      sh: 50,\n      dx: 0,\n      dy: 265,\n      dw: 400,\n      dh: 50\n    },\n    scrollingSpeed: 1.5\n  },\n  tree: {\n    frame: {\n      sx: 421,\n      sy: 10,\n      sw: 368,\n      sh: 403,\n      dx: 0,\n      dy: 0,\n      dw: 300,\n      dh: 350\n    },\n    speed: 2.8,\n    gap: {\n      min: 400,\n      max: 500\n    }\n  },\n  smallTree: {\n    frame: {\n      sx: 801,\n      sy: 10,\n      sw: 253,\n      sh: 370,\n      dx: 0,\n      dy: 0,\n      dw: 253,\n      dh: 300\n    },\n    speed: 2.5,\n    gap: {\n      min: 400,\n      max: 800\n    },\n    maxCount: 2\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsUUFBTSxFQUFFLHFCQURZO0FBRXBCQyxRQUFNLEVBQUU7QUFDSkMsU0FBSyxFQUFFO0FBQ0hDLFFBQUUsRUFBRSxFQUREO0FBRUhDLFFBQUUsRUFBRSxFQUZEO0FBR0hDLFFBQUUsRUFBRSxHQUhEO0FBSUhDLFFBQUUsRUFBRSxHQUpEO0FBS0hDLFFBQUUsRUFBRSxDQUxEO0FBTUhDLFFBQUUsRUFBRSxHQU5EO0FBT0hDLFFBQUUsRUFBRSxHQVBEO0FBUUhDLFFBQUUsRUFBRTtBQVJELEtBREg7QUFXSkMsa0JBQWMsRUFBRTtBQVhaLEdBRlk7QUFlcEJDLE9BQUssRUFBRTtBQUNIVixTQUFLLEVBQUU7QUFDSEMsUUFBRSxFQUFFLEVBREQ7QUFFSEMsUUFBRSxFQUFFLEdBRkQ7QUFHSEMsUUFBRSxFQUFFLEdBSEQ7QUFJSEMsUUFBRSxFQUFFLEVBSkQ7QUFLSEMsUUFBRSxFQUFFLENBTEQ7QUFNSEMsUUFBRSxFQUFFLEdBTkQ7QUFPSEMsUUFBRSxFQUFFLEdBUEQ7QUFRSEMsUUFBRSxFQUFFO0FBUkQsS0FESjtBQVdIQyxrQkFBYyxFQUFFO0FBWGIsR0FmYTtBQTRCcEJFLE1BQUksRUFBRTtBQUNGWCxTQUFLLEVBQUU7QUFDSEMsUUFBRSxFQUFFLEdBREQ7QUFFSEMsUUFBRSxFQUFFLEVBRkQ7QUFHSEMsUUFBRSxFQUFFLEdBSEQ7QUFJSEMsUUFBRSxFQUFFLEdBSkQ7QUFLSEMsUUFBRSxFQUFFLENBTEQ7QUFNSEMsUUFBRSxFQUFFLENBTkQ7QUFPSEMsUUFBRSxFQUFFLEdBUEQ7QUFRSEMsUUFBRSxFQUFFO0FBUkQsS0FETDtBQVdGSSxTQUFLLEVBQUUsR0FYTDtBQVlGQyxPQUFHLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLEdBQU47QUFBV0MsU0FBRyxFQUFFO0FBQWhCO0FBWkgsR0E1QmM7QUEwQ3BCQyxXQUFTLEVBQUU7QUFDUGhCLFNBQUssRUFBRTtBQUNIQyxRQUFFLEVBQUUsR0FERDtBQUVIQyxRQUFFLEVBQUUsRUFGRDtBQUdIQyxRQUFFLEVBQUUsR0FIRDtBQUlIQyxRQUFFLEVBQUUsR0FKRDtBQUtIQyxRQUFFLEVBQUUsQ0FMRDtBQU1IQyxRQUFFLEVBQUUsQ0FORDtBQU9IQyxRQUFFLEVBQUUsR0FQRDtBQVFIQyxRQUFFLEVBQUU7QUFSRCxLQURBO0FBV1BJLFNBQUssRUFBRSxHQVhBO0FBWVBDLE9BQUcsRUFBRTtBQUFDQyxTQUFHLEVBQUUsR0FBTjtBQUFXQyxTQUFHLEVBQUU7QUFBaEIsS0FaRTtBQWFQRSxZQUFRLEVBQUU7QUFiSDtBQTFDUyxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9zZXR0aW5ncy50cz83NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIHNwcml0ZTogJy4vc3JjL2ltZy9zaGVldC5wbmcnLFxyXG4gICAgZ3JvdW5kOiB7XHJcbiAgICAgICAgZnJhbWU6IHtcclxuICAgICAgICAgICAgc3g6IDEwLFxyXG4gICAgICAgICAgICBzeTogMTAsXHJcbiAgICAgICAgICAgIHN3OiA0MDAsXHJcbiAgICAgICAgICAgIHNoOiAxMzMsXHJcbiAgICAgICAgICAgIGR4OiAwLFxyXG4gICAgICAgICAgICBkeTogMjkwLFxyXG4gICAgICAgICAgICBkdzogNDAwLFxyXG4gICAgICAgICAgICBkaDogMTEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbGxpbmdTcGVlZDogMyxcclxuICAgIH0sXHJcbiAgICBncmFzczoge1xyXG4gICAgICAgIGZyYW1lOiB7XHJcbiAgICAgICAgICAgIHN4OiAxMCxcclxuICAgICAgICAgICAgc3k6IDE1MCxcclxuICAgICAgICAgICAgc3c6IDQwMCxcclxuICAgICAgICAgICAgc2g6IDUwLFxyXG4gICAgICAgICAgICBkeDogMCxcclxuICAgICAgICAgICAgZHk6IDI2NSxcclxuICAgICAgICAgICAgZHc6IDQwMCxcclxuICAgICAgICAgICAgZGg6IDUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbGxpbmdTcGVlZDogMS41LFxyXG4gICAgfSxcclxuICAgIHRyZWU6IHtcclxuICAgICAgICBmcmFtZToge1xyXG4gICAgICAgICAgICBzeDogNDIxLFxyXG4gICAgICAgICAgICBzeTogMTAsXHJcbiAgICAgICAgICAgIHN3OiAzNjgsXHJcbiAgICAgICAgICAgIHNoOiA0MDMsXHJcbiAgICAgICAgICAgIGR4OiAwLFxyXG4gICAgICAgICAgICBkeTogMCxcclxuICAgICAgICAgICAgZHc6IDMwMCxcclxuICAgICAgICAgICAgZGg6IDM1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3BlZWQ6IDIuOCxcclxuICAgICAgICBnYXA6IHttaW46IDQwMCwgbWF4OiA1MDB9XHJcbiAgICB9LFxyXG4gICAgc21hbGxUcmVlOiB7XHJcbiAgICAgICAgZnJhbWU6IHtcclxuICAgICAgICAgICAgc3g6IDgwMSxcclxuICAgICAgICAgICAgc3k6IDEwLFxyXG4gICAgICAgICAgICBzdzogMjUzLFxyXG4gICAgICAgICAgICBzaDogMzcwLFxyXG4gICAgICAgICAgICBkeDogMCxcclxuICAgICAgICAgICAgZHk6IDAsXHJcbiAgICAgICAgICAgIGR3OiAyNTMsXHJcbiAgICAgICAgICAgIGRoOiAzMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwZWVkOiAyLjUsXHJcbiAgICAgICAgZ2FwOiB7bWluOiA0MDAsIG1heDogODAwfSxcclxuICAgICAgICBtYXhDb3VudDogMlxyXG4gICAgfVxyXG5cclxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwic3ByaXRlIiwiZ3JvdW5kIiwiZnJhbWUiLCJzeCIsInN5Iiwic3ciLCJzaCIsImR4IiwiZHkiLCJkdyIsImRoIiwic2Nyb2xsaW5nU3BlZWQiLCJncmFzcyIsInRyZWUiLCJzcGVlZCIsImdhcCIsIm1pbiIsIm1heCIsInNtYWxsVHJlZSIsIm1heENvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

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