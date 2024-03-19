/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/0035-exercicioVideo/interfaceClasse.ts":
/*!****************************************************!*\
  !*** ./src/0035-exercicioVideo/interfaceClasse.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = "pause";
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = "play";
        }
    }
    stop() {
    }
    iniciarEventos() {
        this.playButton.addEventListener("click", () => {
            this.playToggle();
            this.stopButton.addEventListener("click", () => {
                this.videoPlayer.pause();
                this.videoPlayer.currentTime = 0;
                this.playButton.innerText = "play";
            });
        });
    }
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
}
exports["default"] = VideoPlayer;
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector(".video"),
    playButton: document.querySelector(".play"),
    stopButton: document.querySelector(".stop"),
});
videoPlayer.iniciarEventos();


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************************************!*\
  !*** ./src/0019-exercicio/a0019-exercicio.ts ***!
  \***********************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../0035-exercicioVideo/interfaceClasse */ "./src/0035-exercicioVideo/interfaceClasse.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map