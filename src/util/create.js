export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomByCount (count = 1) {
    let arr = []
    for(var i = 0; i < count; i++) {
        arr[arr.length] = random();
    }

    return arr; 
}
