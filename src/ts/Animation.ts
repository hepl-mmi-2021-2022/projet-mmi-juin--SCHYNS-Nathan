import {Canvas} from "./Drawable/Canvas";
import {Ground} from "./Drawable/Ground";

export class Animation {
    canvas: Canvas;

    constructor(canvasElement: Canvas) {
        this.canvas = canvasElement;
        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.canvas.draw();
    }
}