
export class Ennemy {
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
        this.ctx.fillStyle = '#a43131'
        this.ctx.fillRect(290, 40, 80, 50);
        this.ctx.closePath();
    }

    animate() {

    }
}