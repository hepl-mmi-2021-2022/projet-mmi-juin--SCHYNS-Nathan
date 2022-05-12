import {BackgroundCanvas} from "./Drawable/BackgroundCanvas";
import {ActorsCanvas} from "./Drawable/ActorsCanvas";

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