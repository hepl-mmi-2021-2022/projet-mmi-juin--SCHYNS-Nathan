export function random(min: number, max: number) {
    return random2({min: min, max: max});
}

export function random2(param: {min: number, max: number}) {
    return param.min + Math.random()*(param.max-param.min) | 0;
}