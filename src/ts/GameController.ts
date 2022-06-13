import {settings} from "./settings";

export class GameController {
    private shieldButton: HTMLDivElement;
    private chargeButton: HTMLDivElement;
    private healButton: HTMLDivElement;
    private healSound: HTMLAudioElement;
    private chargeSound: HTMLAudioElement;
    private shieldSound: HTMLAudioElement;
    private healthBarWidth: Element;


    constructor() {
        this.init();
        this.addEventListeners();
    }

    init() {
        this.shieldButton = document.querySelector(".shieldButton");
        this.chargeButton = document.querySelector(".chargeButton");
        this.healButton = document.querySelector(".healButton");
        this.healthBarWidth = document.querySelector(".health_bar");


        this.chargeSound = new Audio('/src/se/charge.wav');
        this.healSound = new Audio('/src/se/heal.mp3');
        this.shieldSound = new Audio('/src/se/shield.mp3');
    }

    addEventListeners() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if(event.key === "ArrowRight") {
                if(settings.player.cooldown.chargeInCD === false) {
                    this.chargeSound.play();
                    this.chargeButton.style.fill = "#341900";
                    settings.player.cooldown.chargeInCD = true;
                    settings.player.speed = 2.5;
                    settings.player.attack = 50;
                    setTimeout( this.resetPlayerSpeed,2000);
                    setTimeout( this.resetChargeCooldown,5000);
                }
            }
            if(event.key === "ArrowDown") {
                if(settings.player.cooldown.healInCD === false) {
                    this.healSound.play();
                    this.healButton.style.fill = "#341900";
                    settings.player.cooldown.healInCD = true;
                    settings.player.health += 30;
                    // @ts-ignore
                    this.healthBarWidth.width = settings.player.health*3;
                    setTimeout( this.resetHealCooldown,10000);
                }
            }
            if(event.key === "ArrowLeft") {
                if(settings.player.cooldown.shieldInCD === false) {
                    this.shieldSound.play();
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
                this.chargeSound.play();
                this.chargeButton.style.fill = "#341900";
                settings.player.cooldown.chargeInCD = true;
                settings.player.speed = 2.5;
                settings.player.attack = 50;
                setTimeout( this.resetPlayerSpeed,2000);
                setTimeout( this.resetChargeCooldown,5000);
            }
        });

        this.healButton.addEventListener('click', (event: MouseEvent) => {
            if(settings.player.cooldown.healInCD === false) {
                this.healSound.play();
                this.healButton.style.fill = "#341900";
                settings.player.cooldown.healInCD = true;
                settings.player.health += 30;
                this.healthBarWidth.width = settings.player.health*3;
                setTimeout( this.resetHealCooldown,10000);
            }
        });

        this.shieldButton.addEventListener('click', (event: MouseEvent) => {
            if(settings.player.cooldown.shieldInCD === false) {
                this.shieldSound.play();
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
        this.chargeButton = document.querySelector(".chargeButton");
        this.chargeButton.style.fill = "#E8CE71";
    }
    resetHealCooldown() {
        settings.player.cooldown.healInCD = false;
        this.healButton = document.querySelector(".healButton");
        this.healButton.style.fill = "#E8CE71";
    }
    resetShieldCooldown() {
        settings.player.speed = 1;
        settings.player.cooldown.shieldInCD = false;
        this.shieldButton = document.querySelector(".shieldButton");
        this.shieldButton.style.fill = "#E8CE71";
    }
}