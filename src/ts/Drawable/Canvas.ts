import {settings} from "../settings";

export class Canvas {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext(settings.canvas.CanvasRenderingContext) as CanvasRenderingContext2D;
    }

    center() {

    }
}