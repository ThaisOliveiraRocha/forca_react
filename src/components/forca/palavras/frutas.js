const FRUTAS = [
    "maca",
    "banana",
    "uva",
    "ameixa",
    "abacaxi",
    "abacate",
    "manga"
]

function randomWord(){
    return FRUTAS[Math.floor(Math.random() * FRUTAS.length)]
}

export { randomWord }