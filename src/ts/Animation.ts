import {BackgroundCanvas} from "./Drawable/BackgroundCanvas";
import {settings} from "./settings";

export class Animation {
    backgroundCanvas: BackgroundCanvas;
    private score: HTMLSpanElement;
    private count: number;
    private add: number;
    private gameOverMessage: HTMLDivElement;
    private finalScore: HTMLSpanElement;
    private gameoverSound: HTMLAudioElement;

    constructor(canvasElement: BackgroundCanvas) {
        this.backgroundCanvas = canvasElement;
        this.score = document.querySelector(".scoreText span");
        this.finalScore = document.querySelector(".gameOverResult span");
        this.gameOverMessage = document.querySelector(".gameOver");
        this.count = 0;
        this.add = 0;

        this.gameoverSound = new Audio('/src/se/gameover.wav');

        this.animate();
    }

    animate() {
        if (settings.player.health <= 0 && settings.gameOver === false) {
            this.gameoverSound.play();
            settings.isStart = false;
            settings.gameOver = true;
            this.finalScore.innerText = this.score.innerText;
            this.gameOverMessage.classList.remove("hidden");
        }
        if (settings.isStart === true && settings.gameOver === false) {
            this.count += settings.player.speed;
            if (this.count >= 60) {
                this.add += 1;
                this.score.innerText = String(this.add);
                this.count = 0;
            }
            this.backgroundCanvas.animate();
        }
        requestAnimationFrame(() => this.animate());
    }
}