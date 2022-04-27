import {Ground} from "./Ground";
import {settings} from "../settings";

export class Canvas {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public ground: Ground;
    public sprite: HTMLImageElement;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
        this.ground = new Ground(this.canvasElement, this.ctx);
        this.sprite = new Image();
        this.sprite.src = "../../img/spritesheet.png";
        this.sprite.onload = () => {
            this.draw();
        }
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.ground.frame.sx,
            settings.ground.frame.sy,
            settings.ground.frame.sw,
            settings.ground.frame.sh,
            settings.ground.frame.dx,
            settings.ground.frame.dy,
            settings.ground.frame.dw,
            settings.ground.frame.dh
        )
    }
}