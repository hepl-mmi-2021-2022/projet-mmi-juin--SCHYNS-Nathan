import {Canvas} from "./Drawable/Canvas";
import {Ground} from "./Drawable/Ground";

export class Animation {
    canvas: Canvas;


    constructor(canvasElement: Canvas) {
        this.canvas = canvasElement;
        this.animate();
    }

    animate() {
        this.canvas.animate();
        requestAnimationFrame(() => this.animate());
    }
}