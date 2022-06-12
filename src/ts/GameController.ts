import {settings} from "./settings";

export class GameController {

    private shieldButton: HTMLDivElement;
    private chargeButton: HTMLDivElement;

    constructor() {
        this.init();
        this.addEventListeners();
    }

    init() {
        this.shieldButton = document.querySelector(".shieldButton");
        this.chargeButton = document.querySelector(".chargeButton");
    }

    addEventListeners() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if(event.key === "ArrowRight") {
                if(settings.player.cooldown.chargeInCD === false) {
                    this.chargeButton.style.fill = "#341900";
                    settings.player.cooldown.chargeInCD = true;
                    settings.player.speed = 2.5;
                    settings.player.attack = 50;
                    setTimeout( this.resetPlayerSpeed,2000);
                    setTimeout( this.resetChargeCooldown,5000);
                }
            }
            if(event.key === "ArrowLeft") {
                if(settings.player.cooldown.shieldInCD === false) {
                    this.shieldButton.style.fill = "#341900";
                    settings.player.cooldown.shieldInCD = true;
                    settings.player.speed = 0.5;
                    settings.player.defense = 10;
                    setTimeout(this.resetShieldCooldown, 7000);
                }
            }
        });

        this.chargeButton.addEventListener('click', (event: MouseEvent) => {
            if(settings.player.cooldown.chargeInCD === false) {
                this.chargeButton.style.fill = "#341900";
                settings.player.cooldown.chargeInCD = true;
                settings.player.speed = 2.5;
                settings.player.attack = 50;
                setTimeout( this.resetPlayerSpeed,2000);
                setTimeout( this.resetChargeCooldown,5000);
            }
        });

        this.shieldButton.addEventListener('click', (event: MouseEvent) => {
            if(settings.player.cooldown.shieldInCD === false) {
                this.shieldButton.style.fill = "#341900";
                settings.player.cooldown.shieldInCD = true;
                settings.player.speed = 0.5;
                settings.player.defense = 10;
                setTimeout(this.resetShieldCooldown, 7000);
            }
        });
    }

    resetPlayerSpeed() {
        settings.player.speed = 1;
        settings.player.attack = 25;
        settings.player.defense = 5;
    }
    resetChargeCooldown() {
        settings.player.cooldown.chargeInCD = false;
    }
    resetShieldCooldown() {
        settings.player.speed = 1;
        settings.player.cooldown.shieldInCD = false;
    }
}