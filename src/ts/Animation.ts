import {BackgroundCanvas} from "./Drawable/BackgroundCanvas";
import {settings} from "./settings";

export class Animation {
    backgroundCanvas: BackgroundCanvas;
    private score: HTMLSpanElement;
    private count: number;
    private add: number;

    constructor(canvasElement: BackgroundCanvas) {
        this.backgroundCanvas = canvasElement;
        this.score = document.querySelector(".scoreText span");
        this.count = 0;
        this.add = 0;
        this.animate();
    }

    animate() {
        if (settings.player.health <= 0) {
            alert(`Vous avez réussi à parcourir ${this.add}m avant que vos PV ne tombent à 0. Recharger la page si vous souhaitez réessayer !`);
        }
        this.count += settings.player.speed;
        if (this.count >= 60) {
            this.add += 1;
            this.score.innerText = String(this.add);
            this.count = 0;
        }
        this.backgroundCanvas.animate();
        requestAnimationFrame(() => this.animate());
    }
}