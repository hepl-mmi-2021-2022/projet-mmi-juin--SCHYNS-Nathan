import {Player} from "./Player";
import {Ennemy} from "./Ennemy";
import {settings} from "../settings";


export class ActorsCanvas {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private sprite: HTMLImageElement;
    public player: Player;
    private ennemy: Ennemy;

    constructor() {
        this.canvasElement = document.getElementById('actors-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;

        this.player = new Player(this.canvasElement, this.ctx);
        this.ennemy = new Ennemy(this.canvasElement, this.ctx)

        this.sprite = new Image();
        this.sprite.src = settings.sprite;
        this.sprite.addEventListener("load", () => {
            this.ennemy.init();
            this.draw();
            this.animate();
        })

    }

    draw() {
        this.player.draw();
        this.ennemy.draw();
    }

    animate() {
        this.ctx.clearRect(0,0, this.canvasElement.width, this.canvasElement.height);
        this.player.draw();
        this.ennemy.animate();
        requestAnimationFrame(() => this.animate());
    }

}