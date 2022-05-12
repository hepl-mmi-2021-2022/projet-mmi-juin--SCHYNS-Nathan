import {settings} from "../settings";
import {random2} from "../Helpers/helpers";

export class SmallTree {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public sprite: HTMLImageElement;
    public position: number;
    private speed: number;
    private gapDistance: number;
    private smallTrees: SmallTree[];

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D, smallTrees: SmallTree[]) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
        this.smallTrees = smallTrees;

        this.sprite = new Image();
        this.sprite.src = settings.sprite;
    }

    init() {
        this.gapDistance = random2(settings.smallTree.gap);
        this.position = this.gapDistance;
    }

    draw() {
        this.ctx.drawImage(
            this.sprite,
            settings.smallTree.frame.sx,
            settings.smallTree.frame.sy,
            settings.smallTree.frame.sw,
            settings.smallTree.frame.sh,
            this.position,
            settings.smallTree.frame.dy,
            settings.smallTree.frame.dw,
            settings.smallTree.frame.dh
        );
    }

    animate() {
        if (this.position + settings.smallTree.frame.dw < 0) {
            this.init();
        }
        this.position -= settings.player.speed * settings.smallTree.speed;
        this.draw();
    }
}