import {settings} from "../settings";
import {random2} from "../Helpers/helpers";

export class Tree {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public sprite: HTMLImageElement;
    public position: number;
    private speed: number;
    private gapDistance: number;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = new Image();
        this.sprite.src = settings.sprite;
    }

    init() {
        this.speed = settings.tree.speed;
        this.gapDistance = random2(settings.tree.gap);
        this.position = this.gapDistance;
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.tree.frame.sx,
            settings.tree.frame.sy,
            settings.tree.frame.sw,
            settings.tree.frame.sh,
            this.position,
            settings.tree.frame.dy,
            settings.tree.frame.dw,
            settings.tree.frame.dh
        );
    }

    animate() {
        if (this.position + settings.tree.frame.dw + this.gapDistance < this.gapDistance) {
            this.init();
        }
        this.position -= this.speed;
        this.draw();
    }
}