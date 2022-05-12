import {settings} from "../settings";

export class Player {

    private speed: number;
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;

    }

    init() {

    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = '#afafaf'
        this.ctx.fillRect(30, 15, 65, 75);
        this.ctx.closePath();
    }

    animate() {

    }
}