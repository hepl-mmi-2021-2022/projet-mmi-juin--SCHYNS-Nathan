import {Player} from "./Player";
import {settings} from "../settings";


export class ActorsCanvas {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    public player: Player;

    constructor() {
        this.canvasElement = document.getElementById('actors-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;

        this.player = new Player(this.canvasElement, this.ctx);


        this.draw();
    }

    draw() {
        this.player.draw();

    }

    animate() {

    }

}