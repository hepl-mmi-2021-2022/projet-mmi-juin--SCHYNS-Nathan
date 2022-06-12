import {settings} from "../settings";
import {random2} from "../Helpers/helpers";

export class Ennemy {
    private canvasElement: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private position: number;
    private width: number;
    private ennemyHealth: number;
    private ennemyAttack: number;
    private healthBarWidth: Element;

    constructor(canvasElement: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvasElement = canvasElement;
        this.ctx = ctx;
    }

    init() {
        this.position = random2(settings.ennemy.gap);
        this.width = 80;
        this.ennemyHealth = random2(settings.ennemy.health);
        this.ennemyAttack = random2(settings.ennemy.attack);
        this.healthBarWidth = document.querySelector(".health_bar");
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = '#a43131'
        this.ctx.fillRect(this.position, 40, this.width, 50);
        this.ctx.closePath();
    }

    animate() {
        this.contactInteraction();
        this.position -= settings.ennemy.speed;
        this.draw();
    }

    contactInteraction() {
        if (this.ennemyHealth <= 0) {
            this.init();
        }
        if (this.position <= 95) {
            this.ennemyHealth -= settings.player.attack;
            settings.player.health -= (this.ennemyAttack - settings.player.defense);
            // @ts-ignore
            this.healthBarWidth.width = settings.player.health*3;
            this.position += this.width;
        }

    }
}