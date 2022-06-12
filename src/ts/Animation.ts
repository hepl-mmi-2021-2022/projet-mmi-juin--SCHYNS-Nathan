import {BackgroundCanvas} from "./Drawable/BackgroundCanvas";

export class Animation {
    backgroundCanvas: BackgroundCanvas;

    constructor(canvasElement: BackgroundCanvas) {
        this.backgroundCanvas = canvasElement;
        this.animate();
    }

    animate() {
        this.backgroundCanvas.animate();
        requestAnimationFrame(() => this.animate());
    }
}