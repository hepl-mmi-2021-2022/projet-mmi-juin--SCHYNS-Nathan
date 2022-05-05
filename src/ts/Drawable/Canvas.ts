import {Ground} from "./Ground";
import {Grass} from "./Grass";

export class Canvas {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public ground: Ground;
    public grass: Grass;
    public sprite: HTMLImageElement;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
        this.ground = new Ground(this.canvasElement, this.ctx);
        this.grass = new Grass(this.canvasElement, this.ctx);

    }

    draw() {
        this.grass.draw();
        this.ground.draw();
    }

    animate() {
        this.ctx.clearRect(0,0, this.canvasElement.width, this.canvasElement.height);
        this.grass.animate();
        this.ground.animate();

    }
}