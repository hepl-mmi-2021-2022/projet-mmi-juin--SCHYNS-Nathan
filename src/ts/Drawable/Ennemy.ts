import {settings} from "../settings";
import {random2} from "../Helpers/helpers";

export class Ennemy {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private position: number;
    private pushBack: number;
    private ennemyHealth: number;
    private ennemyAttack: number;
    private healthBarWidth: Element;
    private deadSound: HTMLAudioElement;
    private hitSound: HTMLAudioElement;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
    }

    init() {
        this.position = random2(settings.ennemy.gap);
        this.pushBack = 100;
        this.ennemyHealth = random2(settings.ennemy.health);
        this.ennemyAttack = random2(settings.ennemy.attack);
        this.healthBarWidth = document.querySelector(".health_bar");

        this.deadSound = new Audio('/src/se/dead.ogg');
        this.hitSound = new Audio('/src/se/hit.ogg');

    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = '#a43131'
        this.ctx.fillRect(this.position, 40, 80, 50);
        this.ctx.closePath();
    }

    animate() {
        if (settings.isStart === true && settings.gameOver === false) {
            this.contactInteraction();
            if (settings.player.speed === 2.5) {
                this.position -= settings.ennemy.speed*2;
            } else if (settings.player.speed === .5) {
                this.position -= settings.ennemy.speed/1.5;
            } else {
                this.position -= settings.ennemy.speed;
            }
            this.draw();
        }
    }

    contactInteraction() {
        if (this.position <= 95) {
            this.ennemyHealth -= settings.player.attack;
            settings.player.health -= (this.ennemyAttack - settings.player.defense);
            // @ts-ignore
            this.healthBarWidth.width = settings.player.health*3;
            this.hitSound.play();
            this.position += this.pushBack;
        }
        if (this.ennemyHealth <= 0) {
            this.deadSound.play();
            this.init();
        }
    }
}