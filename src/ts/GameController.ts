import {settings} from "./settings";

export class GameController {

    // GameController en tant qu'état du jeu ???
    constructor() {
        this.addEventListeners();
    }

    addEventListeners() {
        window.addEventListener('keydown', (event: KeyboardEvent) => {
            if(event.key === "ArrowRight") {
                if(settings.player.cooldown.chargeInCD === false) {
                    console.log("CHARGEEEEEZ")
                    settings.player.cooldown.chargeInCD = true;
                    settings.player.speed = 2.5;
                    settings.player.attack = 50;
                    setTimeout( this.resetPlayerSPeed,2000);
                    setTimeout( this.resetChargeCooldown,5000);
                }
            }
            if(event.key === "ArrowLeft") {
                if(settings.player.cooldown.shieldInCD === false) {
                    console.log("Slow down...")
                    settings.player.cooldown.shieldInCD = true;
                    settings.player.speed = 0.5;
                    settings.player.defense = 10;
                    setTimeout(this.resetShieldCooldown, 7000);
                }
            }
        });
    }

    resetPlayerSPeed() {
        settings.player.speed = 1;
        settings.player.attack = 25;
        settings.player.defense = 5;
    }
    resetChargeCooldown() {
        settings.player.cooldown.chargeInCD = false;
        console.log('Ready to roll !')
    }
    resetShieldCooldown() {
        settings.player.speed = 1;
        settings.player.cooldown.shieldInCD = false;
        console.log('Let\'s speed up !')
    }
}