import {settings} from "../settings";

export class Ground {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public sprite: HTMLImageElement;

    // Utiliser de l'héritage pour optimiser cette partie.
    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.sprite = new Image();
        this.sprite.src = settings.sprite;
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
        );
        this.ctx.drawImage(
            this.sprite,
            settings.ground.frame.sx,
            settings.ground.frame.sy,
            settings.ground.frame.sw,
            settings.ground.frame.sh,
            settings.ground.frame.dx + settings.ground.frame.dw,
            settings.ground.frame.dy,
            settings.ground.frame.dw,
            settings.ground.frame.dh
        );
    }

    animate() {
        this.draw();
        settings.ground.frame.dx -= settings.player.speed * settings.ground.scrollingSpeed;
        if(settings.ground.frame.dx <= -settings.ground.frame.dw) {
            settings.ground.frame.dx = 0;
        }
    }
}