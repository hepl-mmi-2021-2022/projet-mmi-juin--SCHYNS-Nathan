import {settings} from "../settings";

export class Grass {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public sprite: HTMLImageElement;


    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = new Image();
        this.sprite.src = settings.sprite;
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.grass.frame.sx,
            settings.grass.frame.sy,
            settings.grass.frame.sw,
            settings.grass.frame.sh,
            settings.grass.frame.dx,
            settings.grass.frame.dy,
            settings.grass.frame.dw,
            settings.grass.frame.dh
        );
        this.ctx.drawImage(
            this.sprite,
            settings.grass.frame.sx,
            settings.grass.frame.sy,
            settings.grass.frame.sw,
            settings.grass.frame.sh,
            settings.grass.frame.dx + settings.grass.frame.dw,
            settings.grass.frame.dy,
            settings.grass.frame.dw,
            settings.grass.frame.dh
        );
    }

    animate() {
        this.draw();
        settings.grass.frame.dx -= settings.grass.scrollingSpeed;
        if(settings.grass.frame.dx <= -settings.grass.frame.dw) {
            settings.grass.frame.dx = 0;
        }
    }
}