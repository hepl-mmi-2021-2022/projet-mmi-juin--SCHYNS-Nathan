export const settings = {
    sprite: './src/img/background_sprite.png',
    ground: {
        frame: {
            sx: 10,
            sy: 10,
            sw: 400,
            sh: 133,
            dx: 0,
            dy: 290,
            dw: 400,
            dh: 110
        },
        scrollingSpeed: 3,
    },
    grass: {
        frame: {
            sx: 10,
            sy: 150,
            sw: 400,
            sh: 50,
            dx: 0,
            dy: 265,
            dw: 400,
            dh: 50
        },
        scrollingSpeed: 1.5,
    },
    tree: {
        frame: {
            sx: 421,
            sy: 10,
            sw: 368,
            sh: 403,
            dx: 0,
            dy: 0,
            dw: 300,
            dh: 350
        },
        speed: 2.8,
        gap: {min: 400, max: 500}
    },
    smallTree: {
        frame: {
            sx: 801,
            sy: 10,
            sw: 253,
            sh: 370,
            dx: 0,
            dy: 0,
            dw: 253,
            dh: 300
        },
        speed: 2.5,
        gap: {min: 400, max: 1200},
        maxCount: 2
    },
    player: {
        health: 100,
        attack: 25,
        defense: 5,
        speed: 1,
        cooldown: {
            chargeInCD: false,
            shieldInCD: false,
            healInCD: false,
        },
    },
    ennemy: {
        health: {min: 30, max: 55},
        attack: {min: 10, max: 20},
        speed: 3.6,
        gap: {min: 450, max: 800},
    }

}